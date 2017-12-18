var vm = null;
hui.ready(function(){
    hui.refresh('#refreshContainer', vm.refresh);
    hui.loadMore(vm.getMore)
});
// 搜索
document.getElementById('key')
    .addEventListener('keyup', function(e){
        if(e.keyCode == 13){
            var kwd = hui('#key').val();
            if(kwd.length < 2){
                hui.toast('关键字至少2个字符');
                return false;
            }
            vm.key = kwd;
            vm.refresh();
        }
    });
vm = new Vue({
    el:'#app',
    data:{
        course:'',
        page:1,
        pagesize:8,
        key:'',
        url:'http://zhyd.oraclebay.com/services/itemlist.php'
    },
    methods: {
        refresh:function(){
            var _this = this;
            hui.loading("加载中...");
            _this.page = 1;
            hui.postJSON(_this.url,
                {page:_this.page,pagesize:_this.pagesize,key:_this.key},
            function(res){
                console.log(res);
                hui.closeLoading();
                _this.course = res.info;
                vm.page=2;
                //结束刷新
                hui.endRefresh();
                //重置加载更多状态
                hui.resetLoadMore();
            },function(){
                hui.closeLoading();
                hui.upToast('连接服务器失败！');
                hui.endRefresh();
            });
        },
        getMore:function() {
            var _this = this;
            hui.postJSON(
                _this.url,
                {page:_this.page,pagesize:_this.pagesize,key:_this.key},
                function(res){
                    console.log(res.info.length);
                    //判断加载完毕
                    if(res.info.length == 0){
                        hui.endLoadMore(true, '已经到头了...');
                        return false;
                    }else {

                        for (var i = 0; i < res.info.length; i++) {
                            _this.course.push(res.info[i]);
                        }
                        vm.page++;
                        hui.endLoadMore();
                    }
                }
            );
        }
    }
});