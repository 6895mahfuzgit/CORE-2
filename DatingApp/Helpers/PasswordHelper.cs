using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.Helpers
{
    public static class PasswordHelper
    {

        public static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var generate = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = generate.Key;
                passwordHash = generate.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }


        }



        public static bool VerifyPasswordHash(string password, byte[] userPassword, byte[] userPasswordSalt)
        {
            using (var generate = new System.Security.Cryptography.HMACSHA512(userPasswordSalt))
            {
                var passwordHash = generate.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

                for (int i = 0; i < passwordHash.Length; i++)
                {
                    if (userPassword[i] != passwordHash[i])
                    {
                        return false;
                    }
                }
                return true;
            }


        }
    }
}
