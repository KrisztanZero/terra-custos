using Microsoft.EntityFrameworkCore;
using terra_custos_web_api.DbContexts;
using terra_custos_web_api.IRepositories;

namespace terra_custos_web_api.Repositories
{
    public class GenericRepository<T> : IRepository<T> where T : class
    {
        private readonly TerraCustosContext _context;

        public GenericRepository(TerraCustosContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            var entity = await _context.Set<T>().FindAsync(id);
            if (entity == null)
            {
                throw new Exception($"Entit wit ID: {id} not found.");
            }
            return entity;
        }

        public async Task<T> CreateAsync(T entity)
        {
            _context.Set<T>().Add(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task<T> UpdateAsync(int id,T entity)
        {
            var existingEntity = await _context.Set<T>().FindAsync(id);
            if (existingEntity == null)
            {
                throw new Exception($"Entity with ID {id} does not exist.");
            }

            _context.Entry(existingEntity).CurrentValues.SetValues(entity);
            await _context.SaveChangesAsync();
            return existingEntity;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var entity = await _context.Set<T>().FindAsync(id);
            if (entity == null) return false;
            _context.Set<T>().Remove(entity);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
