(function ($) {
    // 需要给jQuery的原型添加方法。
    $.fn.bgColor = function (bgColor) {
        console.log(this); //this是调用这个bgColor()方法的jQuery对象
        this.css('background', bgColor);

        // 返回调用这个方法的jQuery对象本身
        return this;
    };
})(jQuery);