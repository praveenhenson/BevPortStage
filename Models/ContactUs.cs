using System.ComponentModel.DataAnnotations;

namespace BevPort.Models
{
    public class ContactUs
    {
        [Key]
        public int ID { get; set; }
        [Required(ErrorMessage = "Please enter name")]
        [StringLength(100)]
        public string? FIRSTNAME { get; set; }
        public string? LASTNAME { get; set; }
        public string? EMAILID { get; set; }
        public string? Content { get; set; }
    }
}
