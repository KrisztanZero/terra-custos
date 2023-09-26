using terra_custos_web_api.Models;

namespace terra_custos_web_api.Services
{
    public interface IRoleNameService
    {
        Task<UserRole> GetRoleByName(string roleName);
    }
}
