<script setup lang="ts">
import { getMemberAddressById, postMemberAddress, putMemberAddressById } from '@/services/address'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 表单数据
const form = ref({
  receiver: '', // 收货人
  contact: '', // 联系方式
  fullLocation: '', // 省市区(前端展示)
  provinceCode: '', // 省份编码(后端参数)
  cityCode: '', // 城市编码(后端参数)
  countyCode: '', // 区/县编码(后端参数)
  address: '', // 详细地址
  isDefault: 0, // 默认地址，1为是，0为否
})
//接受传递过来的参数
const query = defineProps<{ id: string }>()
console.log(query.id)
const getMemberAddress = async (id: string) => {
  const res = await getMemberAddressById(id)
  Object.assign(form.value, res.result)
}
//如果存在id则代表修改地址
onLoad(() => {
  if (query.id) {
    getMemberAddress(query.id)
  }
})
//动态设置地址管理标题
uni.setNavigationBarTitle({ title: query.id ? '修改地址' : '添加地址' })
//修改地址
const onRegionChange: UniHelper.RegionPickerOnChange = (ev) => {
  //解构地区代码
  const [provinceCode, cityCode, countyCode] = ev.detail.code!
  //将数组转为字符串供前端使用
  form.value.fullLocation = ev.detail.value.join(' ')
  console.log((form.value.fullLocation = ev.detail.value.join(' ')), ev.detail)
  Object.assign(form.value, { provinceCode, cityCode, countyCode })
  // console.log(form.value)
}
//修改默认地址
const onSwitchDefault: UniHelper.SwitchOnChange = (ev) => {
  form.value.isDefault = Number(ev.detail.value)
}
//定义表单校验规则
const rules = {
  receiver: {
    rules: [
      // 校验 name 不能为空
      {
        required: true,
        errorMessage: '请填写姓名',
      },
    ],
  },
  contact: {
    rules: [
      {
        required: true,
        errorMessage: '请填写手机号',
      },
      { pattern: /^1[3-9]\d{9}$/, errorMessage: '手机号格式不正确' },
    ],
  },
  //校验name属性必须为表单里存在的key
  fullLocation: {
    rules: [{ required: true, errorMessage: '请选择地区' }],
  },
  address: {
    rules: [{ required: true, errorMessage: '请填详细地址' }],
  },
}
const uniForm = ref<UniHelper.UniFormsInstance>()
//保存提交
const onSubmit = async () => {
  try {
    //表单验证通过发请求添加地址
    console.log(uniForm.value?.validate!())
    await uniForm.value?.validate!()

    //判断是否有id有的话就调用修改接口，否则调用添加接口
    if (query.id) {
      console.log(form.value)
      await putMemberAddressById(query.id, form.value)
      uni.showToast({
        title: '修改成功',
        icon: 'success',
      })
    } else {
      //调用添加地址Api
      await postMemberAddress(form.value)
      uni.showToast({
        title: '添加成功',
        icon: 'success',
      })
    }
    setTimeout(() => {
      uni.navigateBack()
    }, 400)
  } catch (error) {
    uni.showToast({
      icon: 'error',
      title: '请填写完整信息',
    })
  }
}
</script>

<template>
  <view class="content">
    <uni-forms :model="form" :rules="rules" ref="uniForm">
      <!-- 表单内容 -->
      <uni-forms-item class="form-item" name="receiver">
        <text class="label">收货人</text>
        <input class="input" placeholder="请填写收货人姓名" v-model="form.receiver" />
      </uni-forms-item>
      <uni-forms-item class="form-item" name="contact">
        <text class="label">手机号码</text>
        <input class="input" placeholder="请填写收货人手机号码" v-model="form.contact" />
      </uni-forms-item>
      <uni-forms-item class="form-item" name="fullLocation">
        <text class="label">所在地区</text>
        <picker
          class="picker"
          mode="region"
          :value="form.fullLocation.split(' ')"
          @change="onRegionChange"
        >
          <view v-if="form.fullLocation">{{ form.fullLocation }}</view>
          <view v-else class="placeholder">请选择省/市/区(县)</view>
        </picker>
      </uni-forms-item>
      <uni-forms-item class="form-item" name="address">
        <text class="label">详细地址</text>
        <input class="input" placeholder="街道、楼牌号等信息" v-model="form.address" />
      </uni-forms-item>
      <uni-forms-item class="form-item">
        <label class="label">设为默认地址</label>
        <switch
          @change="onSwitchDefault"
          class="switch"
          color="#27ba9b"
          :checked="form.isDefault === 1"
        />
      </uni-forms-item>
    </uni-forms>
  </view>
  <!-- 提交按钮 -->
  <button class="button" @tap="onSubmit">保存并使用</button>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.content {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .form-item,
  .uni-forms-item {
    display: flex;
    align-items: center;
    min-height: 96rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;
    margin-bottom: 0;

    // 调整 uni-forms 样式
    .uni-forms-item__content {
      display: flex;
    }

    .uni-forms-item__error {
      margin-left: 200rpx;
    }

    &:last-child {
      border: none;
    }

    .label {
      width: 200rpx;
      color: #333;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .switch {
      position: absolute;
      right: -20rpx;
      transform: scale(0.8);
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }
}

.button {
  height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>
