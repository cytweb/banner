var app = getApp();
// 引入SDK核心类
// var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
// 实例化API核心类
var qqmapsdk;

Page({

	data: {
		imgUrls: [
			'https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_jpg/GVyeDObNlrGicSWOGR7nnhnTobfySPuBlII42rBRbKjB0F5ia4MwfAezicYQhaDjEDY9fZiahsmMFychOcQCh6S8wQ/640?wx_fmt=jpeg',
			'https://img-blog.csdn.net/20180828201852239?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTMzNjgzOTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70',
			'https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_jpg/GVyeDObNlrGicSWOGR7nnhnTobfySPuBlII42rBRbKjB0F5ia4MwfAezicYQhaDjEDY9fZiahsmMFychOcQCh6S8wQ/640?wx_fmt=jpeg',
			'https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_jpg/GVyeDObNlrGicSWOGR7nnhnTobfySPuBlII42rBRbKjB0F5ia4MwfAezicYQhaDjEDY9fZiahsmMFychOcQCh6S8wQ/640?wx_fmt=jpeg'
		],
		swiperIndex: 0 //这里不写第一次启动展示的时候会有问题
	},

	// 数据加载
	onLoad: function (options) {
		
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		this.mapCtx = wx.createMapContext('myMap')
	},
	bindchange(e) {
		this.setData({
			swiperIndex: e.detail.current
		})
	},
	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})