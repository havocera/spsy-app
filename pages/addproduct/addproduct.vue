<template>
	<view style="margin-left: 20upx;margin-right: 20upx;">
		<u-form :model="form" ref="uForm" >
				<u-form-item label="产品名称" label-width="150"><u-input v-model="form.cpmc" /></u-form-item>
				<u-form-item label="产品规格" label-width="150"><u-input v-model="form.cpgg" /></u-form-item>
				<u-form-item label="保质期" label-width="150"><u-input v-model="form.bzq" /></u-form-item>
			<u-form-item label="产品介绍" label-width="150"><u-field
			v-model="form.ms"
			label-width="0"
			type="textarea"
		>
		</u-field></u-form-item>
		<u-upload :action="action" :show-progress="showprogress" max-count='1' name="image" @-remove="onRemove()" :file-list="fileList" @on-success="onsuccess" ></u-upload>
			</u-form>
			<u-button  type="success" @click="addbase()">添加产品</u-button>
	</view>
</template>

<script>
	import { api_base_url} from '../../config.js'
	export default {
		data() {
			return {
				type: 'textarea',
				border: true,
				height: 100,
				autoHeight: true,
				form:{
					
					cpmc:'',
					cpgg:'',
					bzq:'',
					picname:'',
					ms:'',
				},
				showprogress:true,
				qyinfo:{},
				action: 'http://czapi.wtycms.cn/Productupload?token=',
								fileList: [
									
								]
			}
		},
		onLoad:function(option){
			this.qyinfo =  uni.getStorageSync('token')
			this.action = 'http://czapi.wtycms.cn/Productupload?token='+this.qyinfo
			this.getbase(option)
		},
		methods: {
			onRemove(index, lists,res) {
							console.log(res)
							this.showprogress =true
						},
			addbase(){
				let that = this
				const token = uni.getStorageSync('token')
				let aurl=""
				if(that.form.bh){
					aurl = api_base_url+'DoEditProductInfo?token='+token
				}else{
					 aurl=api_base_url+'AddProductInfo?token='+token
				}
				
				console.log(token)
				uni.request({
					url:aurl,
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
							title:'添加失败'
						})
					}
				})
			},
			onsuccess(index, lists,res){
							console.log(res)
							console.log(res[0].response.data.info)
							this.form.picname = res[0].response.data.info
							this.showprogress=false;
						},
						getbase(option){
							if(option.bh){
								let that = this
								console.log(option.bh)
								const token = uni.getStorageSync('token')
								uni.request({
									url:api_base_url+'EditProductInfo?token='+token,
									data:{'bh':option.bh},
									success:function(res){
										that.form.bh = res.data.data.bh;
										that.form.cpmc = res.data.data.cpmc;
										that.form.cpgg = res.data.data.cpgg;
										that.form.bzq = res.data.data.bzq;
										that.form.ms = res.data.data.ms;
										that.form.bh = res.data.data.bh;
										that.form.picname = res.data.data.picname;
										that.fileList.push({'url':res.data.data.picturename})
										console.log(that.fileList)
										that.showprogress = false
									}
								})
							}
						}
		}
	}
</script>

<style>

</style>
