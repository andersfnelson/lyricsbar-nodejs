-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;


-- ************************************** `user_table`

CREATE TABLE `user_table`
(
 `user_id`    int unsigned NOT NULL AUTO_INCREMENT ,
 `first_name` varchar(45) NULL ,
 `last_name`  varchar(45) NULL ,
 `username`   varchar(45) NOT NULL ,
 `password`   varchar(100) NOT NULL ,
 `email`      varchar(45) NULL ,
 `created_at` datetime NOT NULL ,
 `updated_at` datetime NULL ,

PRIMARY KEY (`user_id`)
);


-- ************************************** `song_table`

CREATE TABLE `song_table`
(
 `song_id` int unsigned NOT NULL AUTO_INCREMENT ,
 `user_id` int unsigned NULL ,
 `title`   varchar(100) NOT NULL ,
 `artist`  varchar(100) NOT NULL ,
 `album`   varchar(100) NOT NULL ,
 `lyrics`  mediumtext NOT NULL ,
 `genre`   varchar(100) NOT NULL ,
 `year`    int NOT NULL ,

PRIMARY KEY (`song_id`),
KEY `fkIdx_38` (`user_id`),
CONSTRAINT `FK_38` FOREIGN KEY `fkIdx_38` (`user_id`) REFERENCES `user_table` (`user_id`)
);


-- ************************************** `song_like_table`

CREATE TABLE `song_like_table`
(
 `song_id`  int unsigned NOT NULL ,
 `is_liked` boolean NOT NULL ,
 `user_id`  int unsigned NOT NULL ,

PRIMARY KEY (`is_liked`),
KEY `fkIdx_43` (`song_id`),
CONSTRAINT `FK_43` FOREIGN KEY `fkIdx_43` (`song_id`) REFERENCES `song_table` (`song_id`),
KEY `fkIdx_46` (`user_id`),
CONSTRAINT `FK_46` FOREIGN KEY `fkIdx_46` (`user_id`) REFERENCES `user_table` (`user_id`)
);








