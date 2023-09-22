using System.ComponentModel.DataAnnotations;

namespace terra_custos_web_api.Models
{
    public class UserRole
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
    }
}
