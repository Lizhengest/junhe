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
				<div class="title">服务领域</div>
				<div class="en-title">SERVICE INTRODUCTION</div>
				<div class="icon-wrapper">
					<div class="icon" v-for="(item) of iconArr" :key="item.text">
						<i></i>
						<div class="text">{{item.text}}</div>
					</div>
					
				</div>
			</div>
			<div class="success-cases">
				<div class="title">成功案例</div>
				<div class="en-title">SUCCESS CASES</div>
				<div class="case-wrapper">
					<div class="case">
						<img src="" alt="">
						<div class="desc"></div>
					</div>
				</div>
			</div>
			<div class="company-intro">
				<img src="" alt="">
				<div class="desc">
					<div class="title">公司简介</div>
					<div class="en-title">COMPANY PROFILE</div>
					<div class="desc">
						 鋆合能源科技有限公司成立于2016年，是一家从事工程设计、技术研究及电力工程建设的科技技术型企业。提供可研立项、设计服务、项目管理咨询、工程总承包以及运维的电力产业服务。公司具有电力行业（火力发电（含核电站常规岛设计）、变电工程、送电工程、风力发电、水力发电（含抽水蓄能、潮汐）、新能源发电）六项乙级设计资质，咨询协会平台备案资格，注册资金5000万元。

公司自成立以来，以良好的工作作风、过硬的技术水平和工程设计管理经验，依靠每位员工的敬业精神和高度的工作责任感，严谨的纪律制度，保证了公司在设计、总包、施工、运维服务均未发生任何重大质量安全事故、违纪和企业信用声誉。 
公司依靠自身实力，在六年多的时间里，在湖北、广东、四川和新疆承接了一批电力工程规划、可行性研究和设计项目，参与500多项从10千伏至500千伏输变电工程设计，并在微网、光伏、风电、充电桩等新能源领域积累了丰富的实践经验。所完成的110kV车载式临时供电变电站、办公充电基站等多功能户内变电站；风、光、水、储多能互补智能微网，源网荷储、综合能源合同能源管理等项目。

					</div>
				</div>
			</div>
  	</div>
</template>

<script>
  import {swiper,swiperSlide} from 'vue-awesome-swiper'
const ban1 = require('../assets/img/banner1.png');
const ban2 = require('../assets/img/banner2.jpg');
const ban3 = require('../assets/img/banner3.png');

	export default {
		components:{
			swiper,swiperSlide
		},
		data(){
			return {
				ban1,
				successCases: [{
					img: '',
					desc: '武汉市供电公司大楼'
				},{
					img: '',
					desc: '武汉市第九医院'
				},{
					img: '',
					desc: '武汉天河机场交通中心'
				}],
				iconArr: [
					{text:'能效监测分析'},
					{text:'多能互补'},
					{text:'智能运维与节能'},
					{text:'电能质量分析治理'},
					{text:'风力发电设计'},
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
		
	}
</style>
