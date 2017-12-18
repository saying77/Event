$(function () {
    $('.left_nav li').click(function () {
        var index = $(this).index();
        $(this).addClass('bgBtn').siblings().removeClass('bgBtn');
        $(".left_content_show li").eq(index).addClass('showPage').siblings().removeClass('showPage');
    });
    $('#code').qrcode({
        render:'canvas',
        width:150,
        height:150,
        text:'http://www.baidu.com'
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
        $('#code').find('canvas').hide();
        $('#code').append(img);//imagQrDiv表示你要插入的容器id
        
        
});
