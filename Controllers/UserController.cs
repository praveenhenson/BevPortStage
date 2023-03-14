using BevPort.Models;
using BevPort.Helpers;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data;
using System.Net.Http.Headers;

namespace BevPort_Staging.Controllers
{
    public class UserController : Controller
    {
        private readonly IConfiguration configuration;
        private string clientBaseAddress = "";
        string EmailID = "";
        string UserType = "Buyer";
        public UserController(IConfiguration _configuration)
        {
            configuration = _configuration;
            clientBaseAddress = configuration["clientBaseAddress"];
        }
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult CreateUser()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(Users user)
        {
            if (ModelState.IsValid)
            {
                ViewBag.Message = "";
                DataTable responseObj = new DataTable();
                using (var client = new HttpClient())
                {
                    {
                        client.BaseAddress = new Uri("https://bevportfunctions20230303194850.azurewebsites.net/"); //live
                        client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                        HttpResponseMessage response = new HttpResponseMessage();
                        response = await client.PostAsJsonAsync("api/GetUserByEmail?code=eP9GuxaFm7K0KbbRLu5plJsqXJwciMuGGt4Btyu2K0NeAzFuLlGg_A==", user).ConfigureAwait(false);//live
                        if (response.IsSuccessStatusCode)
                        {
                            string result = response.Content.ReadAsStringAsync().Result;
                            Users? usr = new Users();
                            usr = JsonConvert.DeserializeObject<Users>(result);
                            int userid = usr!.ID;
                            if (userid != 0)
                            {
                                ViewBag.Message = "Email already Exist";
                                ResponseModel objResp = new ResponseModel();
                                objResp.ResponseCode = "fail";
                                objResp.ResponseMessage = "Email already exist.";
                                return Json(objResp);

                            }
                        }
                    }
                }
                string UserTypeVal = "Buyer";
                if (user.USERTYPE == 1)
                {

                    UserTypeVal = "Seller";
                }
                string Content = "Dear " + user.FIRSTNAME + " " + user.LASTNAME + ",\r\n Your Registration as a Beer \"+ usertype +\" was Successful\\r\\nWe are thrilled to welcome you to BevPort, the premier online marketplace for beer sellers and buyers. We have approved your registration, and we are excited to have you as a seller on our platform.\r\nAs a registered seller, you now have access to our vast network of beer buyers, making it easy for you to expand your customer base and grow your business. You can start listing your beers on our platform immediately, and our team is here to support you every step of the way.\r\nTo start, we would like to share with you some important details regarding your account:\r\n•\tYour Email ID is:" + user.EMAILID + "\r\n•\tYour password is: " + TempData["PASSWORD"] + "\r\n•\tYou can access our platform by logging in to your account.\r\nAs a registered seller on BevPort, you will also have access to our marketing and promotional materials. We believe that our collective efforts will increase the visibility of your beers and ultimately lead to the growth of your business.\r\nIf you have any questions, please feel free to reach out to us at [insert contact information]. Our team is always available to assist you.\r\nOnce again, welcome to BevPort. We are thrilled to have you as a part of our community and look forward to working with you to grow your business.\r\nCheers!\r\n[]\r\nBevPort Team\r\n";
                int ID; string PASSWORD; int UserType;
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri("https://bevportfunctions20230303194850.azurewebsites.net/");//live
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    HttpResponseMessage response = new HttpResponseMessage();
                    response = await client.PostAsJsonAsync("api/CreateUser?code=kf4nx49vL2EDcF0DAXssQwAxYWa7QjRjbYA3IbDpsKqKAzFu9Lz5qQ==", user).ConfigureAwait(false); //live
                    if (response.IsSuccessStatusCode)
                    {
                        string result = response.Content.ReadAsStringAsync().Result;
                        Users? usr = new Users();
                        usr = JsonConvert.DeserializeObject<Users>(result);
                        ID = usr!.ID;
                        EmailID = usr.EMAILID!;

                        TempData["ID"] = ID;
                        PASSWORD = usr.PASSWORD!;
                        UserType = usr.USERTYPE;
                        TempData["PASSWORD"] = PASSWORD;
                        TempData["UserType"] = UserType;
                        var result1 =  new EmailController().SendEmail(user.EMAILID!, "Welcome to BevPort - Your Registration as a Beer Seller was Successful", Content);
                        ResponseModel objResp = new ResponseModel();
                        objResp.ResponseCode = "success";
                        objResp.ResponseMessage = "Registration successful.";
                        return Json(objResp);
                    }
                }

            }
            return View();
        }
       
        
        public IActionResult CreateUserDetails()
        {
            var usertype = TempData["UserType"];
            ViewBag.UserType = usertype;
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> CreateUserDetails(UserDetails Model)
        {
            Model.USERID = Convert.ToInt32(TempData["ID"]);
            var usertype = TempData["UserType"];
            ViewBag.UserType = usertype;
            DataTable responseObj = new DataTable();
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://bevportfunctions20230303194850.azurewebsites.net/"); //live
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = new HttpResponseMessage();
                response = await client.PostAsJsonAsync("api/UserDetails?code=9YgziEOvtjaGZUrs6eWCnzU7EqknNxyI_9uVcrNTztd7AzFud8hXWA==", Model).ConfigureAwait(false);//live
                if (response.IsSuccessStatusCode)
                {
                    string result = response.Content.ReadAsStringAsync().Result;
                    //SendEmail(EmailID, "Welcome to BevPort", "Hello this is a Test");
                }
            }

          
            ResponseModel objResp = new ResponseModel();
            objResp.ResponseCode = "success";
            objResp.ResponseMessage = "Registration Successful.";
            return Json(objResp);


        }



        public IActionResult ForgotPassword() //new
        {

            return View();
        } //new

        [HttpPost]
        public async Task<IActionResult> ForgotPassword(Users user) //new
        {
            ViewBag.Message = "";
            DataTable responseObj = new DataTable();
            using (var client = new HttpClient())
            {
                {
                    client.BaseAddress = new Uri(clientBaseAddress);//local
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    HttpResponseMessage response = new HttpResponseMessage();
                    BaseURL objURL = new BaseURL();
                    response = await client.PostAsJsonAsync(objURL.GetUserByEmail, user).ConfigureAwait(false);//local


                    if (response.IsSuccessStatusCode)
                    {
                        // Code  for SendEmail.....  
                        string result = response.Content.ReadAsStringAsync().Result;
                        Users? usr = new Users();
                        usr = JsonConvert.DeserializeObject<Users>(result);
                        int userid = usr!.ID;
                        if (userid != 0)
                        {
                            Helpers.EncryptDecrypt objEncrpt = new Helpers.EncryptDecrypt();
                            var encryptStr_EMAILID = objEncrpt.EnryptString(user.EMAILID!);
                            string ResetPasswordLink = client.BaseAddress + "User/ResetPassword?email=" + encryptStr_EMAILID;//EncryptString
                            string Content = "Dear " + ",\r\nYour Forget Password is been successfull.\r\nPlease, click on the Reset Password link given below.:\r\n•\tLink :" + ResetPasswordLink + "\r\n•\tOur team is always available to assist you.\r\nOnce again, welcome to BevPort. We are thrilled to have you as a part of our community and look forward to working with you to grow your business.\r\nCheers!\r\n[]\r\nBevPort Team\r\n";

                            var result1 = new EmailController().SendEmail(user.EMAILID!, "Welcome to BevPort - Your Forget Password  is been Successful", Content);

                            //ViewBag.Message = "Forget Password successful. Please check your mail.";
                            //New Code here on 10-03-2023
                            ResponseModel objResp = new ResponseModel();
                            objResp.ResponseCode = "success";
                            objResp.ResponseMessage = "Forget Password successful. Please check your mail.";
                            return Json(objResp);

                        }
                        else
                        {
                            //ViewBag.Message = "Email doesnot Exist";
                            //New Code here on 10-03-2023
                            ResponseModel objResp = new ResponseModel();
                            objResp.ResponseCode = "fail";
                            objResp.ResponseMessage = "Email already exist.";
                            return Json(objResp);
                        }
                    }
                }
            }
            return View();
        }

        public IActionResult ResetPassword() //new
        {
            string _email = HttpContext.Request.Query["email"].ToString();

            Helpers.EncryptDecrypt objEncrpt = new Helpers.EncryptDecrypt();
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
                    //client.BaseAddress = new Uri("https://bevportfunctions20230303194850.azurewebsites.net/");//live
                    //client.BaseAddress = new Uri("http://localhost:7244/");//local
                    client.BaseAddress = new Uri(clientBaseAddress);//local


                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    HttpResponseMessage response = new HttpResponseMessage();

                    //response = await client.PostAsJsonAsync("api/GetUserByEmail?code=eP9GuxaFm7K0KbbRLu5plJsqXJwciMuGGt4Btyu2K0NeAzFuLlGg_A==", user).ConfigureAwait(false);//live
                    // response = await client.PostAsJsonAsync("api/GetUserByEmail", user).ConfigureAwait(false);//local

                    BaseURL objURL = new BaseURL();
                    response = await client.PostAsJsonAsync(objURL.GetUserByEmail, user).ConfigureAwait(false);//local

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
                            HttpResponseMessage response_Update = new HttpResponseMessage();
                            response_Update = await client.PostAsJsonAsync(objURL.UpdatePassword, user).ConfigureAwait(false); //local
                            if (response_Update.IsSuccessStatusCode)
                            {
                                string result_Update = response.Content.ReadAsStringAsync().Result;
                                Users? mailusr = new Users();
                                mailusr = JsonConvert.DeserializeObject<Users>(result_Update);
                                EmailID = mailusr.EMAILID!;
                                //TempData["ID"] = ID_retn;
                                PASSWORD_rtn = mailusr.PASSWORD!;
                                //TempData["PASSWORD"] = PASSWORD_rtn;
                                var result1 = new EmailController().SendEmail(mailusr.EMAILID!, "Welcome to BevPort - Your Reset Password is been Successful", Content);

                                // ViewBag.Message = "Reset Password successful. Please check your mail.";
                                //New Code here on 10-03-2023
                                ResponseModel objResp = new ResponseModel();
                                objResp.ResponseCode = "success";
                                objResp.ResponseMessage = "Reset Password successful. Please check your mail.";
                                return Json(objResp);


                            }
                            //Reset Password Ends   
                        }
                        else
                        {
                            //ViewBag.Message = "Email doesnot Exist";
                            //New Code here on 10-03-2023
                            ResponseModel objResp = new ResponseModel();
                            objResp.ResponseCode = "fail";
                            objResp.ResponseMessage = "Email already exist.";
                            return Json(objResp);


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
                        client.BaseAddress = new Uri(clientBaseAddress);
                        client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                        HttpResponseMessage response = new HttpResponseMessage();
                        BaseURL objURL = new BaseURL();
                        response = await client.PostAsJsonAsync(objURL.Login, user).ConfigureAwait(false);//local
                        if (response.IsSuccessStatusCode)
                        {
                            string result = response.Content.ReadAsStringAsync().Result;
                            Users? usr = new Users();
                            usr = JsonConvert.DeserializeObject<Users>(result);
                            int userid = usr!.ID;
                            if (userid != 0)
                            {
                                ViewBag.Message = "Login Successful";
                                ResponseModel objResp = new ResponseModel();
                                objResp.ResponseCode = "success";
                                objResp.ResponseMessage = "Login Successful.";
                                return Json(objResp);
                            }
                            else
                            {
                                ViewBag.Message = "Invalid Email ID/Password";
                                ResponseModel objResp = new ResponseModel();
                                objResp.ResponseCode = "fail";
                                objResp.ResponseMessage = "Invalid Email ID/Password";
                                return Json(objResp);
                            }
                        }
                    }
                }
            }
            else
            {
                ViewBag.Message = "Invalid Email ID/Password"; //new
                return View();
            }
            return View();
        }

    }
}
