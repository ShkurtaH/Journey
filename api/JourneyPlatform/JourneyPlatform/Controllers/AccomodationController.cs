using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using JourneyPlatform.Models;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;


namespace JourneyPlatform.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccomodationController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public AccomodationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
               select AccomodationCategories from
                dbo.Accomodation
               ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApiDatabase");
            SqlDataReader myReader;
            using (SqlConnection myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Accomodation acc)
        {
            string query = @"
              insert into dbo.Accomodation
              values (@AccomodationCategories)
               ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApiDatabase");
            SqlDataReader myReader;
            using (SqlConnection myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myCommand.Parameters.AddWithValue("@AccomodationCategories", acc.AccomodationCategories);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Accomodation acc)
        {
            string query = @"
              update dbo.Accomodation
              set AccomodationCategories=@AccomodationCategories
              where AccomodationId=@AccomodationId
               ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApiDatabase");
            SqlDataReader myReader;
            using (SqlConnection myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myCommand.Parameters.AddWithValue("AccomodationId", acc.AccomodationId);
                    myCommand.Parameters.AddWithValue("@AccomodationCategories", acc.AccomodationCategories);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
              delete from dbo.Accomodation
              where AccomodationId=@AccomodationId
               ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApiDatabase");
            SqlDataReader myReader;
            using (SqlConnection myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myCommand.Parameters.AddWithValue("@AccomodationId", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }

            return new JsonResult("Deleted Sucessfully");
        }

    }
}
