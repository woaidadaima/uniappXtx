import type { GoodsResult } from '@/types/goods'
import { http } from '@/utils/http'

//请求商品详情接口
export const getGoodsApi = (id: string) => {
  return http<GoodsResult>({
    url: '/goods',
    data: { id },
  })
}
