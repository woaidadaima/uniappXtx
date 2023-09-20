import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('address', () => {
  //地址信息
  const address = ref<AddressItem>()
  //保存地址信息
  const setAddress = (val: AddressItem) => {
    address.value = val
  }
  //向外暴露方法和属性
  return {
    address,
    setAddress,
  }
})
