<template>
	<view class="content">
		<text>{{title}}</text>
		<text>{{num}}</text>
		<text>{{flag}}</text>
		<text>{{father.name}}</text>
		<text>{{toys[2]}}</text>
		<button @click="myClick">点击</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "hello",
				num:1,
				flag:true,
				father:{"age":24,"name":"tt"},
				toys:["11","22","33"]
			}
		},
		methods: {
			myClick(){
				console.log(this.$data);
				//$data.title == this.title
				console.log(this.$data.title);
				console.log(this.title);
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
