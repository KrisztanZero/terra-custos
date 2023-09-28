using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using Microsoft.IdentityModel.Tokens;
using terra_custos_web_api.DbContexts;
using terra_custos_web_api.Models;

namespace terra_custos_web_api.Services
{
    public class RoleNameService : IRoleNameService
    {
        private readonly TerraCustosContext _context;

        public RoleNameService(TerraCustosContext context)
        {
            _context = context;
        }

        public async Task<UserRole> GetRoleByName(string roleName)
        {
            var userRole = await _context.Set<UserRole>().FirstOrDefaultAsync(role => role.Name == roleName);
            if (userRole == null)
            {
                throw new Exception($"Role with the name: {roleName} does not found.");
            }
            return userRole;
        }
    }
}
