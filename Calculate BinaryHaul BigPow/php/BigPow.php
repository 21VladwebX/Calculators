<?php
	
	// ini_set("display_errors",1);
	// error_reporting(E_ALL);
		
	$int = $_POST["int"];
	$mod = $_POST["mod"];
	$po = $_POST["pow"];
	$step = $_POST["step"];
	$pow = $po * $step;
	$qw = decbin($pow);
	// if($int == '' || $mod == '' || $po == '' || $step == ''){echo"Вы заполнтли не все поля!!!";
	// echo gettype($int); exit;}
	echo 'sadsa'.$mod.'<br/>';
	echo "Двоичный вид  "."'$qw'"."<br />";	
	$array = array();
	$i = 0;
	$count = strlen($qw);
	
	
	while ( $i <= $count) { 
		$array[$i] = $qw[$i];  
		$i+=1;
	} 
	
	// print_r($array);
	
	$ass = count($array);
	
	$resul = array();


	for($i = 0;$i <= count($array); $i+=1){
		if($i == 0){
			$resul[$i] = $int;
		}
		else{
			$result = pow($resul[$i-1],2) * pow($int,(int)$array[$i]); 
			$ac = floor($result / $mod);
			$ara = $result - ($ac * $mod);
			$resul[$i] = $ara; 
		}
	
	}
	// print_r($resul);
	echo '<br />'.$resul[$ass-2];
	

?>