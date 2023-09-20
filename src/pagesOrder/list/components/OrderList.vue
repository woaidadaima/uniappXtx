<script setup lang="ts">
import { getMemberOrder, getPayMock, putMemberOrderReceipt } from '@/services/order'
import type { OrderItem, OrderListParams, OrderListResult } from '@/types/order'
import { onMounted, ref } from 'vue'
import { orderStateList } from '@/services/constants'
import { OrderState } from '@/services/constants'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
//获取type参数
const query = defineProps<{ orderState: number }>()
// console.log(query.orderState)
const oderListParams: OrderListParams = {
  orderState: query.orderState,
  page: 1,
  pageSize: 3,
}
//获取订单列表
const orderList = ref<OrderListResult>()
const getMemberOrderData = async () => {
  const res = await getMemberOrder(oderListParams)
  // console.log(res)
  orderList.value = res.result
}
//定义结束标志
const isFinish = ref(false)
// console.log(orderList.value?.pages)

//滚动触底加载更多
const onScrolltolower = async () => {
  if (oderListParams.page! < orderList.value!.pages) {
    oderListParams.page!++
    const res = await getMemberOrder(oderListParams)
    //将结果追加到原来的数组
    orderList.value?.items.push(...res.result.items)
  } else {
    isFinish.value = true
  }
}
//去支付
const goPay = async (item: OrderItem) => {
  await getPayMock(item.id)
  uni.showToast({
    title: '支付成功',
    success: () => {
      item.orderState = OrderState.DaiFaHuo
    },
  })
}
//确认收货
const shouhuo = async (item: OrderItem) => {
  uni.showModal({
    content: '为保障您的权益，请收到货并确认无误后，在确认收货',
    success: async (success) => {
      if (success.confirm) {
        await putMemberOrderReceipt(item.id)
        item.orderState = OrderState.DaiPingJia
        uni.showToast({
          title: '确认收获成功',
        })
      }
    },
  })
}
onMounted(() => {
  getMemberOrderData()
})
</script>
<template>
  <!-- 订单列表 -->
  <scroll-view scroll-y class="orders" @scrolltolower="onScrolltolower">
    <view class="card" v-for="item in orderList?.items" :key="item.id">
      <!-- 订单信息 -->
      <view class="status">
        <text class="date">{{ item.createTime }}</text>
        <!-- 订单状态文字 -->
        <text>{{ orderStateList.find((v) => v.id === item.orderState)?.text }}</text>
        <!-- 待评价/已完成/已取消 状态: 展示删除订单 -->
        <text class="icon-delete" v-if="item.orderState >= 4"></text>
      </view>
      <!-- 商品信息，点击商品跳转到订单详情，不是商品详情 -->
      <navigator
        v-for="sku in item.skus"
        :key="sku.spuId"
        class="goods"
        :url="`/pagesOrder/detail/detail?id=${item.id}`"
        hover-class="none"
      >
        <view class="cover">
          <image mode="aspectFit" :src="sku.image"></image>
        </view>
        <view class="meta">
          <view class="name ellipsis">{{ sku.name }}</view>
          <view class="type">{{ sku.attrsText }}</view>
        </view>
      </navigator>
      <!-- 支付信息 -->
      <view class="payment">
        <text class="quantity">共{{ item.totalNum }}件商品</text>
        <text>实付</text>
        <text class="amount"> <text class="symbol">¥</text>{{ item.payMoney }}</text>
      </view>
      <!-- 订单操作按钮 -->
      <view class="action">
        <!-- 待付款状态：显示去支付按钮 -->
        <template v-if="item.orderState === OrderState.DaiFuKuan">
          <view class="button primary" @tap="goPay(item)">去支付</view>
        </template>
        <template v-else>
          <navigator
            class="button secondary"
            :url="`/pagesOrder/create/create?orderId=${item.id}`"
            hover-class="none"
          >
            再次购买
          </navigator>
          <!-- 待收货状态: 展示确认收货 -->
          <view
            v-if="item.orderState === OrderState.DaiShouHuo"
            class="button primary"
            @tap="shouhuo(item)"
            >确认收货</view
          >
        </template>
      </view>
    </view>
    <!-- 底部提示文字 -->
    <view class="loading-text" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
      {{
        isFinish || oderListParams.page === orderList?.pages || orderList?.pages === 0
          ? '没有更多数据~'
          : '正在加载...'
      }}
    </view>
  </scroll-view>
</template>
<style lang="scss"></style>
