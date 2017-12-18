var href=this.location.href;
var index=href.indexOf("=");
var id=href.substring(index+1);

let vm=new Vue({
	el:"#personal",
	data:{
		teach:'',
		content:''
	},
	mounted() {
		var _this = this;
		axios.get('http://zhyd.oraclebay.com/services/teacherinfo.php',{params:{
			id:id
		}}).then(function (result) {
			_this.teach= result.data.info;
			_this.content=decodeURIComponent(result.data.info.content);
            console.log(result.data.info);
		});
	}
});