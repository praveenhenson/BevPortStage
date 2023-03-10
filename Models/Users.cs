using System.ComponentModel.DataAnnotations;

namespace BevPort.Models
{
    public class Users
    {
        public int ID { get; set; }
        public string? FIRSTNAME { get; set; }
        public string? LASTNAME { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid Email Address.")]
        public string? EMAILID { get; set; }
        public int USERTYPE { get; set; }
        public string? PASSWORD { get; set; }
    }
}
