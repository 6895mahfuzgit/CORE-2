using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.Context;
using DatingApp.Helpers;
using DatingApp.Interfaces;
using DatingApp.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.Repository
{



   
    public class AuthRepository : IAuthRepository
    {
        private readonly ApplicationDbContext _context;

        public AuthRepository(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task<User> Register(User user, string password)
        {
            byte[] passwordHash, saltHash;

            PasswordHelper.CreatePasswordHash(password, out passwordHash, out saltHash);

            user.Password = passwordHash;
            user.PasswordSalt = saltHash;

            await _context.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }




        public async Task<User> Login(string userName, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == userName);

            if (user == null)
            {
                return null;
            }

            if (!PasswordHelper.VerifyPasswordHash(password, user.Password, user.PasswordSalt))
            {
                return null;
            }

            return user;
        }



        public async Task<bool> UserExists(string userName)
        {
            if (await _context.Users.AnyAsync(u => u.Username == userName))
            {
                return true;
            }
            return false;
        }



    }
}
