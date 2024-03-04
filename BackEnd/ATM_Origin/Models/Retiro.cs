using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ATM_Origin.Models
{
    public class Retiro
    {
        #region atributos
        [Key]
        public int id_retiro { get; set; }
        public int id_tarjeta { get; set; }
        public DateTime momento { get; set; }
        public float cantidad { get; set; }

        #endregion
        #region constructor
        public Retiro(int id_tarjeta, DateTime momento, float cantidad)
        {
            this.id_tarjeta = id_tarjeta;
            this.momento = momento;
            this.cantidad = cantidad;
        }
        #endregion
    }
}
