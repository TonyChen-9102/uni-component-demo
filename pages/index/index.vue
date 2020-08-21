<template>
	<view class="content">
		<text class="mytesxt">组件注册与使用</text>
		<button @click="open1">局部引用</button>
		<button @click="open2">普通全局引用</button>
		<button @click="open3">全局引用-easycom</button>
		<button @click="open4">全局引用-插件</button>
		<text class="mytesxt">组件数据选项</text>
		<button @click="open5">组件数据选项-data</button>
		<button @click="open6">组件数据选项props</button>
		<button @click="open7">组件数据选项computed</button>
		<button @click="open8">组件数据选项methods</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			open1() {
				uni.navigateTo({
					url: "../componentDemo/ComponentDemo1",
				});
			},
			open2() {
				uni.navigateTo({
					url: "../componentDemo/ComponentDemo2",
				});
			},
			open3() {
				uni.navigateTo({
					url: "../componentDemo/ComponentDemo3",
				});
			},
			open4() {
				uni.navigateTo({
					url: "../componentDemo/ComponentDemo4",
				});
			},
			open5() {
				uni.navigateTo({
					url: "../componentData/DataDemo1",
				});
			},
			open6() {
				uni.navigateTo({
					url: "../componentData/DataDemo2",
				});
			},
			open7() {
				uni.navigateTo({
					url: "../componentData/DataDemo3",
				});
			},
			open8() {
				uni.navigateTo({
					url: "../componentData/DataDemo4",
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.mytesxt {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #F0AD4E;
	}
</style>
