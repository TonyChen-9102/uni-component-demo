<template>
	<view class="content">
	</view>
</template>

<script>
	export default {
		data:{
			a:1,
			b:1,
			c:1,
			d:1,
			father:{"name":"ckk"}
		},
		methods: {
			myWatch(val,oldVal){
				console.log('new: %s, old: %s', val, oldVal);
			},
		},
		watch:{
			a:function(val,oldVal){
				console.log('new: %s, old: %s', val, oldVal);
			},
			b:"myWatch",
			father:{
				handler:function(val,oldVal){
					console.log('new: %s, old: %s', val, oldVal);
				},
				//监听对象内容元素变化也会触发，数组可以不用这个
				deep:true
			},
			d:{
				handler:"myWatch",
				// 该回调将会在侦听开始之后被立即调用
				immediate: true
			},
			father.name:"myWatch"
			
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
