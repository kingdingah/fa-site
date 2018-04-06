<?php
require 'Slim/Slim.php';
require 'gallerydb.php';
require 'database.php';
use Slim\Slim;
\Slim\Slim::registerAutoloader();

$app = new Slim();

$app->get('/gallery', 'getGallery');

$app->run();
?>
