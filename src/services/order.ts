// 填写订单-获取立即购买订单

import type {
  OrderCreateParams,
  OrderCreateResult,
  OrderListParams,
  OrderListResult,
  OrderLogisticResult,
  OrderPreResult,
  OrderResult,
} from '@/types/order'
import { http } from '@/utils/http'

/**
 * @param skuId 商品skuId
 * @param count 商品购买数量
 * @param address 用户地址
 */
export const getMemberOrderPreNowApi = (skuId: string, count: string, address?: string) => {
  return http<OrderPreResult>({
    url: `/member/order/pre/now?skuId=${skuId}&count=${count}`,
  })
}

// 填写订单 - 获取预付订单
// GET / member / order / pre
export const getMemberOrderPreApi = () => {
  return http<OrderPreResult>({
    url: `/member/order/pre`,
  })
}
// }
// 提交订单
// POST/member/order
export const postMemberOrder = (data: OrderCreateParams) => {
  return http<OrderCreateResult>({
    url: `/member/order`,
    method: 'POST',
    data,
  })
}

/**
 * 获取订单详情
 * @param id 订单Id
 */
export const getMemberOrderById = (id: string) => {
  return http<OrderResult>({
    url: `/member/order/${id}`,
    method: 'GET',
  })
}

/**
 * 取消订单
 * @param id 订单Id
 * @param data 订单取消原因
 */
export const putMemberOrderIdCancel = (id: string, cancelReason: string) => {
  return http<OrderResult>({
    url: `/member/order/${id}/cancel`,
    method: 'PUT',
    data: { cancelReason },
  })
}

/**
 * 删除订单
 * @param ids 订单Id
 * @returns
 */
export const deleteMemberOrder = (ids: string[]) => {
  return http({
    url: `/member/order`,
    data: { ids },
  })
}

/**
 * 填写订单-获取再次购买订单
 * @param id 订单id
 */
export const getMemberOrderRepurchase = (id: string) => {
  return http<OrderPreResult>({
    url: `/member/order/repurchase/${id}`,
  })
}

// 模拟支付-内测版
export const getPayMock = (orderId: string) => {
  return http({
    url: '/pay/mock',
    data: { orderId },
  })
}

// 获取订单列表
export const getMemberOrder = (data?: OrderListParams) => {
  return http<OrderListResult>({
    url: '/member/order',
    data,
  })
}

/**
 * 模拟发货-内测版
 * @param id 订单Id
 */
export const getMemberOrderConsignmentById = (id: string) => {
  return http({
    url: `/member/order/consignment/${id}`,
  })
}

/**
 * 确认收货
 * @param id 订单Id
 */
export const putMemberOrderReceipt = (id: string) => {
  return http({
    url: `/member/order/${id}/receipt`,
    method: 'PUT',
  })
}
/**
 * 获取订单物流
 * @param id 订单Id
 */
export const getMemberOrderLogistics = (id: string) => {
  return http<OrderLogisticResult>({
    url: `/member/order/${id}/logistics`,
    method: 'GET',
  })
}
