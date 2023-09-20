// 加入购物车

import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'
/**
 * 加入购物车参数
 * @param data
 */
// POST/member/cart
export const postMemberCart = (data: { skuId: string; count: number }) => {
  return http({
    url: '/member/cart',
    method: 'POST',
    data,
  })
}

// 获取购物车列表
// GET/member/cart
export const getMemberCart = () => {
  return http<CartItem[]>({
    url: '/member/cart',
  })
}
// 修改购物车单品
// PUT/member/cart/{skuId}

/**
 * @param skuId 商品sku
 * @param data count 和selected
 */
export const putMemberCartBySkuIdApi = (
  skuId: string,
  data?: { selected?: boolean; count?: number },
) => {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
}
// 购物车全选/取消全选
export const putMemberCartSelectedApi = (selected: string) => {
  return http({
    method: 'PUT',
    url: `/member/cart/selected`,
    data: { selected },
  })
}
// 删除/清空购物车单品
// DELETE/member/cart
export const deleteMemberCart = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: '/member/cart',
    data,
  })
}
