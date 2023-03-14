using System.Xml.Linq;

namespace BevPort.Helpers
{
    public class BaseURL
    {
        private string _GetUserByEmail = "api/GetUserByEmail?code=eP9GuxaFm7K0KbbRLu5plJsqXJwciMuGGt4Btyu2K0NeAzFuLlGg_A==";
        public string GetUserByEmail { get{return _GetUserByEmail; }}

        private string _CreateUser = "api/CreateUser?code=kf4nx49vL2EDcF0DAXssQwAxYWa7QjRjbYA3IbDpsKqKAzFu9Lz5qQ==";
        public string CreateUser { get { return _CreateUser; } }

        private string _UserDetails = "api/UserDetails?code=9YgziEOvtjaGZUrs6eWCnzU7EqknNxyI_9uVcrNTztd7AzFud8hXWA==";
        public string UserDetails { get { return _UserDetails; } }

        private string _UpdatePassword = "api/UpdatePassword?code=eP9GuxaFm7K0KbbRLu5plJsqXJwciMuGGt4Btyu2K0NeAzFuLlGg_A==";
        public string UpdatePassword { get { return _UpdatePassword; } }

        private string _Login = "api/Login?code=6IJr4jvQgoqoxE4jN2311vAWXV7pdKfrL6XAf1oj3pMjAzFuKsko9w==";
        public string Login { get { return _Login; } }

        private string _senderEmailAddress = "alokpariharhashtag@gmail.com";
        public string senderEmailAddress { get { return _senderEmailAddress; } }

        private string _senderEmailName = "BevPort";
        public string senderEmailName { get { return _senderEmailName; } }

        private string _senderPassword = "ymszumqnhwepkmsq";
        public string senderPassword { get { return _senderPassword; } }

        private string _CreateContactUs = "api/CreateContactUs?code=CSkfQ05CLxmF469MmzByr46HCcsB27-wkQtsab49GyBuAzFuRU4R1A==";
        public string CreateContactUs { get { return _CreateContactUs; } }


    }
}
