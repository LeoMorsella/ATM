using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
namespace ATM_Origin.Models
{
    public class ATMDbContext:DbContext
    {
        //Tools -> NuGet Package Administrator -> Console
        //Add-Migration ATM_Origin
        //Update-database
        public ATMDbContext(DbContextOptions<ATMDbContext> options): base(options) 
        {
            //Ante la ejecucion inicial descomentar para la carga de datos iniciales dentro de la DB una vez ejecutado debera comentarse initData()
            //initData();
        }

        public DbSet<Tarjeta> Tarjetas { get; set; }
        public DbSet<Balance> Balances { get; set; }
        public DbSet<Retiro> Retiros { get; set; }

        public void initData()
        {
            this.Database.EnsureCreated();
            FormattableString query = $"DELETE FROM Tarjetas";
            FormattableString query2 = $"DELETE FROM Balances";
            FormattableString query3 = $"DELETE FROM Retiros";
            this.Database.ExecuteSqlInterpolated(query);
            this.Database.ExecuteSqlInterpolated(query2);
            this.Database.ExecuteSqlInterpolated(query3);
            Tarjeta tarjeta1 = new Tarjeta("Jhon Doe", 1111111111111111, 1111, 1000, new DateTime(2030, 02, 28, 00, 00, 00));
            Tarjeta tarjeta2 = new Tarjeta("Jane Doe", 2222222222222222, 1234, 1200, new DateTime(2030, 02, 28, 00, 00, 00));
            this.Tarjetas.Add(tarjeta1);
            this.Tarjetas.Add(tarjeta2);
            this.SaveChanges();
        }
    }
}
