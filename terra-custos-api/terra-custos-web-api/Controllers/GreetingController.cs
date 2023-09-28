using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace terra_custos_web_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GreetingController : Controller
    {
        [HttpGet("Greeting")]
        public IActionResult Greeting()
        {
            return Ok("Welcome to Terra Custos web page!");
        }
        [Authorize]
        [HttpGet("RegisteredWelcome")]
        public IActionResult RegisteredUserWelcome()
        {
            return Ok("My Beloved Registered User!");
        }
    }
}
