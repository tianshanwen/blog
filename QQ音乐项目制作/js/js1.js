small2();

function small2(){
    window.onload=function(){
        tp2();
        tp3();

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
}
