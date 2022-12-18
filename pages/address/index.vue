<template>
	<view>
		<view class="item" v-for="(res, index) in siteList" :key="res.id">
			<view class="top">
				<view class="name">{{ res.name }}</view>
				<view class="phone">{{ res.phone }}</view>
				<view class="tag">
					<text v-for="(item, index) in res.tag" :key="index" :class="{red:item.tagText=='默认'}">{{ item.tagText }}</text>
				</view>
			</view>
			<view class="bottom">
				{{ res.site}}
				<u-icon name="edit-pen" :size="40" color="#999999"></u-icon>
			</view>
		</view>
		<view class="addSite" >
			<u-button :ripple="true" :custom-style="customStyle" @click="toAddSite">
				<u-icon name="plus" color="#black" class="icon" :size="30"></u-icon>新建收货地址
			</u-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			siteList: [],
			customStyle: {
					color: 'rgb(16, 203, 132)'
				}
		};
	},
	onLoad() {
		this.getData();
	},
	methods: {
		getData() {
			this.siteList = [
				{
					id: 1,
					name: '蜡笔小新',
					phone: '183****5523',
					tag: [
						{
							tagText: '默认'
						},
						{
							tagText: '家'
						}
					],
					site: '埼玉县春日部市双叶町904'
				},
				{
					id: 2,
					name: '胡图图',
					phone: '183****5555',
					tag: [
						{
							tagText: '公司'
						}
					],
					site: '翻斗大街翻斗花园二号楼1001室'
				},
				{
					id: 3,
					name: '哆啦',
					phone: '153****5555',
					tag: [],
					site: '东京都练马区月见台芒原'
				}
			];
		},
		toAddSite(){
			console.log(123);
			uni.navigateTo({
			    url: "./addSite"
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.item {
	padding: 40rpx 20rpx;
	.top {
		display: flex;
		font-weight: bold;
		font-size: 34rpx;
		.phone {
			margin-left: 60rpx;
		}
		.tag {
			display: flex;
			font-weight: normal;
			align-items: center;
			text {
				display: block;
				width: 60rpx;
				height: 34rpx;
				line-height: 34rpx;
				color: #ffffff;
				font-size: 20rpx;
				border-radius: 6rpx;
				text-align: center;
				margin-left: 30rpx;
				background-color:rgb(49, 145, 253);
			}
			.red{
				background-color:red
			}
		}
	}
	.bottom {
		display: flex;
		margin-top: 20rpx;
		font-size: 28rpx;
		justify-content: space-between;
		color: #999999;
	}
}
.addSite {
	display: flex;
	justify-content: space-around;
	width: 600rpx;
	line-height: 100rpx;
	position: absolute;
	bottom: 30rpx;
	left: 80rpx;

	border-radius: 60rpx;
	font-size: 30rpx;
		.icon{
			margin-right: 8rpx;
		}
}
</style>
