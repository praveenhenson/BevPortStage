using BevPort.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

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

        public IActionResult contactus()
        {
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