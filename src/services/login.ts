// 登录接口

import type { LoginResult, ProfileDetail, ProfileParams } from '@/types/member'
import { http } from '@/utils/http'

///login/wxMin/simple
export const postLoginApi = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: { phoneNumber },
  })
}
// 获取个人信息接口
export const getMemberProfile = () => {
  return http<ProfileDetail>({
    url: '/member/profile',
  })
}
// 修改个人信息接口
export const putMemberProfile = (profileParams: ProfileParams) => {
  return http<ProfileDetail>({
    method: 'PUT',
    url: '/member/profile',
    data: profileParams,
  })
}
