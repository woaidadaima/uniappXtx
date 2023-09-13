/* 获取收货地址列表
GET/member/address */

import type { AddressItem, AddressParams } from '@/types/address'
import { http } from '@/utils/http'

export const getMemberAddress = () => {
  return http<AddressItem[]>({
    url: '/member/address',
  })
}

/* 添加收货地址
POST/member/address */
/**
 *
 * @param data
 */
export const postMemberAddress = (data: AddressParams) => {
  return http<{ id: number }>({
    url: '/member/address',
    method: 'POST',
    data,
  })
}

// 获取收货地址详情
// GET/member/address/{id}
export const getMemberAddressById = (id: string) => {
  return http<AddressItem>({
    url: `/member/address/${id}`,
  })
}

// 修改收货地址
// PUT/member/address/{id}
/**
 *
 * @param id
 * @param data
 */
export const putMemberAddressById = (id: string, data: AddressParams) => {
  return http<{ id: string }>({
    url: `/member/address/${id}`,
    method: 'PUT',
    data,
  })
}

// DELETE/member/address/{id}
/**
 *删除收货地址
 * @param id
 */
export const deleteMemberAddress = (id: string) => {
  return http<{ id: string }>({
    url: `/member/address/${id}`,
    method: 'DELETE',
  })
}
