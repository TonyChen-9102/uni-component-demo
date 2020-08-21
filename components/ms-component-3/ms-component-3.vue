<template>
	<view class="content">
		<text>{{name}}</text>
		<text>{{age}}</text>
		<text>{{flag}}</text>
		<text>{{ob.name}}</text>
		<text>{{arry[2]}}</text>
		<button @click="method">点我2</button>
	</view>
</template>

<script>
	export default {
		props:{
			name:{
				type:String,
				validator: function (value) {
				        // 这个值必须匹配下列字符串中的一个
				        return ['success', 'warning', 'danger'].indexOf(value) !== -1
				      }
			},
			flag:Boolean,
			ob:Object,
			arry:Array,
			age:{
				type:Number,
				default:0,
				required:true,
				validator:function(value){
					return value >=0;
				}
			},
			method:Function
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
