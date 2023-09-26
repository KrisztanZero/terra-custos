using Microsoft.EntityFrameworkCore;
using terra_custos_web_api.DbContexts;
using terra_custos_web_api.Models;
using terra_custos_web_api.Repositories;

namespace terra_custos_web_api.Services
{
    public class RoleService : IRoleService
    {
        private readonly IRepository<UserRole> _roleRepository;

        public RoleService(IRepository<UserRole> roleRepository)
        {
            _roleRepository = roleRepository;
        }

        public async Task<UserRole> CreateAsync(UserRole entity)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<UserRole>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<UserRole> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<UserRole> UpdateAsync(int id, UserRole entity)
        {
            throw new NotImplementedException();
        }
    }
}
