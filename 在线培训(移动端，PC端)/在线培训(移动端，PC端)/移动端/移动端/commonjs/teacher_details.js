var href=this.location.href;
var index=href.indexOf("=");
var id=href.substring(index+1);
new Vue({
    el:'.container',
    data:{
        teacherDetails:'',
        content:''
    },
    mounted() {
        var _this = this;
        axios.get('http://zhyd.oraclebay.com/services/teacherinfo.php',{params:{id:id}}).then(function (result) {
            _this.teacherDetails = result.data.info;
            _this.content = decodeURIComponent(result.data.info.content);
        });
    }
});