-- MySQL dump 10.16  Distrib 10.1.44-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: lyrics_bar
-- ------------------------------------------------------
-- Server version	10.1.44-MariaDB-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `song`
--

DROP TABLE IF EXISTS `song`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `song` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(40) NOT NULL,
  `artist` varchar(40) NOT NULL,
  `album` varchar(100) NOT NULL,
  `lyrics` mediumtext,
  `genre` varchar(100) NOT NULL,
  `year` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `song`
--

LOCK TABLES `song` WRITE;
/*!40000 ALTER TABLE `song` DISABLE KEYS */;
INSERT INTO `song` VALUES (1,'The Box','Roddy Ricch','Please Excuse Me For Being Antisocial','pulling out the coup out the lot','Hip-Hop/Rap',2019),(2,'Life Is Good','Future','Life Is Good (feat. Drake) - Single','                ','Hip-Hop/Rap',2020),(3,'Circles','Post Malone','Hollywood\'s Bleeding','','',0),(4,'Memories','Maroon 5','Memories - Single','','',0),(5,'Purple Rain','Prince','Purple Rain','I never meant to cause you any sorrow\r\nI never meant to cause you any pain\r\nI only wanted to one time to see you laughing\r\nI only wanted to see you\r\nLaughing in the purple rain\r\n\r\nPurple rain, purple rain\r\nPurple rain, purple rain\r\nPurple rain, purple rain\r\nI only wanted to see you\r\nBathing in the purple rain\r\n\r\nI never wanted to be your weekend lover\r\nI only wanted to be some kind of friend\r\nBaby, I could never steal you from another\r\nIt\'s such a shame our friendship had to end\r\n\r\nPurple rain, purple rain\r\nPurple rain, purple rain\r\nPurple rain, purple rain\r\nI only wanted to see you\r\nUnderneath the purple rain\r\n\r\nHoney, I know, I know\r\nI know times are changing\r\nIt\'s time we all reach out\r\nFor something new, that means you too\r\n\r\nYou say you want a leader\r\nBut you can\'t seem to make up your mind\r\nI think you better close it\r\nAnd let me guide you to the purple rain\r\n\r\nPurple rain, purple rain\r\nPurple rain, purple rain\r\nIf you know what I\'m singing about up here\r\nC\'mon, raise your hand\r\n\r\nPurple rain, purple rain\r\nI only want to see you\r\nOnly want to see you\r\nIn the purple rain\r\n','Pop',1984),(6,'Falling','Trevor Daniel','Homesick - EP','my last made me feel like I would never try again','Pop',2018),(7,'Good News','Mac Miller','Circles','going thru circles','Hip-Hop/Rap',2020),(9,'Don\'t','Bryson Tiller','Trapsoul','','',2015),(13,'Halftime','Young Thug','Barter 6','','Hip-Hop/Rap',2015),(22,'Exchange','Bryson Tiller','Trapsoul','this what happen when I think bout you\r\ngive me all of you in exchange for me','R&B/Soul',2015),(77,'Euphoria','Don Toliver','Heaven or Hell','                drowning in euphoria test','Hip-Hop/Rap',2020);
/*!40000 ALTER TABLE `song` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-17  0:03:00
