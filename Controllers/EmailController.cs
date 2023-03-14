using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;
using System.Net;
using BevPort.Helpers;

namespace BevPort_Staging.Controllers
{
    public class EmailController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public ActionResult SendEmail(string receiver, string subject, string message)
        {
            try
            {
                BaseURL objURL = new BaseURL();
                var senderEmail = new MailAddress(objURL.senderEmailAddress, objURL.senderEmailName);
                var receiverEmail = new MailAddress(receiver, "Receiver");
                var password = objURL.senderPassword;
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

    }
}
