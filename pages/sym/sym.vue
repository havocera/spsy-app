<template>
	<view>
		<u-sticky bg-color="#65aa40">
					<!-- 只能有一个根元素 -->
					<view class="sticky">
						<u-button type="success" >最近打印记录</u-button>
					</view>
				</u-sticky>
		<view class="" v-for="(item,index) in data">
		<u-card>
			<view class="" slot="head"><u-icon name="tags-fill" color="#65aa40" size="32"></u-icon>{{item.sym}}</view>
				<view class="" slot="body">
					批次号{{item.pch}}
				
				</view>
				<view class="" slot="foot" style="color:#65aa40 ;">
					日期：{{item.date}}
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
				data:[],
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
					this.getsym();
				},
		onLoad:function(){
			uni.showLoading({
			    title: '加载中'
			});
			this.getsym();
		},
		methods: {
			getsym(){
				let that = this
				const token = uni.getStorageSync('token')
				console.log(token)
				uni.request({
					url:api_base_url+'/getHistory?token='+token+'&page='+that.page+'&list='+that.list,
					
					
					success:function(res){
						that.data=that.data.concat(res.data.data.row);
						that.pageCount = res.data.data.pageCount;
						console.log(that.baseList)
						that.status = 'loadmore';
						uni.hideLoading();
					},fail:function(){
						uni.showModal({
							title:'错误'
						})
					}
				})
			}
		}
	}
</script>

<style>

</style>
