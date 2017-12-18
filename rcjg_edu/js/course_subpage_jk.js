//训练接口解析
var href=this.location.href;
var index=href.indexOf("=");
var id=href.substring(index+1);

new Vue({
	el:'#app',
	data:{
		coco:'',
		content:'',
        des:''
	},
	mounted() {
		var _this = this;
		axios.get('http://zhyd.oraclebay.com/services/iteminfo.php',{params:{
			id:id
		}}).then(function (result) {
			_this.coco = result.data.info;
		//decode解析完之后页面再用v-html解析一遍
			_this.content=decodeURIComponent(result.data.info.content);
            _this.des=decodeURIComponent(result.data.info.des);
            console.log(_this.course)
            console.log(_this.coco.courselist)
			//动态传参二维码
            $('#code').qrcode({
                render:'canvas',
                width:120,
                height:120,
                text:result.data.info.qrcode
            });
            //从 canvas 提取图片 image
            function convertCanvasToImage(canvas) {
                //新Image对象，可以理解为DOM
                var image = new Image();
                // canvas.toDataURL 返回的是一串Base64编码的URL，当然,浏览器自己肯定支持
                // 指定格式 PNG
                image.src = canvas.toDataURL("image/png");
                return image;
                }
                //获取网页中的canvas对象
                var mycanvas1=document.getElementsByTagName('canvas')[0];
                //将转换后的img标签插入到html中
                var img=convertCanvasToImage(mycanvas1);
                // $('#code').find('canvas').hide();
                $('#code').html(img);//imagQrDiv表示你要插入的容器id


            // 二维码结束
		});
	}
});
   
