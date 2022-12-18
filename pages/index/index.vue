<template>
	<view>
		<view class="top">
			<view class="title">
				物联网+区块链食品安全追溯
			</view>
			<view class="dis">
				蓝牙打印 一物一码 全程可追溯
			</view>
			<!-- <image class="logo" src="../../static/favicon.png" mode=""></image> -->
			<!-- <view class="button"> -->
			<navigator v-if="groupname=='企业'" url="../bluetooth/index" class="navigate"><button type="default" class="blooth" v-if="ble==null">选择蓝牙打印机</button><button type="default" class="blooth" v-if="ble!=null">已连接{{ble.name}}</button></navigator>
		</view>
		<view class="content nav-list" v-if="groupname=='企业'">
			<navigator hover-class='none' url="../companymanage/companymanage" class="nav-li bg-cyan" style="">
				<view class="nav-title">企业信息管理</view>
				<view class="nav-name">管理企业信息</view>
				<text class="cuIcon-newsfill"></text>
			</navigator>
			<navigator hover-class='none' url="../history/history" class="nav-li bg-pink" style="">
				<view class="nav-title">产地信息</view>
				<view class="nav-name">添加产地信息</view>
				<text class="cuIcon-newsfill"></text>
			</navigator>
			<navigator hover-class='none' url="../codescreen/codescreen" class="nav-li bg-green" style="">
				<view class="nav-title">产品信息</view>
				<view class="nav-name">添加产品信息</view>
				<text class="cuIcon-newsfill"></text>
			</navigator>
			<navigator hover-class='none' url="../check/check" class="nav-li bg-orange" style="">
				<view class="nav-title">批次号</view>
				<view class="nav-name">批次号生成</view>
				<text class="cuIcon-newsfill"></text>
			</navigator>
			<navigator hover-class='none' url="../trpbuy/trpbuy" class="nav-li bg-trp1" style="">
				<view class="nav-title">投入品采购</view>
				<view class="nav-name">添加购买投入品</view>
				<text class="cuIcon-newsfill"></text>
			</navigator>
			<navigator hover-class='none' url="../trpuse/trpuse" class="nav-li bg-trp2" style="">
				<view class="nav-title">投入品使用</view>
				<view class="nav-name">使用投入品</view>
				<text class="cuIcon-newsfill"></text>
			</navigator>
			
			<navigator hover-class='none' url="../agriculturalwork/agriculturalwork" class="nav-li bg-nszy" style="">
				<view class="nav-title">农事作业</view>
				<view class="nav-name">添加农事作业</view>
				<text class="cuIcon-newsfill"></text>
			</navigator>
			<navigator hover-class='none' url="../print/print" class="nav-li bg-dysym" style="">
				<view class="nav-title">打印溯源码</view>
				<view class="nav-name">创建溯源码打印</view>
				<text class="cuIcon-newsfill"></text>
			</navigator>
		</view>
		<view class="content nav-list" v-if="groupname=='监管管理员'">
			<navigator hover-class='none' url="../registershenhe/registershenhe" class="nav-li bg-cyan" >
				<view class="nav-title">注册企业</view>
				<view class="nav-name">管理注册企业</view>
				<text class="cuIcon-newsfill"></text>
			</navigator>
			<navigator hover-class='none' url="../shenhe/shenhe" class="nav-li bg-cyan" >
				<view class="nav-title">审核企业</view>
				<view class="nav-name">管理注册企业</view>
				<text class="cuIcon-newsfill"></text>
			</navigator>
			<navigator hover-class='none' url="../shenhe/shenhe" class="nav-li bg-pink" style="">
				<view class="nav-title">更多功能</view>
				<view class="nav-name">正在开发中</view>
				<text class="cuIcon-newsfill"></text>
			</navigator>
			</view>
			<view class="content nav-list" v-if="groupname=='物流商'">
				<navigator hover-class='none' url="../registershenhe/registershenhe" class="nav-li bg-cyan" >
					<view class="nav-title">企业信息维护</view>
					<view class="nav-name">管理企业信息</view>
					<text class="cuIcon-newsfill"></text>
				</navigator>
				<navigator hover-class='none' url="../shenhe/shenhe" class="nav-li bg-cyan" >
					<view class="nav-title">物流信息管理</view>
					<view class="nav-name">管理物流信息</view>
					<text class="cuIcon-newsfill"></text>
				</navigator>
				<navigator hover-class='none'  class="nav-li" style="">
					<view class="nav-title">更多功能</view>
					<view class="nav-name">正在开发中</view>
					<text class="cuIcon-newsfill"></text>
				</navigator>
				</view>
				<!-- -------------------------------------分割线----------------------------- -->
				<view class="content nav-list" v-if="groupname=='收购商'">
					<navigator hover-class='none' url="../registershenhe/registershenhe" class="nav-li bg-cyan" >
						<view class="nav-title">企业信息维护</view>
						<view class="nav-name">管理企业信息</view>
						<text class="cuIcon-newsfill"></text>
					</navigator>
					<navigator hover-class='none' url="../shenhe/shenhe" class="nav-li bg-cyan" >
						<view class="nav-title">收购信息管理</view>
						<view class="nav-name">管理收购信息</view>
						<text class="cuIcon-newsfill"></text>
					</navigator>
					<navigator hover-class='none'  class="nav-li" style="">
						<view class="nav-title">更多功能</view>
						<view class="nav-name">正在开发中</view>
						<text class="cuIcon-newsfill"></text>
					</navigator>
					</view>
					<view class="content nav-list" v-if="groupname=='零售商'">
						<navigator hover-class='none' url="../registershenhe/registershenhe" class="nav-li bg-cyan" >
							<view class="nav-title">企业信息维护</view>
							<view class="nav-name">管理企业信息</view>
							<text class="cuIcon-newsfill"></text>
						</navigator>
						<navigator hover-class='none' url="../shenhe/shenhe" class="nav-li bg-cyan" >
							<view class="nav-title">零售信息管理</view>
							<view class="nav-name">管理收购信息</view>
							<text class="cuIcon-newsfill"></text>
						</navigator>
						<navigator hover-class='none'  class="nav-li" style="">
							<view class="nav-title">更多功能</view>
							<view class="nav-name">正在开发中</view>
							<text class="cuIcon-newsfill"></text>
						</navigator>
						</view>
		<!-- 底部轮播图 -->
<!-- 		<view class="wrap"> -->
			<!-- <u-swiper :list="list" :effect3d="true"></u-swiper> -->
<!-- 		</view> -->
<!-- 		<view class="shade" v-show="showShade" @tap="hidePop">
			<view class="pop" :style="popStyle" :class="{'show':showPop}">
				<view v-for="(item,index) in popButton" :key="index" @tap="pickerMenu" :data-index="index">{{item}}</view>
			</view>
		</view> -->
		<!-- <view class="foot">
			主办：安徽省农业农产厅</br>
			版权所有:安徽北斗精准农业信息工程实验室</br>
			
		</view> -->
	</view>
</template>

<script>
	import { api_base_url} from '../../config.js'
	export default {

		data() {
			return {
				ble:null,
				groupname:'企业',
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
			height: {
				type: [Number, String],
				default: 300
			},	
			}
		},
		onLoad:function() {
			
		},
		onShow:function(){
			let that = this
			uni.getStorage({
				key:"groupname",
				success:function(res){
					console.log(res)
					that.groupname=res.data
				},fail:function(){
					console.log('未dee')
				}
			})
			uni.getStorage({
				key:'ble',
				success:function(res){
					console.log(res);
					that.ble = res.data
				},fail:function(){
					console.log('未连接蓝牙打印机')
				}
			})
			console.log(this.ble)
		},
		methods: {
			onLoad(){
				console.log(123);
				let _this=this;
				uni.getStorage({
					key:'ble',
					success:function(res){
						console.log(res)
						_this.ble = res.data
					},fail:function(){
						console.log('未连接蓝牙打印机')
					}
				})
				console.log(_this.ble)
				uni.getStorage({
					key:"groupname",
					success:function(res){
						_this.groupname=res.data
					}
				})
				/* uni.getStorage({
								    key: 'token',
								    success: function (res) {
										console.log(res)
										uni.request({
											url:api_base_url+'/apptoken?token='+res.data,
											success:function(res){
												if(res.data.code==0){
													console.log("denglusuccess")
												}else{
													uni.reLaunch({
														url:'../login/login',
													})
												}
											},fail:function(){
												uni.reLaunch({
													url:'../login/login',
												})
											}
										})
										},
										fail(res) {
											console.log(res)
											uni.reLaunch({
												url:'../login/login',
											})
										}
										}); */
									
				
			}


		}
	}
</script>

<style lang="scss" scoped>

	.top {
		padding-top: 200rpx;
		padding-left: 20rpx;
		width: 100%;
		height: 350rpx;
		background-color: rgb(16, 203, 132);
		color: #FFFFFF;

		position: relative;
	}

	.title {
		font-size: 40rpx;
		display: inline-block;
		height: 40rpx;
		position: absolute;
		left: 20rpx;
	}

	.logo {
		display: inline-block;
		width: 150rpx;
		height: 150rpx;
		border-radius: 150rpx;
		position: absolute;
		right: 80rpx;
		/* float: right; */
		/* margin-right: 50rpx; */
	}

	.dis {
		position: absolute;
		top: 260rpx;
		font-size: 30rpx;
		color: rgb(139, 254, 209);
	}

	// .navigate{
	// 	position: absolute;
	// 	display: block;
	// 	top:370rpx;
	// 	height: 400rpx;
	// 	margin: 0 auto;
	// }


	.blooth {
		position: absolute;
		display: block;
		text-align: center;
		width: 710rpx;
		top: 370rpx;
		margin: 10 auto;
	}

	.content {
		position: absolute;
		display: block;
		margin-top: 120rpx;
		top: 400rpx;
	}

	.nav-list {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-flex-wrap: wrap;
		flex-wrap: wrap;
		padding: 0px 20px 0px;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
	}

	.nav-li {
		animation: 1.2s ease 0s 1 normal none running show;
		padding: 15px;
		border-radius: 6px;
		width: 35%;
		margin: 0 2.5% 20px;
		background-image: url(https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358352-assets/web-upload/cc3b1807-c684-4b83-8f80-80e5b8a6b975.png);
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
	}

	.nav-li::after {
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

	.bg-cyan {
		background-color: #1cbbb4;
		color: #ffffff;
	}
	.bg-trp1{
		background-color: #00aaff;
		color: #ffffff;	
		}
		.bg-trp2{
		background-color: #dc93dc;
		color: #ffffff;	
		}
	.nav-title {
		font-size: 16px;
		font-weight: 300;
	}
.bg-nszy{
	background-color: #d1d100;
	color: #ffffff;	
}
.bg-dysym{
	background-color: #339a00;
	color: #ffffff;	
}
	.nav-name {
		font-size: 14px;
		text-transform: Capitalize;
		margin-top: 10px;
		position: relative;
	}

	.bg-pink {
		background-color: #e03997;
		color: #ffffff;
	}

	.bg-green {
		background-color: #39b54a;
		color: #ffffff;
	}

	.bg-orange {
		background-color: #f37b1d;
		color: #ffffff;
	}

	.wrap {
		padding-top: 600rpx;

	}
	/* 遮罩 */
	.shade {
		position: fixed;
		z-index: 100;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		-webkit-touch-callout: none;
	
		.pop {
			position: fixed;
			z-index: 101;
			width: 200upx;
			box-sizing: border-box;
			font-size: 28upx;
			text-align: left;
			color: #333;
			background-color: #fff;
			box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
			line-height: 80upx;
			transition: transform 0.15s ease-in-out 0s;
			user-select: none;
			-webkit-touch-callout: none;
			transform: scale(0, 0);
	
			&.show {
				transform: scale(1, 1);
			}
	
			&>view {
				padding: 0 20upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				user-select: none;
				-webkit-touch-callout: none;
	
				&:active {
					background-color: #f3f3f3;
				}
			}
		}
	}
	.foot{
		position: fixed;
		bottom: 50upx;
		width: 100%;
		height: 40px;
		
		color: #CCCCCC;
		line-height: 40upx;
		text-align: center;
	}
</style>
