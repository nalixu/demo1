# 关于blog页面的相关知识点：
1、本地存储
[https://image.uisdc.com/wp-content/uploads/2013/09/color4.jpg] (sfsdf)
2、JSON（反）序列化
3、窗口打开（关闭）方式
4、url传参
5、对象与数组的区别
6、es6数组语法
7、实现弹性盒子（rem单位与px单位等比例100，例750px=7.5rem）
 <link rel="stylesheet" media="screen and (max-device-width:900px)" href=" " />
   <script>  (function () {
            var deviceWidth = document.documentElement.clientWidth;
            if (deviceWidth > 750) deviceWidth = 750;
            document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
        })()</script>
8、确认登录功能实现思路：
1）后端：从session中取uid，如果有uid存储在session中，说明用户已登录，如果没有说明未登录；返回用户是否登录的提示信息，如果用户已登录，查询相应的用户名一并返回，用于显示在前端页面上。
2）前端：在页头上，如果用户未登录，显示“登录”、“注销”的信息；如果用户已登录显示“welcome xxx”、“注销”的信息。在商品页面，点击加入购物车按钮时，如果用户未登录，跳转到登录页面；如果用户已登录，将商品添加到购物车。
实现注销原理：从session中将uid删除
9、搜索 https://www.imooc.com/video/262
10、git log 
git differ
链接：https://tinypng.com/ 图片压缩
https://unrealyan.github.io/psdetch/ 打开psd文件
http://www.kantu.com/ Ps在线编辑
http://www.wangeditor.com/ 编辑器
https://www.uisdc.com/23-blogs 博客网站参考
http://www.wangeditor.com/ 富文本编辑器
https://css-tricks.com/line-clampin/ 多行文字超出部分隐藏
