using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.Context;
using DatingApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class TestValuesController :ControllerBase
    {

        private readonly ApplicationDbContext _context;



        public TestValuesController(ApplicationDbContext context)
        {
            _context = context;
        }



        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var values = await _context.TestValueses.ToListAsync();

            return Ok(values);
        }



        [HttpGet("{id}")]
        public async Task<IActionResult> GetTaskValueById(int? id)
        {
            if (id == null)
            {
                return BadRequest();
            }

            var testValue = await _context.TestValueses.FirstOrDefaultAsync(t => t.Id == id);

            return Ok(testValue);
        }



        [HttpGet("{id}")]
        public async Task<IActionResult> DeleteTaskValueById(int? id)
        {
            if (id == null)
            {
                return BadRequest();
            }

            var testValue = await _context.TestValueses.FirstOrDefaultAsync(t => t.Id == id);

            return Ok(testValue);
        }


        [HttpPost]
        public async Task<IActionResult> UpdateTaskValueById([FromBody] TestValues value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var testValue = await _context.TestValueses.FirstOrDefaultAsync(t => t.Id == value.Id);

            return Ok(testValue);
        }












        
    }
}