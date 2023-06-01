<template>
  	<div class="login_page fillcontain">
  	</div>
</template>

<script>
	import {mapActions, mapState} from 'vuex'

	export default {
	    data(){
			return {
			}
		},
		mounted(){
		
		},
		computed: {
			...mapState(['adminInfo']),
		},
		methods: {
	
		}
	}
</script>

<style lang="less" scoped>
	@import '../style/mixin';
	.login_page{
		background-color: #324057;
	}
</style>
