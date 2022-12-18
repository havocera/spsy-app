<template>
	<view style="margin-left: 20upx;margin-right: 20upx;">
		<u-form :model="form" ref="uForm" >
				<u-form-item label="产地名称" label-width="150"><u-input v-model="form.chandi" /></u-form-item>
				<u-form-item label="产地用途" label-width="150"><u-input v-model="form.yt" /></u-form-item>
				<u-form-item label="产地位置" label-width="150"><u-input v-model="form.jw" placeholder="请输入地址获取经纬度" /><u-button class="inline"  type="success" @click="getjw()">获取经纬度</u-button></u-form-item>	
			<u-button  type="success" @click="getcurrent()">直接获取当前位置经纬度</u-button>
			<u-form-item label="经度" label-width="150"><u-input v-model="form.lng" :disabled="true" /></u-form-item>
			<u-form-item label="纬度" label-width="150"><u-input v-model="form.lat" :disabled="true" /></u-form-item>	
			</u-form>
			<u-button  type="success" @click="addbase()">添加产地</u-button>
	</view>
</template>

<script>
	import { api_base_url} from '../../config.js'
	export default {
		data() {
			return {
				form: {
					bh:'',
					chandi: '',
					yt: '',
					jw: '',
					lng:'',
					lat:'',
					},
			}
		},
		onLoad:function(option){
			console.log(option.bh)
			this.getbase(option)
		},
		methods: {
			getcurrent(){
				let that = this
				uni.getLocation({
				    type: 'wgs84',
				    success: function (res) {
						that.form.lng = res.longitude;
						that.form.lat = res.latitude;
				        console.log('当前位置的经度：' + res.longitude);
				        console.log('当前位置的纬度：' + res.latitude);
				    }
				});
			},
			getjw(){
				let that =this
				uni.request({
					url:'https://api.tianditu.gov.cn/geocoder?ds={"keyWord":"'+this.form.jw+'"}&tk=171312009286abbb6927374329928e2f',
					success:function(res){
						console.log(res.data)
						that.form.lng = res.data.location.lon;
						that.form.lat = res.data.location.lat
					}
				})
			},
			addbase(){
				let that = this
				let aurl=''
				const token = uni.getStorageSync('token')
				if(that.form.bh){
					aurl = api_base_url+'DoEditPlaceInfo?token='+token
				}else{
					 aurl=api_base_url+'AddPlaceInfo?token='+token
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
			getbase(option){
				if(option.bh){
					let that = this
					console.log(option.bh)
					const token = uni.getStorageSync('token')
					uni.request({
						url:api_base_url+'EditPlaceInfo?token='+token,
						data:{'bh':option.bh},
						success:function(res){
							that.form.chandi = res.data.data.chandi;
							that.form.yt = res.data.data.yt;
							that.form.lng = res.data.data.lng;
							that.form.lat = res.data.data.lat;
							that.form.bh = res.data.data.bh;
						}
					})
				}
			}
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
