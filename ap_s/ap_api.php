<?php


require 'phpmailer/PHPMailerAutoload.php';



function authSendEmail($from, $namefrom, $to, $nameto, $subject, $message)  
{ 

$date = date('m/d/Y h:i:s a ', time());

global $smtpServer ;  
global $port;  
global $username ;  
global $password ; 
global  $is_ssl;

$mail = new PHPMailer();

$mail->isSMTP();
$mail->SMTPDebug = 0;
$mail->Debugoutput = 'html';
$mail->CharSet = 'UTF-8';
$mail->Host = $smtpServer;
$mail->Port = $port;  

if ($is_ssl==1)
$mail->SMTPSecure = "ssl"; 

$mail->SMTPAuth = true;
$mail->Username = $username;
$mail->Password = $password;
$mail->setFrom($from,$namefrom);
$mail->addReplyTo($from);
$mail->addAddress($to, $nameto);
$mail->Subject = $subject;
$mail->msgHTML($message);
 


	if (!$mail->send()) {

		//echo "Mailer Error: " . $mail->ErrorInfo;
		file_put_contents('send_.log', $date.$mail->ErrorInfo.'\t\n', FILE_APPEND | LOCK_EX);
		return 1;
	} else {
		return 0;
	}
}




function getRealIpAddr()
{
  if (!empty($_SERVER['HTTP_CLIENT_IP']))
  //check ip from share internet
  {
    $ip=$_SERVER['HTTP_CLIENT_IP'];
  }
  elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
  //to check ip is pass from proxy
  {
    $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
  }
  else
  {
    $ip=$_SERVER['REMOTE_ADDR'];
  }
  return $ip;
}
