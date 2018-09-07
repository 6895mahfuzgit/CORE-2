using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.Helpers
{
    public static class Extensions
    {

        public static void AddApplicationError(this HttpResponse response, string message)
        {

            response.Headers.Add("Application-Error",message);
            response.Headers.Add("Acess-Control-Expose-Header","ApplicationError");
            response.Headers.Add("Acess-Control-Allow-Origin","*");



        }

    }
}
