import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

//获取商品分类Api
export const getCategoryTopApi = () => {
  return http<CategoryTopItem[]>({
    url: '/category/top',
  })
}
