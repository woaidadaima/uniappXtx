<script setup lang="ts">
import { getGoodsApi } from '@/services/goods'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { GoodsResult } from '@/types/goods'
import ServicePanel from './components/ServicePanel.vue'
import AddressPanel from './components/AddressPanel.vue'
import GoodsSkeleton from './components/GoodsSkeleton.vue'
import type {
  SkuPopupEvent,
  SkuPopupInstanceType,
  SkuPopupLocaldata,
  SkuPopupProps,
} from '@/types/vk-data-goods-sku-popup'
import { computed } from 'vue'
import { postMemberCart } from '@/services/cart'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const { id } = defineProps<{ id: string }>()
//保存商品信息
const goodsInfo = ref<GoodsResult>()
const getGoodsInfo = async (id: string) => {
  const res = await getGoodsApi(id)
  console.log(res)
  goodsInfo.value = res.result
  skuGoods.value = {
    _id: res.result.id,
    name: res.result.name,
    goods_thumb: res.result.mainPictures[0],
    sku_list: res.result.skus.map((v) => ({
      _id: v.id,
      goods_id: res.result.id,
      goods_name: res.result.name,
      image: v.picture,
      price: v.price * 100,
      sku_name_arr: v.specs.map((vv) => vv.valueName),
      stock: v.inventory,
    })),
    spec_list: res.result.specs.map((v) => ({
      name: v.name,
      list: v.values,
    })),
  }
}
//当前轮播图图片序号
const curPic = ref(0)
//轮播图滚动事件
const onChange: UniHelper.SwiperOnChange = (ev) => {
  console.log(ev.detail)
  curPic.value = ev.detail.current
}

// ref接受弹出层组件
const popup = ref<{
  open: (type?: UniHelper.UniPopupType) => void
  close: () => void
}>()
// 弹出组件名称
const popName = ref()
//弹出层交互事件
const openDiolog = (name: string) => {
  popName.value = name
  popup.value?.open('bottom')
}
//图片放大预览
const clickImg = (url: string[], index: number) => {
  uni.previewImage({
    urls: url,
    current: index,
  })
}
//sku商品详情
const skuGoods = ref<SkuPopupLocaldata>()
//sku弹窗标志
const skuKey = ref(false)
const skumode = ref<1 | 2 | 3>(1)
//打开sku弹窗
const openPopup = (mode?: 1 | 2 | 3) => {
  console.log(mode)
  if (mode === 1) {
    skumode.value = 1
  } else if (mode === 2) {
    skumode.value = 2
  } else {
    skumode.value = 3
  }
  console.log(skumode.value)

  skuKey.value = true
}
const closePopup = () => {
  skuKey.value = false
}
//sku实例
const skuPopup = ref<SkuPopupInstanceType>()
const selectArr = computed(() => skuPopup.value?.selectArr?.join(' ') || '请选择商品')
//加入购物车
const addCart = async (ev: SkuPopupEvent) => {
  console.log('发请求加入购物车')
  console.log(ev)
  const res = await postMemberCart({ skuId: ev._id, count: ev.buy_num })
  console.log(res)
  uni.showToast({
    icon: 'success',
    title: '添加成功',
  })
  closePopup()
}

//判断页面是否正在加载
const isLoading = ref(false)
//立即购买页面跳转
const buyNow = (ev: SkuPopupEvent) => {
  console.log('tiao', ev)

  uni.navigateTo({
    url: `/pagesOrder/create/create?skuId=${ev._id}&count=${ev.buy_num}`,
  })
}
onLoad(async () => {
  isLoading.value = true
  await getGoodsInfo(id)
  isLoading.value = false
})
</script>

<template v-else>
  <GoodsSkeleton v-if="isLoading" />
  <scroll-view v-else scroll-y class="viewport">
    <!-- 基本信息 -->
    <view class="goods">
      <!-- 商品主图 -->
      <view class="preview">
        <swiper circular @change="onChange">
          <swiper-item
            v-for="(item, index) in goodsInfo?.mainPictures"
            :key="item"
            @tap="clickImg(goodsInfo!.mainPictures, index)"
          >
            <image mode="aspectFill" :src="item" />
          </swiper-item>
        </swiper>
        <view class="indicator">
          <text class="current">{{ curPic + 1 }}</text>
          <text class="split">/</text>
          <text class="total">{{ goodsInfo?.mainPictures.length }}</text>
        </view>
      </view>

      <!-- 商品简介 -->
      <view class="meta">
        <view class="price">
          <text class="symbol">¥</text>
          <text class="number">{{ goodsInfo?.price }}</text>
        </view>
        <view class="name ellipsis">{{ goodsInfo?.name }} </view>
        <view class="desc"> {{ goodsInfo?.desc }} </view>
      </view>

      <!-- 操作面板 -->
      <view class="action">
        <view class="item arrow">
          <text class="label">选择</text>
          <text class="text ellipsis" @tap="openPopup(1)"> {{ selectArr }} </text>
        </view>
        <view class="item arrow" @tap="openDiolog('address')">
          <text class="label">送至</text>
          <text class="text ellipsis"> 请选择收获地址 </text>
        </view>
        <view class="item arrow" @tap="openDiolog('services')">
          <text class="label">服务</text>
          <text class="text ellipsis"> 无忧退 快速退款 免费包邮 </text>
        </view>
      </view>
    </view>
    <!-- 商品详情 -->
    <view class="detail panel">
      <view class="title">
        <text>详情</text>
      </view>
      <view class="content">
        <view class="properties">
          <!-- 属性详情 -->
          <view class="item" v-for="item in goodsInfo?.details.properties" :key="item.name">
            <text class="label">{{ item.name }}</text>
            <text class="value">{{ item.value }}</text>
          </view>
        </view>
        <!-- 图片详情 -->
        <image
          v-for="item in goodsInfo?.details.pictures"
          :key="item"
          mode="widthFix"
          :src="item"
        ></image>
      </view>
    </view>

    <!-- 同类推荐 -->
    <view class="similar panel">
      <view class="title">
        <text>同类推荐</text>
      </view>
      <view class="content">
        <navigator
          v-for="item in goodsInfo?.similarProducts"
          :key="item.id"
          class="goods"
          hover-class="none"
          :url="`/pages/goods/goods?id=${item.id}`"
        >
          <image class="image" mode="aspectFill" :src="item.picture"></image>
          <view class="name ellipsis">{{ item.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ item.price }}</text>
          </view>
        </navigator>
      </view>
    </view>
  </scroll-view>

  <!-- 用户操作 -->
  <view class="toolbar" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
    <view class="icons">
      <button class="icons-button"><text class="icon-heart"></text>收藏</button>
      <button class="icons-button" open-type="contact">
        <text class="icon-handset"></text>客服
      </button>
      <navigator class="icons-button" url="/pages/cart/cart2">
        <text class="icon-cart"></text>购物车
      </navigator>
    </view>
    <view class="buttons">
      <view class="addcart" @tap="openPopup(2)"> 加入购物车 </view>
      <view class="buynow" @tap="openPopup(3)"> 立即购买 </view>
    </view>
  </view>

  <!-- 弹出层控制面板 -->
  <uni-popup ref="popup" type="bottom">
    <ServicePanel v-show="popName === 'services'" @close="popup?.close()" />
    <AddressPanel v-show="popName === 'address'" @close="popup?.close()" />
  </uni-popup>
  <vk-data-goods-sku-popup
    ref="skuPopup"
    v-model="skuKey"
    :localdata="skuGoods"
    buy-now-background-color="#28BA9B"
    :actived-style="{ color: '#28BA9B', backgroundColor: '#E9F7F5', borderColor: '#27BA9B' }"
    @add-cart="addCart"
    @close="closePopup"
    :mode="skumode"
    :min-buy-num="1"
    @buy-now="buyNow"
  />
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.viewport {
  background-color: #f4f4f4;
}

.panel {
  margin-top: 20rpx;
  background-color: #fff;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90rpx;
    line-height: 1;
    padding: 30rpx 60rpx 30rpx 6rpx;
    position: relative;
    text {
      padding-left: 10rpx;
      font-size: 28rpx;
      color: #333;
      font-weight: 600;
      border-left: 4rpx solid #27ba9b;
    }
    navigator {
      font-size: 24rpx;
      color: #666;
    }
  }
}

.arrow {
  &::after {
    position: absolute;
    top: 50%;
    right: 30rpx;
    content: '\e6c2';
    color: #ccc;
    font-family: 'erabbit' !important;
    font-size: 32rpx;
    transform: translateY(-50%);
  }
}

/* 商品信息 */
.goods {
  background-color: #fff;
  .preview {
    height: 750rpx;
    position: relative;
    .indicator {
      height: 40rpx;
      padding: 0 24rpx;
      line-height: 40rpx;
      border-radius: 30rpx;
      color: #fff;
      font-family: Arial, Helvetica, sans-serif;
      background-color: rgba(0, 0, 0, 0.3);
      position: absolute;
      bottom: 30rpx;
      right: 30rpx;
      .current {
        font-size: 26rpx;
      }
      .split {
        font-size: 24rpx;
        margin: 0 1rpx 0 2rpx;
      }
      .total {
        font-size: 24rpx;
      }
    }
  }
  .meta {
    position: relative;
    border-bottom: 1rpx solid #eaeaea;
    .price {
      height: 130rpx;
      padding: 25rpx 30rpx 0;
      color: #fff;
      font-size: 34rpx;
      box-sizing: border-box;
      background-color: #35c8a9;
    }
    .number {
      font-size: 56rpx;
    }
    .brand {
      width: 160rpx;
      height: 80rpx;
      overflow: hidden;
      position: absolute;
      top: 26rpx;
      right: 30rpx;
    }
    .name {
      max-height: 88rpx;
      line-height: 1.4;
      margin: 20rpx;
      font-size: 32rpx;
      color: #333;
    }
    .desc {
      line-height: 1;
      padding: 0 20rpx 30rpx;
      font-size: 24rpx;
      color: #cf4444;
    }
  }
  .action {
    padding-left: 20rpx;
    .item {
      height: 90rpx;
      padding-right: 60rpx;
      border-bottom: 1rpx solid #eaeaea;
      font-size: 26rpx;
      color: #333;
      position: relative;
      display: flex;
      align-items: center;
      &:last-child {
        border-bottom: 0 none;
      }
    }
    .label {
      width: 60rpx;
      color: #898b94;
      margin: 0 16rpx 0 10rpx;
    }
    .text {
      flex: 1;
      -webkit-line-clamp: 1;
    }
  }
}

/* 商品详情 */
.detail {
  padding-left: 20rpx;
  .content {
    margin-left: -20rpx;
  }
  .properties {
    padding: 0 20rpx;
    margin-bottom: 30rpx;
    .item {
      display: flex;
      line-height: 2;
      padding: 10rpx;
      font-size: 26rpx;
      color: #333;
      border-bottom: 1rpx dashed #ccc;
    }
    .label {
      width: 200rpx;
    }
    .value {
      flex: 1;
    }
  }
}

/* 同类推荐 */
.similar {
  padding-left: 20rpx;
  .content {
    padding: 0 20rpx 20rpx;
    margin-left: -20rpx;
    background-color: #f4f4f4;
    overflow: hidden;
    navigator {
      width: 345rpx;
      padding: 24rpx 20rpx 20rpx;
      margin: 20rpx 20rpx 0 0;
      border-radius: 10rpx;
      background-color: #fff;
      float: left;
    }
    .image {
      height: 260rpx;
    }
    .name {
      height: 80rpx;
      margin: 10rpx 0;
      font-size: 26rpx;
      color: #262626;
    }
    .price {
      line-height: 1;
      font-size: 20rpx;
      color: #cf4444;
    }
    .number {
      font-size: 26rpx;
      margin-left: 2rpx;
    }
  }
  navigator {
    &:nth-child(even) {
      margin-right: 0;
    }
  }
}

/* 底部工具栏 */
.toolbar {
  background-color: #fff;
  height: 100rpx;
  padding: 0 20rpx;
  border-top: 1rpx solid #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  .buttons {
    display: flex;
    & > view {
      width: 220rpx;
      text-align: center;
      line-height: 72rpx;
      font-size: 26rpx;
      color: #fff;
      border-radius: 72rpx;
    }
    .addcart {
      background-color: #ffa868;
    }
    .buynow {
      background-color: #27ba9b;
      margin-left: 20rpx;
    }
  }
  .icons {
    padding-right: 10rpx;
    display: flex;
    align-items: center;
    flex: 1;
    .icons-button {
      flex: 1;
      text-align: center;
      line-height: 1.4;
      padding: 0;
      margin: 0;
      border-radius: 0;
      font-size: 20rpx;
      color: #333;
      background-color: #fff;
    }
    text {
      display: block;
      font-size: 34rpx;
    }
  }
}
</style>
