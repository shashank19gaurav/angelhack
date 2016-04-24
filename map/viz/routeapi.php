<?php
	if (isset($_GET['s'])&&isset($_GET['d']))
	{
		if (isset($_GET['f']))
		{
			//code to get other nodes
		}
		else
		{
			$ch = curl_init();  
			 $url='http://hack.mitportals.in/api.php?cid='.$_GET['s'];
			    curl_setopt($ch,CURLOPT_URL,$url);
			    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
			//  curl_setopt($ch,CURLOPT_HEADER, false);			 
			    $src=curl_exec($ch);
			    $url='http://hack.mitportals.in/api.php?cid='.$_GET['d'];
			    curl_setopt($ch,CURLOPT_URL,$url);
			    $dst=curl_exec($ch);
			    curl_close($ch);
		}
		$err=1; //src and destination not selected
	}
	else
	{
		$ch = curl_init();  
			 $url='http://hack.mitportals.in/api.php?cid=1'.$_GET['s'];
			    curl_setopt($ch,CURLOPT_URL,$url);
			    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
			//  curl_setopt($ch,CURLOPT_HEADER, false);			 
			    $src=curl_exec($ch);
			    $url='http://hack.mitportals.in/api.php?cid=2'.$_GET['d'];
			    curl_setopt($ch,CURLOPT_URL,$url);
			    $dst=curl_exec($ch);
			    curl_close($ch);
	}

	/*$route=array();
	$src = json_decode($src);
	$dst = json_decode($dst);
	$route['data']=array();
	$route['data'][0]=$src;
	$route['data'][1]=$dst;
	echo json_encode($route);*/



	$src = json_decode($src);
	$dst = json_decode($dst);
	var_dump($src);
	// $i = 0;
	// while ($i!=2) {

	//     $data["data"][$i]["cid"] = $row[0];
	//     $data["data"][$i]["cname"] = $row[1];
	//     $data["data"][$i]["hosp"] = $row[2];
	//     $data["data"][$i]["med"] = $row[3];
	//     $data["data"][$i]["pop"] = $row[4];
	//     $data["data"][$i]["area"] = $row[5];
	//     $data["data"][$i]["temp"] = $row[6];
	//     $data["data"][$i]["clean"] = $row[7];
	//     $data["data"][$i]["avgrain"] = $row[8];
	//     $data["data"][$i]["avgraindays"] = $row[9];
	//     $data["data"][$i]["avgrainhumid"] = $row[10];
	//     $data["data"][$i]["mmsunshinehrs"] = $row[11];
	//     $data["data"][$i]["scenery"] = $row[12];
	//     $data["data"][$i]["costofliving"] = $row[13];
	//     $data["data"][$i]["transportation"] = $row[14];
	//     $data["data"][$i]["rating"] = $row[15];
	//     $data["data"][$i]["descrip"] = $row[16];
	//     $data["data"][$i]["lat"] = $row[17];
	//     $data["data"][$i]["lng"] = $row[18];
	//     $i++;
	// }
	// echo json_encode($data);


?>