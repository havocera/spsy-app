<template>
	<view>
		<u-sticky bg-color="#65aa40">
					<!-- 只能有一个根元素 -->
					<view class="sticky">
						<u-button type="success" @click="addnszy()">添加农事作业信息</u-button>
					</view>
				</u-sticky>
		<view class="" v-for="(item,index) in baseList">
		<u-card>
			<view class="" slot="head"><u-icon name="map-fill" color="#65aa40" size="32"></u-icon>{{item.qymc}}</view>
				<view class="" slot="body">
					<view class="">
						产地名称：{{item.chandi}}
					</view>
					<view class="">
						农事作业：{{item.nszy}}
					</view>
					<view class="">
						投入品名称：{{item.trpmc}}
					</view>
					<view class="">
						作业人：{{item.zyr}}
					</view>
					<view class="">
						作用量：{{item.zyl}}
					</view>
					<u-button type="success" size="mini" style="float: right;" @click="edit(item.bh)">编辑</u-button>
					<view class="">
						日期：{{item.rq}}
					</view>
				</view>
		</u-card>
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
				text:'text',
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
					this.getnszy();
				},
		onLoad:function(){
			this.getnszy()
			this.getchandi()
		},
		onShow:function(){
			uni.showLoading({
			    title: '加载中'
			});
			this.getnszy()
		},
		methods: {
			addnszy(){
				uni.navigateTo({
					url:'./addnszy',
				})
			},
			// getchandi(){
			// 	let that = this;
			// 	const token = uni.getStorageSync('token');
			// 	uni.request({
			// 			url:api_base_url+'/getchandi?token='+token,
			// 			success:function(res){
			// 				console.log(res)
			// 				that.baselist.cdmc=res.data.data[index].text
			// 			},
			// 		})
			// 		uni.request({
			// 				url:api_base_url+'/getchanpin?token='+token,
			// 				success:function(res){
			// 					console.log(res)
			// 					that.productList=res.data.data
			// 				},
			// 			})
			// },
			getnszy(){
				let that = this
				const token = uni.getStorageSync('token')
				console.log(token)
				uni.request({
					url:api_base_url+'/FarmingoperationsInfo',
					method:'POST',
					data:{
						token,
						page:that.page,
						list:that.list
					},
					success:function(res){
						console.log(res)
						that.baseList=res.data.data.row;
						that.pageCount = res.data.data.pageCount;
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
					url:'./editnszy?bh='+bh,
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
