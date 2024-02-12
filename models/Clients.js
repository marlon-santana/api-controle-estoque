// models/Cliente.js

class Cliente {
    constructor(nome, numeroNotaFiscal, quantidadeRoloTecidos, quantidadeRolos, cores, quantidadesCores) {
      this.nome = nome;
      this.numeroNotaFiscal = numeroNotaFiscal;
      this.quantidadeRoloTecidos = quantidadeRoloTecidos;
      this.quantidadeRolos = quantidadeRolos;
      this.cores = cores;
      this.quantidadesCores = quantidadesCores;
    }
  }
  
  module.exports = Cliente;
  