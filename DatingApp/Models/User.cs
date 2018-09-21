using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.Models
{


    public class User
    {
        [Key]
        public int UserId { get; set; }

        public string Username { get; set; }

        public byte[] Password { get; set; }

        public byte[] PasswordSalt { get; set; }


        public string Gender { get; set; }
        public DateTime? DateOfBirth { get; set; }

        public string knownAs { get; set; }


        public DateTime? Created { get; set; }
        public DateTime? LastActive { get; set; }


        public string Introduction { get; set; }

        public string LookingFor { get; set; }

        public string Interests { get; set; }


        public string City { get; set; }

        public string Country { get; set; }



        public ICollection<Photo> Photos { get; set; }





        public User()
        {
            Photos = new List<Photo>();
        }





    }
}
