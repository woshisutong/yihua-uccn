<template>
	<div id="HomePage">
		<div id="header" class="container-fuild">
			<!-- 电脑导航 -->
			<div class="header-nav container hidden-xs">
				<!-- 导航logo -->
				<div class="header-nav-logo"><img src="@/assets/img/logo_black.png" /></div>
				<!-- 导航内容 -->
				<ul class="header-nav-wrapper">
					<li class="item" :class="{ active: active === index }" @click="scrollTo(index)" v-for="(item, index) in navList" :key="item.id">
						<a href="javascript:;">
							{{ item.title }}
							<i class="underline"></i>
						</a>
					</li>
				</ul>
			</div>

			<!-- 手机导航 -->
			<div class="header-nav container-fuild visible-xs df-ac-jc">
				<div style="height: 100%;" class="df-ac-jc"><img class="center-block" src="@/assets/img/logo_black.png" alt="logo" /></div>
			</div>
		</div>

		<div class="placeholder"></div>

		<div class="content">
			<!-- 首页 -->
			<div class="container-fuild item index">
				<div class="container">
					<div class="row">
						<div class="col-sm-6 col-md-6">
							<div class="txt1">一花数字藏品</div>
							<div class="txt2">新潮数字藏品 X 独家专属特权</div>
							<div class="df-ac botton">
								<img src="@/assets/img/android.png" alt="" @click="handleDownload('android')" />
								<img src="@/assets/img/ios.png" alt="" @click="handleDownload('ios')" style="margin-left: 30px;" />
							</div>
						</div>
						<div class="col-sm-6 col-md-6"><img src="@/assets/img/about_img.png" alt="" /></div>
					</div>
				</div>
			</div>

			<!-- 推荐系列 -->
			<div class="item wow slideInUp recommend">
				<div class="container customer-container" style="position: relative;">
					<p class="text-center title">推荐系列</p>
					<div style="position: relative;" class="hidden-xs">
						<div class="swiper-container customer-swiper">
							<div class="swiper-wrapper">
								<div class="swiper-slide customer-block" v-for="(item, index) in customerList" :key="index">
									<div class="customer-item">
										<img src="@/assets/img/banner1.png" alt="" class="customer-head" />
										<div class="customer-bottom df-ac-jc fd-c">
											<div class="customer-title text-center">{{ item.title }}</div>
											<div class="clearfix customer-author df-ac">
												<img src="@/assets/img/logo_hp.png" alt="" class="fl" />
												<p class="fl ellipsis1">多的地方反复胜多负少的1</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- 如果需要导航按钮 -->
						<div class="swiper-button-prev"></div>
						<div class="swiper-button-next"></div>
					</div>

					<!-- 移动端 -->
					<div class="swiper-container customer-swiper2 visible-xs">
						<div class="swiper-wrapper">
							<div class="swiper-slide customer-block" v-for="(item, index) in customerList" :key="index">
								<div class="customer-item">
									<img src="@/assets/img/banner1.png" alt="" class="customer-head" />
									<div class="customer-bottom df-ac-jc fd-c">
										<div class="customer-title text-center">{{ item.title }}</div>
										<div class="clearfix customer-author df-ac">
											<img src="@/assets/img/logo_hp.png" alt="" class="fl" />
											<p class="fl ellipsis1">多的地方反复胜多负少的1</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- Add Pagination -->
						<div class="swiper-pagination"></div>
					</div>

					<!-- 					<div class="visible-xs customer-block customer-swiper2" v-for="(item, index) in customerList" :key="index">
						<div class="col-xs-12 customer-item">
							<img src="@/assets/img/banner1.png" alt="" class="customer-head" />
							<div class="customer-bottom df-ac-jc fd-c">
								<div class="customer-title text-center ellipsis1">{{ item.title }}</div>
								<div class="clearfix customer-author df-ac">
									<img src="@/assets/img/logo_hp.png" alt="" class="fl" />
									<p class="fl ellipsis1">多的地方反复胜多负少的1</p>
								</div>
							</div>
						</div>
					</div> -->
				</div>
			</div>

			<!-- 藏品分类 -->
			<!-- <div id="whyChooseUs" class="conatiner-fuild item"> -->
			<div class="conatiner-fuild item collect wow slideInUp">
				<div class="container">
					<p class="customer-title text-center title">藏品分类</p>
					<div class="row">
						<div class="col-xs-12 col-sm-6 col-md-3 server-wrapper" v-for="(item, index) in collectList" :key="index">
							<div class="collect-item">
								<p :style="{ color: item.color }" class="collect-title text-center">{{ item.title }}</p>
								<p class="text-center">{{ item.content }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- 优势 -->
			<div class="conatiner-fuild item advantage wow slideInUp">
				<div class="container">
					<p class="customer-title text-center title" style="padding-bottom: 0;">数字藏品的优势</p>
					<p class="text-center subhead">为数字创意产业和实体经济赋能</p>
					<div class="row">
						<div class="col-xs-12 col-sm-6 col-md-4 server-wrapper advantage-item" v-for="(item, index) in advantageList" :key="index">
							<p class="text-center title1">{{ item.title }}</p>
							<p class="text-center title2">{{ item.title2 }}</p>
							<p class="text-center title3">{{ item.content }}</p>
						</div>
					</div>
				</div>
			</div>

			<!-- 关于我们 -->
			<div class="item"></div>
			<div class="conatiner-fuild aboutUs wow zoomIn">
				<div class="container">
					<div class="row">
						<div class="content">
							<p class="customer-title text-center title">关于我们</p>
							<div class="text-center">
								团队母公司芝兰玉树为国内领先的数字创意企业，旗下热门IP全网播放量超3000亿次，并拥有月活破千万的智能终端应用。
								「一花」APP致力于为国内文创、收藏爱好者打造更加沉浸、玩法多样的收藏体验，让藏家在拥有高品质数字藏品的同时 收获丰富的独家权益和实体周边，以及与顶尖创作者互动、参与创作的机会。
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- 创作者中心 底部-->
			<div class="conatiner-fuild item footer wow zoomIn">
				<div class="container">
					<div class="df-ac-jsb">
						<div class="txt1">关注我们</div>
						<div class="df-ac">
							<p>联系我们：yihua@beva.com</p>
							<p style="margin-left: 36px;">投诉举报：yihua_ts@beva.com</p>
						</div>
					</div>
					<div class="line"></div>
					<div class="text-center" style="color: #CDCCCE;">粤网文〔2018〕10987-3851号 | 粤ICP证：粤B2-20190722号  粤ICP备15029876号-2｜粤公网安备 44030602006179号 ｜© 2022-2024 一花YIHUA版权所有</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Swiper from 'swiper';
import { WOW } from 'wowjs';
import { test } from '@/api';
export default {
	name: 'HomePage',
	data() {
		return {
			active: 0, // 当前激活的导航索引
			navList: [
				{
					id: 0,
					title: '首页'
				},
				{
					id: 1,
					title: '推荐'
				},
				{
					id: 2,
					title: '藏品'
				},
				{
					id: 3,
					title: '优势'
				},
				{
					id: 4,
					title: '关于'
				},
				{
					id: 5,
					title: '创作者中心'
				}
			],
			customerList: [
				{
					title: '范德萨多撒大所大撒撒奥撒'
				},
				{
					title: '范德萨多撒大所大撒撒奥撒'
				},
				{
					title: '范德萨多撒大所大撒撒奥撒'
				},
				{
					title: '范德萨多撒大所大撒撒奥撒'
				}
			],
			// 藏品分类
			collectList: [
				{
					title: '数字文创',
					content: '文博、品牌、IP衍生数字文创产品，基于区块链技术限量发行，附带独家权益赋能。',
					color: '#55D6AA'
				},
				{
					title: '数字典藏',
					content: '国内外艺术大师、非遗传承人代表的数字映射版画，基于区块链技术限量发行。',
					color: '#77B7CD'
				},
				{
					title: '数字艺术',
					content: '知名海内外数字艺术家创作的数字原生艺术作品，通过区块链确权，具有艺术收藏价值。',
					color: '#8B90F5'
				},
				{
					title: '版权品',
					content: '知名海内外数字艺术家创作的数字原生艺术作品，通过区块链确权，具有艺术收藏价值。',
					color: '#B186FD'
				}
			],
			// 优势
			advantageList: [
				{
					title: '版权确权',
					title2: '防止盗版',
					content: '通过创新的区块链技术来实现数字作品的确权和溯源，生成唯一标识，防止盗版，保护原作者及购买者权益。'
				},
				{
					title: '应用场景',
					title2: '丰富多样',
					content: '在知识产权领域，互联网3.0产业中均有广泛应用前景，并能通过和实体消费或公益项目结合创造更大的社会价值。'
				},
				{
					title: '技术支撑',
					title2: '安全可靠',
					content: '基于云计算、区块链技术、智能合约及加密算法的应用，平台为每一次线上交互保驾护航。'
				}
			]
		};
	},
	mounted() {
		// 监听滚动事件
		window.addEventListener('scroll', this.onScroll, false);

		// console.log(this.$http.api.getActList,process.env.BASE_URL)
		// post(this.$http.api.getActList,{},"3303|ztylS4893fCKrWuXRv1Zu5WaP6LFc0xRpxbPAN0x").then(()=>{

		// })
		// http://yihua.weiyun.tinyint.cn/
		// "3303|ztylS4893fCKrWuXRv1Zu5WaP6LFc0xRpxbPAN0x"
		test().then(() => {});

		/* customer-swiper */
		new Swiper('.customer-swiper', {
			loop: true, // 循环模式选项
			slidesPerView: 3,
			//自动播放
			autoplay: {
				delay: 30000,
				stopOnLastSlide: false,
				disableOnInteraction: false
			},
			// 如果需要前进后退按钮
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			observer: true, //修改swiper自己或子元素时，自动初始化swiper
			observeParents: true //修改swiper的父元素时，自动初始化swiper
		});
		/* customer-swiper2 */
		new Swiper('.customer-swiper2', {
			pagination: {
				el: '.swiper-pagination'
			},
			//自动播放
			autoplay: {
				delay: 30000,
				stopOnLastSlide: false,
				disableOnInteraction: false
			}
		});

		/* wowjs动画 */
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: true,
			live: true
		});
		wow.init();
	},
	destroy() {
		// 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
		window.removeEventListener('scroll', this.onScroll);
	},
	methods: {
		handleDownload(type) {
			if (type === 'ios') {
				window.location.href = 'https://apps.apple.com/cn/app/itunes-u/id1589403919';
			} else {
				window.location.href = 'https://volctracer.com/s/m2p1ei3j';
			}
		},
		// 滚动监听器
		onScroll() {
			// 获取所有锚点元素
			const navContents = document.querySelectorAll('.content .item');
			// 所有锚点元素的 offsetTop
			const offsetTopArr = [];
			navContents.forEach(item => {
				offsetTopArr.push(item.offsetTop);
			});
			// 获取当前文档流的 scrollTop
			const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			// 定义当前点亮的导航下标
			let navIndex = 0;
			for (let n = 0; n < offsetTopArr.length; n++) {
				// 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
				// 那么此时导航索引就应该是n了
				// console.log(scrollTop);
				if (scrollTop >= offsetTopArr[n] - 100) {
					navIndex = n;
				}
			}
			this.active = navIndex;
		},
		// 跳转到指定索引的元素
		scrollTo(index) {
			if (index == 0) {
				let timer = setInterval(function() {
					var top = document.body.scrollTop || document.documentElement.scrollTop;
					var speed = top / 4;
					if (document.body.scrollTop != 0) {
						document.body.scrollTop -= speed;
					} else {
						document.documentElement.scrollTop -= speed;
					}
					if (top == 0) {
						clearInterval(timer);
					}
				}, 30);
				return;
			}
			// 获取目标的 offsetTop
			// css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
			const targetOffsetTop = document.querySelector(`.content .item:nth-child(${index + 1})`).offsetTop;
			// 获取当前 offsetTop
			let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			// 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
			const STEP = 50;
			// 判断是往下滑还是往上滑
			if (scrollTop > targetOffsetTop) {
				// 往上滑
				smoothUp();
			} else {
				// 往下滑
				smoothDown();
			}
			// 定义往下滑函数
			function smoothDown() {
				// 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
				// if (scrollTop < targetOffsetTop) {
				if (scrollTop < targetOffsetTop) {
					// 如果和目标相差距离大于等于 STEP 就跳 STEP
					// 否则直接跳到目标点，目标是为了防止跳过了。
					if (targetOffsetTop - scrollTop >= STEP) {
						scrollTop += STEP;
					} else {
						scrollTop = targetOffsetTop;
					}
					document.body.scrollTop = scrollTop;
					document.documentElement.scrollTop = scrollTop;
					// 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
					requestAnimationFrame(smoothDown);
				}
			}
			// 定义往上滑函数
			function smoothUp() {
				if (scrollTop > targetOffsetTop) {
					if (scrollTop - targetOffsetTop >= STEP) {
						scrollTop -= STEP;
					} else {
						scrollTop = targetOffsetTop;
					}
					document.body.scrollTop = scrollTop;
					document.documentElement.scrollTop = scrollTop;
					requestAnimationFrame(smoothUp);
				}
			}
		}
	}
};
</script>
<style scoped lang="scss">
p {
	margin: 0;
	padding: 0;
}
.title {
	width: max-content;
	font-size: 32px;
	color: #ffffff;
	background: linear-gradient(84deg, #93d0f6 0%, #9991fa 58.1787109375%, #c284ff 98.92578125%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin: auto;
	// padding-top: 30px;
	// padding-bottom: 50px;
}
/* 整体盒子 */
#HomePage {
	width: 100%;
}
/* 当导航被点亮后改变颜色 */
.header-nav-wrapper .active {
	color: #847ec3;
}
// 首页
.index {
	transition: all ease 0.6s;
	background: purple;
	padding: 40px 0;
	.row {
		margin: 0 20px;
	}
	.botton {
		img {
			width: 180px;
		}
	}
	.txt1 {
		font-size: 66px;
		font-weight: bold;
	}
	.txt2 {
		font-size: 30px;
		margin-bottom: 50px;
		margin-top: 10px;
	}
	// div {
	// 	height: 200px;
	// 	background: red;
	// }
}
// 藏品
.collect {
	transition: all ease 0.6s;
	.title {
		padding: 60px 0;
	}
	.collect-item {
		border: 1px solid red;
		padding: 28px 24px;
		box-sizing: border-box;
		margin-bottom: 15px;
		.collect-title {
			font-size: 24px;
			margin-bottom: 12px;
		}
	}
}

/* 推荐系列 */
.recommend {
	box-sizing: border-box;
	transition: all ease 0.6s;
	// .customer-container{
	// 	padding-left: 30px;
	// }
	.customer-swiper {
		width: 95%;
	}
	.title {
		padding: 60px 0 20px 0;
	}
	.swiper-button-prev {
		left: 0;
	}
	.swiper-button-next {
		right: 0;
	}
	.customer-block {
		padding: 15px;
		.customer-item {
			background: rgb(50, 41, 75);
			border-radius: 20px;
			overflow: hidden;
			.customer-head {
				width: 100%;
				border-radius: 20px;
			}
			.customer-bottom {
				padding: 16px 16px;
				.customer-author {
					margin-top: 10px;
					img {
						width: 20px;
						height: 20px;
						border-radius: 50%;
						margin-right: 10px;
					}
					p {
					}
				}
			}
		}
	}
}

// 优势
.advantage {
	transition: all ease 0.6s;
	.title {
		padding: 60px 0;
	}
	.subhead {
		color: #cdccce;
		font-size: 24px;
		padding-top: 10px;
	}
	.advantage-item {
		margin-top: 90px;
		.title1 {
			font-size: 24px;
		}
		.title2 {
			font-size: 24px;
		}
		.title3 {
			width: 76%;
			margin: auto;
			margin-top: 50px;
		}
	}
}

// 关于我们
.aboutUs {
	transition: all ease 0.6s;
	margin: 130px 0 130px 0;
	.title {
		padding-top: 60px;
		margin-bottom: 40px;
	}
	.content {
		font-size: 20px;
		padding: 0px 50px 40px 50px;
		background: linear-gradient(101deg, #1e5e62, #131c37, #1a0b2c);
		margin-left: 15px;
		width: calc(100% - 30px);
		line-height: 36px;
	}
}

.footer {
	padding-bottom: 100px;
	.line {
		width: 100%;
		height: 1px;
		background: #ffffff;
		opacity: 0.15;
		margin-top: 66px;
		margin-bottom: 30px;
	}
	.tit1 {
		padding-left: 60px;
	}
}
.placeholder {
	height: 60px;
}
/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
	#header {
		height: 60px !important;
	}
	.title {
		font-size: 28px;
	}
	.placeholder {
		height: 60px;
	}
	.collect {
		.title {
			padding: 30px 0;
		}
	}
	.advantage {
		.title {
			padding: 30px 0;
		}
		.subhead {
			font-size: 22px;
		}
		.advantage-item {
			margin-top: 40px;
		}
		.advantage-item {
			.title1,
			.title2 {
				font-size: 20px;
			}
			.title3 {
				margin-top: 20px;
			}
		}
	}
	.recommend {
		.customer-block {
			padding-bottom: 40px;
		}
	}
	.aboutUs {
		margin: 70px 0 70px 0;
		.content {
			padding: 30px 15px;
			font-size: 18px;
			line-height: inherit;
		}
	}
	.footer {
		.tit1 {
			padding-left: 0px;
		}
	}
}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
}

@media screen and (max-width: 997px) {
}

/* 导航栏 */
#header {
	position: fixed;
	top: 0;
	height: 60px;
	z-index: 999;
	width: 100%;
	background: #000;
}
#header .header-nav {
	height: 100%;
}
/* 导航栏logo */
#header .header-nav .header-nav-logo {
	width: 100px;
	height: 100%;
	float: left;
	position: relative;
}
/* 导航栏logo图片 */
#header .header-nav .header-nav-logo img {
	width: 95px;
	height: 45px;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
}
/* 导航栏 导航容器 */
#header .header-nav-fixed .header-nav-wrapper {
	line-height: 50px;
}
#header .header-nav .header-nav-wrapper {
	line-height: 60px;
	float: right;
	margin: 0;
	max-width: 800px;
}
/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper > li {
	float: left;
	margin: 0 15px;
	position: relative;
}
/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper > li > a {
	color: #fff;
	font-size: 15px;
	// font-weight: bold;
	padding: 15px 0;
	position: relative;
}
/* 导航栏 每个导航下面的 a 链接的下划线 */
#header .header-nav .header-nav-wrapper > li > a > i {
	display: block;
	position: absolute;
	bottom: -2px;
	left: 50%;
	width: 0;
	height: 2px;
	opacity: 0;
	transition: all 0.6s ease;
	background-color: #fff;
}
/* 导航栏 每个导航下面的 a 链接的右侧小三角 */
#header .header-nav .header-nav-wrapper > li > a > span {
	font-size: 12px;
	transition: transform ease 0.5s;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover {
	color: #fff;
	text-decoration: none;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover .underline {
	opacity: 1;
	width: 100%;
	left: 0;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover span {
	transform: rotate(180deg);
	text-decoration: none;
}
a {
	text-decoration: none !important;
}
/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#header .header-nav .header-nav-wrapper > li.active > a {
	color: #fff;
	font-weight: bold;
	text-decoration: none;
	border-bottom: 2px solid #fff;
}
/* 导航栏 每个导航下面的二级导航容器 */
#header .header-nav .header-nav-wrapper > li > dl {
	display: none;
	position: absolute;
	width: 168px;
	top: 80%;
	left: 0;
	z-index: 999999;
	box-shadow: 0 0 3px 1px #ccc;
	background: #fff;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 */
#header .header-nav .header-nav-wrapper > li > dl > dt {
	width: 100%;
	padding: 10px;
	border-bottom: 1px solid #ccc;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
#header .header-nav .header-nav-wrapper > li > dl > dt > a:hover {
	text-decoration: none;
}
/* 导航栏 滑上一级导航显示二级导航 */
#header .header-nav .header-nav-wrapper > li:hover dl {
	display: block;
}
#header .header-nav .header-nav-wrapper > li > dl > dt:hover {
	cursor: pointer;
	background: #ccc;
}

.swiper-pagination-bullet {
	background: gray !important;
	opacity: 1 !important;
}
.swiper-wrapper {
	// margin: 0 20px;
	// width: calc(100% - 40px);
}
</style>
