SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS  `torch_batteries`;
CREATE TABLE `torch_batteries` (
  `number` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL COMMENT '显示到前端的产品名称',
  `name` varchar(32) NOT NULL COMMENT '前端内部路由字段、数据库表名',
  `subpro` int(32) DEFAULT NULL COMMENT '子产品数量',
  PRIMARY KEY (`title`),
  UNIQUE KEY `number` (`number`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='所有产品大类目概述';

insert into `torch_batteries`(`number`,`title`,`name`,`subpro`) values
('1','18650 Batteries','18650_batteries','0'),
('2','16340/RCR123A Batteries','16340/RCR123A_batteries','0');
DROP TABLE IF EXISTS  `products_summarize`;
CREATE TABLE `products_summarize` (
  `number` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL COMMENT '显示到前端的产品名称',
  `name` varchar(32) NOT NULL COMMENT '前端内部路由字段、数据库表名',
  `subpro` int(32) DEFAULT NULL COMMENT '子产品数量',
  PRIMARY KEY (`title`),
  UNIQUE KEY `number` (`number`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='所有产品大类目概述';

insert into `products_summarize`(`number`,`title`,`name`,`subpro`) values
('1','Flash Sale','flash_sale','0'),
('2','Rechargeable','rechargeable','2'),
('3','Accessories','accessories','2');
DROP TABLE IF EXISTS  `accessories`;
CREATE TABLE `accessories` (
  `number` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL COMMENT '显示到前端的产品名称',
  `name` varchar(32) NOT NULL COMMENT '前端内部路由字段、数据库表名',
  `subpro` int(32) DEFAULT NULL COMMENT '子产品数量',
  PRIMARY KEY (`title`),
  UNIQUE KEY `number` (`number`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='所有产品大类目概述';

insert into `accessories`(`number`,`title`,`name`,`subpro`) values
('1','Torch Batteries','torch_batteries','2'),
('2','Remote Pressure Switches','remote_pressure_switches','0');
DROP TABLE IF EXISTS  `products_detail`;
CREATE TABLE `products_detail` (
  `number` int(11) NOT NULL COMMENT '编号',
  `name` varchar(32) NOT NULL COMMENT '产品名称',
  `title` varchar(200) NOT NULL COMMENT '产品在前端展示的标题',
  `profile` varchar(2000) NOT NULL COMMENT '产品概述',
  `star` int(11) NOT NULL COMMENT '产品评级',
  `price` varchar(32) NOT NULL COMMENT '价格',
  `favouredPolicy` varchar(200) DEFAULT NULL COMMENT '优惠政策描述',
  `productionDate` date DEFAULT NULL COMMENT '生产日期',
  PRIMARY KEY (`number`,`name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='产品细节';

insert into `products_detail`(`number`,`name`,`title`,`profile`,`star`,`price`,`favouredPolicy`,`productionDate`) values
('1','olight_h1r_usb_rechargeable_led_','Olight H1R Nova 600 lumen compact rechargeable LED headlamp and torch','<strong>51.5g, 600 Lumens:</strong> This tiny rechargeable and waterproof headlamp from Olight can be removed from the headband and used as an angle torch. It has a removable pocket clip and magnetic tail for maximum versatility. The H1R is powered b ...                    ','4','89.95','or 4 payments of $22.49','2019-05-06');
DROP TABLE IF EXISTS  `rechargeable`;
CREATE TABLE `rechargeable` (
  `number` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL COMMENT '显示到前端的产品名称',
  `name` varchar(32) NOT NULL COMMENT '前端内部路由字段、数据库表名',
  `subpro` int(32) DEFAULT NULL COMMENT '子产品数量',
  PRIMARY KEY (`title`),
  UNIQUE KEY `number` (`number`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='所有产品大类目概述';

insert into `rechargeable`(`number`,`title`,`name`,`subpro`) values
('1','Rechargeable Torches','rechargeable_torches','0'),
('2','Rechargeable Headlamps','rechargeable_headlamps','0');
SET FOREIGN_KEY_CHECKS = 1;

