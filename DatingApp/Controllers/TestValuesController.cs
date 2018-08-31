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
    public class TestValuesController : Controller
    {

        private readonly ApplicationDbContext _context;



        public TestValuesController(ApplicationDbContext context)
        {
            _context = context;
        }



        [HttpGet("[action]")]
        public async Task<IEnumerable<TestValues>> Index()
        {
            var values = await _context.TestValueses.ToListAsync();
            return values;
        }









        protected override void Dispose(bool disposing)
        {

            if (disposing)
            {
                _context.Dispose();
            }

            base.Dispose(disposing);
        }
    }
}