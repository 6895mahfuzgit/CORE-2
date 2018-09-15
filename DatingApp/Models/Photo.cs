using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DatingApp.Models
{

    
    public class Photo
    {

        [Key]
        public int PhotoId { get; set; }


        public string Url { get; set; }

        public string Description { get; set; }

        public DateTime DateAdded { get; set; }

        public bool IsMain { get; set; }


        public User  User{ get; set; }


       
        [ForeignKey("UserId")]
        public int? UserId { get; set; }


    }
}