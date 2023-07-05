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


				<div class="logo">
					<img :src="logo"/>
					<span style="padding-left: 10px">鋆合能源</span>
				</div>
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
				<div class="footer">
					<div class="slogan">
					  Copyright © 鋆合能源有限公司 
					</div>
				</div>
				
			</el-footer>
		</el-container>
	</div>
</template>

<script>


	export default {
	
		data(){
			return {
				logo: require('../assets/img/logo.jpg'),
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
		
		.el-main, .el-footer {
			padding: 0;
		}
		//   color: rgb(51, 51, 51);
    // font-family: Helvetica, Arial, sans-serif;
		.header {
			height: 100px !important;
			display: flex;
			align-items: center;
			.el-menu-item {
				border-bottom: 0;
			}
			.logo {
				display: flex;
    		align-items: center;
				font-size: 28px;
				padding-right: 22px;
				img {
					height: 60px;
				}
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
		.footer {
			background: #000;
			height: 125px;
			background: #000;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.slogan {
			font-size: 13px;
			color: rgb(153, 153, 153);
		}
	}
</style>
