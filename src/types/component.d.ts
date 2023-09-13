/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
import XtxGuessLike from '@/components/XtxGuessLike.vue'
declare module 'vue' {
  export interface GlobalComponents {
    // 添加Xtx全局通用组件类型声明
    XtxSwiper: typeof XtxSwiper
    XtxGuessLike: typeof XtxGuessLike
  }
}
// 定义组件实例对象类型声明
export type guessRefInstance = InstanceType<typeof XtxGuessLike>
