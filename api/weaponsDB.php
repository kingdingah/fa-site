<?php
function getGallery()
{
    $query = "select * FROM gallery ORDER BY g_id";
    try
    {
        global $db;
    	  $items = $db->query($query);
	      $item = $items->fetchAll(PDO::FETCH_ASSOC);
	      header("Content-Type: application/json", true);
	      echo '{"gallery": ' . json_encode($item) . '}';
    }
    catch(PDOException $e)
    {
	      echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}
?>
