using BevPort.Helpers;
using BevPort.Models;
using BevPort_Staging.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Diagnostics;
using System.Net.Http.Headers;

namespace BevPort_Staging.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration configuration;
        private string clientBaseAddress = "";
        public HomeController(ILogger<HomeController> logger, IConfiguration _configuration)
        {
            _logger = logger;
            configuration = _configuration;
            clientBaseAddress = configuration["clientBaseAddress"];

        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult AboutUs()
        {
            return View();
        }
        public IActionResult Buyer()
        {
            return View();
        }
        public IActionResult Seller()
        {
            return View();
        }
        public IActionResult MembershipPlan()
        {
            return View();
        }

        public IActionResult ContactUs()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> ContactUs(ContactUs contact)
        {
            ResponseModel objResp = new ResponseModel();
            using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(clientBaseAddress);
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    HttpResponseMessage response = new HttpResponseMessage();
                    BaseURL objURL = new BaseURL();
                    response = await client.PostAsJsonAsync(objURL.CreateContactUs, contact).ConfigureAwait(false);

                    if (response.IsSuccessStatusCode)
                    {
                        string result = response.Content.ReadAsStringAsync().Result;
                        string Content = "Hi " + contact.FIRSTNAME + " " + contact.LASTNAME + "\n  Thankyou for Contacting us our Bevport Team will soon Contact you! \n  Have a great day!  \r\n Regards,  \n  BevPort Team ";
                    var result1 = new EmailController().SendEmail(contact.EMAILID!, "BevPort Contact", Content);
                    }
                    else
                    {                  
                    objResp.ResponseCode = "fail";
                    objResp.ResponseMessage = "Contact us fail.";
                    return Json(objResp);
                    }
             }
            objResp.ResponseCode = "success";
            objResp.ResponseMessage = "Thank you for contacting us.";
            return Json(objResp);
        }
        
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}