<template>
  	<div class="contact-wrapper fillcontain">
			<img :src="pic" alt="联系我们">
			<div class="page-title">联系我们</div>
			<div class="page-title page-en-title">CONTACT US</div>
			<div class="form-wrapper">
				<el-form  class="form"  label-position="right" label-width="80px" :model="formLabelAlign">
					<el-form-item label="电话">
						<span>13807117087(吴青)</span>
					</el-form-item>
					<el-form-item label="地址">
						<span>武汉市洪山区珞喻路189号武汉电力职业技术学院内</span>
					</el-form-item>
				</el-form>			
			</div>
  	</div>
</template>

<script>

	export default {
	    data(){
				return {
					formLabelAlign: {},
					pic: require('@/assets/img/contact.jpg'),
					dataArr: [{
						label: '',
						val: ''
					}, {
						label: '',
						val: ''
					}, {
						label: '',
						val: ''
					}]
				}
		},
		mounted(){
		
		},

		methods: {
	
		}
	}
</script>

<style lang="less" scoped>
	@import '../style/mixin';
	.contact-wrapper{
		position: relative;
		.form-wrapper {
			position: relative;
	
		}
		.form {
			// position: absolute;
			// top: 0;
			// left: 50%;
  		// transform: translateX(-50%);
		}
	
	}
</style>
