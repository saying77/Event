
var href=this.location.href;
var index=href.indexOf("=");
var id=href.substring(index+1);

// var url = '';
// console.log(url);
// $.ajax({
//     method:'get',
//     data:{
//         id:id
//     },
//     dataType:'json',
//     success:function (result){
//         url = result.info.qrcode;
//     }
// });


//增加图片预览
hui.imagePreview('.imagePrev');

new Vue({
    el:'#app',
    data:{
        details:'',
        content:'',
        des:''
    },
    mounted() {
        var _this = this;
        axios.get('http://zhyd.oraclebay.com/services/iteminfo.php',{params:{
            id:id
        }}).then(function (result) {
            _this.details = result.data.info;
            _this.content = decodeURIComponent(result.data.info.content);
            _this.des = decodeURIComponent(result.data.info.des);
            console.log(result.data);
            console.log(decodeURIComponent(result.data.info.des));
            console.log(decodeURIComponent(result.data.info.content));
            // console.log(result.data.info.qrcode);
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
            hui.accordion(true,true);
            hui('.hui-accordion').click(function () {
                var index = $(this).index();
                // console.log(index);
                // $(this).eq(index).addClass('add').siblings().remove('add');
            });
        });
    }
});