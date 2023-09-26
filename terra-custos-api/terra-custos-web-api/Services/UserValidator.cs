using terra_custos_web_api.Models;

namespace terra_custos_web_api.Services
{
    public class UserValidator
    {
        public bool IsValidUser(User user)
        {
            if (user == null)
            {
                return false;
            }
            if (string.IsNullOrWhiteSpace(user.Name)
            {
                return false;
            }
            if (!IsValidEmail(user.Email))
            {
                return false;
            }
            if (string.IsNullOrWhiteSpace(user.Password))
            {
                return false;
            }
            return true;
        }

        private bool IsValidEmail(string email)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr == email;
            }
            catch
            {
                return false;
            }
        }
    }
}
