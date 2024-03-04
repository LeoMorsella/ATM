﻿// <auto-generated />
using System;
using ATM_Origin.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace ATM_Origin.Migrations
{
    [DbContext(typeof(ATMDbContext))]
    partial class ATMDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("ATM_Origin.Models.Balance", b =>
                {
                    b.Property<int>("id_balance")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id_balance"), 1L, 1);

                    b.Property<int>("id_tarjeta")
                        .HasColumnType("int");

                    b.Property<DateTime>("momento")
                        .HasColumnType("datetime2");

                    b.HasKey("id_balance");

                    b.ToTable("Balances");
                });

            modelBuilder.Entity("ATM_Origin.Models.Retiro", b =>
                {
                    b.Property<int>("id_retiro")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id_retiro"), 1L, 1);

                    b.Property<float>("cantidad")
                        .HasColumnType("real");

                    b.Property<int>("id_tarjeta")
                        .HasColumnType("int");

                    b.Property<DateTime>("momento")
                        .HasColumnType("datetime2");

                    b.HasKey("id_retiro");

                    b.ToTable("Retiros");
                });

            modelBuilder.Entity("ATM_Origin.Models.Tarjeta", b =>
                {
                    b.Property<int>("id_tarjeta")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id_tarjeta"), 1L, 1);

                    b.Property<bool>("bloqueada")
                        .HasColumnType("bit")
                        .HasColumnName("Bloqueada");

                    b.Property<float>("disponible")
                        .HasColumnType("real")
                        .HasColumnName("Disponible");

                    b.Property<DateTime>("fecha_vencimiento")
                        .HasColumnType("datetime2")
                        .HasColumnName("Fecha_Vencimiento");

                    b.Property<long>("num_tarjeta")
                        .HasMaxLength(16)
                        .HasColumnType("bigint")
                        .HasColumnName("Numero_Tarjeta");

                    b.Property<int>("pin")
                        .HasMaxLength(4)
                        .HasColumnType("int")
                        .HasColumnName("PIN");

                    b.Property<string>("titular")
                        .IsRequired()
                        .HasColumnType("ntext")
                        .HasColumnName("Titular");

                    b.HasKey("id_tarjeta");

                    b.ToTable("Tarjetas");
                });
#pragma warning restore 612, 618
        }
    }
}
