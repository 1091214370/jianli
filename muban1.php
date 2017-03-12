<!DOCTYPE>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>模板页-1</title>
    <script src="js/html2canvas.js"></script>
    <script src="js/jquery.min.js"></script>
    <style>
        h1{
            color: steelblue;font-size: 50px;
        }
        body{
            text-align: center;
            padding:20px 350px 50px 350px;
        }
        .btn1,.btn2{
            width: 100px;height: 30px;
            border:none;
            margin-bottom: 30px;
        }
        form{
            text-align: left;
            margin-left: auto;
            margin-right: auto;
        }
        .bg span{
            width:100px;display:inline-block;
        }
        .bg {
            width:795px;
            height:1700px;
        }
        .grxx{
            float: left;  display: block;  width: 230px;  height:200px;  margin-right:20px;  padding: 0;text-align:left;
        }
        img{
            padding-left: 60px;
        }
        .p{
            width:210mm;
        }
        .xx{
            width: 230px;;margin: 5px 10px;padding: 0;text-align: left;
        }
        .gr{
            width:210mm;height:250px;margin: 0;padding: 0;
        }
        .qz {
            width:210mm;height:110px;margin: 0;padding: 0;text-align: left;
        }
        .qzyx{
            width:210mm;  height:50px;margin: 0;  padding: 0;text-align: left;
        }.qzyx1{
             width:210mm;  height:50px;  margin:0;  padding: 0;text-align: left;
         }
        .img{
            width:240px; height:200px;
        }
        .jy{
            width:210mm;height:123px;margin: 0;padding: 0;
        }
        input {
            border: none;
            outline: none;
        }

        textarea{
            float: left;border: none;overflow-y:visible;outline:none;
        }
    </style>
</head>
<body>
<div>
    <input class="btn2" type="button" value="jpg导出">
<!--    <input class="btn1" type="button" value="word导出">-->
</div>
<script src="js/dayin.js"></script>
<div class="bg">
    <div class="p">
        <h1 align="center">个人简历</h1>
        <hr>
    </div>
    <div class="gr">
        <div class="p">
            <p align="left"><strong>基本信息</strong></p>
            <hr>
        </div>
        <div class="grxx">
            <div class="xx"><span>姓名:</span><?php echo $_POST['pname'] ?></div>
            <div class="xx"><span>性别:</span><?php echo $_POST['xingbie'] ?></div>
            <div class="xx"><span>年龄:</span><?php echo $_POST['time'] ?></div>
            <div class="xx"><span>电话:</span><?php echo $_POST['phone'] ?></div>
            <div class="xx"><span>邮箱:</span><?php echo $_POST['emli'] ?></div>
        </div>
        <div class="grxx">
            <div class="xx"><span>民族:</span><?php echo $_POST['minzu'] ?></div>
            <div class="xx"><span>专业：</span><?php echo $_POST['zhuanye'] ?></div>
            <div class="xx"><span>毕业院校：</span><?php echo $_POST['school'] ?></div>
            <div class="xx"><span>学历：</span><?php echo $_POST['xueli'] ?></div>
            <div class="xx"><span>政治面貌：</span><?php echo $_POST['mian'] ?></div>
            <div class="xx"><span>地址：</span><?php echo $_POST['home'] ?></div>
        </div>
        <div class="grxx img">
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
    <div class="p">
        <p align="left"><strong>求职意向</strong></p>
        <hr>
    </div>
    <div class="qz">
        <div class="qzyx"><span>求职意向:</span>
            <td><?php echo $_POST['gangwei'] ?></td>
        </div>
        <div class="qzyx1"><span>目标薪资:</span>
            <td><?php echo $_POST['money'] ?></td>
        </div>
    </div>
    <div class="p">
        <p align="left"><strong>教育背景/学习经历</strong></p>
        <hr>
    </div>
    <div class="jy">
        <?php echo $_POST['beijing'] ?>
    </div>
    <div class="p">
        <p align="left"><strong>工作经验/社会经历</strong></p>
        <hr>
    </div>
    <div class="jy">
        <?php echo $_POST['jingyan'] ?>
    </div>
    <div class="p">
        <p align="left"><strong>所学课程</strong></p>
        <hr>
    </div>
    <div class="jy">
        <?php echo $_POST['kecheng'] ?>
    </div>
    <div class="p">
        <p align="left"><strong>个人爱好</strong></p>
        <hr><?php echo $_POST['aihao']?>
    </div>
    <div class="jy">
        <?php echo $_POST['aihao'] ?>
    </div>
    <div class="p">
        <p align="left"><strong>计算机/英语能力</strong></p>
        <hr>
    </div>
    <div class="jy">
        <?php echo $_POST['able'] ?>
    </div>
    <div class="p">
        <p align="left"><strong>奖励/证书/科研成果</strong></p>
        <hr>
    </div>
    <div class="jy">
        <?php echo $_POST['result'] ?>
    </div>
</div>
</body>
</html>