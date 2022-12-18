<template>
	<view style="margin-left: 20upx;margin-right: 20upx;">
		<u-form :model="form" ref="uForm" >
				<u-form-item label="产地名称" label-width="150">
				<u-input v-model="form.chandi" :type="type" :border="border" @click="chandi = true" />
				<u-picker mode="selector" v-model="chandi"  :default-selector="[0]" :range="baselist" range-key="text" @confirm="actionSheetCallback"></u-picker></u-form-item>
				<u-form-item label="农事作业" label-width="150"><u-input v-model="form.nszy" /></u-form-item>
				<u-form-item label="作业人" label-width="150"><u-input v-model="form.zyr" /></u-form-item>
				<u-form-item label="投入品名称" label-width="150"><u-input v-model="form.trpmc" /></u-form-item>
				<u-form-item label="作业量" label-width="150"><u-input v-model="form.zyl" /></u-form-item>
				<u-form-item label="单位" label-width="150"><u-input v-model="form.zyldw" /></u-form-item>
				<u-form-item label="作业日期" label-width="150">
				    <u-input v-model="form.rq"  @click="timeshow = true"/>
				    <u-picker v-model="timeshow" mode="time" :params="params" @confirm="confirm"></u-picker>
				</u-form-item>
				<u-form-item label="备注" label-width="150"><u-input v-model="form.bz" /></u-form-item>
			</u-form>
			<u-button  type="success" @click="addnszy()">确认修改</u-button>
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
				form: {},
				timeshow: false,
				params: {
						year: true,
						month: true,
						day: true,
						hour: false,
						minute: false,
						second: false,
						},
			}
		},
	onLoad:function(option){
		this.getchandi()
		this.getnszy(option)
	},	
		methods: {
			getnszy(option){
				if(option.bh){
					let that = this
					console.log(option.bh)
					const token = uni.getStorageSync('token')
					uni.request({
						url:api_base_url+'/EditFarmingoperationsInfo',
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
			addnszy(){
				let that = this
				const token = uni.getStorageSync('token')
				console.log(token)
				uni.request({
					url:api_base_url+'/AddFarmingoperationsInfo',
					method:'POST',
					data:{
						token,
						qymc:that.form.qymc,
						cdbh:that.form.cdbh,
						nszy:that.form.nszy,
						zyr:that.form.zyr,
						trpmc:that.form.trpmc,
						zyl:that.form.zyl,
						zyldw:that.form.zyldw,
						rq:that.form.rq,
						bz:that.form.bz
					},
					success:function(res){
						if(res.data.code==0){
							uni.navigateBack({
							delta:1
							})
						}
					},fail:function(){
						uni.showModal({
							title:'添加失败'
						})
					}
				})
			},
			actionSheetCallback2(index) {
							this.form.cpbh = this.productList[index].value;
							this.cpmc =this.productList[index].text;
							
						},
			actionSheetCallback(index) {
							this.form.cdbh = this.baselist[index].value;
							this.form.chandi = this.baselist[index].text;
							// this.form.cdbh = this.baselist[index].text;
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
			confirm(e){
				console.log(e)
				// this.form.time = JSON.stringify(e);
				// this.form.year = e.year;
				// this.form.month = e.month;
				// this.form.day = e.day;
				// console.log(this.form.time)
				this.form.rq=e.year+'-'+e.month+'-'+e.day
				console.log(this.form.rq)
			},
			
		
		}
	}
</script>

<style>
u-input{
	display: inline-block;
}
.inline{
	display: inline-block;
}
</style>
