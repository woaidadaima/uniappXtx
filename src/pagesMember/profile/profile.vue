<script setup lang="ts">
import { getMemberProfile, putMemberProfile } from '@/services/login'
import type { ProfileDetail } from '@/types/member'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { Gender } from '@/types/member'
import { useMemberStore } from '@/stores'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
// 准备store
const memberStore = useMemberStore()
//个人信息
const profile = ref({} as ProfileDetail)
//获取个人信息
const getProfileData = async () => {
  const res = await getMemberProfile()
  // console.log(res)
  profile.value = res.result || {}
}
//修改日期
const bindChangeDate: UniHelper.DatePickerOnChange = (ev) => {
  // console.log(ev.detail)
  profile.value!.birthday = ev.detail.value
}
//地区码
let fullLocationCode: [string, string, string] = ['', '', '']
//修改地区
const bindChangeRegion: UniHelper.RegionPickerOnChange = (ev) => {
  // console.log(ev.detail.value, ev.detail.code)
  //前端界面更新
  profile.value!.fullLocation = ev.detail.value.join(' ')
  //后端参数
  fullLocationCode = ev.detail.code!
}
//更改性别
const changeSex: UniHelper.RadioGroupOnChange = (ev) => {
  // console.log(ev)
  // profile.value!.gender = ev.detail.value
  profile.value!.gender = ev.detail.value as Gender
}

//提交保存用户信息
const submit = async () => {
  const { nickname, birthday, gender, profession } = profile.value!
  // console.log(profile.value, nickname, birthday, gender, profession)

  const res = await putMemberProfile({
    nickname,
    birthday,
    gender,
    profession,
    provinceCode: fullLocationCode[0],
    cityCode: fullLocationCode[1],
    countyCode: fullLocationCode[2],
  })
  // console.log(res)
  uni.showToast({
    icon: 'success',
    title: '修改成功',
  })
  //修改store昵称
  console.log('修改store逆臣', res.result.nickname)

  memberStore.profile!.nickname = res.result.nickname
  //延迟500ms后跳转到个人中心页面
  setTimeout(() => {
    uni.navigateBack()
  }, 400)
}
//修改用户头像
const changeAvatar = () => {
  uni.chooseImage({
    count: 1,
    success: (res) => {
      const tempFilePaths = res.tempFilePaths
      uni.uploadFile({
        url: '/member/profile/avatar',
        filePath: tempFilePaths[0],
        name: 'file',
        success: (result) => {
          if (result.statusCode === 200) {
            console.log('修改个人信息页头像', JSON.parse(result.data))
            //将JSON格式字符串对象转化为对象并解构出urL
            const { avatar } = JSON.parse(result.data).result
            //修改当前页面头像
            profile.value.avatar = avatar
            //修改store里的信息
            memberStore.profile!.avatar = avatar
            //展示成功窗口
            uni.showToast({
              icon: 'success',
              title: '修改成功',
            })
          } else {
            uni.showToast({
              icon: 'error',
              title: '出错啦~',
            })
          }
        },
      })
    },
  })
}
onLoad(() => {
  getProfileData()
})
</script>

<template>
  <view class="viewport">
    <!-- 导航栏 -->
    <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <navigator open-type="navigateBack" class="back icon-left" hover-class="none"></navigator>
      <view class="title">个人信息</view>
    </view>
    <!-- 头像 -->
    <view class="avatar">
      <view class="avatar-content">
        <image class="image" :src="profile?.avatar" mode="aspectFill" />
        <text class="text" @tap="changeAvatar">点击修改头像</text>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <!-- 表单内容 -->
      <view class="form-content">
        <view class="form-item">
          <text class="label">账号</text>
          <text class="account">{{ profile?.account }}</text>
        </view>
        <view class="form-item">
          <text class="label">昵称</text>
          <input class="input" type="text" placeholder="请填写昵称" v-model="profile!.nickname " />
        </view>
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group @change="changeSex">
            <label class="radio">
              <radio color="#27ba9b" :checked="profile?.gender === '男'" value="男" />
              男
            </label>
            <label class="radio">
              <radio color="#27ba9b" :checked="profile?.gender === '女'" :value="profile!.gender" />
              女
            </label>
          </radio-group>
        </view>
        <view class="form-item">
          <text class="label">生日</text>
          <picker
            class="picker"
            mode="date"
            start="1900-01-01"
            :end="new Date()"
            :value="profile?.birthday"
            @change="bindChangeDate"
          >
            <view v-if="profile?.birthday">{{ profile.birthday }}</view>
            <view class="placeholder" v-else>请选择日期</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">城市</text>
          <picker
            class="picker"
            @change="bindChangeRegion"
            mode="region"
            :value="profile?.fullLocation?.split(' ')"
          >
            <view v-if="profile?.fullLocation">{{ profile.fullLocation }}</view>
            <view class="placeholder" v-else>请选择城市</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">职业</text>
          <input class="input" type="text" placeholder="请填写职业" v-model="profile!.profession" />
        </view>
      </view>
      <!-- 提交按钮 -->
      <button class="form-button" @tap="submit">保 存</button>
    </view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: auto 420rpx;
  background-repeat: no-repeat;
}

// 导航栏
.navbar {
  position: relative;

  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 头像
.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #fff;
  }
}

// 表单
.form {
  background-color: #f4f4f4;

  &-content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  &-item {
    display: flex;
    height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;

    &:last-child {
      border: none;
    }

    .label {
      width: 180rpx;
      color: #333;
    }

    .account {
      color: #666;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .radio {
      margin-right: 20rpx;
    }

    .picker {
      flex: 1;
    }
    .placeholder {
      color: #808080;
    }
  }

  &-button {
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 30rpx 20rpx;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: #27ba9b;
  }
}
</style>
