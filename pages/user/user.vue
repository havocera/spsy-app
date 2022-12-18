<template>
	<view>
		<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30" @click="toUserInfo">
			<view class="u-m-r-10">
				<u-avatar :src="pic" size="140"></u-avatar>
			</view>
			<view class="u-flex-1" >
				<navigator url="../register/register" v-if="qyname==''"><view class="u-font-18 u-p-b-20" >请先登录</view></navigator>
				<view class="u-font-18 u-p-b-20" >{{qyname}}</view>
				<view class="u-font-14 u-tips-color">{{qyfzr}}</view>
			</view>
			<view class="u-m-l-10 u-p-10">
				<u-icon name="scan" color="#969799" size="48" @click="scan"></u-icon>
			</view>
			<view class="u-m-l-10 u-p-10">
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view>
		</view>
		
		<!-- <view class="u-m-t-20">
			<u-cell-group>
				<navigator url="../order/order"><u-cell-item icon="rmb-circle" title="我的订单"></u-cell-item></navigator>
			</u-cell-group>
		</view> -->
		
		<view class="u-m-t-20">
			<u-cell-group>
				<!-- <navigator url="../address/index"><u-cell-item icon="star" title="收货地址"></u-cell-item></navigator> -->
				<!-- <u-cell-item icon="photo" title="打印记录" @click="history()"></u-cell-item> -->
				<!-- <u-cell-item icon="coupon" title="解除绑定省平台账号" @click="clear()"></u-cell-item> -->
				<u-cell-item icon="heart" title="帮助" @click="help"></u-cell-item>
				<u-cell-item icon="heart" title="隐私政策" @click="yinsi"></u-cell-item>
				<u-cell-item icon="heart" title="软件版本" >V3.2.1</u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="setting" title="退出登录" @click="loginout()"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pic:'',
				show:true,
				nickName:'',
				qyname:'',
				qyfzr:'',
				
			}
		},
		onLoad() {
			this.toUserInfo()
		},
		methods: {
			scan(){
				uni.scanCode({
					success:function(res){
						
						if(res.result.split("?")[0]=="http://www.aielab.net/ah/index/scan"){
							console.log(res.result.split("=")[1])
							uni.navigateTo({
								url:"../pclogin/pclogin?checkcode="+res.result.split("=")[1]
							})
							console.log("222")
							
						}else{
							plus.runtime.openWeb(res.result)
						}
						
					}
				})
			},
			help(){
				plus.runtime.openWeb("http://app.help.aielab.net/")
			},
			yinsi(){
				plus.runtime.openWeb("http://yinsi.aielab.net/")
			},
			toUserInfo(){
			let that = this
				
				uni.getStorage({
					key:'groupname',
					success:function(group){
						uni.getStorage({
							key:'userinfo',
							success:function(qyres){
								console.log(qyres)
								that.groupname=group.data
								that.qyname = qyres.data.rymc
								
								
							}
						})
					}
				})
			},
			loginout(){
				uni.showModal({
					title:'确定要退出',
					success:function(res){
						console.log(res)
						if(res.confirm){
							uni.clearStorageSync();
							uni.reLaunch({
								url:'../register/register',
							})
						}else{
							uni.showToast({
								title: '已取消',
								    duration: 2000,
									
							})
						}
					}
				})
				
			},
			history(){
				uni.navigateTo({
					url:'../sym/sym',
				})
			},
			clear(){
				let that = this
				uni.showModal({
					title:'确定要退出',
					success:function(res){
						console.log(res)
						if(res.confirm){
							const token = uni.getStorageSync('token')
							console.log(token)
							uni.request({
								url:api_base_url+'/clear?token='+token,
								method:'POST',
								
								success:function(res){
									uni.clearStorageSync();
									uni.reLaunch({
										url:'../login/login',
									})
								},fail:function(){
									uni.showModal({
										title:'错误'
									})
								}
							})
						}else{
							uni.showToast({
								title: '已取消',
								    duration: 2000,
									
							})
						}
					}
				})
				
				
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #ededed;
}
.user-box{
	background-color: #fff;
	padding-top: 30rpx;
}
</style>

<!-- <template>
 	<view>
 		<u-navbar :is-back="false" title="　" :border-bottom="false">
 			<view class="u-flex u-row-right" style="width: 100%;">
 				<view class="camera u-flex u-row-center">
 					<u-icon name="camera-fill" color="#000000" size="48"></u-icon>
 				</view>
 			</view>
 		</u-navbar>
 		<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30">
 			<view class="u-m-r-10">
 				<u-avatar :src="pic" size="140"></u-avatar>
 			</view>
 			<view class="u-flex-1">
 				<view class="u-font-18 u-p-b-20">uView ui</view>
 				<view class="u-font-14 u-tips-color">微信号:helang_uView</view>
 			</view>
 			<view class="u-m-l-10 u-p-10">
 				<u-icon name="scan" color="#969799" size="28"></u-icon>
 			</view>
 			<view class="u-m-l-10 u-p-10">
 				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
 			</view>
 		</view>
 		
 		<view class="u-m-t-20">
 			<u-cell-group>
 				<u-cell-item icon="rmb-circle" title="支付"></u-cell-item>
 			</u-cell-group>
 		</view>
 		
 		<view class="u-m-t-20">
 			<u-cell-group>
 				<u-cell-item icon="star" title="收藏"></u-cell-item>
 				<u-cell-item icon="photo" title="相册"></u-cell-item>
 				<u-cell-item icon="coupon" title="卡券"></u-cell-item>
 				<u-cell-item icon="heart" title="关注"></u-cell-item>
 			</u-cell-group>
 		</view>
 		
 		<view class="u-m-t-20">
 			<u-cell-group>
 				<u-cell-item icon="setting" title="设置"></u-cell-item>
 			</u-cell-group>
 		</view>
 	</view>
 </template>
 
 <script>
 	export default {
 		data() {
 			return {
 				pic:'https://uviewui.com/common/logo.png',
 				show:true
 			}
 		},
 		onLoad() {
 			
 		},
 		methods: {
 			
 		}
 	}
 </script>
 
 <style lang="scss">
 page{
 	background-color: #ededed;
 }
 
 .camera{
 	width: 54px;
 	height: 44px;
 	
 	&:active{
 		background-color: #ededed;
 	}
 }
 .user-box{
 	background-color: #fff;
 }
 </style>
 -->