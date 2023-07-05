<template>
  	<div class="content-wrapper fillcontain">
			<div class="banner">
					<img :src="ban1"/>
				<!-- <swiper :options="swiperOption" class="banner-swiper">
					<swiper-slide class="slide" v-for="banner in banners" :key="banner.id">
						<img :src="banner.imageUrl"/>
					</swiper-slide>
				</swiper> -->
			</div>
			<div class="service-wrapper">
				<div class="page-title">服务领域</div>
				<div class="page-title page-en-title">SERVICE INTRODUCTION</div>
				<el-carousel indicator-position="outside">
					<el-carousel-item v-for="(item, index) in iconArr" :key="index">
						<img :src="item.src" :alt="item.text">
					</el-carousel-item>
				</el-carousel>
			</div>
		
			<div class="page-split"></div>
			<!--  -->
			<div class="company-wrapp" 	:style="{backgroundImage: `url(${companyImg})`}">
				<div class="company-intro"	>	</div>
				<div class="desc ctt">
					<div class="top">
						鋆合能源科技提供可研立项、设计服务、项目管理咨询、工程总承包以及运维的电力产业服务
					</div>
					<div class="desc">
					公司具有电力行业（火力发电（含核电站常规岛设计）、变电工程、送电工程、风力发电、水力发电（含抽水蓄能、潮汐）、新能源发电）六项乙级设计资质，咨询协会平台备案资格，注册资金5000万元。

公司自成立以来，以良好的工作作风、过硬的技术水平和工程设计管理经验，依靠每位员工的敬业精神和高度的工作责任感，严谨的纪律制度，保证了公司在设计、总包、施工、运维服务均未发生任何重大质量安全事故、违纪和企业信用声誉。 
公司依靠自身实力，在六年多的时间里，在湖北、广东、四川和新疆承接了一批电力工程规划、可行性研究和设计项目，参与500多项从10千伏至500千伏输变电工程设计，并在微网、光伏、风电、充电桩等新能源领域积累了丰富的实践经验。所完成的110kV车载式临时供电变电站、办公充电基站等多功能户内变电站；风、光、水、储多能互补智能微网，源网荷储、综合能源合同能源管理等项目。

					</div>
				</div>
		
			</div>
			<div class="page-split"></div>
			<div class="success-cases">
				<div class="page-title">成功案例</div>
				<div class="page-title page-en-title">SUCCESS CASES</div>
				<div class="case-wrapper">
					<div class="case" v-for="(item, index) of successCases" :key="index">
						<img :src="item.img" :alt="item.desc">
						<div class="desc">{{item.desc}}</div>
					</div>
				</div>
			</div>
			<div class="page-split"></div>
			
  	</div>
</template>

<script>
  import {swiper,swiperSlide} from 'vue-awesome-swiper'


const ban1 = require('@/assets/img/banner1.png');
const ban2 = require('@/assets/img/banner2.jpg');
const ban3 = require('@/assets/img/banner3.png');

	export default {
		components:{
			swiper,swiperSlide
		},
		data(){
			return {
				companyImg: require('@/assets/img/home02.jpg'),
				ban1,
				
				successCases: [{
					img: require('@/assets/img/success/suc1.png'),
					desc: '武汉市供电公司大楼'
				},{
					img: require('@/assets/img/success/suc2.png'),
					desc: '武汉市第九医院'
				},{
					img: require('@/assets/img/success/suc3.png'),
					desc: '武汉天河机场交通中心'
				}],
				iconArr: [
					{text:'能效监测分析',src: require('@/assets/img/swiper/lun1-1.png')},
					{text:'智能运维与节能',src: require('@/assets/img/swiper/lun2-1.png')},
					{text:'电能质量分析治理',src: require('@/assets/img/swiper/lun3-1.png')},
					{text:'风力发电设计',src: require('@/assets/img/swiper/lun4.jpg')},
					{text:'光伏发电及光伏储能发电站勘察设计'},
					{text:'输变电专业勘察设计'},
					{text:'电力配网建设及增容改造设计'},
					{text:'电力迁改勘察设计'},
					{text:'电动车充电站及光储充电站设计及建造'},
					{text:'抽水蓄能电站勘察设计'},						
				],
				banners: [{
					imageUrl: ban1
				}, {	imageUrl: ban1}, {	imageUrl: ban1}],
				swiperOption:{
						autoplay:3000,
						autoHeight:true,
						// loop:true,
				}
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
	.content-wrapper{
	
		.banner {
			height: 500px;
			margin-bottom: 16px;
			img {
				width: 100%;
        height: 100%;
        object-fit: cover;
			}
		}
		
		 .banner-swiper{
       height: 500px;
       color:#ffffff;
				.slide img{
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
    }

		.service-wrapper {
			margin-bottom: 16px;
		}
		.company-wrapp {
			height: 420px;
			width: 100%;
			background-size: 120%;
			background-position: 0% 58%;
			position: relative;
			.top {
				color: rgb(255, 255, 255);
				font-size: 4.3vh;
				font-weight: 500;
				letter-spacing: 0.075em;
				font-family: "PingFang SC" !important;
				text-align: center;
				padding-bottom: 36px;
			}
		
			.desc, .top {
				color: #fff;
				z-index: 999;
				font-size: 4vh;
				font-weight: 500;
				letter-spacing: 0.075em;
				font-family: "PingFang SC" !important;
				text-align: center;
				.desc {
					font-size: 1.5vh;
					font-weight: 200;
				}
			}
			.company-intro {
				height: 100%;
				opacity: 0.5;
				background-color: #475669;
				position: absolute;
				bottom: 0px;
				right: 0px;
				top: 0px;
				left: 0px;
				z-index: 10;
			
			}
		}
		

		.success-cases {
			.case-wrapper {
				display: flex;
				justify-content: space-around;
				.case {
				
					img {
						height: 200px;
						cursor: pointer;
						&:hover {
							-webkit-transform: scale(1.05);
							transition: 0.5s;
						}
					}
					.desc {
						font-size: 15px;
						color: #666;
						line-height: 30px;
						margin: 0 auto;
						text-align: center;
						padding-bottom: 10px;
					
					}
				}
			
			}
		}

		.service-wrapper {
			.el-carousel__item h3 {
				color: #475669;
				font-size: 18px;
				opacity: 0.75;
				line-height: 300px;
				margin: 0;
			}
			
			.el-carousel__item:nth-child(2n) {
				background-color: #99a9bf;
			}
			
			.el-carousel__item:nth-child(2n+1) {
				background-color: #d3dce6;
			}
		}
		
	}
</style>
