<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>模版-2</title>
    <script src="js/html2canvas.js"></script>
    <script src="js/jquery.min.js"></script>
    <style>
        body {
            padding-top:20px;padding-bottom: 20px;
            text-align: center;
        }
        .btn3,.btn4{
            width: 100px;height: 30px;
            border: 0px;
            float:left;
            margin-right: 30px;
        }
        .bg {
            margin: 0 auto;
            width:795px;
            height:1200px;
        }
        input {
            border:0;outline:none;font-size: 15px
        }
        textarea{
            border:3px dotted #000000;outline:none;font-size: 17px
        }
        #div1 {
            border: 2px dodgerblue solid;
            width:68mm;
            height: 297mm;
            float: left;
            position: relative;
            padding-top: 5px;
            padding-left: 5px;
            font-weight: bold;
        }

        p {
            padding-left: 10px;
            padding-top: 10px;
            font-size: 35px;
            color: dodgerblue;
            font-weight: bold;
        }

        #div2 {
            border: 2px dodgerblue solid;
            width: 138mm;
            height: 297mm;
            float: left;
            position: relative;
            text-align: center;
            padding-top: 5px;
        }

        .box-top {

            color: dodgerblue;
            font-weight: bold;
            font-size: 20px;
        }

        #div1 .box {
            margin-top: 10%;margin-left: 1%;font-size: 18px;
        }
        #div2 .box {
            margin-top: 1%;margin-left: 2%;
        }
        .img {
            width: 150px;
            height: 180px;
        }
        .box-bom-top,.box-bom-bom{
            margin-top: 1%;text-align: left;
        }
        .texta{
            width: 431px;
            height: 120px;
        }
    </style>
</head>
<body>
<div>
    <input class="btn3" type="button" value="jpg导出">
<!--    <input class="btn4" type="button"value="word导出">-->
</div>
<script src="js/dayin.js"></script>
<div class="bg">
    <div id="div1">
        <p>个人简历</p>
        <div class="box">
            <div class="box-bom-top img">
                <?php
                $file = $_FILES['file'];//得到传输的数据
                //得到文件名称
                $name = $file['name'];
                $type = strtolower(substr($name,strrpos($name,'.')+1)); //得到文件类型，并且都转化成小写
                $allow_type = array('jpg','jpeg','gif','png'); //定义允许上传的类型
                //判断文件类型是否被允许上传
                if(!in_array($type, $allow_type)){
                    //如果不被允许，则直接停止程序运行
                    return ;
                }
                //判断是否是通过HTTP POST上传的
                if(!is_uploaded_file($file['tmp_name'])){
                    //如果不是通过HTTP POST上传的
                    return ;
                }
                $upload_path = "images/"; //上传文件的存放路径
                //开始移动文件到相应的文件夹
                $fileName=$upload_path.$file['name'];
                if(move_uploaded_file($file['tmp_name'], $fileName)){
                    echo "<img src='$fileName' width='150px' height='180px'>";
                }else{
                    echo "<img src='' width='150px' height='180px'>";
                }
                ?>
            </div>
        </div>
        <div class="box">
            <div class="box-bom-top">
                姓名：
                <?php echo $_POST['pname'] ?>

            </div>
        </div>
        <div class="box">
            <div class="box-bom-top">
                性别：
                <?php echo $_POST['xingbie'] ?>
            </div>
        </div>
        <div class="box">
            <div class="box-bom-top">
                年龄：
                <?php echo $_POST['time'] ?>
            </div>
        </div>
        <div class="box">
            <div class="box-bom-top">
                民族：
                <?php echo $_POST['minzu'] ?>
            </div>
        </div>
        <div class="box">
            <div class="box-bom-top">
                籍贯:
                <?php echo $_POST['home'] ?>
            </div>
        </div>
        <div class="box">
            <div class="box-bom-top">
                政治面貌:
                <?php echo $_POST['mian'] ?>
            </div>
        </div>
        <div class="box">
            <div class="box-bom-top">
                学历:
                <?php echo $_POST['xueli'] ?>
            </div>
        </div>
        <div class="box">
            <div class="box-bom-top">
                毕业学校:
                <?php echo $_POST['school'] ?>
            </div>
        </div>
        <div class="box">
            <div class="box-bom-top">
                所学专业:
                <?php echo $_POST['zhuanye'] ?>
            </div>
        </div>
        <div class="box">
            <div class="box-bom-top">
                联系电话:
                <?php echo $_POST['phone'] ?>
            </div>
        </div>
        <div class="box">
            <div class="box-bom-top">
                电子邮箱:
                <?php echo $_POST['emli'] ?>
            </div>
        </div>
    </div>
    <div id="div2">
        <div class="box">
            <div class="box-top" align="left">
                <td>求职意向</td>
            </div>
            <div class="box-bom-top">
                <td>目标职位:</td>
                <?php echo $_POST['gangwei'] ?>
            </div>
            <div class="box-bom-bom">
                <td>目标薪资:</td>
                <?php echo $_POST['money'] ?>
            </div>
        </div>
        <div class="box">
            <div class="box-top" align="left">
                <td>教育背景、学习经历</td>
            </div>
            <div class="box-bom-top texta">
                <?php echo $_POST['beijing'] ?>
            </div>
        </div>
        <div class="box">
            <div class="box-top" align="left">
                <td>工作经验/社会经历</td>
            </div>
            <div class="box-bom-top texta">
                <?php echo $_POST['jingyan'] ?>
            </div>
        </div>
        <div class="box">
            <div class="box-top" align="left">
                <td>所学课程</td>
            </div>
            <div class="box-bom-top texta">
                <?php echo $_POST['kecheng'] ?>
            </div>
        </div>
        <div class="box">
            <div class="box-top" align="left">
                <td>计算机/英语能力</td>
            </div>
            <div class="box-bom-top texta">
                <?php echo $_POST['able'] ?>
            </div>
        </div>
        <div class="box">
            <div class="box-top" align="left">
                <td>特长爱好</td>
            </div>
            <div class="box-bom-top texta">
                <?php echo $_POST['aihao'] ?>
            </div>
        </div>
        <div class="box">
            <div class="box-top" align="left">
                <td>拥有证书/奖励/科研成果</td>
            </div>
            <div class="box-bom-top texta" >
                <?php echo $_POST['result'] ?>
            </div>
        </div>

    </div>
</div>
</body>
</html>