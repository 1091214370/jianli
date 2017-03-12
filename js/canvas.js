$(document).ready(function () {
    $(".canvas-div").droppable();
    $(".canvas1").droppable();
    $(".canvas2").droppable();
    var canvas0 = document.getElementById('canvas0');
    var canvas1 = document.getElementById('canvas1');
    var canvas2 = document.getElementById('canvas2');
    var ctx0 = canvas0.getContext("2d");
    var ctx1 = canvas1.getContext("2d");
    var ctx2 = canvas2.getContext("2d");
    var n = 1;
    var img1=new Image();
    var img2=new Image();
    var img3=new Image();
    var img4=new Image();
    var img5=new Image();
    $(".line").click(function () {       //画直线
        var oX, oY;
        var flag = false;
        function draw(ctx, sx, sy, ex, ey) {
            ctx.strokeStyle = $(".color").val();
            ctx.lineWidth = $(".line-width").val();
            ctx2.clearRect(0, 0, 740, 900);
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(ex, ey);
            ctx.closePath();
            ctx.stroke();
        }
        canvas2.onmousemove = function (e) {
            if (flag) {
                draw(ctx2, oX, oY, e.offsetX, e.offsetY);
            }
        };
        canvas2.onmousedown = function (e) {
            if (flag) {
                draw(ctx1, oX, oY, e.offsetX, e.offsetY);
            }
        };
        canvas2.onclick = function (e) {
            if (!flag) {
                oX = e.offsetX;
                oY = e.offsetY;
            }
            flag = !flag;
        };
        canvas2.onmouseleave = function () {
            canvas2.onmousemove = function (e) {
                null;
            };
            canvas2.onmousedown = function () {
                null;
            };
        };
    });
    $(".srect").click(function () {       //画边框矩形
        var oX, oY;
        var flag = false;
        function draw(ctx, sx, sy, ex, ey) {
            ctx.strokeStyle = $(".color").val();
            ctx.lineWidth = $(".line-width").val();
            ctx2.clearRect(0, 0, 740, 900);
            ctx.beginPath();
            ctx.strokeRect(sx, sy, ex, ey);
        }
        canvas2.onmousemove = function (e) {
            if (flag) {
                draw(ctx2, oX, oY, e.offsetX - oX, e.offsetY - oY);
            }
        };
        canvas2.onmousedown = function (e) {
            if (flag) {
                draw(ctx1, oX, oY, e.offsetX - oX, e.offsetY - oY);
            }
        };
        canvas2.onclick = function (e) {
            if (!flag) {
                oX = e.offsetX;
                oY = e.offsetY;
            }
            flag = !flag;
        };
        canvas2.onmouseleave = function () {
            canvas2.onmousemove = function (e) {
                null;
            };
            canvas2.onmousedown = function () {
                null;
            };
        };
    });
    $(".frect").click(function () {       //画填充矩形
        var oX, oY;
        var flag = false;

        function draw(ctx, sx, sy, ex, ey) {
            ctx.fillStyle = $(".color").val();
            ctx.lineWidth = $(".line-width").val();
            ctx2.clearRect(0, 0, 740, 900);
            ctx.beginPath();
            ctx.fillRect(sx, sy, ex, ey);
        }

        canvas2.onmousemove = function (e) {
            if (flag) {
                draw(ctx2, oX, oY, e.offsetX - oX, e.offsetY - oY);
            }
        };
        canvas2.onmousedown = function (e) {
            if (flag) {
                draw(ctx1, oX, oY, e.offsetX - oX, e.offsetY - oY);
            }
        };
        canvas2.onclick = function (e) {
            if (!flag) {
                oX = e.offsetX;
                oY = e.offsetY;
            }
            flag = !flag;
        };
        canvas2.onmouseleave = function () {
            canvas2.onmousemove = function (e) {
                null;
            };
            canvas2.onmousedown = function () {
                null;
            };
        };
    });
    $(".scircle").click(function () {       //画边框圆
        var oX, oY;
        var flag = false;
        function draw(ctx, sx, sy, ex, ey) {
            var r = Math.sqrt((ex * ex) + (ey * ey));
            ctx.strokeStyle = $(".color").val();
            ctx.lineWidth = $(".line-width").val();
            ctx2.clearRect(0, 0, 740, 900);
            ctx.beginPath();
            ctx.arc(sx, sy, r, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.stroke();
        }
        canvas2.onmousemove = function (e) {
            if (flag) {
                draw(ctx2, oX, oY, e.offsetX - oX, e.offsetY - oY);
            }
        };

        canvas2.onmousedown = function (e) {
            if (flag) {
                draw(ctx1, oX, oY, e.offsetX - oX, e.offsetY - oY);
            }
        };
        canvas2.onclick = function (e) {
            if (!flag) {
                oX = e.offsetX;
                oY = e.offsetY;
            }
            flag = !flag;
        };
        canvas2.onmouseleave = function () {
            canvas2.onmousemove = function (e) {
                null;
            };
            canvas2.onmousedown = function () {
                null;
            };
        };
    });
    $(".fcircle").click(function () {       //画填充圆
        var oX, oY;
        var flag = false;
        function draw(ctx, sx, sy, ex, ey) {
            var r = Math.sqrt((ex * ex) + (ey * ey));
            ctx.fillStyle = $(".color").val();
            ctx.lineWidth = $(".line-width").val();
            ctx2.clearRect(0, 0, 740, 900);
            ctx.beginPath();
            ctx.arc(sx, sy, r, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
        };
        canvas2.onmousemove = function (e) {
            if (flag) {
                draw(ctx2, oX, oY, e.offsetX - oX, e.offsetY - oY);
            }
        };
        canvas2.onmousedown = function (e) {
            if (flag) {
                draw(ctx1, oX, oY, e.offsetX - oX, e.offsetY - oY);
            }
        };
        canvas2.onclick = function (e) {
            if (!flag) {
                oX = e.offsetX;
                oY = e.offsetY;
            }
            flag = !flag;
        };
        canvas2.onmouseleave = function () {
            canvas2.onmousemove = function (e) {
                null;
            };
            canvas2.onmousedown = function () {
                null;
            };
        };
    });
    $(".bgcolor").change(function () {//选择背景颜色
        ctx0.clearRect(0, 0, 740, 900);
       ctx0.fillStyle=$(".bgcolor").val();
        ctx0.fillRect(0, 0, 740, 900);
    });
    $(".bgimg").click(function () {
        $("#beijing1").show();//弹出框打开//使用背景图片
    });
    $("#upload1").change(function () {
        $("#sub1").click();
    });
    $("#upload10").click(function () {
        var fileName = $("#upload1").val().split(/\\\//).pop();
        $("#bg11").attr("src","../images/"+fileName);
        img5.src="../images/"+fileName;
        $("#beijing1").hide();
        $("#beijing10").show();
    });
    $("#upload11").click(function () {
        ctx0.clearRect(0, 0, 740, 900);
        ctx0.drawImage(img5, 0, 0);
        $("#beijing10").hide();
    });
    $(".tpimg").click(function () {
        $("#beijing11").show();//弹出框打开//使用图片
    });
    $("#upload2").change(function () {
        $("#sub2").click();
    });
    $("#upload21").click(function () {
        var fileName1 = $("#upload2").val().split(/\\\//).pop();
        var div = '<div class="tpdiv" id="tpdiv' + n + '" style="width:150px;height:180px;z-index: 5;position: absolute"><img id="tpimg'+n+'" src="images/'+fileName1+'"></div>';
        $("#fdiv").append(div);
        $("#tpdiv" + n).draggable({containment: ".canvas-div"});
        $("#tpdiv" + n).resizable({containment: ".canvas-div"});
        $("#tpdiv" + n).hover(function(){
                $(this).addClass('divover');
            },function(){
                //鼠标离开时移除divOver样式
                $(this).removeClass('divover');
            }
        );
        function Rmo() {     //双击移除
            $("#tpdiv" + n).dblclick(function () {
                $(this).remove();
            })
        }
        Rmo();
        n++;
        $("#beijing11").hide();
    });
    //动态添加开始
    //模板调用
    $(".clsBtn").click(function () {      //关闭弹出窗
        $("#tjwz").hide();
        $("#lie1").hide();
        $("#lie2").hide();
        $("#lie3").hide();
        $("#lie4").hide();
    });
    $(".clsBtn1").click(function () {              //关闭模板弹出窗
        $("#beijing1").hide();
        $("#beijing10").hide();
        $("#beijing11").hide();
        $("#beijing2").hide();
        $("#beijing22").hide();
        $("#beijing222").hide();
        $("#beijing3").hide();
        $("#beijing32").hide();
        $("#beijing33").hide();
        $("#beijing34").hide();
        $("#beijing35").hide();
        $("#beijing36").hide();
        $("#beijing37").hide();
        $("#beijing38").hide();
        $("#beijing4").hide();
    });
    $("#wzqd").click(function () {   //添加文字
        var l=$(".wenzinr").val().length;
        var s = $(".wbsize").val();
        var div = '<div class="dtdiv" id="tdid' + n + '" style="width:' + l*s+ 'px;height:' +s*1.3+ 'px;z-index: 5;position: absolute"><canvas id="wzc' + n + '" width="'+l*s+'" height="' +s*1.2+ '"></canvas></div>';
        $("#fdiv").append(div);
        $("#tjwz").hide();
        function write() {
            var i=0;
            var canvas3 = document.getElementById('wzc'+n);
            var ctx3 = canvas3.getContext("2d");
            var txt=$(".wenzinr").val();
            ctx3.font = s+'px Arial';
            ctx3.fillStyle=$(".filcolor").val();
            ctx3.strokeStyle=$(".stocolor").val();
             if($("#ful1").is(':checked')){
                 ctx3.fillText(txt,0,s);
                 i++;
            }
            if($("#sto1").is(':checked')){
                ctx3.strokeText(txt,0,s);
                i++;
            }
            if(i==0){
                alert("请选择类型！");
                $("#tjwz").show();
            }
        }
        write();
        $("#tdid" + n).draggable({containment: ".canvas-div"});
        $("#tdid" + n).hover(function(){
                $(this).addClass('divover');
            },function(){
                //鼠标离开时移除divOver样式
                $(this).removeClass('divover');
            }
        );
        function Rmo() {     //双击移除
            $("#tdid" + n).dblclick(function () {
                $(this).remove();
            })
        }
        Rmo();
        n++;
    });
    $(".txt").click(function () {     //弹出窗打开
        $("#tjwz").show();
        $("#wenbk").append();
    });
    $(".bgmb").click(function () {
        img1.src = "img/bg1.jpg";
        img2.src = "img/bg2.png";
        img3.src="img/bg3.jpg";
        img4.src="img/bg4.jpg";
        $("#lie1").show();//弹出框打开
    });
    $(".btmb").click(function () {
        $("#lie2").show();//弹出框打开
    });
    $(".nrmb").click(function () {
        $("#lie3").show();//弹出框打开
    });
    $(".tpmb").click(function () {
        $("#lie4").show();//弹出框打开
    });
    //背景模板
    $("#bgmb1").click(function () {
        ctx0.clearRect(0, 0, 740, 900);
        ctx0.drawImage(img1, 0, 0);
        $("#lie1").hide();
    });
    $("#bgmb2").click(function () {
        ctx0.clearRect(0, 0, 740, 900);
        ctx0.drawImage(img2, 0, 0);
        $("#lie1").hide();
    });
    $("#bgmb3").click(function () {
        ctx0.clearRect(0, 0, 740, 900);
        ctx0.drawImage(img3,0,0);
        $("#lie1").hide();
    });
    $("#bgmb4").click(function () {
        ctx0.clearRect(0, 0, 740, 900);
        ctx0.drawImage(img4,0,0);
        $("#lie1").hide();
    });
    //标题模板
    $(".btn2").click(function () {
        $("#beijing2").show();//弹出框打开
    });
    $("#btmb1").click(function () {
        var intxt1 =$("#inpt1").val();
        var div = '<div class="dtdiv" id="btidf' + n + '" style="width:172px;height:68px;z-index: 3;position: absolute"><img src="img/bt1.png" width="100%" height="100%"><span id="inputf'+n+'" style="max-font-size:100%;margin-left:-50%;margin-top: 18%;position: absolute;"></span></div>';
        $("#fdiv").append(div);
        $("#inputf" + n).append(intxt1);
        $("#beijing2").hide();
        $("#lie2").hide();
        $("#btidf" + n).draggable({containment: ".canvas-div"});
        $("#btidf" + n).resizable({containment: ".canvas-div"});
        $("#btidf" + n).hover(function(){
                $(this).addClass('divover');
            },function(){
                //鼠标离开时移除divOver样式
                $(this).removeClass('divover');
            }
        );
        function Rmo() {     //双击移除
            $("#btidf" + n).dblclick(function () {
                $(this).remove();
            })
        }
        Rmo();
        n++;
    });
    $(".btn22").click(function () {
        $("#beijing22").show();//弹出框打开
    });
    $("#btmb2").click(function () {
        var intxt2 =$("#inpt2").val();
        var div = '<div class="dtdiv" id="btidc' + n + '" style="width:133px;height:54px;z-index: 3;position: absolute"><img src="img/22.png" width="100%" height="100%"><span id="inputc'+n+'" style="max-font-size:100%;margin-left:-70%;margin-top: 12%;position: absolute;"></span></div>';
        $("#fdiv").append(div);
        $("#inputc" + n).append(intxt2);
        $("#beijing22").hide();
        $("#lie2").hide();
        $("#btidc" + n).draggable({containment: ".canvas-div"});
        $("#btidc" + n).resizable({containment: ".canvas-div"});
        $("#btidc" + n).hover(function(){
                $(this).addClass('divover');
            },function(){
                //鼠标离开时移除divOver样式
                $(this).removeClass('divover');
            }
        );
        function Rmo() {     //双击移除
            $("#btidc" + n).dblclick(function () {
                $(this).remove();
            })
        }
        Rmo();
        n++;
    });
    $(".btn222").click(function () {
        $("#beijing222").show();//弹出框打开
    });
    $("#btmb3").click(function () {
        var intxt3 =$("#inpt3").val();
        var div = '<div class="dtdiv" id="btids' + n + '" style="width:113px;height:47px;z-index: 3;position: absolute"><img src="img/222.png" width="100%" height="100%"><span id="inputs'+n+'" style="max-font-size:100%;margin-left:-80%;margin-top: 12%;position: absolute;"></span></div>';
        $("#fdiv").append(div);
        $("#inputs" + n).append(intxt3);
        $("#beijing222").hide();
        $("#lie2").hide();
        $("#btids" + n).draggable({containment: ".canvas-div"});
        $("#btids" + n).resizable({containment: ".canvas-div"});
        $("#btids" + n).hover(function(){
                $(this).addClass('divover');
            },function(){
                //鼠标离开时移除divOver样式
                $(this).removeClass('divover');
            }
        );
        function Rmo() {     //双击移除
            $("#btids" + n).dblclick(function () {
                $(this).remove();
            })
        }
        Rmo();
        n++;
    });
    //资料模板
    $(".btn3").click(function () {
        $("#beijing3").show();//弹出框打开
    });
    $("#jbxxz").click(function () {
        $("#beijing3").hide();
        $("#lie3").hide();
        $("#lie4").hide();
        var xm =$("#xm").val();
        var xb =$("#xb").val();
        var mz =$("#mz").val();
        var xl =$("#xl").val();
        var nl =$("#nl").val();
        var zy =$("#zy").val();
        var zzmm =$("#zzmm").val();
        var div = '<div class="dtdiv" id="jbxx' + n + '" style="width:300px; z-index: 3;position: absolute"><div class="jbxx"><span>姓名：'+xm+'</span></div><div class="jbxx"><span>性别：'+xb+'</span></div><div class="jbxx"><span>民族：'+mz+'</span></div><div class="jbxx"><span >学历：'+xl+'</span></div><div class="jbxx"><span>年龄：'+nl+'</span></div><div class="jbxx"><span>政治面貌：'+zzmm+'</span></div><div class="jbxx1" style="width: 300px;display: block;float: left"><span>专业：'+zy+'</span></div></div>';
        $("#fdiv").append(div);
        $(".jbxx").css({"width":"140px","margin-right": "10px", "display": "block", "float": "left"});
        $("#jbxx" + n).draggable({containment: ".canvas-div"});
        $("#jbxx" + n).resizable({containment: ".canvas-div"});
        $("#jbxx" + n).hover(function(){
                $(this).addClass('divover');
            },function(){
                //鼠标离开时移除divOver样式
                $(this).removeClass('divover');
            }
        );
        function Rmo() {     //双击移除
            $("#jbxx" + n).dblclick(function () {
                $(this).remove();
            })
        }
        Rmo();
        n++;
    });
    $(".btn32").click(function () {
        $("#beijing32").show();//弹出框打开
    });
    $("#lxfs").click(function () {
        $("#beijing32").hide();
        $("#lie3").hide();
        $("#lie4").hide();
        var dh =$("#dh").val();
        var yx =$("#yx").val();
        var dz =$("#dz").val();
        var div = '<div class="dtdiv" id="lxfs' + n + '" style="width:320px; z-index: 3;position: absolute"><div style="width: 220px;display: block;float: left"><span>联系电话：'+dh+'</span></div><div style="width: 320px;display: block;float: left"><span>电子邮箱：'+yx+'</span></div><div  style="width: 100%;display: block;float: left"><span>家庭住址：'+dz+'</span></div></div>';
        $("#fdiv").append(div);
        $("#lxfs" + n).draggable({containment: ".canvas-div"});
        $("#lxfs" + n).resizable({containment: ".canvas-div"});
        $("#lxfs" + n).hover(function(){
                $(this).addClass('divover');
            },function(){
                //鼠标离开时移除divOver样式
                $(this).removeClass('divover');
            }
        );
        function Rmo() {     //双击移除
            $("#lxfs" + n).dblclick(function () {
                $(this).remove();
            })
        }
        Rmo();
        n++;
    });
    $(".btn33").click(function () {
        $("#beijing33").show();//弹出框打开
    });
    $("#sgzjy").click(function () {
        $("#beijing33").hide();
        $("#lie3").hide();
        $("#lie4").hide();
        var gzjy =$("#shjl").val();
        var div = '<div class="dtdiv" id="gzjy' + n + '" style="width:320px; z-index: 3;position: absolute"><span><h4>工作经验/社会经历：</h4>'+gzjy+'</span></div>';
        $("#fdiv").append(div);
        $("#gzjy" + n).draggable({containment: ".canvas-div"});
        $("#gzjy" + n).resizable({containment: ".canvas-div"});
        $("#gzjy" + n).hover(function(){
                $(this).addClass('divover');
            },function(){
                //鼠标离开时移除divOver样式
                $(this).removeClass('divover');
            }
        );
        function Rmo() {     //双击移除
            $("#gzjy" + n).dblclick(function () {
                $(this).remove();
            })
        }
        Rmo();
        n++;
    });
    $(".btn34").click(function () {
        $("#beijing34").show();//弹出框打开
    });
    $("#mbzw").click(function () {
        $("#beijing34").hide();
        $("#lie3").hide();
        $("#lie4").hide();
        var mbxz =$("#bxz").val();
        var mbzw =$("#bzw").val();
        var div = '<div class="dtdiv" id="gzjy' + n + '" style="width:300px; z-index: 3;position: absolute"><div style="width:200px;;display: block;float: left"><span><h4>目标薪资:</h4>'+mbxz+'</span></div><div style="width:300px;display: block;float: left"><span><h4>目标职位：</h4>'+mbzw+'</span></div></div>';
        $("#fdiv").append(div);
        $("#gzjy" + n).draggable({containment: ".canvas-div"});
        $("#gzjy" + n).resizable({containment: ".canvas-div"});
        $("#gzjy" + n).hover(function(){
                $(this).addClass('divover');
            },function(){
                //鼠标离开时移除divOver样式
                $(this).removeClass('divover');
            }
        );
        function Rmo() {     //双击移除
            $("#gzjy" + n).dblclick(function () {
                $(this).remove();
            })
        }
        Rmo();
        n++;
    });
    $(".btn35").click(function () {
        $("#beijing35").show();//弹出框打开
    });
    $("#jyxx").click(function () {
        $("#beijing35").hide();
        $("#lie3").hide();
        $("#lie4").hide();
        var byyx =$("#byxx").val();
        var jyjl =$("#jybj").val();
        var div = '<div class="dtdiv" id="byyx' + n + '" style="width:320px; z-index: 3;position: absolute"><span><h4>毕业院校:</h4>'+byyx+'</span></div><br><div class="dtdiv" id="jyjl' + n + '" style="width:320px; z-index: 3;position: absolute"><span><h4>教育背景：</h4>'+jyjl+'</span></div>';
        $("#fdiv").append(div);
        $("#byyx" + n).draggable({containment: ".canvas-div"});
        $("#jyjl" + n).draggable({containment: ".canvas-div"});
        $("#byyx" + n).resizable({containment: ".canvas-div"});
        $("#jyjl" + n).resizable({containment: ".canvas-div"});
        $("#byyx" + n).hover(function(){
                $(this).addClass('divover');
            },function(){
                //鼠标离开时移除divOver样式
                $(this).removeClass('divover');
            }
        );
        $("#jyjl" + n).hover(function(){
                $(this).addClass('divover');
            },function(){
                //鼠标离开时移除divOver样式
                $(this).removeClass('divover');
            }
        );
        function Rmo1() {     //双击移除
            $("#byyx" + n).dblclick(function () {
                $(this).remove();
            })
        }
        function Rmo2() {     //双击移除
            $("#jyjl" + n).dblclick(function () {
                $(this).remove();
            })
        }
        Rmo1();
        Rmo2();
        n++;
    });
    $(".btn36").click(function () {
        $("#beijing36").show();//弹出框打开
    });
    $("#tz11").click(function () {
        $("#beijing36").hide();
        $("#lie3").hide();
        $("#lie4").hide();
        var jsyy =$("#jsyy").val();
        var div = '<div class="dtdiv" id="yyjs' + n + '" style="width:320px; z-index: 3;position: absolute"><span><h4>计算机/英语能力:</h4>'+jsyy+'</span></div>';
        $("#fdiv").append(div);
        $("#yyjs" + n).draggable({containment: ".canvas-div"});
        $("#yyjs" + n).resizable({containment: ".canvas-div"});
        $("#yyjs" + n).hover(function(){
                $(this).addClass('divover');
            },function(){
                //鼠标离开时移除divOver样式
                $(this).removeClass('divover');
            }
        );
        function Rmo1() {     //双击移除
            $("#yyjs" + n).dblclick(function () {
                $(this).remove();
            })
        }
        Rmo1();
        n++;
    });
    $(".btn37").click(function () {
        $("#beijing37").show();//弹出框打开
    });
    $("#tz2").click(function () {
        $("#beijing37").hide();
        $("#lie3").hide();
        $("#lie4").hide();
        var jlzs =$("#sjlzs").val();
        var div = '<div class="dtdiv" id="jlzs' + n + '" style="width:320px; z-index: 3;position: absolute"><span><h4>奖励/证书/科研成果:</h4>'+jlzs+'</span></div>';
        $("#fdiv").append(div);
        $("#jlzs" + n).draggable({containment: ".canvas-div"});
        $("#jlzs" + n).resizable({containment: ".canvas-div"});
        $("#jlzs" + n).hover(function(){
                $(this).addClass('divover');
            },function(){
                //鼠标离开时移除divOver样式
                $(this).removeClass('divover');
            }
        );
        function Rmo() {     //双击移除
            $("#jlzs" + n).dblclick(function () {
                $(this).remove();
            })
        }
        Rmo();
        n++;
    });
    $(".btn38").click(function () {
        $("#beijing38").show();//弹出框打开
    });
    $("#tz111").click(function () {
        $("#beijing38").hide();
        $("#lie3").hide();
        $("#lie4").hide();
        var sxkc =$("#sxkc").val();
        var div = '<div class="dtdiv" id="kc' + n + '" style="width:320px; z-index: 3;position: absolute"><span><h4>所学课程:</h4>'+sxkc+'</span></div>';
        $("#fdiv").append(div);
        $("#kc" + n).draggable({containment: ".canvas-div"});
        $("#kc" + n).resizable({containment: ".canvas-div"});
        $("#kc" + n).hover(function(){
                $(this).addClass('divover');
            },function(){
                //鼠标离开时移除divOver样式
                $(this).removeClass('divover');
            }
        );
        function Rmo2() {     //双击移除
            $("#kc" + n).dblclick(function () {
                $(this).remove();
            })
        }
        Rmo2();
        n++;
    });

    //内容模板
    $("#aa1").click(function(){
        $("#mbkjnr1").show();
        $("#mbkjnr2").hide();
        $("#mbkjnr3").hide();
        $("#mbkjnr4").hide();
        $("#aa1").addClass("bghover");
        $("#aa2").removeClass("bghover");
        $("#aa3").removeClass("bghover");
        $("#aa4").removeClass("bghover");
    });
    $("#aa2").click(function () {
        $("#mbkjnr1").hide();
        $("#mbkjnr2").show();
        $("#mbkjnr3").hide();
        $("#mbkjnr4").hide();
        $("#aa1").removeClass("bghover");
        $("#aa2").addClass("bghover");
        $("#aa3").removeClass("bghover");
        $("#aa4").removeClass("bghover");
    });
    $("#aa3").click(function () {
        $("#mbkjnr1").hide();
        $("#mbkjnr2").hide();
        $("#mbkjnr3").show();
        $("#mbkjnr4").hide();
        $("#aa1").removeClass("bghover");
        $("#aa2").removeClass("bghover");
        $("#aa3").addClass("bghover");
        $("#aa4").removeClass("bghover");
    });
    $("#aa4").click(function () {
        $("#mbkjnr1").hide();
        $("#mbkjnr2").hide();
        $("#mbkjnr3").hide();
        $("#mbkjnr4").show();
        $("#aa1").removeClass("bghover");
        $("#aa2").removeClass("bghover");
        $("#aa3").removeClass("bghover");
        $("#aa4").addClass("bghover");
    });
    $("#syjy1").click(function () {
        $("#shjl").val( "1. 2011年暑假，在AA外语学校担任英语教师" +
            "2. 2011年11月-12月，为三星公司做兼职手机促销员；"+
            " 3. 2011年3月，为SS咖啡新产品的上市做前期市场调查；"+
            "4. 2012年暑期，在北京电视台新闻频道实习；"+
            "5. 2012年11月，参与AA学校培训产品的市场推广策划；"+
            "6. 2013年3月-12月，辅导三名高中学生数学课程。");
        $("#beijing33").show();
    });
    $("#syjy2").click(function () {
        $("#shjl").val( "工作单位： ******  职位： 技术工程师 ; 时间： 2008年10月 -- 2010年02月"+
        "工作描述： 安防系统软件操作培训、技术支持及一些设计工作。"+
        "工作单位： ******  职位： 技术员； 时间： 2007年5月 -- 2008年10月"+
        "工作描述： 竣工验收资料编制、工程图纸绘制。");
        $("#beijing33").show();
    });
    $("#syjy3").click(function () {
        $("#shjl").val( "1.2007/08--2007/12 项目名称：公司人力资源管理系统;开发环境：windows2000;数据库: SQL Server2000;"+
            "开发语言:Java项目简介: 项目共分为：档案管理、薪资管理、招聘管理、培训管理、考勤管理和合同管理等。实现了企业的人事部门的日常管理工作需要的功能。"+
            "责任描述：负责档案管理和招聘管理模块的代码编写及测试 。"+
            "责任描述：负责电子监察模块中的绩效测评的代码编写."+
        "2.2006/06--2006/07 网站维护;职务：为信息工程学院建立招生网站");
        $("#beijing33").show();
    });
    $("#syjybj1").click(function () {
        $("#jybj").val( "从2011年到2014年就读于湖北大学工程管理专业并获得学士学位。"+
        "从2014年到2016年就读于清华大学工程管理专业并获得硕士学位。");
        $("#beijing35").show();
    });
    $("#syjybj2").click(function () {
        $("#jybj").val( "从2011年到2014年就读于聊城大学东昌学院软件工程专业并获得学士学位。"+
        "从2014年到2015年在xxxxxxxxx培训中心参加培训，并取得优异成绩。");
        $("#beijing35").show();
    });
    $("#sysxke1").click(function () {
        $("#sxkc").val( "主修课程：理论力学，材料力学，结构力学，土木工程施工，工程项目管理，工程结构，工程监理，工程估价");
        $("#beijing38").show();
    });
    $("#sysxke2").click(function () {
        $("#sxkc").val( "主修课程：操作系统、数据结构、计算机网络、软件工程、软件项目管理、数据库原理、CMM（能力成熟度模型）、网站开发、计算机组成原理、软件测试、网络高级技术、ASP.NET、C#语言编程等。");
        $("#beijing38").show();
    });
    $("#sysxke3").click(function () {
        $("#jsyy").val( "本人不仅获得了英语四六级证书，而且在应用英语方面的水平也是相当不错的，无论是听力还是口语、写作等方面都完全能够满足实际需求。");
        $("#beijing36").show();
    }); 
    $("#sysxke4").click(function () {
        $("#jsyy").val( "能够熟练使用一下办公软件：Word、Excel、PowerPoint、Access数据库，能够帮助我提高工作效率。");
        $("#beijing36").show();
    });
    $("#syjlzsky1").click(function () {
        $("#sjlzs").val( "奖项一：2015年获省优秀大学生称号。"+
        "奖项二：2015年获国家一等奖学金。");
        $("#beijing37").show();
    });
    $("#syjlzsky2").click(function () {
        $("#sjlzs").val( "奖项一：2015年获得齐鲁软件设计大赛三等奖。"+
        "奖项二：2015年获全国大学生英语竞赛二等奖。");
        $("#beijing37").show();
    });
    $("#syjlzsky3").click(function () {
        $("#sjlzs").val( "通过了信息产业部和国家人事部共同举办的软件设计师考试。" );
        $("#beijing37").show();
    });
    $("#syjlzsky4").click(function () {
        $("#sjlzs").val( "2015.02-2015.03      手机芯片H.265/H.264硬件编码"+
        "项目描述：项目主要是在海思芯片上实现H.264/H.265的硬件编码，并使之符合音视频编解码标准OpenMax。"+
        "主要职责：主要负责搭建在手机端运行的测试驱动环境。"+
        "涵盖技术：在Android开发板上使用Native C实现对OpenMax的动态库调用，并使用多线程和Unix Domain Socket实现了对多通道的支持。");
        $("#beijing37").show();
    });
    //右侧菜单
    $(".yulan").click(function () {           //预览
        var type = "png";
        var canvasdiv = "<canvas width=740 height=900 style='display:none'></canvas>";
        html2canvas($(".canvas-div"), {
            onrendered: function (canvas) {
                $(".canvas-div").append(canvasdiv);
                var imgData = canvas.toDataURL();
                var w = window.open('about:blank', 'image from canvas');
                w.document.write("<img src='" + imgData + "' alt='from canvas' style='width:740px;height:900px'/>");
            }
        });
    });
    $(".chexiao").click(function () {       
        ctx1.clearRect(0, 0, 740, 900);
        ctx2.clearRect(0, 0, 740, 900);
    });
    $(".cachu").click(function () {       // 擦除
        canvas2.onmousemove = function (e) {
            ctx2.clearRect(0, 0, 740, 900);
            ctx2.strokeRect(e.offsetX - 25, e.offsetY - 25, 50, 50);
            ctx1.clearRect(e.offsetX - 25, e.offsetY - 25, 50, 50);
        };
        canvas2.onmouseleave = function () {
            ctx2.clearRect(0, 0, 740, 900);
            canvas2.onmousemove = function (e) {
                null;
            }
        };
        canvas2.onmousedown = function () {
            null;
        };
    });
    $("#qingkong").click(function () {    //清空
        ctx0.clearRect(0, 0, 740, 900);
    });
    $("#down").click(function () {      //下载
        var type = "png";
        var canvasdiv = "<canvas width=740 height=900 style='display:none'></canvas>";
        html2canvas($(".canvas-div"), {
            onrendered: function (canvas) {
                $(".canvas-div").append(canvasdiv);
                var imgData = canvas.toDataURL();
                var _fixType = function (type) {
                    type = type.toLowerCase().replace(/jpg/i, 'jpg');
                    var r = type.match(/jpeg|jpg|png|bmp|gif/)[0];
                    return 'image/' + r;
                };

// 加工image data，替换mime type
                imgData = imgData.replace(_fixType(type), 'image/octet-stream');
                /**
                 * 在本地进行文件保存
                 * @param  {String} data     要保存到本地的图片数据
                 * @param  {String} filename 文件名
                 */
                var saveFile = function (data, filename) {
                    var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
                    save_link.href = data;
                    save_link.download = filename;

                    var event = document.createEvent('MouseEvents');
                    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                    save_link.dispatchEvent(event);
                };

// 下载后的问题名
                var filename = 'jianli_' + (new Date()).getTime() + '.' + type;
// download
                saveFile(imgData, filename);
            }
        });
    });
    // 使用说明,8秒后可用。
    $("#sysm").show();
    $('#sysmqr').hide();
    setTimeout(function () {
            $("#sysmqr").show().click(function () {
                $("#sysm").hide();})
    }, 8000)
});
