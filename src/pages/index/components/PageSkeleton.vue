<template name="skeleton">
  <view class="sk-container">
    <view is="pages/index/components/CustomNavbar">
      <view class="navbar CustomNavbar--navbar" style="padding-top: 20px">
        <view class="logo CustomNavbar--logo">
          <image class="logo-image CustomNavbar--logo-image sk-image"></image>
          <text class="logo-text CustomNavbar--logo-text sk-transparent sk-text-3-5714-368 sk-text"
            >新鲜 · 亲民 · 快捷</text
          >
        </view>
        <view class="search CustomNavbar--search">
          <text
            class="icon-search CustomNavbar--icon-search sk-transparent sk-text-14-2857-622 sk-text sk-pseudo sk-pseudo-circle"
            >搜索商品</text
          >
          <text class="icon-scan CustomNavbar--icon-scan sk-pseudo sk-pseudo-circle"></text>
        </view>
      </view>
    </view>
    <scroll-view :refresher-enabled="true" :scroll-y="true" class="scroll-view">
      <view is="components/XtxSwiper">
        <view class="carousel XtxSwiper--carousel">
          <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
            <swiper-item
              style="
                position: absolute;
                width: 100%;
                height: 100%;
                transform: translate(0%, 0px) translateZ(0px);
              "
            >
              <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
              </navigator>
            </swiper-item>
          </swiper>
          <view class="indicator XtxSwiper--indicator">
            <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot"></text>
          </view>
        </view>
      </view>
      <view is="pages/index/components/CategoryPanels">
        <view class="category CategoryPanels--category">
          <navigator class="category-item CategoryPanels--category-item" hover-class="none">
            <image class="icon CategoryPanels--icon sk-image"></image>
            <text class="text CategoryPanels--text sk-transparent sk-text-14-2857-175 sk-text"
              >居家</text
            >
          </navigator>
          <navigator class="category-item CategoryPanels--category-item" hover-class="none">
            <image class="icon CategoryPanels--icon sk-image"></image>
            <text class="text CategoryPanels--text sk-transparent sk-text-14-2857-699 sk-text"
              >锦鲤</text
            >
          </navigator>
          <navigator class="category-item CategoryPanels--category-item" hover-class="none">
            <image class="icon CategoryPanels--icon sk-image"></image>
            <text class="text CategoryPanels--text sk-transparent sk-text-14-2857-347 sk-text"
              >服饰</text
            >
          </navigator>
          <navigator class="category-item CategoryPanels--category-item" hover-class="none">
            <image class="icon CategoryPanels--icon sk-image"></image>
            <text class="text CategoryPanels--text sk-transparent sk-text-14-2857-937 sk-text"
              >母婴</text
            >
          </navigator>
          <navigator class="category-item CategoryPanels--category-item" hover-class="none">
            <image class="icon CategoryPanels--icon sk-image"></image>
            <text class="text CategoryPanels--text sk-transparent sk-text-14-2857-879 sk-text"
              >个护</text
            >
          </navigator>
          <navigator class="category-item CategoryPanels--category-item" hover-class="none">
            <image class="icon CategoryPanels--icon sk-image"></image>
            <text class="text CategoryPanels--text sk-transparent sk-text-14-2857-940 sk-text"
              >严选</text
            >
          </navigator>
          <navigator class="category-item CategoryPanels--category-item" hover-class="none">
            <image class="icon CategoryPanels--icon sk-image"></image>
            <text class="text CategoryPanels--text sk-transparent sk-text-14-2857-221 sk-text"
              >数码</text
            >
          </navigator>
          <navigator class="category-item CategoryPanels--category-item" hover-class="none">
            <image class="icon CategoryPanels--icon sk-image"></image>
            <text class="text CategoryPanels--text sk-transparent sk-text-14-2857-762 sk-text"
              >运动</text
            >
          </navigator>
          <navigator class="category-item CategoryPanels--category-item" hover-class="none">
            <image class="icon CategoryPanels--icon sk-image"></image>
            <text class="text CategoryPanels--text sk-transparent sk-text-14-2857-642 sk-text"
              >杂项</text
            >
          </navigator>
          <navigator class="category-item CategoryPanels--category-item" hover-class="none">
            <image class="icon CategoryPanels--icon sk-image"></image>
            <text class="text CategoryPanels--text sk-transparent sk-text-14-2857-15 sk-text"
              >品牌</text
            >
          </navigator>
        </view>
      </view>
      <view is="pages/index/components/Hotpannel">
        <view class="panel Hotpannel--panel hot Hotpannel--hot">
          <view class="item Hotpannel--item">
            <view class="title Hotpannel--title">
              <text
                class="title-text Hotpannel--title-text sk-transparent sk-text-14-2857-890 sk-text"
                >特惠推荐</text
              >
              <text
                class="title-desc Hotpannel--title-desc sk-transparent sk-text-14-2857-5 sk-text"
                >精选全攻略</text
              >
            </view>
            <navigator class="cards Hotpannel--cards" hover-class="none">
              <image class="image Hotpannel--image sk-image" mode="aspectFit"></image>
              <image class="image Hotpannel--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item Hotpannel--item">
            <view class="title Hotpannel--title">
              <text
                class="title-text Hotpannel--title-text sk-transparent sk-text-14-2857-363 sk-text"
                >爆款推荐</text
              >
              <text
                class="title-desc Hotpannel--title-desc sk-transparent sk-text-14-2857-329 sk-text"
                >最受欢迎</text
              >
            </view>
            <navigator class="cards Hotpannel--cards" hover-class="none">
              <image class="image Hotpannel--image sk-image" mode="aspectFit"></image>
              <image class="image Hotpannel--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item Hotpannel--item">
            <view class="title Hotpannel--title">
              <text
                class="title-text Hotpannel--title-text sk-transparent sk-text-14-2857-5 sk-text"
                >一站买全</text
              >
              <text
                class="title-desc Hotpannel--title-desc sk-transparent sk-text-14-2857-753 sk-text"
                >精心优选</text
              >
            </view>
            <navigator class="cards Hotpannel--cards" hover-class="none">
              <image class="image Hotpannel--image sk-image" mode="aspectFit"></image>
              <image class="image Hotpannel--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item Hotpannel--item">
            <view class="title Hotpannel--title">
              <text
                class="title-text Hotpannel--title-text sk-transparent sk-text-14-2857-963 sk-text"
                >新鲜好物</text
              >
              <text
                class="title-desc Hotpannel--title-desc sk-transparent sk-text-14-2857-538 sk-text"
                >生活加分项</text
              >
            </view>
            <navigator class="cards Hotpannel--cards" hover-class="none">
              <image class="image Hotpannel--image sk-image" mode="aspectFit"></image>
              <image class="image Hotpannel--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-368 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-622 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-175 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-699 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-347 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-937 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-879 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-940 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-221 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-762 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-642 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-15 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-890 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-5 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-363 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-329 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-753 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-963 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-538 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
