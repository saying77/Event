//训练接口解析
let vm = new Vue({
  el: '.card_list',
  data: {
    course:''
  },
  mounted() {
	var _this = this;
				$.ajax({
					method:'POST',
					data:{
						page:1,
						pagesize:16
					},
					dataType:'json',
					url:'http://zhyd.oraclebay.com/services/itemlist.php',
					async:false,
					success:function (result) {
						_this.course = result.info;
					}
				})
}				
});   