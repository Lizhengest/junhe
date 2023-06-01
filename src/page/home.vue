<template>
	<div class="home-wrapper fillcontain">
		<el-container>
			<el-header class="header">
				<!-- <div class="logo"><a href="#">鋆合能源</a></div> -->
				<!-- <el-menu
					:default-active="activeIndex2"
					mode="horizontal"
				>
				
					<el-menu-item index="1">首页</el-menu-item>
					<el-menu-item index="2" >联系我们</el-menu-item>
				</el-menu> -->


				<div class="logo"><a href="#">鋆合能源</a></div>
					<div class="nav-pill">
						<router-link :to="{ name: 'content'}">首页</router-link>
						<router-link :to="{ name: 'contact'}">联系我们</router-link>
					</div>
			</el-header>
			<el-main>
				<section class="app-main">
					<transition name="fade" mode="out-in">
						<router-view></router-view>
					</transition>
				</section>
			</el-main>
			<el-footer>
				<div class="logo">
					<img src="" alt="">
				</div>
				<div class="slogan">
					同心筑梦 不断超越
				</div>
			</el-footer>
		</el-container>
	</div>
</template>

<script>


	export default {
	
		data(){
			return {
				
			}
		},
		mounted(){
		
		},
		methods: {
	
		}
	}
</script>

<style lang="less">
	@import '../style/mixin';
	.home-wrapper{
		//   color: rgb(51, 51, 51);
    // font-family: Helvetica, Arial, sans-serif;
		.header {
			display: flex;
			.el-menu-item {
				border-bottom: 0;
			}
		}
		.nav-pill {
			display: flex;
			a {
				height: 60px;
				padding: 0 14px;
				line-height: 60px;
				color: rgb(119, 119, 119);
				font-family: 'PingFang SC', "Microsoft YaHei";
			}
		}
	}
</style>
