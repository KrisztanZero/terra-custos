using Microsoft.AspNetCore.Mvc;
using terra_custos_web_api.Models;
using terra_custos_web_api.Services;

namespace terra_custos_web_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> RegisterUser(LoginUser user)
        {
            if (await _authService.RegisterUser(user))
            {
                return Ok("Signup Success");
            }
            return BadRequest("Something went wrong");
        }
        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginUser user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (await _authService.Login(user))
            {
                var tokenString = _authService.GenerateTokenString(user);
                return Ok($"Login Succesfull with token: {tokenString}");
            }
            return BadRequest();
        }
    }
}
