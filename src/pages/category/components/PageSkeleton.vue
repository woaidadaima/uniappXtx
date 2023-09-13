<template name="skeleton">
  <view class="sk-container">
    <view is="pages/index/components/PageSkeleton">
      <view class="sk-container PageSkeleton--sk-container">
        <view>
          <view
            class="navbar PageSkeleton--navbar CustomNavbar--navbar PageSkeleton--CustomNavbar--navbar"
            style="padding-top: 20px"
          >
            <view
              class="logo PageSkeleton--logo CustomNavbar--logo PageSkeleton--CustomNavbar--logo"
            >
              <image
                class="logo-image PageSkeleton--logo-image CustomNavbar--logo-image PageSkeleton--CustomNavbar--logo-image sk-image PageSkeleton--sk-image"
              ></image>
              <text
                class="logo-text PageSkeleton--logo-text CustomNavbar--logo-text PageSkeleton--CustomNavbar--logo-text sk-transparent PageSkeleton--sk-transparent sk-text-3-5714-368 PageSkeleton--sk-text-3-5714-368 sk-text PageSkeleton--sk-text sk-image"
                >新鲜 · 亲民 · 快捷</text
              >
            </view>
            <view
              class="search PageSkeleton--search CustomNavbar--search PageSkeleton--CustomNavbar--search"
            >
              <text
                class="icon-search PageSkeleton--icon-search CustomNavbar--icon-search PageSkeleton--CustomNavbar--icon-search sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-622 PageSkeleton--sk-text-14-2857-622 sk-text PageSkeleton--sk-text sk-pseudo PageSkeleton--sk-pseudo sk-pseudo-circle PageSkeleton--sk-pseudo-circle sk-image"
                >搜索商品</text
              >
              <text
                class="icon-scan PageSkeleton--icon-scan CustomNavbar--icon-scan PageSkeleton--CustomNavbar--icon-scan sk-pseudo PageSkeleton--sk-pseudo sk-pseudo-circle PageSkeleton--sk-pseudo-circle"
              ></text>
            </view>
          </view>
        </view>
        <scroll-view
          class="scroll-view PageSkeleton--scroll-view"
          refresher-enabled="true"
          scroll-y="true"
          enable-back-to-top="true"
        >
          <view>
            <view
              class="carousel PageSkeleton--carousel XtxSwiper--carousel PageSkeleton--XtxSwiper--carousel"
            >
              <swiper circular="true" current="0" interval="3000" autoplay="false">
                <swiper-item
                  style="
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform: translate(0%, 0px) translateZ(0px);
                  "
                >
                  <navigator
                    class="navigator PageSkeleton--navigator XtxSwiper--navigator PageSkeleton--XtxSwiper--navigator"
                    hover-class="none"
                  >
                    <image
                      class="image PageSkeleton--image XtxSwiper--image PageSkeleton--XtxSwiper--image sk-image PageSkeleton--sk-image"
                      mode="aspectFill"
                    ></image>
                  </navigator>
                </swiper-item>
              </swiper>
              <view
                class="indicator PageSkeleton--indicator XtxSwiper--indicator PageSkeleton--XtxSwiper--indicator"
              >
                <text
                  class="dot PageSkeleton--dot XtxSwiper--dot PageSkeleton--XtxSwiper--dot active PageSkeleton--active XtxSwiper--active PageSkeleton--XtxSwiper--active"
                ></text>
                <text
                  class="dot PageSkeleton--dot XtxSwiper--dot PageSkeleton--XtxSwiper--dot"
                ></text>
                <text
                  class="dot PageSkeleton--dot XtxSwiper--dot PageSkeleton--XtxSwiper--dot"
                ></text>
                <text
                  class="dot PageSkeleton--dot XtxSwiper--dot PageSkeleton--XtxSwiper--dot"
                ></text>
                <text
                  class="dot PageSkeleton--dot XtxSwiper--dot PageSkeleton--XtxSwiper--dot"
                ></text>
              </view>
            </view>
          </view>
          <view>
            <view
              class="category PageSkeleton--category CategoryPanels--category PageSkeleton--CategoryPanels--category"
            >
              <navigator
                class="category-item PageSkeleton--category-item CategoryPanels--category-item PageSkeleton--CategoryPanels--category-item"
                hover-class="none"
              >
                <image
                  class="icon PageSkeleton--icon CategoryPanels--icon PageSkeleton--CategoryPanels--icon sk-image PageSkeleton--sk-image"
                ></image>
                <text
                  class="text PageSkeleton--text CategoryPanels--text PageSkeleton--CategoryPanels--text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-175 PageSkeleton--sk-text-14-2857-175 sk-text PageSkeleton--sk-text sk-image"
                  >居家</text
                >
              </navigator>
              <navigator
                class="category-item PageSkeleton--category-item CategoryPanels--category-item PageSkeleton--CategoryPanels--category-item"
                hover-class="none"
              >
                <image
                  class="icon PageSkeleton--icon CategoryPanels--icon PageSkeleton--CategoryPanels--icon sk-image PageSkeleton--sk-image"
                ></image>
                <text
                  class="text PageSkeleton--text CategoryPanels--text PageSkeleton--CategoryPanels--text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-699 PageSkeleton--sk-text-14-2857-699 sk-text PageSkeleton--sk-text sk-image"
                  >锦鲤</text
                >
              </navigator>
              <navigator
                class="category-item PageSkeleton--category-item CategoryPanels--category-item PageSkeleton--CategoryPanels--category-item"
                hover-class="none"
              >
                <image
                  class="icon PageSkeleton--icon CategoryPanels--icon PageSkeleton--CategoryPanels--icon sk-image PageSkeleton--sk-image"
                ></image>
                <text
                  class="text PageSkeleton--text CategoryPanels--text PageSkeleton--CategoryPanels--text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-347 PageSkeleton--sk-text-14-2857-347 sk-text PageSkeleton--sk-text sk-image"
                  >服饰</text
                >
              </navigator>
              <navigator
                class="category-item PageSkeleton--category-item CategoryPanels--category-item PageSkeleton--CategoryPanels--category-item"
                hover-class="none"
              >
                <image
                  class="icon PageSkeleton--icon CategoryPanels--icon PageSkeleton--CategoryPanels--icon sk-image PageSkeleton--sk-image"
                ></image>
                <text
                  class="text PageSkeleton--text CategoryPanels--text PageSkeleton--CategoryPanels--text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-937 PageSkeleton--sk-text-14-2857-937 sk-text PageSkeleton--sk-text sk-image"
                  >母婴</text
                >
              </navigator>
              <navigator
                class="category-item PageSkeleton--category-item CategoryPanels--category-item PageSkeleton--CategoryPanels--category-item"
                hover-class="none"
              >
                <image
                  class="icon PageSkeleton--icon CategoryPanels--icon PageSkeleton--CategoryPanels--icon sk-image PageSkeleton--sk-image"
                ></image>
                <text
                  class="text PageSkeleton--text CategoryPanels--text PageSkeleton--CategoryPanels--text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-879 PageSkeleton--sk-text-14-2857-879 sk-text PageSkeleton--sk-text sk-image"
                  >个护</text
                >
              </navigator>
              <navigator
                class="category-item PageSkeleton--category-item CategoryPanels--category-item PageSkeleton--CategoryPanels--category-item"
                hover-class="none"
              >
                <image
                  class="icon PageSkeleton--icon CategoryPanels--icon PageSkeleton--CategoryPanels--icon sk-image PageSkeleton--sk-image"
                ></image>
                <text
                  class="text PageSkeleton--text CategoryPanels--text PageSkeleton--CategoryPanels--text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-940 PageSkeleton--sk-text-14-2857-940 sk-text PageSkeleton--sk-text sk-image"
                  >严选</text
                >
              </navigator>
              <navigator
                class="category-item PageSkeleton--category-item CategoryPanels--category-item PageSkeleton--CategoryPanels--category-item"
                hover-class="none"
              >
                <image
                  class="icon PageSkeleton--icon CategoryPanels--icon PageSkeleton--CategoryPanels--icon sk-image PageSkeleton--sk-image"
                ></image>
                <text
                  class="text PageSkeleton--text CategoryPanels--text PageSkeleton--CategoryPanels--text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-221 PageSkeleton--sk-text-14-2857-221 sk-text PageSkeleton--sk-text sk-image"
                  >数码</text
                >
              </navigator>
              <navigator
                class="category-item PageSkeleton--category-item CategoryPanels--category-item PageSkeleton--CategoryPanels--category-item"
                hover-class="none"
              >
                <image
                  class="icon PageSkeleton--icon CategoryPanels--icon PageSkeleton--CategoryPanels--icon sk-image PageSkeleton--sk-image"
                ></image>
                <text
                  class="text PageSkeleton--text CategoryPanels--text PageSkeleton--CategoryPanels--text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-762 PageSkeleton--sk-text-14-2857-762 sk-text PageSkeleton--sk-text sk-image"
                  >运动</text
                >
              </navigator>
              <navigator
                class="category-item PageSkeleton--category-item CategoryPanels--category-item PageSkeleton--CategoryPanels--category-item"
                hover-class="none"
              >
                <image
                  class="icon PageSkeleton--icon CategoryPanels--icon PageSkeleton--CategoryPanels--icon sk-image PageSkeleton--sk-image"
                ></image>
                <text
                  class="text PageSkeleton--text CategoryPanels--text PageSkeleton--CategoryPanels--text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-642 PageSkeleton--sk-text-14-2857-642 sk-text PageSkeleton--sk-text sk-image"
                  >杂项</text
                >
              </navigator>
              <navigator
                class="category-item PageSkeleton--category-item CategoryPanels--category-item PageSkeleton--CategoryPanels--category-item"
                hover-class="none"
              >
                <image
                  class="icon PageSkeleton--icon CategoryPanels--icon PageSkeleton--CategoryPanels--icon sk-image PageSkeleton--sk-image"
                ></image>
                <text
                  class="text PageSkeleton--text CategoryPanels--text PageSkeleton--CategoryPanels--text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-15 PageSkeleton--sk-text-14-2857-15 sk-text PageSkeleton--sk-text sk-image"
                  >品牌</text
                >
              </navigator>
            </view>
          </view>
          <view>
            <view
              class="panel PageSkeleton--panel Hotpannel--panel PageSkeleton--Hotpannel--panel hot PageSkeleton--hot Hotpannel--hot PageSkeleton--Hotpannel--hot"
            >
              <view class="item PageSkeleton--item Hotpannel--item PageSkeleton--Hotpannel--item">
                <view
                  class="title PageSkeleton--title Hotpannel--title PageSkeleton--Hotpannel--title"
                >
                  <text
                    class="title-text PageSkeleton--title-text Hotpannel--title-text PageSkeleton--Hotpannel--title-text sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-890 PageSkeleton--sk-text-14-2857-890 sk-text PageSkeleton--sk-text sk-image"
                    >特惠推荐</text
                  >
                  <text
                    class="title-desc PageSkeleton--title-desc Hotpannel--title-desc PageSkeleton--Hotpannel--title-desc sk-transparent PageSkeleton--sk-transparent sk-text-14-2857-5 PageSkeleton--sk-text-14-2857-5 sk-text PageSkeleton--sk-text sk-image"
                    >精选全攻略</text
                  >
                </view>
                <navigator
                  class="cards PageSkeleton--cards Hotpannel--cards PageSkeleton--Hotpannel--cards"
                  hover-class="none"
                >
                  <image
                    class="image PageSkeleton--image Hotpannel--image PageSkeleton--Hotpannel--image sk-image PageSkeleton--sk-image"
                    mode="aspectFit"
                  ></image>
                </navigator>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
    <category-skeleton></category-skeleton>
    <view class="viewport">
      <view class="search">
        <view class="input">
          <text
            class="icon-search sk-transparent sk-text-14-2857-242 sk-text sk-pseudo sk-pseudo-circle"
            >女靴</text
          >
        </view>
      </view>
      <view class="categories">
        <scroll-view scroll-y="true" class="primary">
          <view class="item active sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-239 sk-text">居家</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-486 sk-text">美食</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-417 sk-text">服饰</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-779 sk-text">母婴</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-533 sk-text">个护</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-527 sk-text">严选</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-545 sk-text">数码</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-523 sk-text">运动</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-348 sk-text">杂项</text>
          </view>
        </scroll-view>
        <scroll-view scroll-y="true" class="secondary">
          <view is="components/XtxSwiper" class="banner">
            <view class="carousel XtxSwiper--carousel">
              <swiper circular="true" interval="3000" current="0" autoplay="false">
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
                <swiper-item
                  style="
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform: translate(100%, 0px) translateZ(0px);
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
          <view class="panel">
            <view class="title">
              <text class="name sk-transparent sk-text-26-6667-529 sk-text">居家生活用品</text>
              <navigator
                class="more sk-transparent sk-text-30-0000-521 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none"
                >全部</navigator
              >
            </view>
            <view class="section">
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-411 sk-text"
                  >飞天53%vol500ml贵州茅台酒（带杯）</view
                >
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-111 sk-text">1499.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-939 sk-text"
                  >苏格兰陈年单一麦芽威士忌700毫升</view
                >
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-230 sk-text">318.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-129 sk-text"
                  >下饭神器酸豆角50克*10袋</view
                >
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-649 sk-text">16.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-385 sk-text"
                  >地道卤香好味道，桂林鲜米粉245克*6盒</view
                >
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-802 sk-text">69.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-697 sk-text"
                  >玛歌正牌干红750毫升2017年</view
                >
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-866 sk-text">6699.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-645 sk-text"
                  >三分钟即享简餐，日式即食咖喱150克</view
                >
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-6 sk-text">15.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-242 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-239 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-486 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-417 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-779 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-533 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-527 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-545 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-523 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-348 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-26-6667-529 {
  background-image: linear-gradient(
    transparent 26.6667%,
    #eeeeee 0%,
    #eeeeee 73.3333%,
    transparent 0%
  ) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}
.sk-text-30-0000-521 {
  background-image: linear-gradient(
    transparent 30%,
    #eeeeee 0%,
    #eeeeee 70%,
    transparent 0%
  ) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}
.sk-text-14-2857-411 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-111 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-939 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-230 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-129 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-649 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-385 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-802 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-697 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-866 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-645 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-6 {
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
