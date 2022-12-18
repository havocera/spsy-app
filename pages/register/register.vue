<template>
	<view class="main">
		<view class="top">
			<view class="title">
				物联网+区块链食品安全追溯
			</view>
			<view class="dis">
				蓝牙打印 一物一码 全程可追溯
			</view>
		</view>
		<view class="" style="margin-left: 20upx;margin-right: 20upx;">
			<u-row gutter="8" justify="center" align="center">
				<u-col span="4">
					<view class="demo-layout bg-purple" @click="tologin('政府监管')">
						<u-icon class="com-ico" name="order"></u-icon>
						<view class="">
							政府监管
						</view>
					</view>
				</u-col>
				<u-col span="4">
					<view class="demo-layout bg-purple-light" @click="tologin('生产采集系统')">
						<u-icon class="com-ico" name="server-man"></u-icon>
						<view class="">
							生产采集系统
						</view>
					</view>
				</u-col>
				<u-col span="4">
					<view class="demo-layout bg-purple-dark" @click="tologin('物流商系统')">
						<u-icon class="com-ico" name="car-fill"></u-icon>
						<view class="">
							物流商系统
						</view>
					</view>
				</u-col>
				<u-col span="4">
					<view class="demo-layout bg-purple-blue" @click="tologin('收购商系统')">
						<u-icon class="com-ico" name="coupon"></u-icon>
						<view class="">
							收购商系统
						</view>
					</view>
				</u-col>
				<u-col span="4">
					<view class="demo-layout  bg-purple-pink" @click="tologin('零售商系统')">
						<u-icon class="com-ico" name="shopping-cart"></u-icon>
						<view class="">
							零售商系统
						</view>
					</view>
				</u-col>
				<u-col span="4">
					<view class="demo-layout bg-purple-yllew" >
						<u-icon class="com-ico" name="fingerprint"></u-icon>
						<view class="">
							消费者追溯查询
						</view>
					</view>
				</u-col>

			</u-row>

			<u-popup v-model="show" mode="center"  border-radius="18">
				<view class="login-cont">
					
				
						
			<u-form :model="form" ref="uForm" label-width="200" :border="true" >
				<view class="tag-title">
					
						{{label}}登录
					
				</view>
				<u-form-item label-width="150" label="用户名">
					<u-input v-model="form.name" placeholder="登录名称" />
				</u-form-item>
				<u-form-item label-width="150" label="密  码">
					<u-input type="password" :password-icon=true placeholder="登录密码" v-model="form.pwd" />
				</u-form-item>

			</u-form>
			<view class="login-box" >
				<u-button class="login" type="success" shape="circle" @click="login">登录</u-button>
			</view>
			</view>
			</u-popup>
		</view>
		<view class="footer">
			版权所有：滁州学院<br />
			技术支持：安徽椒图信息科技有限公司
		</view>
	</view>
</template>

<script>
	import {
		api_base_url
	} from '../../config.js'
	export default {
		data() {
			return {
				show:false,
				label:"生产商",
				form: {
					name: '',
					pwd: ''

				},

			}
		},
		methods: {
			tologin(e){
				this.label=e
				switch (this.label) {
					case '政府监管':
						this.form.name="监管管理员"
						this.form.pwd="123456"
						break;
					case '生产采集系统':
						this.form.name="hnkj"
						this.form.pwd="123456"
						break;
					case '物流商系统':
						this.form.name="物流商"
						this.form.pwd="123456"
						break;
					case '收购商系统':
						this.form.name="收购商"
						this.form.pwd="123456"
						break;
					case '零售商系统':
						this.form.name="零售商"
						this.form.pwd="123456"
						break;
				}
				this.show=true
			},
			login() {
				let that = this;
				if (that.form.name == '' || that.form.pwd == '') {
					uni.showToast({
						title: '用户名密码不能为空',
						icon: "none",
						duration: 2000
					})
				} else {

					uni.showLoading({
						
					})
					uni.request({
						url: api_base_url + 'login',
						method: 'POST',
						data: that.form,
						success: function(res) {
							console.log(res);
							uni.hideLoading()
							if (res.data.code == -1) {
								uni.showToast({
									icon: 'none',
									title: res.data.message,
									duration: 2000
								})
							} else if (res.data.code == 0) {
								uni.setStorageSync("groupname", res.data.data.groupname)
								uni.setStorage({
									key: 'token',
									data: res.data.data.token,
									success: function() {
										uni.setStorage({
											key: 'userinfo',
											data: res.data.data,
											success: function() {
												console.log('success');
											}
										})
										uni.showToast({
											title: '登录成功',
											duration: 2000
										})
										uni.reLaunch({
											url: '../index/index',
										})
									}
								})


							} else {
								uni.showToast({
									title: '网络错误稍后再试',
									duration: 2000
								})
							}
						},
						fail: function(res) {
							uni.showToast({
								title: '网络错误',
								icon: "none",
								duration: 2000
							})
						}
					})
				}
			}
		},
	}
</script>

<style>
	.login-cont{
		width:95%;
		margin: 0 auto;
		padding: 40rpx;
		border-radius: 20rpx;
	}
	.com-ico {
		font-size: 140rpx;
		text-align: center;
		/* color: #fff; */
		/* color: #fdcbf1; */
		/* background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%); */
		/* color:rgb(0, 177, 115) */
	}

	.wrap {
		padding: 24rpx;
	}

	.u-row {
		margin: 40rpx 0;
	}

	.demo-layout {
		text-align: center;
		height: 250rpx;
		width: 100%;
		border-radius: 28rpx;
		margin: 20rpx 0;
		padding-top: 40rpx;
		/* color: #fff; */

		animation: 1.2s ease 0s 1 normal none running show;
		padding: 15px;

		/* width: 35%; */
		margin: 0 2.5% 20px;
		background-image: url(https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358352-assets/web-upload/cc3b1807-c684-4b83-8f80-80e5b8a6b975.png);
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;

	}
	.demo-layout::after {
		content: "";
		position: absolute;
		z-index: -1;
		background-color: inherit;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: -10%;
		border-radius: 5px;
		opacity: 0.2;
		-webkit-transform: scale(0.9, 0.9);
		transform: scale(0.9, 0.9);
	}

	.bg-purple {
		/* background-color: #e03997; */
		background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
	}

	.bg-purple-light {
		background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
		/* background-color: #39b54a; */
	}
	.bg-purple-yllew{
		/* background-color: #d1d100; */
		background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
	}

	.bg-purple-dark {
		/* background-color: #f37b1d; */
		background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
	}
	.bg-purple-blue{
		/* background-color: #00aaff; */
		background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
	}
	 .bg-purple-pink{
		 /* background-color: #dc93dc; */
		 background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
	 }

	.login-box {
		width: 100%;

	}

	.login {
		margin-top: 20rpx;
		width: 600rpx;

	}

	.tag-title {
		color: #000;
		width: 100%;
		font-size: 40rpx;
		text-align: center;

	}

	.main {
		/* background-image: url(../../static/loginbg.png); */
		background-size: cover;
	}

	.top {
		padding-top: 100rpx;
		padding-left: 20rpx;
		width: 100%;
		height: 500rpx;
		background-color: rgb(16, 203, 132);
		background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
		background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
		/* background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%); */
		color: #fff;

		position: relative;
	}

	.title {
		font-size: 53rpx;
		display: inline-block;
		height: 53rpx;
		position: absolute;
		left: 20rpx;
		top: 150rpx;
	}

	.dis {
		position: absolute;
		top: 250rpx;
		font-size: 30rpx;
		color: #FFFFFF;
	}

	.footer {
		position: fixed;
		bottom: 50rpx;
		text-align: center;
		width: 100%;
	}
</style>
