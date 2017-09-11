<?php
require "twitteroauth/autoload.php";

use Abraham\TwitterOAuth\TwitterOAuth;

$connection = new TwitterOAuth(
		"gHmJWFulyesyzHS0SZZNfoAce",//CONSUMER_KEY, 
		"dguECUpt6q8ci6ynhT9ZhIY9PvSfIbNMyIvsUF1t9vgxi6fjft",//CONSUMER_SECRET, 
		"4915215349-jUivKVnOOBbVll5ITxKt6pqrArcOZnijJ6iWvHa",//$access_token, 
		"DflhZX6rvj2CTNH9OnrxNODlVlq82PKhxdwEofuq5KNwm"//$access_token_secret
	);
header('Content-Type: application/json');
$content = json_encode($connection->get("statuses/user_timeline", ["count" => 2]));

echo $content;