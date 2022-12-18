<template>
	<div>
		<!-- 查看详情 -->
		<view style="margin-left: 20upx;margin-right: 20upx;">
			<u-form :model="form" ref="uForm">
				<u-form-item label="企业代码" label-width="160"><u-input v-model="form.qydm" :border="true" /></u-form-item>
				<u-form-item label="登录名称" label-width="160"><u-input v-model="form.rybh" :border="true" /></u-form-item>
				<u-form-item label="登录密码" label-width="160"><u-input v-model="form.kl" :border="true"/></u-form-item>
				<u-form-item label="生产企业名称" label-width="180"><u-input v-model="form.qymc" :border="true" /></u-form-item>
				<u-form-item label="负责人" label-width="160"><u-input v-model="form.fzr" :border="true" /></u-form-item>
				<u-form-item label="负责人电话" label-width="160"><u-input v-model="form.fzrtel" :border="true" /></u-form-item>
				<u-form-item label="地址" label-width="160"><u-input v-model="form.addr" :border="true" /></u-form-item>
				<u-form-item label="注册日期" label-width="160"><u-input v-model="form.zcrq" :border="true" /></u-form-item>
				<u-form-item label="企业类型" label-width="175"><u-input v-model="form.qylx" :border="true" /></u-form-item>
				<u-form-item label="企业社会信用代码" label-width="160"><u-input v-model="form.xydm" :border="true" /></u-form-item>
				<u-form-item label="身份证号" label-width="160"><u-input v-model="form.card_id" :border="true"/></u-form-item>
				<u-form-item label="身份证照片" label-width="160"><view class="pic">
						<u-image width="250px" height="250rpx" :src="form.card_x"></u-image>
						<u-image width="250px" height="250rpx" :src="form.card_y"></u-image>
					</view>
				</u-form-item>	
				<u-form-item label="营业执照" label-width="160"><view class="pic">
						<u-image width="250px" height="250rpx" :src="form.business_license"></u-image>
					</view>
				</u-form-item>	
			</u-form>
				<div class="btn" v-if="form.flag!=1">
					<u-button  type="success" @click="pass(form.bh)">审核通过</u-button>
					<u-button  type="error" style="margin-left: 50upx;" @click="nopass(form.bh)">不通过审核</u-button>
				</div>
		</view>
	</div>
</template>

<script>
	import {api_base_url} from '../../config.js';
	export default {
		data() {
			return {
				showprogress:true,
				xdpic:'',
				background: {backgroundColor: '#00c38f'},
				form:{},
			}
		},
		onLoad(option) {
			this.qydm = option.qydm
			console.log(this.qydm)
			this.getGoods()
		},
		methods: {
			// 获取所选编辑条目详情
			getGoods(){
				var that = this
				const token = uni.getStorageSync('token')
				uni.request({
					url:
					api_base_url+'/qyDatail',
					method:'POST',
					data:{
						token,
						qydm:this.qydm	
					},
					method:'POST',
					success:function(res){
					that.form = res.data.data
					}
				})
			},
			pass(bh){
				let that = this
					console.log(bh)
				const token = uni.getStorageSync('token')
				uni.request({
					url:api_base_url+'/Verify?token='+token,
					method:'POST',
					data:{
						token,
						bh
					},
					success:function(res){
						console.log(res)
						if(res.data.code==0){
							uni.showToast({
								title:'审核成功',
								icon:"success"
							})
							that.getGoods()
						}
					},fail:function(){
						uni.showModal({
							title:'修改失败'
						})
					}
				})
				},
				nopass(bh){
					let that = this
						console.log(bh)
					const token = uni.getStorageSync('token')
					uni.request({
						url:api_base_url+'/noVerify?token='+token,
						method:'POST',
						data:{
							token,
							bh
						},
						success:function(res){
							console.log(res)
							if(res.data.code==0){
								uni.navigateBack({
								delta:1
								})
							}
						},fail:function(){
							uni.showModal({
								title:'修改失败'
							})
						}
					})
					}
			
		}
	}
</script>

<style>
.btn{
	display: flex;	
	/* justify-content: space-between; */
	margin-left: 50upx;
	margin-top: 3%;	
	margin-bottom: 80upx;
}
</style>
