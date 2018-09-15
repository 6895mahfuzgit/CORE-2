using DatingApp.Context;
using DatingApp.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace DatingApp.Controllers
{

    [Authorize]
    [Route("api/[controller]")]
    [ApiController]

    public class UsersController : ControllerBase
    {

        private readonly IDatingRepository _context;



        public UsersController(IDatingRepository context)
        {
            _context = context;
        }


        [HttpGet("allusers")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _context.GetUsers();

            return Ok(users);
        }



        [HttpGet("getuserbyid/{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            var user = await _context.GetUser(id);

            return Ok(user);
        }




    }
}