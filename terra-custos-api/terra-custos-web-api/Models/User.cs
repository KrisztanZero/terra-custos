using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace terra_custos_web_api.Models
{
    public class User : IdentityUser
    {
        [Required]
        [MaxLength(20)]
        public string NickName { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? LastLogin { get; set; }
        public List<Tour> Tours { get; set; }
    }
}