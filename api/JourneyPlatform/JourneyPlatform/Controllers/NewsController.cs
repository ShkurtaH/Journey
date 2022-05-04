using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Data;
using System.Data.SqlClient;
using JourneyPlatform.Models;

namespace JourneyPlatform.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public NewsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select NewsId, NewsTitle, NewsDescription, NewsCategory, convert(varchar(10), DateOfPosting, 120) as DateOfPosting  from dbo.News";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApiDatabase");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(News news)
        {
            string query = @"
                    insert into dbo.News values (@NewsTitle, @NewsDescription, @NewsCategory, @DateOfPosting)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApiDatabase");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@NewsTitle", news.NewsTitle);
                    myCommand.Parameters.AddWithValue("@NewsDescription", news.NewsDescription);
                    myCommand.Parameters.AddWithValue("@NewsCategory", news.NewsCategory);
                    myCommand.Parameters.AddWithValue("@DateOfPosting", news.DateOfPosting);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("News Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(News news2)
        {
            string query = @"update dbo.News set NewsTitle=@NewsTitle, NewsDescription = @NewsDescription, NewsCategory = @NewsCategory, DateOfPosting = @DateOfPosting where NewsId = @NewsId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApiDatabase");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@NewsId", news2.NewsId);
                    myCommand.Parameters.AddWithValue("@NewsTitle", news2.NewsTitle);
                    myCommand.Parameters.AddWithValue("@NewsDescription", news2.NewsDescription);
                    myCommand.Parameters.AddWithValue("@NewsCategory", news2.NewsCategory);
                    myCommand.Parameters.AddWithValue("@DateOfPosting", news2.DateOfPosting);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("News Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from dbo.News where NewsId = @NewsId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApiDatabase");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@NewsId", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("News Deleted Successfully");
        }
    }
}
