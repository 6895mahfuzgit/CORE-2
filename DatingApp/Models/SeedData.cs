using DatingApp.Context;
using DatingApp.Helpers;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.Models
{
    public class SeedData
    {


        private readonly ApplicationDbContext _context;

        public SeedData(ApplicationDbContext context)
        {
            _context = context;
        }



        public void SeedUsers()
        {
            var userData = System.IO.File.ReadAllText("Models/UserSeedData.json");
            var users = JsonConvert.DeserializeObject<List<User>>(userData);

            foreach (var user in users)
            {
                byte[] passwordHash, passwordSalt;

                PasswordHelper.CreatePasswordHash("password", out passwordHash, out passwordSalt);

                user.Password = passwordHash;
                user.PasswordSalt = passwordSalt;
                user.UserName = user.UserName.ToLower();

                _context.Users.Add(user);
            }
            _context.SaveChanges();

        }





    }
}
