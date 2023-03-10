using BevPort.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Net.Mail;
using System.Net;

namespace BevPort.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult ContactUs()
        {

            return View();
        }
        [HttpPost]
        public IActionResult ContactUs(ContactUs contact)
        {
            //string Content = "Hello Mr " + contact.FIRSTNAME + " " + contact.LASTNAME + "\n  Thankyou for Contacting us our Bevport Team will soon Contact you !! ";
            string Content = "Hi " + contact.FIRSTNAME + " " + contact.LASTNAME + "\n  Thankyou for Contacting us our Bevport Team will soon Contact you! \n  Have a great day!  \r\n Regards,  \n  BevPort Team ";
            SendEmail(contact.EMAILID!, "BevPort Contact", Content);
            ViewBag.ContactMessage = "Thank you for contacting us.";
            return View();
        }

        [HttpPost]
        public ActionResult SendEmail(string receiver, string subject, string message)
        {
            try
            {
                var senderEmail = new MailAddress("mcaashu214@gmail.com", "BevPort");
               // var senderEmail = new MailAddress("hellobevport@gmail.com", "BevPort");
                var receiverEmail = new MailAddress(receiver, "Receiver");
                var password = "xelntkafoavtckfk";
                // var password = "brerjdkbtphvxnjt";
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
       
        
        public IActionResult aboutus()
        {
            return View();
        }
        public IActionResult buyer()
        {
            return View();
        }
        public IActionResult seller()
        {
            return View();
        }
        public IActionResult membershipplan()
        {
            return View();
        }
    }
}