using DatingApp.Context;
using DatingApp.Interfaces;
using DatingApp.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.Repository
{
    public class DatingRepositoty : IDatingRepository

    {

        private readonly ApplicationDbContext _context;

        public DatingRepositoty(ApplicationDbContext context)
        {
            _context = context;
        }






        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<User> GetUser(int userId)
        {


            var user = await _context.Users
                               .Include(u => u.Photos)
                               .FirstOrDefaultAsync(u => u.UserId == userId);

            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users
                                .Include(u => u.Photos)
                                .ToListAsync();


            return users;

        }

        public async Task<bool> SaveAll()
        {

            return await _context.SaveChangesAsync() > 0;

        }
    }
}
