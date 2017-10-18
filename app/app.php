<?php
require 'vendor/autoload.php';
use Telegram\Bot\Api;

const TOKEN = '468842881:AAGI68ZCubLbUo4JF4CDVZxmvBp14eBhYz4';
const CHAT_ID = '-218892414';

$telegram = new Api(TOKEN);
$name = $_POST['name'];
$phone = $_POST['phone'];

if ($name !== '' && $phone !== '') {
	$message = "Имя: ${name}\nТелефон: ${phone}";

	$response = $telegram->sendMessage([
	  'chat_id' => CHAT_ID, 
	  'text' => $message
	]);

	$messageId = $response->getMessageId();

	if ($messageId) {
		echo json_encode([
			'status' => 'success',
			'msg' => $messageId
		]);
	}
} else {
	echo json_encode([
		'status' => 'error',
		'msg' => 'Введите имя и телефон' 
	]);
}
