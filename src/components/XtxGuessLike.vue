<script setup lang="ts">
import { getHomeGoodsGuessLikeApi } from '@/services/home'
import type { PageParams } from '@/types/globalPage'
import type { GuessItem } from '@/types/home'
import { ref } from 'vue'
import { onMounted } from 'vue'
//获取猜你喜欢数据,泛型工具Required可以使每个参数成为必须
const pageParams: Required<PageParams> = {
  page: import.meta.env.DEV ? 1 : 1,
  pageSize: 10,
}
const isFinish = ref(false)
const guessLikeList = ref<GuessItem[]>([])
const getHomeGoodsGuessLikeData = async () => {
  // 判断是否结束，结束后不再发请求
  if (isFinish.value) {
    return uni.showToast({
      title: '没有更多了',
      icon: 'none',
    })
  }
  const { result } = await getHomeGoodsGuessLikeApi(pageParams)
  guessLikeList.value?.push(...result.items)
  pageParams.page++
  //当前页码大于总码数时结束
  if (pageParams.page > result.pages) {
    isFinish.value = true
  }
}
//下拉刷新重置函数
const resetData = () => {
  isFinish.value = false
  pageParams.page = 1
  guessLikeList.value = []
}
//组件挂载后发请求获取数据
onMounted(() => {
  getHomeGoodsGuessLikeData()
})
//对外暴漏子组件方法
defineExpose({
  getMore: getHomeGoodsGuessLikeData,
  resetData,
})
</script>

<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in guessLikeList"
      :key="item.id"
      :url="`/pages/goods/goods?id=4007498`"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name">{{ item.name }} </view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text"> {{ isFinish ? '没有更多了' : '正在加载' }} </view>
</template>

<style lang="scss">
:host {
  display: block;
}
/* 分类标题 */
.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size: 32rpx;
  color: #262626;
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28rpx 0 30rpx;

    &::before,
    &::after {
      content: '';
      width: 20rpx;
      height: 20rpx;
      background-image: url(@/static/images/bubble.png);
      background-size: contain;
      margin: 0 10rpx;
    }
  }
}

/* 猜你喜欢 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;
  .guess-item {
    width: 345rpx;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: #fff;
  }
  .image {
    width: 304rpx;
    height: 304rpx;
  }
  .name {
    height: 75rpx;
    margin: 10rpx 0;
    font-size: 26rpx;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    line-height: 1;
    padding-top: 4rpx;
    color: #cf4444;
    font-size: 26rpx;
  }
  .small {
    font-size: 80%;
  }
}
// 加载提示文字
.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
}
</style>
