using terra_custos_web_api.IRepositories;
using terra_custos_web_api.Models;

namespace terra_custos_web_api.Services
{
    public class TourService : ITourService
    {
        private readonly IGenericRepository<Tour> _repository;

        public TourService(IGenericRepository<Tour> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Tour>> GetAllAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<Tour> GetByIdAsync(int id)
        {
            return await _repository.GetByIdAsync(id);
        }

        public async Task<Tour> CreateAsync(Tour entity)
        {
            return await _repository.CreateAsync(entity);
        }

        public async Task<Tour> UpdateAsync(int id, Tour entity)
        {
            if (entity == null)
            {
                throw new InvalidDataException("Tour cannot be null!");
            }

            return await _repository.UpdateAsync(id, entity);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            return await _repository.DeleteAsync(id);
        }
    }
}
