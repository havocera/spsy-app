<template>
	<view>
		<u-top-tips ref="uTips" ></u-top-tips>
		<view >
		            <view>
		                <view class='header'>
		                    <image src='../../static/icon/buoumaotubiao03.png'></image>
		                </view>
		                <view class='content'>
		                    <view>申请获取以下权限</view>
		                    <text>获得你的公开企业信息，以登录电脑端平台</text>
		                </view>
		
		                <button class='bottom'  lang="zh_CN"  @click="pclogin">
		                    授权登录
		                </button>
		            </view>
		        </view>
	</view>
</template>

<script>
	import { api_base_url} from '../../config.js'
	export default {
		data() {
			return {
				statusBarHeight: uni.getSystemInfoSync().statusBarHeight,
							// 导航栏内容区域高度，不包括状态栏高度在内
							navbarHeight: 44,
				checkcode:'',
				token:''
			}
		},
		onLoad:function(option){
			this.checkcode = option.checkcode
			console.log(this.checkcode)
			let that = this
			uni.getStorage({
				key:'token',
				success:function(res){
					that.token = res.data
				}
			})
		},
		methods: {
			pclogin(){
				let that =this
				uni.request({
					url:api_base_url+"/setrediscode?checkcode="+this.checkcode+"&token="+this.token,
					success:function(res){
						console.log(res)
						if(res.data.code==0){
							that.$refs.uTips.show({
											title: '授权登录成功',
											type: 'success',
											duration: '2300'
										});
									
										uni.switchTab({
											url:"../index/index"
										})
						}else{
							that.$refs.uTips.show({
											title: '授权登录失败',
											type: 'error',
											duration: '2300'
										});
										uni.switchTab({
											url:"../user/user"
										})
						}
					}
				})
			}
			
		}
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
		background-color: rgb(16, 203, 132);
		color: #fff;
    }
</style>
