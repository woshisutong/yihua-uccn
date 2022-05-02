<template>
	<div id="GoTop" @click="backTop()" v-if="backFlag"><span class="glyphicon glyphicon-chevron-up"></span></div>
</template>
<script>
export default {
	name: 'GoTop',
	data() {
		return {
			flag: false,
			backFlag: false
		};
	},
	mounted() {
		let that = this;
		window.addEventListener('scroll', that.scrollToTop);
	},
	destroyed() {
		let that = this;
		window.removeEventListener('scroll', that.scrollToTop);
	},
	methods: {
		//返回顶部
		backTop() {
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
		},
		// 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
		scrollToTop() {
			const that = this;
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			that.scrollTop = scrollTop;
			//判断滚动超出一定距离后在让返回顶部按钮出现
			if (that.scrollTop > 300) {
				that.backFlag = true;
			} else {
				that.backFlag = false;
			}
		}
	}
};
</script>
<style scoped>
#GoTop {
	width: 50px;
	height: 50px;
	position: fixed;
	right: 20px;
	bottom: 20px;
	z-index: 99999999;
	cursor: pointer;
}
#GoTop > span {
	display: block;
	width: 100%;
	height: 100%;
	color: rgb(8, 162, 233);
	font-size: 30px;
}
</style>
