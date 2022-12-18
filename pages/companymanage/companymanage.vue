<template>
	<view>
		<!-- 企业信息管理表单 -->
	<u-form :model="form" ref="uForm"  class="biaodan">
		<u-form-item label="企业名称:" label-width="130" label-position:left ><u-input v-model="form.qymc"  :border="true" /></u-form-item>
		<u-form-item label="企业负责人:"label-width="110" ><u-input v-model="form.fzr" :border="true" /></u-form-item>
		<u-form-item label="负责人手机号码:"label-width="130" ><u-input v-model="form.fzrtel" :border="true"  /></u-form-item>
		<u-form-item label="企业地址:"label-width="130" ><u-input v-model="form.addr" :border="true"  /></u-form-item>
		<!-- <u-form-item label="企业类型:" label-width="130" ><u-input v-model="form.qylx" :border="true" /></u-form-item> -->
		<u-form-item label="主营业务:"label-width="130" ><u-input v-model="form.zyyw" :border="true"  /></u-form-item>
		<u-form-item label="主营产品:"label-width="130" ><u-input v-model="form.zycp" :border="true"  /></u-form-item>
		<u-form-item label="经营规模:"label-width="130" ><u-input v-model="form.jygm" :border="true"  /></u-form-item>
		<u-form-item label="企业简介:"label-width="130" ><u-input v-model="form.dwjj" :border="true"  /></u-form-item>
		<view class="btn">
		<u-button type="success"  @click="doSubmit">提交修改</u-button>
		<u-button  type="error" @click="quxiao()">取消</u-button>
		</view>
	</u-form>
	</view>
</template>

<script>
	import { api_base_url} from '../../config.js'
export default {
	data() {
		return {
			form: {}
		};
	},
	onLoad:function(){
		this.getqiye()
	},
	methods: {
		// 获取个人信息详情
		getqiye(){
			let that = this;
			const token = uni.getStorageSync('token');
			uni.request({
					url:api_base_url+'/BusinessInfo?token='+token,
					method:'POST',
					// data:{token:that.token},
					success:function(res){
						console.log(res)
						that.form=res.data.data
					},
				})
		},
		// 提交修改个人信息
		doSubmit(){
			   let that = this;
			   let userInfo = uni.getStorageSync('userInfo')
			   const token=uni.getStorageSync('token');
			   console.log(that.form)
			   uni.request({
			   	url:api_base_url+'/DoEditBusinessInfo?token='+token,
			   						data:{
										qymc:that.form.qymc,
										fzr:that.form.fzr,
										fzrtel:that.form.fzrtel,
										addr:that.form.addr,
										dwjj:that.form.dwjj,
										qylx:that.form.qylx,
										zycp:that.form.zycp,
										zyyw:that.form.zyyw,
										jygm:that.form.jygm,
										},
			   						method:'POST',
			   						success:function(res){
			   							uni.showToast({
			   							    title: '修改成功！',
			   							    duration: 2000,
			   								success() {
			   									uni.switchTab({
			   										url: '../index/index',
			   									})
			   								}
			   							});	
			   						}
			   })
		}, 
				//取消
				quxiao(){
					uni.navigateTo({
						url:'../index/index'
					})
				},
		}
};
</script>

<style >
.biaodan{
    margin-left: 5%;
	margin-right: 5%;
}

.text{
	text-align:center;
	color:#00c38f;
}
	.btn {
		display: flex;
		justify-content: space-between;
		margin-top: 3%;
	}
</style>