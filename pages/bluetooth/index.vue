<template>
	<view class="main">
		<button @click="searchBle">搜索蓝牙</button>
		<view style="margin-top: 30upx;" :key="index" v-for="(item,index) in devices">
			<button style="width: 400upx; color: #0081FF;" @click="onConn(item)">{{item.name}}</button>
		</view>
		</br>
		<view class="currdev" v-if="currDev !=null">
			<u-tag style="font-size: 40rpx;" :text="`已连接蓝牙打印机${currDev.name}`" size="default" type="success" />
		</view>
		</br>
		<u-button class="print" type="success" @click="goprint()" v-if="currDev!=null">去打印</u-button>
		
	</view>


</template>

<script>
	var tsc = require('../../components/gprint/tsc.js')
	var esc = require('../../components/gprint/esc.js')
	
	export default {
		data() {
			return {
				devices: [],
				currDev: null,
				connId: '',
				piaojuText:'',
				url:'',
				txt:'',
			}
		},
		onLoad: function() {
		
		},

		methods: {
			goprint(){
				uni.navigateTo({
					url:'../print/print'
				})
			},
			destroyed: function() {
				console.log("destroyed----------")
				if (this.connId != '') {
					uni.closeBLEConnection({
						deviceId: this.connId,
						success(res) {
							console.log(res)
						}
					})
				}

			},
			searchBle() {
				var that = this
				console.log("initBule")
				that.devices = []
				uni.openBluetoothAdapter({
					success(res) {
						console.log("打开 蓝牙模块")
						console.log(res)
						that.onDevice()
						uni.getBluetoothAdapterState({
							success: function(res) {
								console.log(res)
								if (res.available) {
									if (res.discovering) {
										that.stopFindBule()
									}
									//搜索蓝牙
									//开始搜寻附近的蓝牙外围设备
									uni.showLoading({
										title:"开始搜寻附近的蓝牙外围设备"
									})
									
									console.log("开始搜寻附近的蓝牙外围设备")
									uni.startBluetoothDevicesDiscovery({
										success(res) {
											uni.hideLoading()
											console.log(res)
										}
									})

								} else {
									uni.hideLoading()
									console.log('本机蓝牙不可用')
									uni.showModal({
									    title: '提示',
									    content: '本机蓝牙不可用',
									    success: function (res) {
									        if (res.confirm) {
									            console.log('用户点击确定');
									        } else if (res.cancel) {
									            console.log('用户点击取消');
									        }
									    }
									});
								}
							},
						})
					},fail:function(res){
						uni.showModal({
						    title: '提示',
						    content: '请打开蓝牙',
						    success: function (res) {
						        if (res.confirm) {
						            console.log('用户点击确定');
						        } else if (res.cancel) {
						            console.log('用户点击取消');
						        }
						    }
						});
						
					}
				})
			},
			onDevice(){
				console.log("监听寻找到新设备的事件---------------")
				var that = this
				var flag = false
				//监听寻找到新设备的事件
				uni.onBluetoothDeviceFound(function(devices) {
							console.log('--------------new-----------------------'+JSON.stringify(devices))
							var re = JSON.parse(JSON.stringify(devices))
							console.log(re.devices[0].name + "  " + re.devices[0].deviceId)
								let name = re.devices[0].name
								if (name != "未知设备") {
									let deviceId = re.devices[0].deviceId
									that.devices.forEach((i,index)=>{
									// 	console.log(i)
										if(i.name==name){
											flag = true
										}
									})
									// console.log(result)
									  // console.log(result) true/false
									  // console.log(that.devices)
									  if(!flag){
										 that.devices.push({
										 	name: name,
										 	deviceId: deviceId,
										 	services: []
										 }) 
									  }
										  
									  flag = false
									

									
								}
							
							
							
							
				})
			},
			
			stopFindBule() {
				console.log("停止搜寻附近的蓝牙外围设备---------------")
				uni.stopBluetoothDevicesDiscovery({
					success(res) {
						console.log(res)
					}
				})
			},
			onConn(item) {
				var that = this
				console.log("连接蓝牙---------------" + item.deviceId)
				let deviceId = item.deviceId
				uni.createBLEConnection({
					deviceId: deviceId,
					complete(res) {
						if (res.errMsg == "createBLEConnection:ok") {
							uni.showToast({
							
								title:"连接蓝牙-[" + item.name + "]--成功",
							})
							uni.showLoading({
								title:"正在获取蓝牙服务"
							})
							console.log("连接蓝牙-[" + item.name + "]--成功")
							that.connId = deviceId;
							that.currDev = item
							setTimeout(function() {
								that.getBLEServices(deviceId)
								
							}, 2000)
							uni.setStorage({
								key:'ble',
								data:that.currDev,
								success:function(){
									console.log('保存蓝牙打印机成功')
								}
							});
							uni.setStorage({
								key:'dev',
								data:that.devices,
								success:function(){
									console.log('保存蓝牙打印机成功')
								}
							});
							
						} else {
							console.log(res)
						}
						//连接成功 关闭搜索
						that.stopFindBule()

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
											// console.log(JSON.stringify(that.devices))

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
										uni.showToast({
											icon:'none',
										    title: '打印机接收数据错误',
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
				let deviceId = this.currDev.deviceId;
				let serviceId = this.currDev.services[0].serviceId;
				let characteristicId = this.currDev.services[0].characteristicId;
				var command = tsc.jpPrinter.createNew()
				var that =this
				// console.log(command)
				// command.setCls()
			 //    command.setSize(40, 60)
    //             command.setGap(2)
				// // command.setDirection(0)
    //             command.setText(1,1, 2, "TSS24.BF2", 1, 1, "打印测试")
    //             command.setBar(50, 50, "L", 5, "A", "977767937@qq.com")
				
				// command.setPagePrint()
				// command.setCls()
				// var code1 = "! 0 200 200 210 1\\r\\n";
				// var code2 = "TEXT 4 0 30 40 HELLOWORLD\\r\\n";
				// var code3 = "FORM ,\\r\\n";
				// var code4 = "POPRINT ,\\r\\n";
				// console.log(code)
				// command.addCommand2(code1)
				command.test(this.url,this.txt)
				that.senBlData(deviceId, serviceId, characteristicId,command.getData())
				
				
			},
			senBleLabel2(){
				//票据模式
				let deviceId = this.currDev.deviceId;
				let serviceId = this.currDev.services[0].serviceId;
				let characteristicId = this.currDev.services[0].characteristicId;
				var command = tsc.jpPrinter.createNew()
				command.init()
                // command.setText(this.piaojuText);
                // command.setPrintAndFeedRow(1)
				command.test2()
				
				
				this.senBlData(deviceId, serviceId, characteristicId,command.getData())
			}
		}
	}
</script>

<style>
.main{
	height: 100%;	
	}
.print{
	width: 400rpx;
	/* position: fixed;
	bottom: 0rpx; */
}
.currdev{
	width: 100%;
	text-align: center;
	font-size: 25rpx;
}
</style>
