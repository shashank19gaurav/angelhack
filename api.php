<?php

  header('Content-Type: application/json; Charset=UTF-8'); 
  
  //CORS Support
  /* if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}
// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

}*/

  // $access=0;
  // if(isset($_POST['secret']) && !empty($_POST['secret'])) {
  //    if(strcmp($_POST['secret'],"LUGbatchof2017")==0)
  //     {
  //       $access=1;
  //     }
  //   }

  //   if($access!=1)
  //   {
  //     echo "Your Ip has been logged for Non Repudiation purposes and will be reported to Admin for further checks.";
  //     exit();
  //   }

  //	 $link= mysqli_connect("localhost","root","brieftut","angel");
  
  $link= mysqli_connect("localhost","root","manipal","angelhack") or die('Na ho paata');
  mysqli_query($link,'SET CHARACTER SET utf8');

  $nid=0;

  if(isset($_GET['city']) && !empty($_GET['city'])) {
 
        
        $query = mysqli_query($link,"select city_id,city,Hospitality10,Medical_Facility10,Population,Areakm2,Avg_TempC,Cleanliness,Average_rainfall_mm_inches,Average_rainy_days,Average_relative_humidity_,Mean_monthly_sunshine_hours,Scenery,Cost_of_Living,Transpotation,Rating,Descrip,lat,long from dataset where city like '%".$_GET['city']."%'  ") or die("could not establish a connection 1");
    
  }
 
  else
    $query = mysqli_query($link,"select city_id,city,Hospitality10,Medical_Facility10,Population,Areakm2,Avg_TempC,Cleanliness,Average_rainfall_mm_inches,Average_rainy_days,Average_relative_humidity_,Mean_monthly_sunshine_hours,Scenery,Cost_of_Living,Transpotation,Rating,Descrip,lat,`long` from dataset") or die("could not establish a connection 2");



  $row = array();
  $data = array();

  $i = 0;


  while ($row = mysqli_fetch_row($query)) 
  {
     
      $data["data"][$i]["cid"] = $row[0];
      $data["data"][$i]["cname"] = $row[1];
      $data["data"][$i]["hosp"] = $row[2];
      $data["data"][$i]["med"] = $row[3];
      $data["data"][$i]["pop"] = $row[4];
      $data["data"][$i]["area"] = $row[5];
      $data["data"][$i]["temp"] = $row[6];
      $data["data"][$i]["clean"] = $row[7];
      $data["data"][$i]["avgrain"] = $row[8];
      $data["data"][$i]["avgraindays"] = $row[9];
      $data["data"][$i]["avgrainhumid"] = $row[10];
      $data["data"][$i]["mmsunshinehrs"] = $row[11];
      $data["data"][$i]["scenery"] = $row[12];
      $data["data"][$i]["costofliving"] = $row[13];
      $data["data"][$i]["transportation"] = $row[14];
      $data["data"][$i]["rating"] = $row[15];
      $data["data"][$i]["descrip"] = $row[16];
      $data["data"][$i]["lat"] = $row[17];
      $data["data"][$i]["long"] = $row[18];
    $i++;

  }
  echo json_encode($data);

?>