(function ($) {
    /**
     * 给$的原型添加tabs方法
     * @param {*} options.tabHeads      需要注册事件的页面选择器
     * @param {*} options.tabHeadsClass 触发事件的页面要添加的类
     * @param {*} options.tabBody       要显示的页面选择器
     * @param {*} options.tabBodyClass  索引一致要显示的页面要添加的类
     */
    $.fn.tabs = function (options) {
        console.log(this);
        var _this = this; //先把this存起来
        // 通过参数传递过来的页签选择器，获取到这些页签.给这些页签注册单击事件
        _this.find(options.tabHeads).on('click', function () {
            //    给当前鼠标点击的这个页签添加options，tabHeadsClass类，其他的兄弟页签移除这个类
            console.log(this);
            $(this).addClass(options.tabHeadsClass).siblings().removeClass(options.tabHeadsClass);

            //    获取当前点击的页签的索引
            var index = $(this).index();

            //    获取索引一致的页面，给他添加option.tabBodyClass。其他的兄弟页签移除这个类
            _this.find(options.tabBody).eq(index).addClass(options.tabBodyClass).siblings().removeClass(options.tabBodyClass);
        });
        // 返回值
        return _this;
    };
})(window.jQuery);