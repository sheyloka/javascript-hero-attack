class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'realizou um ataque';
      }
  
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const mago = new Hero('Merlin', 100, 'mago');
  const guerreiro = new Hero('Arthur', 30, 'guerreiro');
  const monge = new Hero('Lee', 40, 'monge');
  const ninja = new Hero('Hanzo', 25, 'ninja');
  
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();