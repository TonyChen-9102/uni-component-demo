<template>
	<view class="content">
		<ms-component-2 name="successs" :age="age" :flag="flag" :ob="father" :arry=toys :method="myMethos"></ms-component-2>
		<ms-component-3 name="success" :age="age" :flag="flag" :ob="father" :arry=toys :method="myMethos"></ms-component-3>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag:true,
				father:{"age":24,"name":"tt"},
				toys:["11","22","33"],
				age:1
			}
		},
		methods: {
			myMethos(){
				console.log("myMethos click")
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
