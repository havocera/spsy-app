<template>
	<view>
		<!-- 县级单位审核 -->
		<view class="search">
			<u-search placeholder="请输入企业名称" v-model="keyword" @search="getshenhe()" @custom="getshenhe()" ></u-search>
		</view>
		
		<view v-for="(item,index) in baseList"> 
		<u-card>
			<view class="" slot="head"><u-icon name="map-fill" color="#3fbf00" size="32"></u-icon>{{item.qymc}}</view>
				<view class="" slot="body" >
				<view class="" style="color:#65aa40 ;">
					企业代码：{{item.qydm}}
				</view>
				<view class="" style="color:#65aa40 ;">
					生产企业名称：{{item.qymc}}
				</view>
				<view class="" style="color:#65aa40 ;">
					负责人：{{item.fzr}}
				</view>
				<!-- <view class="" style="color:#65aa40 ;">
					负责人电话：{{item.fzrtel}}
				</view>
				<view class="" style="color:#65aa40 ;">
					地址：{{item.addr}}
				</view> -->
				<view class="" style="color:#65aa40 ;">
					企业类型：{{item.qylx}}
				</view>
				<view class="" style="color:#65aa40 ;">
					注册日期：{{item.zcrq}}
				</view>
				<view class="" :style="{'color':item.color}">
					审核状态：{{item.zt}}
				</view>
				<view class="" :style="{'color':item.color}">
					证件状态：{{item.check}}
				</view>
				<view class="caozuo" style="color:#65aa40 ;">
					<view class="shenhe" v-if="item.zt!='审核通过'">
						<u-button type="error" class="pass"  @click="nopass(item.bh)">不通过</u-button>
						<u-button type="success"  class="pass"  @click="pass(item.bh)">通过</u-button>
					</view>
					
					<br/>
				<view class="">
					<u-button class="detail" type="success" style="float: right;"  @click="seedetail(item.qydm)">查看详情</u-button>
				</view>
					
				</view>
				</view>
		</u-card>
		</view>	
		<u-back-top :scroll-top="scrollTop" :iconStyle="iconStyle"></u-back-top>
		<view class="load">
			<u-loadmore :status="status" />
		</view>`
		
	</view>
</template>

<script>
	import { api_base_url} from '../../config.js'
	export default {
		data() {
			return {
				baseList:[],
				token:'',
				status: 'loadmore',
				list: 15,
				page: 1,
				pageCount:1,
				keyword:'',
				scrollTop: 0,
				iconStyle: {
								fontSize: '32rpx',
								color: '#65aa40'
							},
			}
		},
		onPageScroll(e) {
				this.scrollTop = e.scrollTop;
			},
		onReachBottom() {
					if(this.page >= this.pageCount){
						this.status = 'nomore'; 
						return ;
					}
					this.status = 'loading';
					this.page = ++ this.page;
					this.getshenhe();
				},
		onLoad:function(){
			this.baseList=[]
			this.getshenhe()
		},
		onShow:function(){
			uni.showLoading({
			    title: '加载中'
			});
			this.keyword=''
			this.baseList=[]
			this.getshenhe()
		},
		methods: {
			seedetail(qydm){
				uni.navigateTo({
					url:'../detail/detail?qydm='+qydm,
				})
			},
			getshenhe(){
				let that = this
				const token = uni.getStorageSync('token')
				console.log(token)
				uni.request({
					url:api_base_url+'/Examined2',
					method:'POST',
					data:{
						token,
						page:that.page,
						list:that.list,
						qymc:that.keyword
					},
					success:function(res){
						
						if(that.keyword!=""){
							if(that.page==1){
								that.baseList=[]
							}
							
							that.baseList=that.baseList.concat(res.data.data.row);
							that.pageCount = res.data.data.pageCount;
						}else{
							that.baseList=that.baseList.concat(res.data.data.row);
							that.pageCount = res.data.data.pageCount;
						}
						
						console.log(that.baseList)
						for(var i=0;i<that.baseList.length;i++){
							// that.baseList.flag=res.data.data.row[i].flag
							if(that.baseList[i].business_license!==""&&that.baseList[i].card_x!==""&&that.baseList[i].card_y!==""){
								that.baseList[i].check="证件齐全"
							}else{
								that.baseList[i].check="证件不齐全"
							}
							if(that.baseList[i].flag===0||that.baseList[i].flag==="0"){
								that.baseList[i].zt= '待审核'
								that.baseList[i].color='#004ce6'
							}else if(that.baseList[i].flag===1||that.baseList[i].flag==="1"){
								that.baseList[i].zt= '审核通过'
								that.baseList[i].color='#65aa40'
							}else if(that.baseList[i].flag===2||that.baseList[i].flag==="2"){
								that.baseList[i].zt= '审核未通过'
								that.baseList[i].color='#ff0000'
							}else if(that.baseList[i].flag===3||that.baseList[i].flag==="3"){
								that.baseList[i].zt= '县级单位审核通过'
								that.baseList[i].color='#fa0000'
							}
							// console.log(that.baseList[i].flag,that.baseList[i].zt,that.baseList[i].qymc)
							}
						that.status = 'loadmore';
						uni.hideLoading();
					},fail:function(){
						uni.hideLoading();
						uni.showModal({
							title:'网络错误'
						})
					}
				})
			},
			// seedetail(bh){
			// 	console.log(bh)
			// 	uni.navigateTo({
			// 		url:'./detail?bh='+bh,
			// 	})
			// }
			pass(bh){
				uni.showLoading({
				    title: '加载中'
				});
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
							uni.hideLoading();
							uni.showToast({
								title:'审核成功',
								icon:"success"
							})
							that.page==1
							that.baseList=[]
							that.getshenhe()
							
						}
					},fail:function(){
						uni.hideLoading();
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
	.load{
		margin-bottom: 40upx;
	}
	.search{
		margin-top: 20upx;
		width: 80%;
		margin: 20upx auto;
	}
.sticky {
		width: 750rpx;
		height: 80rpx;
		background-color: #FFFFFF;
		color: #fff;
		padding: 24rpx;
	}
.caozuo{
	    height: 180upx;
		width: 100%;
}
.shenhe{
	height: 45upx;
	width: 100%;
	text-align: left;
	margin-bottom: 20upx;
	margin-top: 20upx;
	
}
.detail{
	margin-left: 80rpx;
	}
.pass{
	/* width: 60upx; */
	float: left;
	margin-left: 20upx;
}
</style>
