using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using terra_custos_web_api.Models;

namespace terra_custos_web_api.DbContexts
{
    public class TerraCustosContext : IdentityDbContext
    {
        public TerraCustosContext(DbContextOptions options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<Tour> Tours { get; set; }
    }
}
