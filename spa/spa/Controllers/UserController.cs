using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Spa.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
            static string[] namas = {"sodok","asep","gombloh","kopet","subhi","kodol"};

        [HttpGet("[action]")]
        public IEnumerable<UserData> GetUsers()
        {  
            return Enumerable.Range(1, 10).Select(index => new UserData());
        }

        public class UserData
        { 
            static Random rng = new Random();
            public UserData()
            {
                var rnd = rng.NextDouble()*namas.Count();
                this.Nama = namas[(int)rnd];
                this.Age = rng.NextDouble()*100;
                this.Weight = rng.NextDouble()*120;
                this.Height = 100 + rng.NextDouble()*120;
            }
            public string Nama { get; set; }
            public double Height { get; set; }
            public double Age { get; set; }
            public double Weight { get; set; }
        }
    }
}
