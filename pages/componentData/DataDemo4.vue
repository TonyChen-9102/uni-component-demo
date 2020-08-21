<template>
	<view class="content">
		<button @click="myClick1">click1</button>
		<button @click="myClick2">click2</button>
		<button @click="myClick3('say')">click3</button>
	</view>
</template>

<script>
	export default {
		methods: {
			myClick1:function(){
				console.log("111");
			},
			myClick2(){
				console.log("222");
			},
			myClick3(msg){
				console.log("333"+msg);
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
