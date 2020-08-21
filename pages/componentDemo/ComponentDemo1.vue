<template>
	<view class="content">
		<my-component></my-component>
	</view>
</template>

<script>
	import MyComponent from "../../myComponents/my-component/my-component.vue"
	export default {
		components:{
			"my-component":MyComponent
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
</style>

