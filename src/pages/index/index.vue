<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanels from './components/CategoryPanels.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import Hotpannel from './components/Hotpannel.vue'
import { getHomeBannerApi, getHomeCategoryMutilApi, getHomeHotMutliApi } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { ref } from 'vue'
import type { guessRefInstance } from '@/types/component'
// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const { result } = await getHomeBannerApi()
  bannerList.value = result
}
//获取首页分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryMutilData = async () => {
  const { result } = await getHomeCategoryMutilApi()
  categoryList.value = result
}
//获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotMutliData = async () => {
  const { result } = await getHomeHotMutliApi()
  hotList.value = result
}
//滚动触底事件触发,需要定义Ref实例类型
const guessRef = ref<guessRefInstance>()
const onScrolltolower = () => {
  guessRef.value?.getMore()
}
//下拉刷新触发事件
const triggered = ref(false)
const onRefresherrefresh = async () => {
  triggered.value = true
  guessRef.value?.resetData()
  //等待所有Promise都完成
  await Promise.all([getHomeBannerData(), getHomeCategoryMutilData(), getHomeHotMutliData()])
  //关闭下拉刷新
  triggered.value = false
}
// 判断骨架屏是否展示
const isLoading = ref(false)
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryMutilData(), getHomeHotMutliData()])
  isLoading.value = false
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 滚动模块 -->
  <scroll-view
    scroll-y
    class="scroll-view"
    @scrolltolower="onScrolltolower"
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="triggered"
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 商品分类 -->
      <CategoryPanels :list="categoryList" />
      <!-- 热门推荐 -->
      <Hotpannel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuessLike ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  display: flex;
  background-color: #f7f7f7;
  height: 100%;
  flex-direction: column;
  .scroll-view {
    flex: 1;
  }
}
</style>
