using System.ComponentModel.DataAnnotations;

namespace terra_custos_web_api.Models
{
    public class Tour
    {
        [Key]
        public int TourId { get; set; }
        public string TourName { get; set; }
        public string TourDescription { get; set;}
        public string TourType { get; set;}
    }
}
