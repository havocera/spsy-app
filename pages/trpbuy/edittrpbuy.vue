<template>
	<view style="margin-left: 20upx;margin-right: 20upx;">
		<u-form :model="form" ref="uForm" >
				<u-form-item label="投入品名称" label-width="150"><u-input v-model="form.trpmc" /></u-form-item>
				<u-form-item label="生产商" label-width="150"><u-input v-model="form.nyscz" /></u-form-item>
				<u-form-item label="登记证号" label-width="150"><u-input v-model="form.nydjzh" /></u-form-item>
				<u-form-item label="公司地址" label-width="150"><u-input v-model="form.nyscdz" /></u-form-item>
				<u-form-item label="质检意见" label-width="150"><u-input v-model="form.nyzj" /></u-form-item>
				<u-form-item label="作物(或范围)" label-width="150"><u-input v-model="form.nyzw" /></u-form-item>
				<u-form-item label="防治对象" label-width="150"><u-input v-model="form.nyfz" /></u-form-item>
				<u-form-item label="使用方法" label-width="150"><u-input v-model="form.nysyfa" /></u-form-item>
				<u-form-item label="采购来源" label-width="150"><u-input v-model="form.ly" /></u-form-item>
				<u-form-item label="采购数量" label-width="150"><u-input v-model="form.trpgg" /></u-form-item>
				<u-form-item label="经手人" label-width="150"><u-input v-model="form.jsr" /></u-form-item>
				<u-form-item label="采购日期" label-width="150">
				    <u-input v-model="form.rq"  @click="timeshow = true"/>
				    <u-picker v-model="timeshow" mode="time" :params="params" @confirm="confirm"></u-picker>
				</u-form-item>
			</u-form>
			<u-button  type="success" @click="addtrpuse()">确认修改</u-button>
	</view>
</template>

<script>
	import { api_base_url} from '../../config.js'
	export default {
		data() {
			return {
				border: false,
				type:'select',
				rqshow:false,
				chandi:false,
				show:false,
				mode:'date',
				maxdate:'10000',
				params: {
						year: true,
						month: true,
						day: true,
						hour: false,
						minute: false,
						second: false,
						},
				showtime: false,
				timeshow:false,
				form:{},
			}
		},
		onLoad:function(option){
			this.gettrpuse(option)
			// this.bh = option.bh
			// console.log(this.bh)
		},
		methods: {
			onsuccess(index, lists,res){
							console.log(res)
							console.log(res[0].response.picname)
							this.form.picname = res[0].response.picname
							this.showprogress=false;
						},
			// 获取所选编辑详情
			gettrpuse(option){
				if(option.bh){
					let that = this
					console.log(option.bh)
					const token = uni.getStorageSync('token')
					uni.request({
						url:api_base_url+'EditInputspurchaseInfo',
							method:'POST',
								data:{
									token,
									'bh':option.bh,
									},
						success:function(res){
							that.form= res.data.data;
						}
					})
				}
			},
			// 提交保存修改
			addtrpuse(){
				let that = this
				const token = uni.getStorageSync('token')
				console.log(token)
				uni.request({
					url:api_base_url+'/addInputspurchaseInfo?token='+token,
					method:'POST',
					data:that.form,
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
			},				
			change(e){
				console.log(e)
				this.form.rq = e.result;
				this.form.year = e.year;
				this.form.month = e.month;
				this.form.day = e.day;
				console.log(this.form)
			},
			confirm(e){
				console.log(e)
				// this.form.time = e.result;
				// this.form.year = e.year;
				// this.form.month = e.month;
				// this.form.day = e.day;
				// console.log(this.form.time)
				this.form.rq=e.year+'-'+e.month+'-'+e.day
				console.log(this.form.time)
			},
						
		}
	}
</script>

<style>

</style>
