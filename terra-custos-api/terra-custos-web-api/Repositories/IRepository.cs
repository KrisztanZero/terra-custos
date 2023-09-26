namespace terra_custos_web_api.Repositories
{
    public interface IRepository<T> 
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T> GetByIdAsync(int id);
        Task<T> CreateAsync(T entity);
        Task<T> UpdateAsync(int id,T entity);
        Task<bool> DeleteAsync(int id);
    }
}
