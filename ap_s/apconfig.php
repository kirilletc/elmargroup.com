<?php

$v_c = 1; //  0 - Подключение через smtp - сервер необходимо заполнить параметры подключения
	  //  1 - отправка почты без натсройки параметров подключения

// smtp - сервер Параметры подключения в серверу необходимо заполнить если $v_c = 0 



$smtpServer = "smtp.yandex.ru";  
$port = "465";  // ssl - 465, 25
$username = "user";  
$password = "pass";
$is_ssl = 1; // yes - 1, no - 0


//Куда необходимо слать письмо
$to = "salida70@mail.ru, kvolkov@ya.ru";  

//от кого письмо необходимо указывать реальный адрес
$from = "info@elmargroup.com";  


// Тема письма  
$subject = "Заявка ElmarGroup.com"; 
// Заголовок в письме 
$mtitle = "ElmarGroup.com" ;

?>
