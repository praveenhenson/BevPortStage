using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;
using System.Net;
using BevPort.Models;
using Newtonsoft.Json;
using System.Data;
using System.Net.Http.Headers;
using System.Configuration;

namespace BevPort.Controllers
{
    public class UserController : Controller
    {
        private readonly IConfiguration configuration;
        private string clientBaseAddress = "";
        string EmailID = "";
        public UserController(IConfiguration _configuration)
        {
            configuration = _configuration;
            clientBaseAddress = configuration["clientBaseAddress"];
        }
        public IActionResult Index()
        {

            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Index(Users user)
        {
            if (ModelState.IsValid)
            {
            ViewBag.Message = "";
            DataTable responseObj = new DataTable();
            using (var client = new HttpClient())
            {
                {
                    client.BaseAddress = new Uri("https://bevportfunctions20230303194850.azurewebsites.net/");
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    HttpResponseMessage response = new HttpResponseMessage();
                    response = await client.PostAsJsonAsync("api/GetUserByEmail?code=eP9GuxaFm7K0KbbRLu5plJsqXJwciMuGGt4Btyu2K0NeAzFuLlGg_A==", user).ConfigureAwait(false);
                    if (response.IsSuccessStatusCode)
                    {
                        string result = response.Content.ReadAsStringAsync().Result;
                        Users? usr = new Users();
                        usr = JsonConvert.DeserializeObject<Users>(result);
                        int userid = usr!.ID;
                        if (userid != 0)
                        {
                            ViewBag.Message = "Email already Exist";
                            return View();

                        }

                    }
                }

            }
            string usertype = "Buyer";
            if (user.USERTYPE == 1)
            {
                usertype = "Seller";
            }
                //string Content = "Your Registration as a Beer " + usertype + " was Successful\r\nDear " + user.FIRSTNAME + " " + user.LASTNAME + ",\r\nWe are thrilled to welcome you to BevPort, the premier online marketplace for beer sellers and buyers. We have approved your registration, and we are excited to have you as a seller on our platform.\r\nAs a registered seller, you now have access to our vast network of beer buyers, making it easy for you to expand your customer base and grow your business. You can start listing your beers on our platform immediately, and our team is here to support you every step of the way.\r\nTo start, we would like to share with you some important details regarding your account:\r\n•\tYour Email ID is:" + user.EMAILID + "\r\n•\tYour password is: " + TempData["PASSWORD"] + "\r\n•\tYou can access our platform by logging in to your account.\r\nAs a registered seller on BevPort, you will also have access to our marketing and promotional materials. We believe that our collective efforts will increase the visibility of your beers and ultimately lead to the growth of your business.\r\nIf you have any questions, please feel free to reach out to us at [insert contact information]. Our team is always available to assist you.\r\nOnce again, welcome to BevPort. We are thrilled to have you as a part of our community and look forward to working with you to grow your business.\r\nCheers!\r\n[]\r\nBevPort Team\r\n";
                string Content = "Dear " + user.FIRSTNAME + " " + user.LASTNAME + ",\r\n Your Registration as a Beer \"+ usertype +\" was Successful\\r\\nWe are thrilled to welcome you to BevPort, the premier online marketplace for beer sellers and buyers. We have approved your registration, and we are excited to have you as a seller on our platform.\r\nAs a registered seller, you now have access to our vast network of beer buyers, making it easy for you to expand your customer base and grow your business. You can start listing your beers on our platform immediately, and our team is here to support you every step of the way.\r\nTo start, we would like to share with you some important details regarding your account:\r\n•\tYour Email ID is:" + user.EMAILID + "\r\n•\tYour password is: " + TempData["PASSWORD"] + "\r\n•\tYou can access our platform by logging in to your account.\r\nAs a registered seller on BevPort, you will also have access to our marketing and promotional materials. We believe that our collective efforts will increase the visibility of your beers and ultimately lead to the growth of your business.\r\nIf you have any questions, please feel free to reach out to us at [insert contact information]. Our team is always available to assist you.\r\nOnce again, welcome to BevPort. We are thrilled to have you as a part of our community and look forward to working with you to grow your business.\r\nCheers!\r\n[]\r\nBevPort Team\r\n";
                int ID; string PASSWORD;
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://bevportfunctions20230303194850.azurewebsites.net/");
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = new HttpResponseMessage();
                response = await client.PostAsJsonAsync("api/CreateUser?code=kf4nx49vL2EDcF0DAXssQwAxYWa7QjRjbYA3IbDpsKqKAzFu9Lz5qQ==", user).ConfigureAwait(false);
                if (response.IsSuccessStatusCode)
                {
                    string result = response.Content.ReadAsStringAsync().Result;
                    Users? usr = new Users();
                    usr = JsonConvert.DeserializeObject<Users>(result);
                    ID = usr!.ID;
                    EmailID = usr.EMAILID!;
                    TempData["ID"] = ID;
                    PASSWORD = usr.PASSWORD!;
                    TempData["PASSWORD"] = PASSWORD;
                    SendEmail(user.EMAILID!, "Welcome to BevPort - Your Registration as a Beer Seller was Successful", Content);
                    return RedirectToAction("Registration");

                    }
                }
               
        }
            return View();
        }
        public IActionResult Registration()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Registration(UserDetails Model)
        {
            Model.USERID = Convert.ToInt32(TempData["ID"]);
            DataTable responseObj = new DataTable();
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://bevportfunctions20230303194850.azurewebsites.net/");
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = new HttpResponseMessage();
                response = await client.PostAsJsonAsync("api/UserDetails?code=9YgziEOvtjaGZUrs6eWCnzU7EqknNxyI_9uVcrNTztd7AzFud8hXWA==", Model).ConfigureAwait(false);

                if (response.IsSuccessStatusCode)
                {
                    string result = response.Content.ReadAsStringAsync().Result;
                    //SendEmail(EmailID, "Welcome to BevPort", "Hello this is a Test");
                }
            }
            ViewBag.Messages = "Registration Successful";
            return View();


        }
        [HttpPost]
        public ActionResult SendEmail(string receiver, string subject, string message)
        {
            try
            {
                // var senderEmail = new MailAddress("hellobevport@gmail.com", "BevPort");
                var senderEmail = new MailAddress("mcaashu214@gmail.com", "BevPort");
                var receiverEmail = new MailAddress(receiver, "Receiver");
                    var password = "xelntkafoavtckfk";
                    //var password = "brerjdkbtphvxnjt";
                    var sub = subject;
                    var body = message;
                var smtp = new SmtpClient
                {


                    EnableSsl = true,
                    UseDefaultCredentials = false,
                    Host = "smtp.gmail.com",
                        Port = 587,
                      
                        DeliveryMethod = SmtpDeliveryMethod.Network,
                      
                        Credentials = new NetworkCredential(senderEmail.Address, password)
                    };
                    using (var mess = new MailMessage(senderEmail, receiverEmail)
                    {
                        Subject = subject,
                        Body = body
                    })
                    {
                        smtp.Send(mess);
                    }
                    return View();
               
            }
            catch (Exception)
            {
                ViewBag.Error = "Some Error";
            }
            return View();
        }


        public IActionResult ForgetPassword() //new
        {

            return View();
        } //new

        [HttpPost]
        public async Task<IActionResult> ForgetPassword(Users user) //new
        {
            ViewBag.Message = "";
            DataTable responseObj = new DataTable();
            using (var client = new HttpClient())
            {
                {
                    client.BaseAddress = new Uri("https://bevportfunctions20230303194850.azurewebsites.net/");//live

                    //client.BaseAddress = new Uri("http://localhost:7244/");//local

                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    HttpResponseMessage response = new HttpResponseMessage();

                    response = await client.PostAsJsonAsync("api/GetUserByEmail?code=eP9GuxaFm7K0KbbRLu5plJsqXJwciMuGGt4Btyu2K0NeAzFuLlGg_A==", user).ConfigureAwait(false);//live

                    //response = await client.PostAsJsonAsync("api/GetUserByEmail", user).ConfigureAwait(false);//local

                    if (response.IsSuccessStatusCode)
                    {
                        // Code  for SendEmail.....  
                        string result = response.Content.ReadAsStringAsync().Result;
                        Users? usr = new Users();
                        usr = JsonConvert.DeserializeObject<Users>(result);
                        int userid = usr!.ID;

                      
                        if (userid != 0)
                        {
                            Common.EncryptDecrptFunc objEncrpt = new Common.EncryptDecrptFunc();
                            var encryptStr_EMAILID = objEncrpt.EnryptString(user.EMAILID!);
                            string ResetPasswordLink = client.BaseAddress + "User/ResetPassword?email=" + encryptStr_EMAILID;//EncryptString
                            string Content = "Dear " + ",\r\nYour Forget Password is been successfull.\r\nPlease, click on the Reset Password link given below.:\r\n•\tLink :" + ResetPasswordLink + "\r\n•\tOur team is always available to assist you.\r\nOnce again, welcome to BevPort. We are thrilled to have you as a part of our community and look forward to working with you to grow your business.\r\nCheers!\r\n[]\r\nBevPort Team\r\n";

                            SendEmail(user.EMAILID!, "Welcome to BevPort - Your Forget Password  is been Successful", Content);
                            ViewBag.Message = "Forget Password successful. Please check your mail.";
                        }
                        else
                        {
                            ViewBag.Message = "Email doesnot Exist";
                        }
                    }
                }
            }
            return View();
        }

        public IActionResult ResetPassword() //new
        {
            string _email = HttpContext.Request.Query["email"].ToString();

            Common.EncryptDecrptFunc objEncrpt = new Common.EncryptDecrptFunc();
            var decrptStr_EMAILID = objEncrpt.DecryptString(_email);

            ViewBag.EmailID = decrptStr_EMAILID;
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> ResetPassword(Users user) //new
        {
            ViewBag.Message = "";
            DataTable responseObj = new DataTable();
            using (var client = new HttpClient())
            {
                {
                    client.BaseAddress = new Uri("https://bevportfunctions20230303194850.azurewebsites.net/");//live

                    //client.BaseAddress = new Uri("http://localhost:7244/");//local

                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    HttpResponseMessage response = new HttpResponseMessage();

                    response = await client.PostAsJsonAsync("api/GetUserByEmail?code=eP9GuxaFm7K0KbbRLu5plJsqXJwciMuGGt4Btyu2K0NeAzFuLlGg_A==", user).ConfigureAwait(false);//live

                    //response = await client.PostAsJsonAsync("api/GetUserByEmail", user).ConfigureAwait(false);//local

                    if (response.IsSuccessStatusCode)
                    {
                        string PASSWORD_rtn;

                        string result = response.Content.ReadAsStringAsync().Result;
                        Users? usr = new Users();
                        usr = JsonConvert.DeserializeObject<Users>(result);
                        int userid = usr!.ID;
                        string NewResetPassword = user.PASSWORD;

                        if (userid != 0)
                        {
                            string Content = "Dear " + ",\r\nYour Reset Password is been successfull.\r\nYou can access our platform by logging in to your account by your new reset password.\r\n•\tNew Password :" + NewResetPassword + "\r\n•\tOur team is always available to assist you.\r\nOnce again, welcome to BevPort. We are thrilled to have you as a part of our community and look forward to working with you to grow your business.\r\nCheers!\r\n[]\r\nBevPort Team\r\n";


                            //Reset Password begins
                            HttpResponseMessage response_Update = new HttpResponseMessage();

                            response_Update = await client.PostAsJsonAsync("api/UpdatePassword?code=eP9GuxaFm7K0KbbRLu5plJsqXJwciMuGGt4Btyu2K0NeAzFuLlGg_A==", user).ConfigureAwait(false); //live

                            //response_Update = await client.PostAsJsonAsync("api/UpdatePassword", user).ConfigureAwait(false); //local

                            if (response_Update.IsSuccessStatusCode)
                            {
                                string result_Update = response.Content.ReadAsStringAsync().Result;
                                Users? mailusr = new Users();
                                mailusr = JsonConvert.DeserializeObject<Users>(result_Update);
                                EmailID = mailusr.EMAILID!;
                                //TempData["ID"] = ID_retn;
                                PASSWORD_rtn = mailusr.PASSWORD!;
                                //TempData["PASSWORD"] = PASSWORD_rtn;
                                SendEmail(mailusr.EMAILID!, "Welcome to BevPort - Your Reset Password is been Successful", Content);
                                ViewBag.Message = "Reset Password successful. Please check your mail.";
                            }
                            //Reset Password Ends   
                        }
                        else
                        {
                            ViewBag.Message = "Email doesnot Exist";
                        }
                    }
                }
            }//End using part
            return View();
        }

        public IActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Login(Users user)
        {

            if (ModelState.IsValid)
            {
                DataTable responseObj = new DataTable();
                using (var client = new HttpClient())
                {
                    {


                        client.BaseAddress = new Uri("https://bevportfunctions20230303194850.azurewebsites.net/");
                        client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                        HttpResponseMessage response = new HttpResponseMessage();
                        response = await client.PostAsJsonAsync("api/Login?code=6IJr4jvQgoqoxE4jN2311vAWXV7pdKfrL6XAf1oj3pMjAzFuKsko9w==", user).ConfigureAwait(false);
                        if (response.IsSuccessStatusCode)
                        {
                            string result = response.Content.ReadAsStringAsync().Result;
                            Users? usr = new Users();
                            usr = JsonConvert.DeserializeObject<Users>(result);
                            int userid = usr!.ID;
                            if (userid != 0)
                            {
                                ViewBag.Message = "Login Successful";
                                return View();
                                //return RedirectToAction("Homepage");
                            }
                            else
                            {
                                ViewBag.ErrorMessage = "Invalid Email ID/Password";
                                return View();
                            }
                        }
                    }
                }
            }
            return View();
        }
        public IActionResult Homepage()
        {
            return View();
        }
    }
}
