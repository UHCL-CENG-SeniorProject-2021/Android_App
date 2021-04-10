using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyFirstAPI.Service.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MusicController : ControllerBase
    {
        private readonly ILogger<MusicController> _logger;
        private readonly IMyFirstAPIServices _myFirstAPIServices;

        public MusicController(ILogger<MusicController> logger, IMyFirstAPIServices myWebAPIService)
        {
            _logger = logger;
            _myFirstAPIServices = myWebAPIService;
        }

        [Route("HelloWorld/{name}")]
        [HttpGet]
        public IActionResult HelloWorld(string name)
        {
            return Ok($"Hello {name}");
        }

        [Route("FirstPost/{lastName}")]
        [HttpPost]
        public IActionResult FirstPost([FromBody] WeatherForecast _weatherForecast, string lastName)
        {
            return Ok($"Hello {_weatherForecast.Summary} {lastName} with temp = {_weatherForecast.TemperatureC}");
        }

        [HttpGet]
        public IActionResult GetAllButtons()
        {
            // return all the button id's and their functionality
            
            _myFirstAPIServices.GetAllButtons();
            return Ok(string.Empty);
        }

        [HttpGet]
        public IActionResult GetSound()
        {
            _myFirstAPIServices.GetSound();

        }
    }
}
