import type { PageResult } from './globalPage'
import type { PageParams } from './globalPage'
import type { GoodsItem } from './globalPage'
export type hotQueryParams = PageParams & {
  subType?: string
}

/** 热门推荐 */
export type HotResult = {
  [x: string]: HotResult
  /** id信息 */
  id: string
  /** 活动图片 */
  bannerPicture: string
  /** 活动标题 */
  title: string
  /** 子类选项 */
  subTypes: SubTypeItem[]
}
/** 热门推荐-子类选项 */
export type SubTypeItem = {
  /** 子类id */
  id: string
  /** 子类标题 */
  title: string
  /** 子类对应的商品集合 */
  goodsItems: PageResult<GoodsItem>
}
