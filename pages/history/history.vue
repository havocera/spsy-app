<template>
	<view>
		<u-sticky bg-color="#65aa40">
					<!-- 只能有一个根元素 -->
					<view class="sticky">
						<u-button type="success" @click="addbase()">添加产地</u-button>
					</view>
				</u-sticky>
		<view class="" v-for="(item,index) in baseList">
		<u-card>
			<view class="" slot="head"><u-icon name="map-fill" color="#65aa40" size="32"></u-icon>{{item.chandi}}</view>
				<view class="" slot="body">
					<view class="">
						用途：{{item.yt}}
					</view>
						<view class="" style="color:#65aa40 ;">
							经度：{{item.lng}}
						</view>
						<u-button type="success" size="mini" style="float: right;" @click="edit(item.bh)">编辑</u-button>
				<view class="" style="color:#65aa40 ;">
					纬度：{{item.lng}}
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
					}else{
						console.log("dddd")
						this.status = 'loading';
						this.page = ++ this.page;
						this.getbase();
					} 
					
				},
		onLoad:function(){
			uni.getStorage({							    key: 'token',							    success: function (res) {									console.log(res)									_this.token=res.data;									/* uni.request({									    url: api_base_url +'/getLog',									    data:{											token:_this.token,										},									    success: (data) => {											console.log(data.data)									        if (data.data.code==0) {									            console.log(data.data.data);									         _this.userList=data.data.data;									        }									    },									    fail: (data, code) => {									        console.log('fail' + JSON.stringify(data));									    }									}) */									},									fail(res) {										console.log(res)										uni.reLaunch({																																url:'../register/register',										})									}									});
			uni.showLoading({
			    title: '加载中'
			});
			// this.getbase()
		},
		onShow:function(){
			uni.showLoading({
			    title: '加载中'
			});
			this.baseList=[]
			this.getbase()
		},
		methods: {
			addbase(){
				uni.navigateTo({
					url:'../addbase/addbase',
				})
			},
			getbase(){
				let that = this
				const token = uni.getStorageSync('token')
				console.log(token)
				uni.request({
					url:api_base_url+'PlaceInfo?token='+token+'&page='+that.page+'&list='+that.list+'&query=',
					success:function(res){
						that.baseList=that.baseList.concat(res.data.data.result);
						that.pageCount =Math.ceil(res.data.data.total/that.list) ;
						console.log(that.baseList,that.pageCount)
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
					url:'../addbase/addbase?bh='+bh,
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
