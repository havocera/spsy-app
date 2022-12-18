<template>
	<view>
		<view v-if="isCanUse">
		            <view>
		                <view class='header'>
		                    <image :src='userData.avatarUrl'></image>
		                </view>
		                <view class='content'>
		                    <view>申请获取以下权限</view>
		                    <text>获得你的公开信息(昵称，头像、地区等)</text>
		                </view>
		
		                <button class='bottom' open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">
		                    授权登录
		                </button>
		            </view>
		        </view>
	</view>
</template>

<script>
	import { api_base_url} from '../../config.js'
	// import register from '../register/register.vue'
	export default {
		data() {
			return {
				SessionKey: '',
				userData:{
					open_id: '',
					nickName: null,
					avatarUrl: null,
					gender:null,
				},
				isCanUse: uni.getStorageSync('isCanUse')||true//默认为true
			}
		},
			onLoad() {//默认加载
			    
			  },
			  // components:{
				 //  register
			  // },
		methods: {
			//第一授权获取用户信息===》按钮触发
			            wxGetUserInfo() {
							uni.showLoading({
								title:'正在登录'
							})
			                let _this = this;
							uni.login({
							    provider: 'weixin',
							    success: function(loginRes) {
								_this.userData.open_id = loginRes.code		
			                uni.getUserInfo({
			                    provider: 'weixin',
			                    success: function(infoRes) {      
									// console.log(infoRes)
			                        _this.userData.nickName = infoRes.userInfo.nickName; //昵称
			                         _this.userData. avatarUrl = infoRes.userInfo.avatarUrl; //头像
									 _this.userData. gender = infoRes.userInfo.gender; //性别
									 uni.setStorage({
									     key: 'userInfo',
									     data:  infoRes.userInfo,
									     success: function () {
									         
									     }
									 });
									 uni.request({
									     url: api_base_url +'/wxlogin',
									 	
									     data: {
									         open_id:  _this.userData.open_id,
									     },
									     method: 'POST',
									     
									     success: (res) => {
											uni.hideLoading();
									       uni.showToast({
									       	title:'授权成功'
									       })
									 		
									 			
									 		if(res.data.code==-1){
									 			uni.showModal({
									 			    title: '温馨提示',
									 			    content: '你还未绑定省平台账号',
									 				confirmText:'绑定',
									 			    success: function (res) {
									 					// + JSON.stringify( _this.userData)
									 			        if (res.confirm) {
									 			            // console.log('用户点击确定');
									 						uni.navigateTo({
									 						    url: "/pages/register/register" ,
									 							animationDuration:100
									 						});
									 			        } else if (res.cancel) {
									 			            uni.navigateTo({
									 			                url: "/pages/register/register" ,
									 			            	animationDuration:100
									 			            });
									 			        }
									 			    }
									 			});
									 		}else if(res.data.code==0){
												uni.setStorage({
													key: 'token',
													data:  res.data.data.token,
													success: function () {
													    console.log('success');
													}
												})
												uni.setStorage({
													key:'qyinfo',
													data:res.data.data.qyinfo,
													success:function(){
														console.log('success');
													}
												})
												uni.showToast({
													title:'chenggong'
												})
									 			uni.switchTab({
									 				url: "../index/index" ,

									 			});
									 		}	
									         uni.hideLoading();
									     },fail:function(res){
											 uni.hideLoading();
									     	uni.showModal({
									     		title:res.data.message
									     	})
									     }
									 });
				
			                    },
			                    fail(res) {}
			                });},fail() {
			                	
			                }
							});
			            },
			
			　　　　　　
			            
						  },
						   
		}
</script>

<style>
.header {
        margin: 90rpx 0 90rpx 50rpx;
        border-bottom: 1px solid #ccc;
        text-align: center;
        width: 650rpx;
        height: 300rpx;
        line-height: 450rpx;
    }

    .header image {
        width: 200rpx;
        height: 200rpx;
		border-radius:50%
    }

    .content {
        margin-left: 50rpx;
        margin-bottom: 90rpx;
    }

    .content text {
        display: block;
        color: #9d9d9d;
        margin-top: 40rpx;
    }

    .bottom {
        border-radius: 80rpx;
        margin: 70rpx 50rpx;
        font-size: 35rpx;
		background-color: rgb(139, 254, 209);
		color: #fff;
    }
</style>
