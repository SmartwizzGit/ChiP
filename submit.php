<?php
	$fname = $_POST['fname'];
	$lname = $_POST['lname'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$gender = $_POST['gender'];
	$age = $_POST['age'];
	
	$data = $fname." ".$lname." ".$email." ".$phone." ".$gender." ".$age."<br/>
";
	$file = fopen("log.html","a");
	fwrite($file,$data);
	fclose($file);
	echo '<A HREF="log.html" TARGET="_BLANK">Data Received</A>';
?>
