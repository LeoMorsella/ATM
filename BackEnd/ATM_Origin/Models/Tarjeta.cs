using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ATM_Origin.Models
{
    [Table("Tarjetas")]
    public class Tarjeta
    {
        #region atributos
        [Key]
        public int id_tarjeta { get; set; }
        [Column("Titular", TypeName = "ntext")]
        public string titular { get; set; }
        [Column("Numero_Tarjeta")]
        [MaxLength(16)]
        public long num_tarjeta { get; set; }
        [Column("PIN")]
        [MaxLength(4)]
        public int pin { get; set; }
        [Column("Bloqueada")]
        public bool bloqueada { get; set; }
        [Column("Disponible")]
        public float disponible { get; set; }
        [Column("Fecha_Vencimiento")]
        public DateTime fecha_vencimiento { get; set; }

        #endregion
        #region constructor
        public Tarjeta(string titular, long num_tarjeta, int pin, float disponible, DateTime fecha_vencimiento)
        {
            this.titular = titular;
            this.num_tarjeta = num_tarjeta;
            this.pin = pin;
            this.bloqueada = false;
            this.disponible = disponible;
            this.fecha_vencimiento = fecha_vencimiento;
        }
        #endregion
    }
}
