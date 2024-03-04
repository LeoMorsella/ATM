using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ATM_Origin.Migrations
{
    public partial class Inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Balances",
                columns: table => new
                {
                    id_balance = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    id_tarjeta = table.Column<int>(type: "int", nullable: false),
                    momento = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Balances", x => x.id_balance);
                });

            migrationBuilder.CreateTable(
                name: "Retiros",
                columns: table => new
                {
                    id_retiro = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    id_tarjeta = table.Column<int>(type: "int", nullable: false),
                    momento = table.Column<DateTime>(type: "datetime2", nullable: false),
                    cantidad = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Retiros", x => x.id_retiro);
                });

            migrationBuilder.CreateTable(
                name: "Tarjetas",
                columns: table => new
                {
                    id_tarjeta = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Titular = table.Column<string>(type: "ntext", nullable: false),
                    Numero_Tarjeta = table.Column<long>(type: "bigint", maxLength: 16, nullable: false),
                    PIN = table.Column<int>(type: "int", maxLength: 4, nullable: false),
                    Bloqueada = table.Column<bool>(type: "bit", nullable: false),
                    Disponible = table.Column<float>(type: "real", nullable: false),
                    Fecha_Vencimiento = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tarjetas", x => x.id_tarjeta);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Balances");

            migrationBuilder.DropTable(
                name: "Retiros");

            migrationBuilder.DropTable(
                name: "Tarjetas");
        }
    }
}
