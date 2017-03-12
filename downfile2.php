<?php
function downfile()
{


    $filename=realpath("muban2.php");//文件名

    $date=date("Ymd-H:i:m");
    header( "Content-type:   application/octet-stream ");
    header( "Accept-Ranges:   bytes ");
    header( "Accept-Length: " .filesize($filename));
    header( "Content-Disposition:   attachment;   filename= {$date}.doc");
    echo file_get_contents($filename);
    readfile($filename);
}
downfile();

?>