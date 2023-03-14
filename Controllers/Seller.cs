using Microsoft.AspNetCore.Mvc;

namespace BevPort.Controllers
{
    public class Seller : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
