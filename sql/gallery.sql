
--
-- Table structure for table `gallery`
--

DROP TABLE IF EXISTS `gallery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET  character_set_client = utf8 */;
CREATE TABLE `gallery`
(
  `g_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `artist` varchar(100) DEFAULT NULL,
  `rating` varchar(45) DEFAULT NULL,
  `faves` varchar(10) DEFAULT NULL,
  `comments` varchar(10) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  `icon` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`g_id`)
)ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gallery`
--

/*!40000 ALTER TABLE `gallery` DISABLE KEYS */;
/*!40000 ALTER TABLE `gallery` ENABLE KEYS */;

INSERT INTO `gallery` VALUES (1, 'Godly Presence','Boosterpang','A','123','17', 'godlypresence.png','godlypresence-icon.png');
INSERT INTO `gallery` VALUES (2, 'Powerful','Bearra','M','82','11', 'powerful.png', 'powerful-icon.png');
INSERT INTO `gallery` VALUES (3, 'Sharing is Caring','Smilebomb','A','61','4', 'sharingiscaring.png', 'sharingiscaring-icon.png');
INSERT INTO `gallery` VALUES (4, 'Give Me a Taste','GCFMug','A','110','10', 'givemeataste.png', 'givemeataste-icon.png');
INSERT INTO `gallery` VALUES (5, 'A Day At The Spa','Dawmino','A','118','8', 'adayatthespa.png', 'adayatthespa-icon.png');
INSERT INTO `gallery` VALUES (6, 'He Hung','Milkbreaks','A','50','2', 'hehung.png', 'hehung-icon.png');
INSERT INTO `gallery` VALUES (7, 'Please Him','KingofAcesX','A','126','10', 'godlypresence.png', 'godlypresence-icon.png');
INSERT INTO `gallery` VALUES (8, "It's All Yours",'Raptoral','A','85','12', 'itsallyours.png', 'itsallyours-icon.png');
INSERT INTO `gallery` VALUES (9, 'Morning Stretches','Boosterpang','A','123','17', 'morningstretches.png', 'morningstretches-icon.png');
INSERT INTO `gallery` VALUES (10, 'Happy New Rear','Whatinsomnia','A','77','2', 'happynewrear.png', 'happynewrear-icon.png');
INSERT INTO `gallery` VALUES (11, 'Fabulous','FairyArtery','G','42','2', 'fabulous.png', 'fabulous-icon.png');
INSERT INTO `gallery` VALUES (12, 'Shwing!','ComfyCushion','A','92','12', 'shwing.png', 'shwing-icon.png');



UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2011-12-01  9:22:24
