<?php/*

function getData($cid)
{
	$ch = curl_init();  
	$url='http://hack.mitportals.in/api.php?cid='.$cid;
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);		 
    $res=curl_exec($ch);
    curl_close($ch);
    return $res;
}
//a=src,b=destin,c=1,2,3
if(isset($_GET['a'])&&isset($_GET['b'])&&isset($_GET['c']))
{
	$s=$_GET['a'];
	$d=$_GET['b'];
	$arr=$_GET['c'];
	$arr=split(',', $arr);
	/*for($i=0;$i<count($arr);$i++)
		var_dump($arr[$i]);
	*/
	// $alldata=array();
	// $alldata[0]=json_decode(getData($s));
	// $alldata[1]=json_decode(getData($d));
		/*
		$data = array();
		$data["data"] = array();

		$t=getData($s);		

		$data["data"][$i]["cid"] = json_decode($t, true)["data"][0]["cid"];
	    $data["data"][$i]["cname"] = json_decode($t, true)["data"][0]["cname"];
	    $data["data"][$i]["hosp"] = json_decode($t, true)["data"][0]["hosp"];
	    $data["data"][$i]["med"] = json_decode($t, true)["data"][0]["med"];
	    $data["data"][$i]["pop"] = json_decode($t, true)["data"][0]["pop"];
	    $data["data"][$i]["area"] =json_decode($t, true)["data"][0]["area"];
	    $data["data"][$i]["temp"] = json_decode($t, true)["data"][0]["temp"];
	    $data["data"][$i]["clean"] = json_decode($t, true)["data"][0]["clean"];
	    $data["data"][$i]["avgrain"] = json_decode($t, true)["data"][0]["avgrain"];
	    $data["data"][$i]["avgraindays"] = json_decode($t, true)["data"][0]["avgraindays"];
	    $data["data"][$i]["avgrainhumid"] = json_decode($t, true)["data"][0]["avgrainhumid"];
	    $data["data"][$i]["mmsunshinehrs"] = json_decode($t, true)["data"][0]["mmsunshinehrs"];
	    $data["data"][$i]["scenery"] = json_decode($t, true)["data"][0]["scenery"];
	    $data["data"][$i]["costofliving"] = 	 json_decode($t, true)["data"][0]["costofliving"];
	    $data["data"][$i]["transportation"] =  json_decode($t, true)["data"][0]["transportation"];
	    $data["data"][$i]["rating"] =  json_decode($t, true)["data"][0]["rating"];
	    $data["data"][$i]["descrip"] =  json_decode($t, true)["data"][0]["descrip"];
	    $data["data"][$i]["lat"] =  json_decode($t, true)["data"][0]["lat"];
	    $data["data"][$i]["lng"] =  json_decode($t, true)["data"][0]["lng"];

	    for($i=1;$i<count($arr);$i++)
	    {
	    		$t=getData($arr[$i]);		    
	    		$data["data"][$i]["cid"] = json_decode($t, true)["data"][0]["cid"];
	    $data["data"][$i]["cname"] = json_decode($t, true)["data"][0]["cname"];
	    $data["data"][$i]["hosp"] = json_decode($t, true)["data"][0]["hosp"];
	    $data["data"][$i]["med"] = json_decode($t, true)["data"][0]["med"];
	    $data["data"][$i]["pop"] = json_decode($t, true)["data"][0]["pop"];
	    $data["data"][$i]["area"] =json_decode($t, true)["data"][0]["area"];
	    $data["data"][$i]["temp"] = json_decode($t, true)["data"][0]["temp"];
	    $data["data"][$i]["clean"] = json_decode($t, true)["data"][0]["clean"];
	    $data["data"][$i]["avgrain"] = json_decode($t, true)["data"][0]["avgrain"];
	    $data["data"][$i]["avgraindays"] = json_decode($t, true)["data"][0]["avgraindays"];
	    $data["data"][$i]["avgrainhumid"] = json_decode($t, true)["data"][0]["avgrainhumid"];
	    $data["data"][$i]["mmsunshinehrs"] = json_decode($t, true)["data"][0]["mmsunshinehrs"];
	    $data["data"][$i]["scenery"] = json_decode($t, true)["data"][0]["scenery"];
	    $data["data"][$i]["costofliving"] = 	 json_decode($t, true)["data"][0]["costofliving"];
	    $data["data"][$i]["transportation"] =  json_decode($t, true)["data"][0]["transportation"];
	    $data["data"][$i]["rating"] =  json_decode($t, true)["data"][0]["rating"];
	    $data["data"][$i]["descrip"] =  json_decode($t, true)["data"][0]["descrip"];
	    $data["data"][$i]["lat"] =  json_decode($t, true)["data"][0]["lat"];
	    $data["data"][$i]["lng"] =  json_decode($t, true)["data"][0]["lng"];
	    }



	var_dump(json_encode($data));
	//
	//

}*/
?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Basic Page Needs
    ================================================== -->
    <meta charset="utf-8">
    <!--[if IE]><meta http-equiv="x-ua-compatible" content="IE=9" /><![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
   <title>CodeTrip | Visualise</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
        
	
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
	<!-- ==============================================
	Stylesheet
	=============================================== -->
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
	<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="css/animate.css" />
	<link rel="stylesheet" type="text/css" href="css/superslides.css">
	
	<!-- ==============================================
	Google Fonts
	=============================================== -->
	<link href='http://fonts.googleapis.com/css?family=Lato:400,700,900' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Merriweather:400,300italic' rel='stylesheet' type='text/css'>
	
	
	<!-- Custom Stylesheet -->
	<link rel="stylesheet" type="text/css" href="css/style.css" />
    
    <script type="text/javascript" src="js/modernizr.min.js"></script>
	
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
	


</head>

<body onload="disp('http://hack.mitportals.in/api.php?gpath=1&c1=1&c2=4')">
	
	<!-- BANNER SECTION -->
	<section class="section banner">
		<div class="wrap-circle">
			<div class="circle-1">
				<div class="circle-2">
					<div class="logo">
						<h2 style="margin:auto;"> <span>Code</span>Trip</h2>
						<br/>
						<div class="roles" style="text-align: center;">

							<div>Plan it.</div>
							<div>Visualise it.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="wrap-overlay"></div>
		
		<div id="slides">
			<div class="slides-container">
			  <img src="images/slide-2.jpg" alt="Abhinav">
			  <img src="images/slide-1.jpg" alt="Agrawal">
			</div>

		</div> <!-- -->
	</section>
	
	
	<!-- NAVBAR SECTION -->
	<div class="navbar navbar-default main-menu"> 
	  <div class="container">
		<div class="navbar-header">
          <!--<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button> -->
          <a class="navbar-brand" href="index.html" data-slide="1">
			<div class="logo">
				<h2><span>Code</span>Trip</h2>
				<div>Road-trip visualizer</div>
			</div>
		  </a>
        </div>
        <!--<div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
			 
			 <li data-slide="1"><a href="#" >Home</a></li>
			 <li data-slide="2"><a href="#about" >About</a></li>
			 <li data-slide="4"><a href="#exp" >Experience</a></li>
			 <li data-slide="5"><a href="#achieve" >Achievments</a></li>
			 <li data-slide="8"><a href="#contact" >Contact Me</a></li>
			<nav id="about"></nav>
          </ul>
          
        </div> -->
      </div>
    </div>
	<nav id="about"></nav>
	
	
	<nav id="iten"></nav>
	<!-- EXPERIENCE SECTION -->
	<section class="section about" data-slide="3">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<div class="title">
						<h2 class="title-section wow fadeInDown">Itenerary</h2>
						<div class="separator_wrapper wow fadeIn">
							<div class="separator_first_circle">
								<div class="separator_second_circle_grey"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">

				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					
					<div class="clearfix"></div>					
					<div class="col-xs-12 col-sm-6 col-md-6 col-md-offset-1 col-lg-10 col-lg-offset-1">
						<div class="years2" id="abi">							
						</div>					
					</div>
				</div>

				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="title">
							<h2 class="title-section wow fadeInDown">Change Path</h2>
							<div class="separator_wrapper wow fadeIn">
								<div class="separator_first_circle">
									<div class="separator_second_circle_grey"></div>
								</div>
							</div>
							<button type="submit" class="btn btn-default btn-primary" id="add">Add a stop</button>
							<button type="submit" class="btn btn-default btn-primary" id="rem">Remove a stop</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		
		
		
	</section>
	
	<nav id="achieve"></nav>
	<section class="section services" data-slide="4">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-15 col-lg-12">
					<div class="title">
						<h2 class="title-section wow fadeInDown">Example Road Trips</h2>
						<div class="separator_wrapper wow fadeIn">
							<div class="separator_first_circle">
								<div class="separator_second_circle_grey"></div>
							</div>
						</div>
						<p class="subtitle wow fadeInDown">“Some beautiful paths can't be discovered without getting lost.”<br>- Eril Ozan</p>
					</div>
				</div>
				<div class="clearfix"></div>
				
				<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 servbox" onclick="disp('http://hack.mitportals.in/api.php?gpath=1&c1=1&c2=4')">
					<div class="fa fa-book"></div>
					<div class="desc">
						<h4>Bangalore-Kolkata</h4>
						<p>asdsadasd</p>
					</div>
				</div>
				
				<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 servbox" onclick="disp('http://hack.mitportals.in/api.php?gpath=1&c1=2&c2=3')">
					<div class="fa fa-book"></div>
					<div class="desc">
						<h4>Mumbai-Patna</h4>
						<p>asdsadasd</p>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 servbox" onclick="disp('http://hack.mitportals.in/api.php?gpath=1&c1=1&c2=4')">
					<div class="fa fa-book"></div>
					<div class="desc">
						<h4>Bangalore-Kolkata</h4>
						<p>asdsadasd</p>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 servbox" onclick="disp('http://hack.mitportals.in/api.php?gpath=1&c1=1&c2=4')">
					<div class="fa fa-book"></div>
					<div class="desc">
						<h4>Bangalore-Kolkata</h4>
						<p>asdsadasd</p>
					</div>
				</div>
				<div class="clearfix"></div>
				<hr>
				
			</div>
		</div>
	</section>
	

	
	
	
	
	<script>
		
		function disp(myurl)
		{
				var result=""
				console.log("sdf");
				$.ajax({
			        url: myurl, 
			        success: function(result){
			          console.log(result.data.length);
			            console.log(result.data[0].long + " --  ");
			          }
			    }).done(function(result) {
			      		var cont = "";
			      		var abi=document.getElementById('abi');
			      		for(var i=0;i<result.data.length;i++)	      					
			      			cont+='<div class="row item wow fadeInDown">\
			      							<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">\
			      								<div class="year">\
			      									'+(i+1)+'\
			      								</div>\
			      							</div>\
			      							<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">\
			      								<div class="desc">\
			      									<h4 class="wow lightSpeedIn">'+result.data[i].cname+'</h4>\
			      									<p class="wow slideInLeft">'+result.data[i].descrip+'</p>\
			      								</div>\
			      							</div>\
			      						</div>'
			      		document.getElementById('abi').innerHTML=cont;


			      		//document.getElementById('add').addEventListener("click", function(){ alert(myurl); });
			      		//document.getElementById('rem').addEventListener("click", function(){ alert(myurl); });


			    });
			}

		
	</script>
	
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/waypoints.min.js"></script>
	<script type="text/javascript" src="js/jquery.superslides.js"></script>
	<script type="text/javascript" src="js/wow.min.js"></script>
	<script type='text/javascript' src='https://maps.google.com/maps/api/js?sensor=false&#038;ver=4.1.5'></script>
	<script type="text/javascript" src="js/jquery.knob.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/script.js"></script>	
</body>
</html>


