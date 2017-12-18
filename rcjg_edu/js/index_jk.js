let vm=new Vue({
	el:"#course_curriculum",
	data:{
		content:'',
		teacher:''
	},
	mounted(){
		var _this=this;
		ajaxpost('http://zhyd.oraclebay.com/services/itemlist.php',12,function(result){
			_this.content=result.info;
			console.log(result.info);
		});
		ajaxpost('http://zhyd.oraclebay.com/services/teacherlist.php',10,function(res){
			_this.teacher=res.info;
			console.log(res.info);
		});
	}
});

//封装ajax调用函数
function ajaxpost(url,pagesize,callback){
	$.ajax({
		method:"POST",
		url:url,
		dataType:'json',
		async:false,
		data:{
			page:1,
			pagesize:pagesize
		},
		success:function(res){
			callback(res);
		}
	});
}
