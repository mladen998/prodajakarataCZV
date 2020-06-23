-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Jun 20, 2020 at 07:07 PM
-- Server version: 8.0.18
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prodajakarata`
--

-- --------------------------------------------------------

--
-- Table structure for table `aktivnosti`
--

DROP TABLE IF EXISTS `aktivnosti`;
CREATE TABLE IF NOT EXISTS `aktivnosti` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Naslov` varchar(100) NOT NULL,
  `Sadrzaj` text NOT NULL,
  `datum` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kupci`
--

DROP TABLE IF EXISTS `kupci`;
CREATE TABLE IF NOT EXISTS `kupci` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ime` varchar(60) NOT NULL,
  `prezime` varchar(60) NOT NULL,
  `email` varchar(100) NOT NULL,
  `brojKupljenihKarata` varchar(11) NOT NULL,
  `nazivUtakmice` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `utakmice`
--

DROP TABLE IF EXISTS `utakmice`;
CREATE TABLE IF NOT EXISTS `utakmice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tim1` varchar(100) NOT NULL,
  `tim2` varchar(100) NOT NULL,
  `datum` date NOT NULL,
  `vreme` time NOT NULL,
  `brojdostupnihkarata` int(11) NOT NULL,
  `mesto` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `utakmice`
--

INSERT INTO `utakmice` (`id`, `tim1`, `tim2`, `datum`, `vreme`, `brojdostupnihkarata`, `mesto`) VALUES
(9, 'CZV', 'BARSELONA', '2020-06-30', '15:00:00', 10000, 'SPANIJA, SANTIJAGO BERNABEU'),
(7, 'CZV', 'PARTIZAN', '2020-06-24', '15:00:00', 100, 'BEOGRAD,MARAKANA'),
(8, 'CZV', 'OFK BEOGRAD', '2020-06-26', '15:00:00', 2500, 'BEOGRAD, JNA');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
