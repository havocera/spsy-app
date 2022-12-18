<template>
	<view>
		
		<u-sticky bg-color="#65aa40">
					<!-- 只能有一个根元素 -->
					<view class="sticky">
						<u-button type="success" @click="addpch()">生成批次号</u-button>
					</view>
				</u-sticky>
				
		<view class="" v-for="(item,index) in baseList">
			
		<u-card>
			<view class="" slot="head"><u-icon name="tags-fill" color="#65aa40" size="32"></u-icon>{{item.pch}}</view>
				<view class="" slot="body">
					<view class="">
						产品名称：{{item.cpmc}}
					</view>
					<view class="">
						产品规格：{{item.cpgg}}
					</view>
					<view class="">
						产地：{{item.chandi}}
					</view>
						<view class="" style="color:#65aa40 ;">
							企业名称：{{item.qymc}}
						</view>
						
				<view class="" style="color:#65aa40 ;">
					日期：{{item.rq}}
				</view>
				<!-- <u-image width="100%" height="300rpx" :src="`http://www.aielab.net/ah/Uploads/`+qydm+`/`+item.picname"> -->
					<!-- <view slot="error" style="font-size: 24rpx;">暂无图片</view> -->
				</u-image>
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
				qydm:'',
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
					this.getbase();
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
			this.getbase()
		},
		methods: {
			getbase(){
				
				let that = this
				const qyinfo = uni.getStorageSync('qyinfo')
				that.qydm = qyinfo.qydm
				const token = uni.getStorageSync('token')
				console.log(token)
				uni.request({
					url:api_base_url+'ProductionInfo?token='+token+'&page='+that.page+'&list='+that.list+'&query=',
					success:function(res){
						that.baseList=that.baseList.concat(res.data.data.result);
						that.pageCount =Math.ceil(res.data.data.total/that.list) ;
						console.log(that.baseList,that.pageCount)
						console.log(that.baseList)
						that.status = 'loadmore';
						uni.hideLoading();
					},fail:function(){
						uni.hideLoading();
						uni.showModal({
							title:'网络错误加载失败'
						})
					}
				})
			},
			addpch(){
				uni.navigateTo({
					url:'../addpch/addpch',
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


