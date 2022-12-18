<template>
	<view style="margin-left: 20upx;margin-right: 20upx;">
		<u-form :model="form" ref="uForm" >
				<u-form-item label="投入品名称" label-width="150"><u-input v-model="form.trpm" /></u-form-item>
				<u-form-item label="生产商" label-width="150"><u-input v-model="form.nyscz" /></u-form-item>
				<u-form-item label="登记证号" label-width="150"><u-input v-model="form.nydjzh" /></u-form-item>
				<u-form-item label="作物(或范围)" label-width="150"><u-input v-model="form.nyzw" /></u-form-item>
				<u-form-item label="防治对象" label-width="150"><u-input v-model="form.nyfz" /></u-form-item>
				<u-form-item label="使用方法" label-width="150"><u-input v-model="form.nysyfa" /></u-form-item>
				<u-form-item label="作用地块" label-width="150"><u-input v-model="form.cdbh" :type="type" :border="border" @click="chandi = true" />
				<u-picker mode="selector" v-model="chandi"  :default-selector="[0]" :range="baselist" range-key="text" @confirm="actionSheetCallback"></u-picker></u-form-item>
				<u-form-item label="作用产品" label-width="150"><u-input v-model="form.cpbh" :type="type" :border="border" @click="show = true" />
				<u-picker mode="selector" v-model="show"  :default-selector="[0]" :range="productList" range-key="text" @confirm="actionSheetCallback2"></u-picker></u-form-item>
				<u-form-item label="使用数量" label-width="150"><u-input v-model="form.trpgg" /></u-form-item>
				<u-form-item label="经手人" label-width="150"><u-input v-model="form.cgr" /></u-form-item>
				<u-form-item label="使用日期" label-width="150">
				    <u-input v-model="form.cgrq"  @click="timeshow = true"/>
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
				text:'text',
				baselist:[],
				productList:[],
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
				params: {
						year: true,
						month: true,
						day: true,
						hour: false,
						minute: false,
						second: false,
						},
				form:{},
			}
		},
		onLoad:function(option){
			this.gettrpuse(option)
			this.getchandi()
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
						url:api_base_url+'/EditInputsuseInfo',
								method:'POST',
								data:{
									token,
									'bh':option.bh
								},
						success:function(res){
							that.form = res.data.data;

						}
					})
				}
			},
			getchandi(){
				let that = this;
				const token = uni.getStorageSync('token');
				uni.request({
						url:api_base_url+'/getchandi?token='+token,
						success:function(res){
							console.log(res)
							that.baselist=res.data.data
						},
					})
					uni.request({
							url:api_base_url+'/getchanpin?token='+token,
							success:function(res){
								console.log(res)
								that.productList=res.data.data
							},
						})
			},
			// 提交保存修改
			addtrpuse(){
				let that = this
				const token = uni.getStorageSync('token')
				console.log(token)
				uni.request({
					url:api_base_url+'/addInputsuseInfo?token='+token,
					method:'POST',
					data:that.form,
					success:function(res){
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
			actionSheetCallback2(index) {
							this.form.cpbh = this.productList[index].text;
							// this.cpbh =this.productList[index].text;
							
						},
			actionSheetCallback(index) {
							this.form.cdbh = this.baselist[index].text;
							
							
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
				this.form.cgrq=e.year+'-'+e.month+'-'+e.day
				console.log(this.form.time)
			},
						
		}
	}
</script>

<style>

</style>
