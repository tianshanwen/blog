~function () {
    var effect = {
        Linear: function (t, b, c, d) {//执行Linear effect.Linear()
            return c * t / d + b
        }
    };
    //实现多方向的运行 curEle当前要运动的元素target当前动画目标位置，
    // 存取的是每一个方向的目标位置{left:xxx,top:xxx}
    // duration当前动画的总时间
    function move(curEle, target, duration, callBack) {
        //在每一次执行的方法之前首先把当前元素之前正在运行的动画结束掉
        window.clearInterval(curEle.timer);
        //根据target获取每一个方向的起始值begin和总距离change
        var begin = {}, change = {};
        for (var key in target) {
            if (target.hasOwnProperty(key)) {//我们自己加的共有的属性和方法通过for in我们可以比遍历出来
                //但是我们只想得到（我们自己设置中）私有的属性
                begin[key] = utils.css(curEle, key);
                change[key] = target[key] - begin[key]
            }
        }
        //实现多方向的运行动画
        var time = 0;
        curEle.timer = window.setInterval(function () {
            time += 10;
            //到达目标值了结束动画，让当前元素的样式等于目标样式值
            if (time >= duration) {
                utils.css(curEle, target);
                window.clearInterval(curEle.timer);
                //在动画结束的时候，如果把回调函数传递给我了，
                // 我就把这个函数执行，不仅执行，还让回调函数中的this变成当前要操作的元素
                //typeof callBack=="function"?callBack():null
                callBack && callBack.call(curEle);//牛
                return
            }
            // 没有到达目标值：分别的获取每一个方向的当前位置，给当前的元素设置样式即可
            for (var key in  target) {
                if (target.hasOwnProperty(key)) {
                    var curPos = effect.Linear(time, begin[key], change[key], duration);
                    utils.css(curEle, key, curPos)
                }
            }

        }, 10)
    }
    window.animate = move
}();
