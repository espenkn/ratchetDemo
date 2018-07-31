<?php

require dirname(__FILE__) . '/vendor/autoload.php';

$dotenv = new Dotenv\Dotenv(__DIR__);
$dotenv->load();


function env(string $key, string $default) {
    return getenv($key) ?: $default;
}