using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string UserName { get; set; }


        [Required]
        [MinLength(4,ErrorMessage ="Atleast 4 char")]
        public string Password { get; set; }

    }
}
