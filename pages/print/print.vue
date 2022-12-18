<template>
	<view class="main">
		<view class="title2">
			<!-- <image src="../../static/icon/grid_3.png" mode="" ></image> -->
			一物一码  便捷打印
		</view>
	
	<view class="" style="margin-left: 20upx;margin-right: 20upx;">
		
	<u-form :model="form" ref="uForm">
			<!-- <u-form-item label="选择产地" label-width="150"><u-input v-model="form.chandi" :type="type" :border="border" @click="chandi = true" />
			<u-action-sheet :list="baselist" v-model="chandi" @click="actionSheetCallback"></u-action-sheet></u-form-item> -->
			<u-form-item label="打印样式" label-width="150"><u-input v-model="stylename" :type="type" :border="border" @click="styleshow = true" />
			<u-picker mode="selector" v-model="styleshow"  :default-selector="[0]" :range="stylelist" range-key="stylename" @confirm="actionSheetCallback4"></u-picker></u-form-item>
			<u-form-item label="选择产品" label-width="150"><u-input v-model="cpmc" :type="type" :border="border" @click="show = true" />
		<u-picker mode="selector" v-model="show"  :default-selector="[0]" :range="productList" range-key="text" @confirm="actionSheetCallback2"></u-picker></u-form-item>
		<u-form-item label="选择批次号" label-width="150"><u-input v-model="form.pch" :type="type" :border="border" @click="pchshow = true" />
		<u-picker mode="selector" v-model="pchshow"  :default-selector="[0]" :range="pchList" range-key="text" @confirm="actionSheetCallback3"></u-picker></u-form-item>
		<u-form-item label="打印份数" label-width="150" >
		<u-input v-model="form.num" placeholder="请输入打印数量" type="number" :border="border" /></u-form-item>
			
			
		</u-form>
		<u-button type="success" @click="senBleLabel">打印</u-button>
		</view>
		</view>
</template>

<script>
	import { api_base_url} from '../../config.js'
	var tsc = require('../../components/gprint/tsc.js')
	var esc = require('../../components/gprint/esc.js')
	export default {
		data() {
			return {
				stylename:'制码打印',
				styleid:1,
				currDev:null,
				show:false,
				chandi:false,
				pchshow:false,
				styleshow:false,
				type:'select',
				devices:[],
				cpmc:'',
				stylelist:[
					{
						styleid:0,
						stylename:"食用农产品合格证"
					},
					{
						styleid:1,
						stylename:"制码打印"
					}
				],
				form: {
					cdbh: '',
					cpbh: '',
					pch: '',
					num:'',
				},
				border: false,
				productList: [
					
					],
				baselist:[
					
				],
				pchList:[],
				
			};
		},
		onLoad:function(){
			this.getbase();
			this.currDev = uni.getStorageSync('ble');
			this.devices = uni.getStorageSync('dev');
			console.log(this.currDev)
			this.getBLEServices(this.currDev.deviceId);
		},
		methods:{
			onBackPress(e) {
				console.log(e)
				//e.from === 'backbutton' 说明如果点击的是物理返回键或导航栏的返回键就进行以下操作
			      if (e.from === 'backbutton') {
			        if (遮罩层是否隐藏) {
			          //如果没隐藏
			          //这里写让遮罩层隐藏的代码
			        } else {
			          //如果隐藏了
			          //这里就写返回上一页
			           uni.navigateBack()
			        }
			        //return true 
			        //返回值为true 时,表示不执行默认的返回（默认返回上一页），执行自定义的返回
			 		//如果要限制必须写成true
			        return true;
			      }
			    },

			actionSheetCallback4(index) {
							this.stylename = this.stylelist[index].stylename;
							this.styleid = this.stylelist[index].styleid;
							
							
						},				
			actionSheetCallback2(index) {
							this.form.cpbh = this.productList[index].value;
							this.cpmc = this.productList[index].text;
							const token = uni.getStorageSync('token');
							let that = this;
							uni.request({
								url:api_base_url+'/getpchPrint?token='+token,
								data:{
								'cpbh':that.form.cpbh
								},
								success:function(res){
									console.log(res)
									that.pchList=res.data.data
								},
							})
						},
			actionSheetCallback3(index) {
							this.form.pch = this.pchList[index].text;
							
						},			
			getbase(){
				
					let that = this;
					
					const token = uni.getStorageSync('token');
					uni.request({
							url:api_base_url+'/getProductpch?token='+token,
						
							success:function(res){
								console.log(res)
								that.productList=res.data.data
							},
						})
					
				},
				getBLEServices(_deviceId) {
					var that = this;
					let deviceId = _deviceId
					console.log("获取蓝牙设备所有服务(service)。---------------")
				
					uni.getBLEDeviceServices({
						// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
						deviceId: deviceId,
						complete(res) {
							console.log(res)
							let serviceId = ""
							uni.hideLoading()
							
							for (var s = 0; s < res.services.length; s++) {
								console.log(res.services[s].uuid)
								let serviceId = res.services[s].uuid
								uni.getBLEDeviceCharacteristics({
									// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
									deviceId: deviceId,
									// 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
									serviceId: serviceId,
									success(res) {
										var re = JSON.parse(JSON.stringify(res))
										
										console.log('deviceId = [' + deviceId + ']  serviceId = [' + serviceId + ']')
										for (var c = 0; c < re.characteristics.length; c++) {
											if (re.characteristics[c].properties.write == true) {
												let uuid = re.characteristics[c].uuid
												console.log(' deviceId = [' + deviceId + ']  serviceId = [' + serviceId + '] characteristics=[' +
													uuid)
				
												for (var index in that.devices) {
													if (that.devices[index].deviceId == deviceId) {
														that.devices[index].services.push({
															serviceId: serviceId,
															characteristicId: uuid
														})
														break
													}
				
												}
												console.log(JSON.stringify(that.devices))
				
											}
										}
										
									}
								})
				
							}
				
				
				
						},
						fail(res) {
							console.log(res)
						},
					})
				
				},
				senBlData(deviceId, serviceId, characteristicId,uint8Array) {
							console.log('************deviceId = [' + deviceId + ']  serviceId = [' + serviceId + '] characteristics=[' +characteristicId+ "]")
							var uint8Buf = Array.from(uint8Array);
							function split_array(datas,size){
								var result = {};
								var j = 0
								for (var i = 0; i < datas.length; i += size) {
									result[j] = datas.slice(i, i + size)
									j++
								}
								// console.log(result)
								return result
							}
							var sendloop = split_array(uint8Buf, 20);
							// console.log(sendloop.length)
							console.log(sendloop)
							function realWriteData(sendloop, i) {
								var data = sendloop[i]
								// console.log(data)
								if(typeof(data) == "undefined"){
									// console.log(data)
									return
								}
								console.log("第【" + i + "】次写数据"+data)
								var buffer = new ArrayBuffer(data.length)
								var dataView = new DataView(buffer)
								for (var j = 0; j < data.length; j++) {
									dataView.setUint8(j, data[j]);
								}
								// uni.notifyBLECharacteristicValueChange({
								// 	state:true,
								// 	deviceId:deviceId,
								// 	serviceId:serviceId,
								// 	characteristicId:characteristicId,
								// 	success(res){
								// 		console.log(res)
								// 		setTimeout(function(){
											uni.writeBLECharacteristicValue({
												deviceId,
												serviceId,
												characteristicId,
												value: buffer,
												success(res) {
													console.log(res)
													
														realWriteData(sendloop, i + 1);
													
													
												},fail(res) {
													// realWriteData(sendloop, i);
													console.log(res)
													uni.showToast({
														icon:'none',
													    title: '打印机不支持低功耗蓝牙',
													    duration: 1000
													});
												}
											})
										// },500)
										
									}
								
								
							
				           var i = 0;
							realWriteData(sendloop, i);
						},
						senBleLabel() {
							//标签模式
							for (var index in this.devices) {
								if (this.devices[index].deviceId == this.currDev.deviceId) {
									this.currDev.services=this.devices[index].services
									break
								}
											
							}
							
							console.log(this.currDev.name)
							let deviceId = this.currDev.deviceId;
							let serviceId = '';
							let characteristicId='';
							if(this.currDev.name=="BTMU33"){
								serviceId = this.currDev.services[2].serviceId;
								characteristicId = this.currDev.services[2].characteristicId;
							}else{
								serviceId = this.currDev.services[0].serviceId;
								characteristicId = this.currDev.services[0].characteristicId;
							}
							
							var command = tsc.jpPrinter.createNew()
							var that =this
							
							
							const token = uni.getStorageSync('token');
							uni.request({
									url:api_base_url+'/code?token='+token,
									data:that.form,
									method:'POST',
									success:function(res){
										console.log(res)
										if(res.data.code==8){
											uni.showToast({
												title: '该批次号存在错误',
												icon:'none',
												duration: 2000
											})
										}else{
											
										
										for(let item of res.data.data){
											command.test(item.cpmc,item.cpgg,item.create_date,item.city,item.fzrtel,item.qymc,item.sym,that.styleid)
											
										}
										that.senBlData(deviceId, serviceId, characteristicId,command.getData())
										uni.showToast({
											title: '正在打印',
											    duration: 2000
										})
										}
									},fail:function(res){
										uni.showToast({
											title: '生产溯源码错误',
											icon:'none',
											duration: 2000
										})
									}
								})
							// command.test()
							// that.senBlData(deviceId, serviceId, characteristicId,command.getData())
							
							
						},
			}
		}
	
</script>

<style lang="scss">
	.title2{
		width: 100%;
		height: 100rpx;
		text-align:center;
		font-size: 30rpx;
		line-height: 100rpx;
	}
	.pickbt{
		display: inline-block;
		height: 40upx;
		line-height: 40upx;
		text-align: center;
		background-color: #FFFFFF;
	}
	.plaClass{
		color: #dbdbdb;
	}
	.container999{
		.title{
			height: 80rpx;
			line-height: 80rpx;
			padding-left: 4%;
			border-bottom: 1px solid #f5f5f5;
		}
		.buttonBox{
			width: 91%;
			margin: 0 auto;
			height: 84rpx;
			border-radius: 84rpx;
			color: white;
			display: flex;
			align-items: center;
			justify-content: center;
			position: fixed;
			bottom: 100rpx;
			left: 0;
			right: 0;
			background-color: rgb(16,203,132);
		}
		.tri{
			width:0;
			height:0;
			border-left:8rpx solid transparent;
			border-right:8rpx solid transparent;
			right: 30rpx !important;
			border-top:16rpx solid #545151;
		}
		.line{
		  margin-top: 30rpx;
		  height: 100rpx;
		  width: 92%;
		  margin: 0 auto;
		  border-bottom: 1px solid #f5f5f5;
		  display: flex;
		  .lineRight{
			  .tips{
				  color: #9a9a9c;
				  font-weight: bold;
			  }
			 flex: 1;
			  height: 100%;
			  display: flex;
			  align-items: center;
			  justify-content: space-between;
			  position: relative;
		  }
			.lineLeft{
			  display: flex;
			  width: 20%;
			  align-items: center;
			  height: 100%;
			  font-weight: bold;
			  color: #000000;
			}
			.input{
				padding-right: 20rpx;
				height: 100%;
				width: 70%;
				text-align: left;
				font-size: 28rpx;
				color: #545151;
			}
			.picker{
			 height: 100%;
			 justify-content: flex-start;
			  display: flex;
			  align-content: center;
			  width: 500rpx;
			}
			picker{
			  height: 84rpx;
			  line-height: 84rpx;
			}
		}
		width: 100vw;
		font-size: 28upx;
		min-height: 100vh;
		overflow: hidden;
		color: #6b8082;
		position: relative;
	}
</style>
