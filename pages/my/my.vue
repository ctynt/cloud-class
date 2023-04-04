<template>
	<view>
		<view class="me bg-white flex">
			<image src="../../static/me.jpg" class="p-me ml-2 my-2"></image>
			<text class="flex-4 ml-2 mt-5">AAA建材王哥</text>
			<view class=" text-right mt-5">
				<text class="iconfont icon-right text-muted mr-2"></text>
			</view>
		   
		</view>
		
		<view class="flex bg-white">
			<view class="border-item" style="border-left: 0; border-right: 1rpx;">
				<view class="text-info mt-2">20</view>
				<view class="text-muted">经验值</view>
			</view>
			<view class="border-item">
				<view class="text-info mt-2">999</view>
				<view class="text-muted">魅力值</view>
			</view>
			<view class="border-item">
				<view class="text-info mt-2">6</view>
				<view class="text-muted">蓝豆</view>
			</view>
			<view class="border-item">
				<view class="text-info mt-2">0</view>
				<view class="text-muted">心意</view>
			</view>
		</view>
		
		<view class="mt-4 bg-white f-around border-bottom border-top">
				<view>
					<image src="../../static/my/kongjian.png" class="ml-3 mt-1 large"></image>
					<view class="mt-1">我的空间</view>
				</view>
				<view>
					<image src="../../static/my/shoucang.png" class="ml-3 mt-1 large"></image>
					<view class="mt-1">我的收藏</view>
				</view>
				<view>
					<image src="../../static/my/liwu.png" class="ml-3 mt-1 large"></image>
					<view class="mt-1">心意卡片</view>
				</view>
				<view>
					<image src="../../static/my/renwu.png"  class="ml-3 mt-1 large"></image>
					<view class="mt-1">任务中心</view>
				</view>
				<view>
					<image src="../../static/my/xiaoxi.png" class="ml-3 mt-1 large"></image>
					<view class="mt-1">系统消息</view>
				</view>
		</view>
		
		<view class="mt-4 bg-white border-bottom border-top flex">
			<view class="ml-3 my-3">
				我的勋章
			</view>
			<view class=" text-muted  flex-4 text-right mt-3">
				<text class="text-muted">快来获得第一枚勋章</text>
				<text class="iconfont icon-right mr-2 mt-3 flex-1 "></text>	
			</view>
			
		</view>
		
		<view class="mt-4 bg-white border-top flex">
			<view class="ml-3 my-3">
				文件暂存区
			</view>
			<view class=" text-muted text-right flex-4">
				<view class="iconfont icon-right mr-2 mt-3"></view>
			</view>
			
		</view>
		
		<view class=" bg-white border-top flex">
			<view class="ml-3 my-3">
				分享给朋友
			</view>
			<view class=" text-muted  flex-4 text-right mt-3">
				<text class="text-muted">累计分享成功0次</text>
				<text class="iconfont icon-right mr-2 mt-3 flex-1 "></text>	
			</view>
		</view>
		
		<view class=" bg-white border-top flex">
			<view class="ml-3 my-3">
				用户协议
			</view>
			<view class=" text-muted text-right flex-4">
				<view class="iconfont icon-right mr-2 mt-3"></view>
			</view>
		</view>
		
		<view class=" bg-white border-top flex">
			<view class="ml-3 my-3">
				隐私政策
			</view>
			<view class=" text-muted text-right flex-4">
				<view class="iconfont icon-right mr-2 mt-3"></view>
			</view>
		</view>
		<view class=" bg-white border-top border-bottom flex">
			<view class="ml-3 my-3">
				设置
			</view>
			<view class=" text-muted text-right flex-4">
				<view class="iconfont icon-right mr-2 mt-3"></view>
			</view>
		</view>
		
		<!-- 底部导航栏 -->
		<view class="navbar">
			<view class="navbar-item">
				<image src="../../static/tabbar/index.png" class="nav-icon"></image>
				<view class="name text-muted">班课</view>
			</view>
			<view class="navbar-item">
				<image src="../../static/tabbar/find.png" class="nav-icon"></image>
				<view class="name text-muted">发现</view>
			</view>
			<view class="navbar-item">
				<image src="../../static/tabbar/my-selected.png" class="nav-icon"></image>
				<view class="name text-info">我的</view>
			</view>
			
		</view>
		
	</view>
</template>

<script setup>
import {
	ref,
	reactive
} from 'vue'

import {
	onLoad,
	onReady
} from "@dcloudio/uni-app";



</script>

<style lang="scss" scoped>
	.p-me {
		width: 120rpx;
		height: 120rpx;
	}
	
	.border-item {
		height: 140rpx;
		display: block;
		flex: 4;
		border-style: solid;
		border-color: #ececec;
		width: 25%;
		border-right: 0;
		text-align: center;
	}
	
	.navbar {
	    display: flex;
	    position: fixed;
	    box-sizing: border-box;
	    bottom: 0;
	    width: 100%;
	    height: 3.2rem;
	    border-top: 1px solid #ddd;
	    z-index: 200;
	    background: #f8f8f8;
	    text-align: center;
	}
	/* 导航项目 */
	.navbar-item {
	    flex: 1;
	    color: #808080;
	}
	/* 导航图标 */
	.nav-icon {
	    padding: .3rem 0 .1rem;
	    width: 40rpx;
		height: 40rpx;
	}
	/* 导航名称 */
	.name {
	    display: block;
	    font-size: 22rpx;
	}
	
	.large {
		width: 80rpx;
		height: 80rpx;
	}
</style>