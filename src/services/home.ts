import type { PageParams, PageResult } from '@/types/globalPage'
import type { BannerItem, CategoryItem, GuessItem, HotItem } from '@/types/home'
import { http } from '@/utils/http'

// 封装首页广告轮播图接口
export const getHomeBannerApi = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: { distributionSite },
  })
}
//封装首页前台分类接口
export const getHomeCategoryMutilApi = () => {
  return http<CategoryItem[]>({
    url: '/home/category/mutli',
    method: 'GET',
  })
}
//封装请求热门推荐数据接口
export const getHomeHotMutliApi = () => {
  return http<HotItem[]>({
    url: '/home/hot/mutli',
    method: 'GET',
  })
}
//封装请求猜你喜欢数据接口
export const getHomeGoodsGuessLikeApi = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    url: '/home/goods/guessLike',
    method: 'GET',
    data,
  })
}
