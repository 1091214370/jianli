<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <!--禁止缩放 控制宽度-->
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>填写简历</title>
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/bootstrap-theme.min.css" rel="stylesheet">
    <link href="css/mycss.css" rel="stylesheet">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="js/html5shiv.min.js"></script>
    <script src="js/respond.min.js"></script>
    <![endif]-->
    <style>
        body {
            padding-top: 50px;
        }

        input {
            border: none;
            outline: none;
        }

        textarea {
            float: left;
            border: none;
            overflow-y: visible;
            outline: none;
        }

        .td-form {
            width: 1250px;
            margin: 80px 85px;
            padding: 50px 50px;
            border: 3px dotted #080808;
            background-color: white;
        }
        .moban{
            width: 1250px;
            margin: 80px 85px;
            padding: 50px 50px;
            border: 3px dotted #080808;
            background-color: white;
        }
        td,tr,table{
            border: none;
        }
        input{
            border: 3px solid #5e5e5e;
            -moz-border-radius: 15px;
            -webkit-border-radius: 15px;
            border-radius:15px;
            padding-left:15px;
        }
        textarea{
            border: 3px solid #5e5e5e;
            -moz-border-radius: 15px;
            -webkit-border-radius: 15px;
            border-radius:15px;
            padding-left:15px;
            padding-top: 5px;
        }
    </style>
    <script>
        function setImagePreview()
        {
            var docObj=document.getElementById("file");
            var imgObjPreview=document.getElementById("preview");
            if(docObj.files &&    docObj.files[0])
            {
                //火狐下，直接设img属性
                imgObjPreview.style.display = 'block';
                imgObjPreview.style.width = '150px';
                imgObjPreview.style.height = '180px';
                //imgObjPreview.src = docObj.files[0].getAsDataURL();
                //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
                imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
            }
            else
            {
                //IE下，使用滤镜
                docObj.select();
                var imgSrc = document.selection.createRange().text;
                var localImagId = document.getElementById("localImag");
                //必须设置初始大小
                localImagId.style.width = "300px";
                localImagId.style.height = "120px";
                //图片异常的捕捉，防止用户修改后缀来伪造图片
                try
                {
                    localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                    localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
                }
                catch(e)
                {
                    alert("您上传的图片格式不正确，请重新选择!");
                    return false;
                }
                imgObjPreview.style.display = 'none';
                document.selection.empty();
            }
            return true;
        }
    </script>
</head>
<body>
<!--头部-->
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <a class="navbar-brand" href="index.html">在线简历制作</a>
        <ul class="nav nav-pills navbar-right">
            <li role="presentation" class="active"><a href="index.html">首页</a></li>
        </ul>
    </div>
</nav>
<form id=" formid" action="muban1.php" method="post" target="_blank"  enctype="multipart/form-data">
<div class="jumbotron td" id="td1">
    <div class="td-form">
        <p align="center"><font size=4px><b>1.基本信息: </b><span style="float: right">照片大小：150*180</span></font></p>
        <table border="1" width="1100px" height="180" align="center">
            <tr>
                <td width=110px"height="50px" align="center">姓名：</td>
                <td width="140px" ><input type="Text" name="pname" formmethod="post" width=></td>
                <td width="110px" align="center">性别：</td>
                <td ><input type="Text" name="xingbie"  formmethod="post"></td>
                <td width="110px" align="center">出生年月：</td>
                <td ><input type="Text" name="time"  formmethod="post"></td>
                <td><input type="file" name="file" id="file" onchange="javascript:setImagePreview();">
                    <div id="localImag"><img id="preview" width=-1 height=-1 style="diplay:none" /></div>
                </td>
            </tr>
            <tr>
                <td height="50px" width="110px " align="center">民族：</td>
                <td><input type="Text" name="minzu"></td>
                <td width="110px" align="center">政治面貌：</td>
                <td><input type="text"name="mian"></td>
                <td width="110px" align="center">专业：</td>
                <td ><input type="Text" name="zhuanye"  formmethod="post"></td>
            </tr>
            <tr>
                <td height="50px" width="110px" align="center">联系电话：</td>
                <td>
                    </a><input type="Text" name="phone"></a>
                </td>
                <td width="110px" align="center">学历/学位：</td>
                <td><input type="Text" name="xueli"></td>
            </tr>
            <tr>
                <td width="110px" align="center">邮箱：</td>
                <td width="240"><input name="emli" type="text" size="35"></td>
                <td width="110px" align="center">居住地：</td>
                <td colspan="3"><input name="home" type="text" size="70"></td>
            </tr>
        </table>
        <ul class="pager">
            <li class="next"><a href="#td2">下一步 &rarr;</a></li>
        </ul>
    </div>
</div>
<div class="jumbotron td" id="td2" >
    <div class="td-form">
        <p align="center"><font size=4px><b>2.求职意向</a></b></font></p>
        <table border="1" width="1000px" height="170" align="center">
            <tr>
                <td align="center">求职意向/岗位：</td>
                <td colspan="5" height="50">
                    <a data-toggle="tooltip" data-placement="top"
                       title="岗位（以基层为主）。">
                        <textarea name="gangwei" style="resize:none" rows="1" cols="126"></textarea>
                    </a>
                </td>
            </tr>
            <tr>
                <td align="center">目标薪资：</td>
                <td colspan="5" height="50">
                    <a data-toggle="tooltip" data-placement="top"
                       title="薪资（HR建议面谈）。">
                        <textarea name="money" style="resize:none" rows="1" cols="126"></textarea>
                    </a>
                </td>
            </tr>
        </table>
        <ul class="pager">
            <li class="previous"><a href="#td1">&larr; 上一步</a></li>
            <li class="next"><a href="#td3">下一步 &rarr;</a></li>
        </ul>
    </div>
</div>
<div class="jumbotron td" id="td3">
    <div class="td-form">
        <p align="center"><font size=4px><b>3.教育信息</a></b></font></p>
        <table border="1" width="1000" height="170" align="center">
            <tr>
                <td align="center">毕业院校：</td>
                <td colspan="5" height="50"><textarea name="school"  style="resize:none" rows="1" cols="126"></textarea></td>
            <tr>
                <td align="center">教育背景/学习经历：</td>
                <td colspan="5" width="520" height="170">
                    <a data-toggle="tooltip" data-placement="top"
                       title="从大学写起，相关培训。">
                        <textarea name="beijing" style="resize:none;" rows="8" cols="126"></textarea>
                    </a>
                </td>
            </tr>
            <tr>
                <td align="center">工作经验/社会经历：</td>
                <td colspan="5" width="520" height="170">
                    <a data-toggle="tooltip" data-placement="top"
                       title="由近到远，内容详细，实事求是，语言不能概括。">
                        <textarea name="jingyan" style="resize:none" rows="8" cols="126"></textarea>
                    </a>
                </td>
            </tr>
        </table>
        <ul class="pager">
            <li class="previous"><a href="#td2">&larr; 上一步</a></li>
            <li class="next"><a href="#td4">下一步 &rarr;</a></li>
        </ul>
    </div>
</div>
<div class="jumbotron td" id="td4">
    <div class="td-form">
        <p align="center"><font size=4px><b>4.拓展信息</a></b></font></p>
        <table border="1" width="1000" height="170" align="center">
            <tr>
                <td align="center">所学课程：</td>
                <td colspan="5" height="50">
                    </a>
                    <a data-toggle="tooltip" data-placement="top"
                       title="填写与应聘职位相关的专业按类分。">
                        <textarea name="kecheng" style="resize:none" rows="1" cols="124"></textarea>
                    </a>
                </td>
            <tr>
                <td align="center">个人爱好：</td>
                <td colspan="5" width="518" height="150">
                    <a data-toggle="tooltip" data-placement="top"
                       title="填写内容与工作相关特长。">
                        <textarea name="aihao" style="resize:none" rows="8" cols="124"></textarea>
                    </a>
                </td>
            </tr>
            <tr>
                <td align="center">计算机/英语能力：</td>
                <td colspan="5" width="518" height="150">
                    </a>
                    <a data-toggle="tooltip" data-placement="top"
                       title="内容具体对办公软件操作熟练，英语能力四级起。">
                        <textarea name="able" style="resize:none" rows="8" cols="124"></textarea>
                    </a>
                </td>
            </tr>
            <tr>
                <td align="center">奖励/证书/科研成果：</td>
                <td colspan="5" width="518" height="150">
                    </a>
                    <a data-toggle="tooltip" data-placement="top"
                       title="奖励证书全写，科研成果，发表的论文文章等。。">
                        <textarea name="result" style="resize:none" rows="8" cols="124"></textarea>
                    </a>
                </td>
            </tr>
        </table>
        <ul class="pager">
            <li class="previous"><a href="#td3">&larr; 上一步</a></li>
            <li class="next"><a href="#td5">选择模板 &rarr;</a></li>
        </ul>
    </div>
</div>
<div class="jumbotron td" id="td5">
    <div class="moban">
        <div class="row">
            <div class=" col-xs-6 col-sm-6 col-xs-4 col-md-4">
                <div class="thumbnail">
                    <img src="img/muban1.png" alt="模板样式l">
                    <div class="caption">
                        <h3>模板样式 l</h3>
                        <input class="btn btn-primary" id="sb1" type="submit"  value="立即生成" >
                    </div>
                </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-xs-4 col-md-4">
                <div class="thumbnail">
                    <img src="img/muban2.png" alt="模板样式2">
                    <div class="caption">
                        <h3>模板样式 2</h3>
                        <input class="btn btn-primary" type="submit"  id="sb2" value="立即生成" formaction="muban2.php" formmethod="post" formtarget="_blank">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</form>
<!--脚部-->
<footer>
    <p class=" pull-right"><a href="#" id="back-to-top">回到顶部</a></p>
    <p class="bq"> ©by滑翔伞</p>
</footer>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="js/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/bootstrap.min.js"></script>
<script src="js/npm.js"></script>
<script>
    $("#sb1").click(function () {
        if($("#file").val()==""){
            alert("请选择图片后在操作！");
            $('body,html').animate({scrollTop: 0}, 1000);
            return false;
        }else{
            $("#sb1").submit();
        }
    });
    $("#sb2").click(function () {
        if($("#file").val()==""){
            alert("请选择图片后在操作！");
            $('body,html').animate({scrollTop: 0}, 1000);
            return false;
        }else{
            $("#sb2").submit();
        }
    });
    $(function () {
        $("[data-toggle='tooltip']").tooltip();
    });
    $(function () {
        //当点击跳转链接后，回到页面顶部位置
        $("#back-to-top").click(function () {
            $('body,html').animate({scrollTop: 0}, 1000);
            return false;
        });
    });
</script>
</body>
</html>