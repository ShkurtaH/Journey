USE [master]
GO
/****** Object:  Database [journeydb]    Script Date: 5/4/2022 11:39:57 PM ******/
CREATE DATABASE [journeydb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'journeydb', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\journeydb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'journeydb_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\journeydb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [journeydb] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [journeydb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [journeydb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [journeydb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [journeydb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [journeydb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [journeydb] SET ARITHABORT OFF 
GO
ALTER DATABASE [journeydb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [journeydb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [journeydb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [journeydb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [journeydb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [journeydb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [journeydb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [journeydb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [journeydb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [journeydb] SET  DISABLE_BROKER 
GO
ALTER DATABASE [journeydb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [journeydb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [journeydb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [journeydb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [journeydb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [journeydb] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [journeydb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [journeydb] SET RECOVERY FULL 
GO
ALTER DATABASE [journeydb] SET  MULTI_USER 
GO
ALTER DATABASE [journeydb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [journeydb] SET DB_CHAINING OFF 
GO
ALTER DATABASE [journeydb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [journeydb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [journeydb] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [journeydb] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'journeydb', N'ON'
GO
ALTER DATABASE [journeydb] SET QUERY_STORE = OFF
GO
USE [journeydb]
GO
/****** Object:  Table [dbo].[Accomodation]    Script Date: 5/4/2022 11:39:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Accomodation](
	[AccomodationCategories] [nvarchar](50) NULL,
	[AccomodationId] [int] IDENTITY(1,1) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Location]    Script Date: 5/4/2022 11:39:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Location](
	[LocationCountry] [nvarchar](100) NULL,
	[LocationId] [int] IDENTITY(1,1) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[News]    Script Date: 5/4/2022 11:39:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[News](
	[NewsId] [int] IDENTITY(1,1) NOT NULL,
	[NewsTitle] [nvarchar](500) NULL,
	[NewsDescription] [nvarchar](500) NULL,
	[NewsCategory] [nvarchar](500) NULL,
	[DateOfPosting] [datetime] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[NewsCategory]    Script Date: 5/4/2022 11:39:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[NewsCategory](
	[NewsCategoryId] [int] IDENTITY(1,1) NOT NULL,
	[NewsCategoryName] [nvarchar](500) NULL
) ON [PRIMARY]
GO
USE [master]
GO
ALTER DATABASE [journeydb] SET  READ_WRITE 
GO
