
small1();

function small1() {
    window.onload = function () {
        tp();
        tp1();
        tp2();
        tp3();
        tp4();
   }
    function tp(){
        var oBox = document.getElementById('box');
        var oImgWrap = oBox.getElementsByTagName('div')[0];
        var aDiv = oImgWrap.getElementsByTagName('div');
        var aImg = oImgWrap.getElementsByTagName('img');
        var oUl = oBox.getElementsByTagName('ul')[0];
        var aLi = oUl.getElementsByTagName('li');
        var oBtnLeft = oBox.getElementsByTagName('a')[0];
        var oBtnRight = oBox.getElementsByTagName('a')[1];

        //4.�Զ�����
        var step = 0;
        clearInterval(autoTimer)
        var autoTimer = setInterval(autoMove, 2000);

        function autoMove() {
            if (step >= aDiv.length - 1) {
                step = -1;
            }
            step++;
            setBanner();
        }

        function setBanner() {
            for (var i = 0; i < aDiv.length; i++) {
                var curDiv = aDiv[i];
                if (i == step) {
                    //��ĳ��ͼƬ����������step��ʱ������ͼƬ��������Ҫ��ʾ��ͼƬ�������Ĳ㼶Ϊ1��ͬʱ������Ԫ�صĲ㼶Ϊ0
                    utils.css(curDiv, 'zIndex', 1);
                    //�ò㼶Ϊ1�����Ԫ�أ�͸���ȴ�0-1���˶������������ֵ�Ԫ��͸����Ϊ0��
                    zhufengAnimate(curDiv, {opacity: 1}, 600, function () {
                        var siblings = utils.siblings(this);
                        for (var i = 0; i < siblings.length; i++) {
                            utils.css(siblings[i], 'opacity', 0);
                        }
                    });
                    continue;
                }
                utils.css(curDiv, 'zIndex', 0)//����Ԫ�ز㼶Ϊ0��
            }
            bannerTip();
        }

        //5.�����Զ�����
        function bannerTip() {
            for (var i = 0; i < aLi.length; i++) {
                var curLi = aLi[i];
                i == step ? utils.addClass(curLi, 'bg') : utils.removeClass(curLi, 'bg');
            }
        }

        //6.�������ֹͣ���Ƴ�����
        oBox.onmouseover = function () {
            clearInterval(autoTimer);
        };
        oBox.onmouseout = function () {
            autoTimer = setInterval(autoMove, 2000);
        };
        //7.�ֶ��ֲ�
        handleChange();
        function handleChange() {
            for (var i = 0; i < aLi.length; i++) {
                (function (index) {
                    var curLi = aLi[index];
                    curLi.onclick = function () {
                        step = index;
                        setBanner();
                    }
                })(i)
            }
        }

        //8.��ť�����л�
        oBtnRight.onclick = autoMove;
        oBtnLeft.onclick = function () {
            if (step <= 0) {
                step = aLi.length;
            }
            step--;
            setBanner();
        }
    }
    function tp1(){
        var oBox1 = document.getElementById('boxT');
        var oImgWrap = oBox1.getElementsByTagName('div')[0];
        var aDiv = oImgWrap.getElementsByTagName('div');
        var aImg = oImgWrap.getElementsByTagName('img');
        var oUl = oBox1.getElementsByTagName('ul')[0];
        var aLi = oUl.getElementsByTagName('li');
        var oBtnLeft = oBox1.getElementsByTagName('a')[0];
        var oBtnRight = oBox1.getElementsByTagName('a')[1];

        //4.�Զ�����
        var step = 0;
        clearInterval(autoTimer)
        var autoTimer = setInterval(autoMove, 2000);

        function autoMove() {
            if (step >= aDiv.length - 1) {
                step = -1;
            }
            step++;
            setBanner();
        }

        function setBanner() {
            for (var i = 0; i < aDiv.length; i++) {
                var curDiv = aDiv[i];
                if (i == step) {
                    //��ĳ��ͼƬ����������step��ʱ������ͼƬ��������Ҫ��ʾ��ͼƬ�������Ĳ㼶Ϊ1��ͬʱ������Ԫ�صĲ㼶Ϊ0
                    utils.css(curDiv, 'zIndex', 1);
                    //�ò㼶Ϊ1�����Ԫ�أ�͸���ȴ�0-1���˶������������ֵ�Ԫ��͸����Ϊ0��
                    zhufengAnimate(curDiv, {opacity: 1}, 600, function () {
                        var siblings = utils.siblings(this);
                        for (var i = 0; i < siblings.length; i++) {
                            utils.css(siblings[i], 'opacity', 0);
                        }
                    });
                    continue;
                }
                utils.css(curDiv, 'zIndex', 0)//����Ԫ�ز㼶Ϊ0��
            }
            bannerTip();
        }

        //5.�����Զ�����
        function bannerTip() {
            for (var i = 0; i < aLi.length; i++) {
                var curLi = aLi[i];
                i == step ? utils.addClass(curLi, 'bg1') : utils.removeClass(curLi, 'bg1');
            }
        }

        //6.�������ֹͣ���Ƴ�����
        oBox1.onmouseover = function () {
            clearInterval(autoTimer);
        };
        oBox1.onmouseout = function () {
            autoTimer = setInterval(autoMove, 2000);
        };
        //7.�ֶ��ֲ�
        handleChange();
        function handleChange() {
            for (var i = 0; i < aLi.length; i++) {
                (function (index) {
                    var curLi = aLi[index];
                    curLi.onclick = function () {
                        step = index;
                        setBanner();
                    }
                })(i)
            }
        }

        //8.��ť�����л�
        //oBtnRight.onclick = autoMove;
        //oBtnLeft.onclick = function () {
        //    if (step <= 0) {
        //        step = aLi.length;
        //    }
        //    step--;
        //    setBanner();
        //}

    }
    function tp2(){
        //�ص�����
        var index1=document.getElementById("index1");
        var index1_1=index1.getElementsByTagName("div")[0];
        var index1_3=index1.getElementsByTagName("div")[2];
//�ص�����˼·�����������ܾ��룬ÿ��һ��ʱ�䣬�ڵ�ǰ�ľ����ϼ�ȥ�̶��Ĳ�����һֱ����0Ϊֹ��
        index1_1.onclick=function(){
            //window.clearInterval(timer);
            var target=utils.win("scrollTop");
            window.onscroll=null;
            var duration=500;
            var interval=10;
            var step=(target/duration)*interval;
            var timer=setInterval(function(){
                var curT=utils.win("scrollTop");
                if(curT<=0){
                    window.clearInterval(timer);
                    window.onscroll="computedDisplay";
                    return;
                }
                curT-=step;
                utils.win("scrollTop",curT);
            },interval)
        }





        index1_3.onclick=function(){
            window.clearInterval(timer);
            var target=utils.win("offsetHeight")-utils.win("scrollTop")-utils.win("clientHeight");
            var duration=600;
            var interval=10;
            var timer=setInterval(function(){
                var step=utils.win("scrollTop");
                if(interval>=duration){
                    clearInterval(timer)
                }
                interval+=10;
                step+=interval;
                utils.win("scrollTop",step);
            },interval)
        }





    }
    function tp3(){
        var code=document.getElementById("code");
        var code_1=document.getElementById("code_1");
        console.log(code_1)
        code_1.onclick=function(){
            console.log(1)
            code.style.display="none";
        }
    }
    //�Ƚ��ѵĶ���
    function tp4(){
        var oLeft=document.getElementById("left");
        var oAnimate=document.getElementById("animate");
        var oRight=document.getElementById("right");
        var oSmall=document.getElementById("small");
        var oUl=oSmall.getElementsByTagName("ul");
        var oLis=oSmall.getElementsByTagName("li");
        var oXd=document.getElementById("xd");
        var oSpans=oXd.getElementsByTagName("span");
        oUl[0].style.opacity=1;
        oUl[0].style.zIndex=1;
        var step=0;
        var siblings=[];


        for(var i=0;i<oLis.length;i++){
            oLis[i].onmouseenter=function(){
                var next=utils.next(this)||utils.prev(this);

                var lastChild=utils.lastChild(this);
                //this.style.width="910px";
                //var change=utils.getCss(this,"width")
                //console.log(change)
                animate(this,{"width":930},600)
                siblings=utils.siblings(this);
                animate(lastChild,{"width":740},600);
                for(var i=0;i<siblings.length;i++){
                    //siblings[i].style.width=0
                    animate(siblings[i],{"width":0},600)
                }
                animate(next,{"width":190},600);

            }
            oLis[i].onmouseleave=function(){
                window.clearInterval(time);
                var lastChild=utils.lastChild(this);
                //var next=utils.next(this)||utils.pre(this);
                this.style.width="190px";
                siblings=utils.siblings(this);
                lastChild.style.width=0;
                //animate(lastChild,{"width":0},600)
                for(var i=0;i<siblings.length;i++){
                    siblings[i].style.width="190px";
                    //animate(siblings[i],{"width":170},600)
                }

            }
        }

        //�ֲ�
        time=window.setInterval(timer,1000);
        function timer(){
            step++;
            if(step>1){
                step=0
            }

            show(step);
        }
        function show(step){
            for(var i=0;i<oUl.length;i++){
                oUl[i].style.zIndex=0;
                animate(oUl[i],{"opacity":0},600)
            }
            oUl[step].style.zIndex=1;
            animate(oUl[step],{"opacity":1},600)
        }
        oAnimate.onmouseover=function(){
            window.clearInterval(time);
        }
        oAnimate.onmouseout=function(){
            time=window.setInterval(timer,3000)
        }
        oLeft.onclick=function(){
            window.clearInterval(time)
            timer()
        };
        oRight.onclick=function(){
            window.clearInterval(time);
            timer()
        }
    }

}


















