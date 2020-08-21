<template>
	<view class="content">
		<text>{{name}}</text>
		<text>{{age}}</text>
		<text>{{flag}}</text>
		<text>{{ob.name}}</text>
		<text>{{arry[2]}}</text>
		<button @click="method">点我</button>
	</view>
</template>

<script>
	export default {
		props:["name","age","flag","ob","arry","method"]
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
