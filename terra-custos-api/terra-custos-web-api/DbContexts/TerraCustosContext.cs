using Microsoft.EntityFrameworkCore;
using terra_custos_web_api.Models;

namespace terra_custos_web_api.DbContexts
{
    public class TerraCustosContext : DbContext
    {
        public TerraCustosContext(DbContextOptions<TerraCustosContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<UserRole> Roles { get; set; }
    }
}
