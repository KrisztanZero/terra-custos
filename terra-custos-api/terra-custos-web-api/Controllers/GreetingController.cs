using Microsoft.AspNetCore.Mvc;

namespace terra_custos_web_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GreetingController : Controller
    {
        [HttpGet]
        public IActionResult Greeting()
        {
            return Ok("Welcome to Terra Custos web page!");
        }
    }
}
