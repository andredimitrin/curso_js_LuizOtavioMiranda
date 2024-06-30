// Função Construtora: Produto
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
  
  Produto.prototype.aumento = function(valor) {
    if (valor <= 0) {
      console.warn("O valor do aumento deve ser positivo.");
      return;
    }
    this.preco += valor;
  };
  
  Produto.prototype.desconto = function(valor) {
    if (valor <= 0) {
      console.warn("O valor do desconto deve ser positivo.");
      return;
    }
    if (valor > this.preco) {
      console.warn("O desconto não pode ser maior que o preço.");
      return;
    }
    this.preco -= valor;
  };
  
  // Função Construtora: Camiseta (herdando de Produto)
  function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // Chamando o construtor da classe pai
    this.cor = cor;
  }
  
  Camiseta.prototype = Object.create(Produto.prototype); // Herança de protótipo
  Camiseta.prototype.constructor = Camiseta; // Corrigindo o construtor
  
  Camiseta.prototype.aumento = function(percentual) {
    if (percentual <= 0) {
      console.warn("O percentual de aumento deve ser positivo.");
      return;
    }
    this.preco *= (1 + percentual / 100);
  };
  
  // Função Construtora: Caneca (herdando de Produto)
  function Caneca(nome, preco, material, estoque = 0) {
    Produto.call(this, nome, preco);
    this.material = material;
    this._estoque = estoque;
  }
  
  Caneca.prototype = Object.create(Produto.prototype);
  Caneca.prototype.constructor = Caneca;
  
  // Definindo getter e setter para estoque em Caneca
  Object.defineProperty(Caneca.prototype, 'estoque', {
    get: function() {
      return this._estoque;
    },
    set: function(valor) {
      if (typeof valor !== 'number' || valor < 0) {
        console.warn("O estoque deve ser um número não negativo.");
        return;
      }
      this._estoque = valor;
    }
  });
  
  // Exemplos de Uso (mesmos do código original)
  const produto = new Produto("Genérico", 111);
  const camiseta = new Camiseta("Regata", 7.99, "Preta");
  const caneca = new Caneca("Caneca", 15, "Porcelana", 50);
  
  console.log(caneca.estoque); // 50
  caneca.estoque = 30;
  console.log(caneca.estoque); // 30
  caneca.estoque = -10; // Gera um aviso
  console.log(caneca.estoque); // 30 (não foi alterado)
  