using ATM_Origin.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.NetworkInformation;

namespace ATM_Origin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TarjetaController : ControllerBase
    {
        private readonly ATMDbContext _context;

        public TarjetaController(ATMDbContext context)
        {
            _context = context;
        }

        [HttpGet("{id_tarjeta}")]
        public async Task<IActionResult> GetTarjeta(int id_tarjeta)
        {
            try
            {
                var tarjeta = await _context.Tarjetas.FindAsync(id_tarjeta);
                return Ok(tarjeta);

            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{numTarjeta}/verificarTarjeta")]
        public async Task<IActionResult> verificarTarjeta(long numTarjeta)
        {
            try
            {
                var tarjeta = from t in _context.Tarjetas
                              where t.num_tarjeta == numTarjeta
                              select t;
                if(tarjeta == null)
                {
                    return NotFound();
                }
                return Ok(tarjeta);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{num_tarjeta}/{PIN}/verificarPIN")]
        public async Task<IActionResult> VerificarPIN(long num_tarjeta, int PIN)
        {
            try
            {
                var tarjeta = from t in _context.Tarjetas
                              where t.pin == PIN
                              where t.num_tarjeta == num_tarjeta
                              select t;
                if (tarjeta == null)
                {
                    return NotFound();
                }
                return Ok(tarjeta);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("RegistrarBalance")]
        public async Task<IActionResult> registrarBalance(Balance balance)
        {
            try
            {
                balance.momento = DateTime.Now;
                _context.Add(balance);
                await _context.SaveChangesAsync();
                return Ok(balance);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("RegistrarRetiro")]
        public async Task<IActionResult> registrarRetiro(Retiro retiro)
        {
            try
            {
                int id_tarjeta = retiro.id_tarjeta;
                var tarjeta = await _context.Tarjetas.FindAsync(id_tarjeta);

                if(retiro.cantidad > tarjeta.disponible)
                {
                    return BadRequest();
                }
                float newDisponible = tarjeta.disponible - retiro.cantidad;
                await this.ActualizarDisponible(id_tarjeta, newDisponible);
                retiro.momento = DateTime.Now;
                _context.Add(retiro);
                await _context.SaveChangesAsync();
                return Ok(retiro);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id_tarjeta}/{newDisponible}")]
        public async Task<IActionResult> ActualizarDisponible(int id_tarjeta, float newDisponible)
        {
            try
            {
                var tarjeta = await _context.Tarjetas.FindAsync(id_tarjeta);
                if(tarjeta == null)
                {
                    return NotFound();
                }

                tarjeta.disponible = newDisponible;

                await _context.SaveChangesAsync();

                return Ok(tarjeta);
            }
            catch (Exception ex) 
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
