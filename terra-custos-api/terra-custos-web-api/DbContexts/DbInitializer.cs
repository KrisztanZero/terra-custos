using terra_custos_web_api.Models;

namespace terra_custos_web_api.DbContexts
{
    public class DbInitializer
    {
        private readonly TerraCustosContext _context;
        public DbInitializer(TerraCustosContext context)
        {
            _context = context;
        }
        public void Initializer()
        {
            _context.Database.EnsureCreated();
            if(!_context.Roles.Any())
            {
                var standardRole = new UserRole { Name = "standard" };
                var premiumRole = new UserRole { Name = "premium" };
                var editorRole = new UserRole { Name = "editor" };
                var adminRole = new UserRole { Name = "admin" };

                _context.Roles.AddRange(standardRole, premiumRole, editorRole,adminRole);
                _context.SaveChanges();
            }
        }
    }
}
