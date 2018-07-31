<?php

require dirname(__DIR__) . '/vendor/autoload.php';

$dotenv = new Dotenv\Dotenv(__DIR__);
$dotenv->load();


function env(string $key, string $default) {
    return getenv($key) ?: $default;
}