-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 05, 2021 at 11:51 AM
-- Server version: 10.3.27-MariaDB-0+deb10u1
-- PHP Version: 7.3.27-1~deb10u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cs230_u190100`
--

-- --------------------------------------------------------

--
-- Table structure for table `UserHomeAddress`
--

CREATE TABLE `UserHomeAddress` (
  `UserID` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `AddressLine1` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `AddressLine2` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Town` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `CountyCity` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Eircode` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='User Home Address Table';

--
-- Dumping data for table `UserHomeAddress`
--

INSERT INTO `UserHomeAddress` (`UserID`, `AddressLine1`, `AddressLine2`, `Town`, `CountyCity`, `Eircode`) VALUES
('2', 'Number 3', 'Bromstone Avenue', 'The Estate', 'Kildare', 'W9178Y2'),
('3', 'Number 9', 'Bromstone Avenue', 'The Estate', 'Kildare', 'W9178P9');

-- --------------------------------------------------------

--
-- Table structure for table `UserInformation`
--

CREATE TABLE `UserInformation` (
  `UserID` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Title` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `FirstName` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Surname` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `MobileNumber` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `EmailAddress` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='User Information Table';

--
-- Dumping data for table `UserInformation`
--

INSERT INTO `UserInformation` (`UserID`, `Title`, `FirstName`, `Surname`, `MobileNumber`, `EmailAddress`) VALUES
('2', 'Mr', 'Jordan', 'Smith', '0867823129', 'jordansmith12@email.com'),
('3', 'Mrs', 'Martha', 'Smith', '087723542', 'martinasmith@email.com');

-- --------------------------------------------------------

--
-- Table structure for table `UserShippingAddress`
--

CREATE TABLE `UserShippingAddress` (
  `UserID` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `AddressLine1` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `AddressLine2` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Town` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `CountyCity` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Eircode` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='User Shipping Address Table';

--
-- Dumping data for table `UserShippingAddress`
--

INSERT INTO `UserShippingAddress` (`UserID`, `AddressLine1`, `AddressLine2`, `Town`, `CountyCity`, `Eircode`) VALUES
('2', 'Number 3', 'Bromstone Avenue', 'The Estate', 'Kildare', 'W9178Y2'),
('3', 'Number 9', 'Bromstone Avenue', 'The Estate', 'Kildare', 'W9178P9');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `UserHomeAddress`
--
ALTER TABLE `UserHomeAddress`
  ADD PRIMARY KEY (`UserID`);

--
-- Indexes for table `UserInformation`
--
ALTER TABLE `UserInformation`
  ADD PRIMARY KEY (`UserID`);

--
-- Indexes for table `UserShippingAddress`
--
ALTER TABLE `UserShippingAddress`
  ADD PRIMARY KEY (`UserID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
