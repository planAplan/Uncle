<?php
$q = isset($_GET["name"]) ? $_GET["name"] : '';
 
if(empty($q)) {
    foreach ($_GET as $i) {
        echo $i.'<br />';
    }
    exit;
}
$servername = "xdm473700129.my3w.com";
$username = "xdm473700129";
$password = "20180707z";
$dbname = "xdm473700129_db";

$con = mysqli_connect($servername, $username, $password);
if (!$con)
{
    die('Could not connect: ' . mysqli_error($con));
}
// 选择数据库
mysqli_select_db($con, $dbname);
// 设置编码，防止中文乱码
mysqli_set_charset($con, "utf8");

function query ($tablename, $con, &$arr) {
    $sql = "SELECT * FROM $tablename";
    $result = mysqli_query($con, $sql);
    while ($row = mysqli_fetch_array($result)) {
        array_push($arr, $row);
    }
}

function deep_query (&$res, $con) {
    if (!(int)$res['subpro']) {
        $res['subpro'] = array();
        return;
    }
    $res['subpro'] = array();
    query($res['name'], $con, $res['subpro']);
    foreach($res['subpro'] as &$r) {
        deep_query($r, $con);
    }
}

$resultArr = array();
query($q, $con, $resultArr);
foreach($resultArr as &$res) {
    deep_query($res, $con);
}
// deep_query($q, $resultArr, $con);
// var_dump($resultArr);
echo json_encode($resultArr);
// $resultArr = array();
// while ($row = mysqli_fetch_array($result)) {
//     array_push($resultArr, $row);
// }
// echo json_encode($resultArr);

 
mysqli_close($con);
?>