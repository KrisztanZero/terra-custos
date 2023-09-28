using System.ComponentModel.DataAnnotations;

namespace terra_custos_web_api.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        [Required]
        public string Name { get; set; }
        public IEnumerable<Tour> Tours { get; set; }
    }
}
