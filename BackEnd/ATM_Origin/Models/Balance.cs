using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ATM_Origin.Models
{
    public class Balance
    {
        #region atributos
        [Key]
        public int id_balance { get; set; }
        public int id_tarjeta { get; set; }
        public DateTime momento { get; set; }
        #endregion

        #region constructor
        public Balance(int id_tarjeta, DateTime momento)
        {
            this.id_tarjeta = id_tarjeta;
            this.momento = momento;
        }
        #endregion
    }
}
