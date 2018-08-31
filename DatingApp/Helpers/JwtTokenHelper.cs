using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;

namespace DatingApp.Helpers
{
    public  static class JwtTokenHelper
    {

        public static string GetTokenByUserIdAndName (string userId, string userName, string tokenText)
        {

            var tokenHandler = new JwtSecurityTokenHandler();

            var key = Encoding.ASCII.GetBytes(tokenText);

            var tokenDescription = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier,userId),
                    new Claim(ClaimTypes.Name,userName)
                }),

                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key)
                    , SecurityAlgorithms.HmacSha512Signature)
            };



            var token = tokenHandler.CreateToken(tokenDescription);

            var output=tokenHandler.WriteToken(token);

            return output;

        }
    }
}
