using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Spa.Controllers
{
    [Route("api/[controller]")]
    public class SensorController : Controller
    {


        [HttpGet("[action]")]
        public IEnumerable<SensorData> GetSensors()
        {
            var rng = new Random();
            return Enumerable.Range(1, 10).Select(index => new SensorData(rng.NextDouble() * 100, rng.NextDouble() * 1000, rng.NextDouble() * 100));
        }

        public class SensorData
        {
            public SensorData(double temp, double light, double humid)
            {
                Tanggal = DateTime.Now.ToString("dd MMM yy hh:mm");
                this.Temp = temp;
                this.Humid = humid;
                this.Light = light;
            }
            public string Tanggal { get; set; }
            public double Temp { get; set; }
            public double Humid { get; set; }
            public double Light { get; set; }
        }
    }
}
