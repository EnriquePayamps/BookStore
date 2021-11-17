using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.API.Controllers
{   
    [ApiController]
    [Route("api/[controller]")]

    public class BookController : Controller
    {
        [HttpGet]
        public async  Task<IActionResult> GetBooks()
        {
            using var client = new HttpClient();
            client.BaseAddress = new Uri("https://fakerestapi.azurewebsites.net/api/v1/Books");

            using HttpResponseMessage response = await client.GetAsync("");
            var responseContent = response.Content.ReadAsStringAsync().Result;
            response.EnsureSuccessStatusCode();

            return Ok(responseContent);

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBookById(int id) 
        {
            using var client = new HttpClient();
            client.BaseAddress = new Uri("https://fakerestapi.azurewebsites.net/api/v1/Books/");

            using HttpResponseMessage response = await client.GetAsync($"{id}");
            var responseContent = response.Content.ReadAsStringAsync().Result;
            response.EnsureSuccessStatusCode();

            return Ok(responseContent);

        }

        [HttpPost]
        public async Task<IActionResult> CreateBook([FromBody] object Book) 
        {
            using var client = new HttpClient();
            client.BaseAddress = new Uri("https://fakerestapi.azurewebsites.net/api/v1/Books");

            var content = new StringContent(JsonConvert.SerializeObject(Book), Encoding.UTF8, "application/Json");

            using HttpResponseMessage response = await client.PostAsync("Books", content);
            var responseContent = await response.Content.ReadAsStringAsync();

            response.EnsureSuccessStatusCode();

            return Ok(responseContent);

        }

        [HttpPut("{id}")]
        public async  Task<IActionResult> UpdateBook(int id , [FromBody] object book)
        {
            using var client = new HttpClient();
            client.BaseAddress = new Uri("https://fakerestapi.azurewebsites.net/api/v1/Books");

            var content = new StringContent(JsonConvert.SerializeObject(book), Encoding.UTF8, "application/Json");

            using HttpResponseMessage response = await client.PutAsync($"{id}", content);
            var responseContent = await response.Content.ReadAsStringAsync();
            response.EnsureSuccessStatusCode();

            return Ok(responseContent);
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            using var client = new HttpClient();
            client.BaseAddress = new Uri("https://fakerestapi.azurewebsites.net/api/v1/Books/");

            using HttpResponseMessage response = await client.DeleteAsync($"{id}");

            var responseContent = await response.Content.ReadAsStringAsync();
            
            response.EnsureSuccessStatusCode();

            return Ok(responseContent);
        }
    }
}
