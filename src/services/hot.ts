import type { HotResult, hotQueryParams } from '@/types/hot'
import { http } from '@/utils/http'

//通用请求接口
export const getHotApi = (url: string, data?: hotQueryParams) => {
  return http<HotResult>({
    url,
    data,
  })
}
