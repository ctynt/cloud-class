<template>
	<view>
		<!-- 自定义状态栏 -->
		<uni-status-bar></uni-status-bar>

		<!-- 条件编译-导航栏 -->
		// #ifdef APP-PLUS
		<view class="f-between pb-1 bg-light" id="nav-bar" :style="{ width: screenWidth + 'px', height: navBarHeight + 'px' }">
			<view>
				<text class="text-info font-weight-bold ml-1 label">我创建的</text>
				<text class="text-dark font-weight-bold mx-2">我加入的</text>
				<text class="text-dark font-weight-bold ">我共建的</text>
			</view>
			<view class="text-info">
				<text class="iconfont-lg icon-add"></text>
				<text class="iconfont-lg icon-scan mx-2"></text>
			</view>
			//#endif
		</view>

		//#ifdef MP-WEIXIN
		<view class="f-start pb-1 bg-light" id="nav-bar"
			:style="{ width: (screenWidth - buttonWidth) + 'px', height: navBarHeight + 'px' }">
			<view>
				<text class="text-info font-weight-bold ml-1 label">我创建的</text>
				<text class="text-dark font-weight-bold mx-2">我加入的</text>
				<text class="text-dark font-weight-bold">我共建的</text>
			</view>
			<view class="text-info">
				<text class="iconfont-lg icon-add"></text>
				<text class="iconfont-lg icon-more mx-2"></text>
			</view>
		</view>
		
		//#endif

		<!-- 搜索框 -->
		<view class="flex my-2 px-2 ">
			<view class="position-relative border flex-5">
				<view class="search-icon text-light-muted mt-1 ml-1">
					<text class="iconfont icon-search"></text>
				</view>
				<input type="text" placeholder="搜索" class="font-md search-box flex-1">
			</view>
			<text class="flex-1 text-info font-weight-bold f-center">调序</text>
		</view>
		
		<!-- 底部导航栏 -->
		<view class="navbar">
			<view class="navbar-item">
				<image src="../../static/tabbar/index-selected.png" class="nav-icon"></image>
				<view class="name text-info">班课</view>
			</view>
			<view class="navbar-item">
				<image src="../../static/tabbar/find.png" class="nav-icon"></image>
				<view class="name text-muted">发现</view>
			</view>
			<view class="navbar-item">
				<image src="../../static/tabbar/my.png" class="nav-icon"></image>
				<view class="name text-muted">我的</view>
			</view>
			
		</view>

		<!-- 主体部分 -->
		<view v-for="(course, index) in courses" :key="course.courseId" :index="index" class="border-bottom bg-white mb-2">
			<view class="text-dark h4 font-weight-bold p-2">
				{{ course.courseName }}
			</view>

			<view class="flex px-2">
				
				<view class="flex-1">
					<image :src="course.courseCover" class="thumbnail"></image>
				</view>
				
				<view class="flex-4 ml-2">
					<view>
						<text>{{course.courseClass}}</text>
					</view>
					
					<view class="mt-1 font-sm">
						<text class="text-muted mr-2">{{course.semester}}</text>
						<text class="text-info">{{course.courseNo}}</text>
					</view>
					
				</view>
				
				<view class="flex-1 text-right">
					<text class="iconfont icon-right text-muted"></text>
				</view>
				
			</view>
			
			

			<view class="p-2 f-around">
				<view>
					<view class="iconfont icon-selected"></view>
					<view class="font-sm text-muted mt-1">签到</view>
				</view>
				<view>
					<view class="iconfont icon-pepole"></view>
					<view class="font-sm text-muted mt-1">课堂</view>
				</view>
				<view>
					<view class="iconfont icon-fillin"></view>
					<view class="font-sm text-muted mt-1">课件</view>
				</view>
				<view>
					<view class="iconfont icon-gift"></view>
					<view class="font-sm text-muted mt-1">活动</view>
				</view>
				<view>
					<view class="iconfont icon-voice text-info"></view>
					<view class="font-sm text-muted mt-1">语音</view>
				</view>
			</view>
	
		</view>
		<view class="my-5">""</view>
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

// import{
// 	onLaunch,onShow,onHide
// }from"../../App.vue";
const courses = reactive([{
	courseId: 1,
	courseName:"后端工程开发",
	courseClass: "软件2242 Web2班",
	courseNo: "2942577",
	courseCover: "static/images/SpringBoot.png",
	semester: "2022-2-23-2",
	finished: false,
	show: false,
},
{
	courseId: 2,
	courseName:"前端工程开发",
	courseClass: "软件2242 Web2班",
	courseNo: "9488275",
	courseCover: "static/images/Vue.png",
	semester: "2022-2-23-2",
	finished: false,
	show: false,
},
{
	courseId: 3,
	courseName:"Web工程开发",
	courseClass: "软件2242 Web2班",
	courseNo: "8175074",
	courseCover: "static/images/Web.png",
	semester: "2022-2-23-2",
	finished: false,
	show: false,
},
{
	courseId: 4,
	courseName:"Java程序设计",
	courseClass: "软件2242 Web2班",
	courseNo: "2942577",
	courseCover: "static/images/Java.jpg",
	semester: "2022-2-23-2",
	finished: false,
	show: false,
}
])

let navBarHeight = ref(Number) //导航栏高度
let screenWidth = ref(Number) //设备屏幕宽度
let buttonWidth = ref(Number) //小程序胶囊宽度

// #ifdef APP-PLUS
onReady(() => {
	console.log('APP 页面初始化')
	screenWidth = uni.getSystemInfoSync().screenWidth
	console.log('屏幕宽度' + screenWidth)
	let info = uni.createSelectorQuery().select('#nav-bar')
	info
		.boundingClientRect((data) => {
			console.log('导航高度' + data.height)
			navBarHeight = data.height + 40
		})
		.exec()
});

// #endif

// #ifdef MP-WEIXIN
onLoad(() => {
	console.log('小程序页面初始化')
	screenWidth = wx.getSystemInfoSync().screenWidth
	console.log("屏幕宽度" + screenWidth)
	buttonWidth = wx.getMenuButtonBoundingClientRect().width
	console.log("胶囊宽度" + buttonWidth)
	let info = uni.createSelectorQuery().select('#nav-bar')
	info
		.boundingClientRect((data) => {
			console.log("导航高度" + data.height)
			navBarHeight = data.height
		})
		.exec()
});
	// #endif
</script>

<style lang="scss" scoped>
.label {
	position: relative;
}

.label::after {
	content: '';
	position: absolute;
	top: 55rpx;
	left: 40rpx;
	height: 6rpx;
	width: 55rpx;
	background-color: var(--info);
}

.search-icon {
	width: 70rpx;
	height: 70rpx;
	position: absolute;
	top: 0;
	left: 0;
}

.search-box {
	height: 70rpx;
	padding-left: 70rpx;
	background-color: var(--bgColor);
	border-radius: var(--radius);
}

.thumbnail {
	width: 110px;
	height: 110rpx;
	border-radius: var(--radius);
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
</style>