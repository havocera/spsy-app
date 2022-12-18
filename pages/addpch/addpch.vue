<template>
	<view>
		<view class="" style="margin-left: 20upx;margin-right: 20upx;">
	<u-form :model="form" ref="uForm">
		<u-form-item label="选择产地" label-width="150"><u-input v-model="form.chandi" :type="type" :border="border" @click="chandi = true" />
		<u-picker mode="selector" v-model="chandi"  :default-selector="[0]" :range="baselist" range-key="chandi" @confirm="actionSheetCallback"></u-picker></u-form-item>
		<u-form-item label="选择产品" label-width="150"><u-input v-model="cpmc" :type="type" :border="border" @click="show = true" />
		<u-picker mode="selector" v-model="show"  :default-selector="[0]" :range="productList" range-key="cpmc" @confirm="actionSheetCallback2"></u-picker></u-form-item>
		<u-form-item label="选择日期" label-width="150"><u-input v-model="form.rq" :type="type" :border="border" @click="rqshow = true" />
		<u-calendar v-model="rqshow" :mode="mode" :max-date="maxdate" @change="change"></u-calendar></u-form-item>
		<u-form-item label="生产负责人" label-width="150" >
		<u-input v-model="form.scz" :type="text" :border="border" /></u-form-item>
		</u-form>
		<u-button type="success" @click="addpch()">生产批次号</u-button>
		</view>
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
				cpmc:'',
				form:{
					chandi:'',
					cpbh:'',
					rq:'',
					scz:'',
					year:'',
					month:'',
					day:'',
				},
				text:'text',
				baselist:[],
				productList:[],
				
				
			}
		},
		onLoad:function(){
			this.getchandi()
		},
		methods: {
			addpch(){
				let that = this;
				
				const token = uni.getStorageSync('token');
				uni.request({
						url:api_base_url+'AddProductionInfo?token='+token,
						method:'POST',
						data:that.form,
						success:function(res){
							console.log(res)
							if(res.data.code==0){
								uni.showToast({
									title:'添加成功',
									duration:2000
								})
								uni.navigateBack({
									delta:1
								})
							}
						},
					})
			},
			actionSheetCallback2(index) {
							this.form.cpbh = this.productList[index].bh;
							this.cpmc =this.productList[index].cpmc;
							
						},
			actionSheetCallback(index) {
							this.form.chandi = this.baselist[index].chandi;
							
							
						},				
			change(e){
				console.log(e)
				this.form.rq = e.result;
				this.form.year = e.year;
				this.form.month = e.month;
				this.form.day = e.day;
				console.log(this.form)
			},
			getchandi(){
				let that = this;
				
				const token = uni.getStorageSync('token');
				uni.request({
						url:api_base_url+'SelectPlace?token='+token,
						success:function(res){
							console.log(res)
							that.baselist=res.data.data
						},
					})
					uni.request({
							url:api_base_url+'SelectProduction?token='+token,
							success:function(res){
								console.log(res)
								that.productList=res.data.data
							},
						})
			}
		}
	}
</script>

<style>

</style>
