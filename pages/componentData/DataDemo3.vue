<template>
	<view class="content">
		<text>{{num}}</text>
		<text>{{myNum}}</text>
		<text>{{myNum2}}</text>
		<button @click="click">点我更新数据</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num:1
			}
		},
		computed:{
			myNum:function(){
				return this.num+1;
			},
			myNum2:{
				get:function(){
					return this.num-1;
				},
				set:function(value){
					this.num = value;
				}
			}
		},
		methods: {
			click(){
				this.myNum2 = 5;
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
