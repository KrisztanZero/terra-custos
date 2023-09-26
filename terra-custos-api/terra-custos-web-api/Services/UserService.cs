using terra_custos_web_api.Models;
using terra_custos_web_api.Repositories;

namespace terra_custos_web_api.Services
{
    public class UserService : IUserService
    {
        private readonly IRepository<User> _userRepository;
        private readonly UserValidator _userValidator;

        public UserService(IRepository<User> userRepository, UserValidator userValidator)
        {
            _userRepository = userRepository;
            _userValidator = userValidator;
        }

        public async Task<IEnumerable<User>> GetAllAsync()
        {
            return await _userRepository.GetAllAsync();
        }

        public async Task<User> GetByIdAsync(int id)
        {
            return await _userRepository.GetByIdAsync(id);
        }

        public async Task<User> CreateAsync(User entity)
        {
            return await _userRepository.CreateAsync(entity);
        }

        public async Task<User> UpdateAsync(int id, User entity)
        {
            if(!_userValidator.IsValidUser(entity)) 
            {
                throw new InvalidDataException("Invalid user data.");
            }
            return await _userRepository.UpdateAsync(id, entity);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            return await _userRepository.DeleteAsync(id);
        }
    }
}
