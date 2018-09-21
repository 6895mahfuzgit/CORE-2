using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using DatingApp.API.Dtos;

using DatingApp.Helpers;
using DatingApp.Interfaces;
using DatingApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;


namespace DatingApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {


        private readonly IAuthRepository _authRepository;
        private readonly IConfiguration _configuration;


        public AuthController(IAuthRepository authRepository, IConfiguration configuration)
        {
            _authRepository = authRepository;
            _configuration = configuration;
        }




        [HttpPost("register")]

        public async Task<IActionResult> Register([FromBody]UserForRegidterDto registerDto)
        {



            if (await _authRepository.UserExists(registerDto.Username))
            {
                ModelState.AddModelError("UserName", "User Name Already Exists");
            }




            registerDto.Username = registerDto.Username.ToLower();


            var userToCreate = new User
            {
                Username = registerDto.Username
            };


            var userCreated = _authRepository.Register(userToCreate, registerDto.Password);

            return StatusCode(201);
        }



        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]UserForLoginDto userForLogin)
        {



            var userLogin = await _authRepository.Login(userForLogin.Username.ToLower(), userForLogin.Password);


            if (userLogin == null)
            {
                return Unauthorized();
            }



            var tokenString = JwtTokenHelper.GetTokenByUserIdAndName(userLogin.Id.ToString(), userLogin.Username, _configuration.GetSection("AppSettings:Token").Value);


            return Ok(new { tokenString });
        }



    }
}