using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace terra_custos_web_api.Models
{
    public class Tour
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string TourId { get; set; }
        [Required]
        [StringLength(50)]
        public string TourName { get; set; }
        [Required]
        public string TourDescription { get; set;}
        [Required]
        public string TourType { get; set;}
        [Required]
        public decimal TourPrice { get; set; } = 0;
        [Required]
        public string CreatedByUserId { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public DateTime LastModifiedDate { get; set;}
        public DateTime ClosedDate { get; set; }
    }
}