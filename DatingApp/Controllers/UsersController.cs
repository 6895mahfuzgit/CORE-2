using AutoMapper;
using DatingApp.API.Dtos;
using DatingApp.Context;
using DatingApp.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DatingApp.Controllers
{

    [Authorize]
    [Route("api/[controller]")]
    [ApiController]

    public class UsersController : ControllerBase
    {

        private readonly IDatingRepository _context;
        private readonly IMapper _mapper;



        public UsersController(IDatingRepository context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }


        [HttpGet("allusers")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _context.GetUsers();

            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);

            return Ok(usersToReturn);
        }



        [HttpGet("getuserbyid/{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            var user = await _context.GetUser(id);

            var userToReturn = _mapper.Map<UserForDetailedDto>(user);

            return Ok(userToReturn);
        }




    }
}