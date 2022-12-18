<template>
	<view>
		<u-sticky bg-color="#65aa40">
					<!-- 只能有一个根元素 -->
				<view class="sticky">
						<u-button type="success" @click="addbtrpbuy()">添加</u-button>
				</view>
				</u-sticky>
		<view class="" v-for="(item,index) in baseList">
		<u-card>
			<view class="" slot="head"><u-icon name="map-fill" color="#65aa40" size="32"></u-icon>{{item.trpmc}}</view>
				<view class="" slot="body">
				<view class="">
					生产企业名称：{{item.qymc}}
				</view>
				<u-button type="success" size="mini" style="float: right;" @click="edit(item.bh)">编辑</u-button>
				<view class="" style="color:#65aa40 ;">
					投入品生产商：{{item.nyscz}}
				</view>
				<view class="" style="color:#65aa40 ;">
					作物范围：{{item.nyzw}}
				</view>
				<view class="" style="color:#65aa40 ;">
					防治对象：{{item.nyfz}}
				</view>
				<view class="" style="color:#65aa40 ;">
					使用方法：{{item.nysyfa}}
				</view>
				<view class="" style="color:#65aa40 ;">
					农资质检：{{item.nyzj}}
				</view>
				<view class="" style="color:#65aa40 ;">
					采购数量：{{item.trpgg}}
				</view>
				<view class="" style="color:#65aa40 ;">
					经手人：{{item.jsr}}
				</view>
				<view class="" style="color:#65aa40 ;">
					采购来源：{{item.ly}}
				</view>
				<view class="" style="color:#65aa40 ;">
					采购日期：{{item.rq}}
				</view>
				</view>
		</u-card>
		</view>
		<u-loadmore :status="status" />
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
			}
		},
		onReachBottom() {
					if(this.page >= this.pageCount){
						this.status = 'nomore'; 
						return ;
					}
					this.status = 'loading';
					this.page = ++ this.page;
					this.gettrpbuy();
				},
		onLoad:function(){
			this.gettrpbuy()
		},
		onShow:function(){
			uni.showLoading({
			    title: '加载中'
			});
			this.gettrpbuy()
		},
		methods: {
			addbtrpbuy(){
				uni.navigateTo({
					url:'./addtrpbuy',
				})
			},
			gettrpbuy(){
				let that = this
				const token = uni.getStorageSync('token')
				console.log(token)
				uni.request({
					url:api_base_url+'InputspurchaseInfo',
					method:'POST',
					data:{
						token,
						page:that.page,
						list:that.list,
						query:''
					},
					success:function(res){
						that.baseList=that.baseList.concat(res.data.data.result);
						that.pageCount =Math.ceil(res.data.data.total/that.list) ;
						console.log(that.baseList)
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
			edit(bh){
				console.log(bh)
				uni.navigateTo({
					url:'./edittrpbuy?bh='+bh,
				})
			}
		}
	}
</script>

<style>
.sticky {
		width: 750rpx;
		height: 80rpx;
		background-color: #FFFFFF;
		color: #fff;
		padding: 24rpx;
	}
</style>
