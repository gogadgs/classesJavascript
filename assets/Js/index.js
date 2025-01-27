class  heroi {
    constructor(nome,idade,tipo){
            this.nome = nome;
            this.idade = idade;
            this.tipo = tipo;

    }

    /*  metodos getter and setter */

    getNome(){
        return this.nome;

    };
    setNome(nome){
        return this.nome = nome;
    };

    getIdade(){
        return this.idade;
    };
    setIdade(idade){
        return this.idade = idade;
    };

    getTipo(){
        return this.tipo
    };

    setTipo(tipo){
        return this.tipo = tipo;
    };

   

    atacar(){
        let ataquesHerois = ["espada","magia","artes marciais","shuriken","ataque cibernetico"];
        if(this.tipo ==="guerreiro"){
            console.log(`O ${this.tipo} atacou usando ${ataquesHerois[0]}`)
        }else if(this.tipo === "mago"){
            console.log(`O ${this.tipo} atacou usando ${ataquesHerois[1]}`)
        }else if(this.tipo === "monge"){
            console.log(`O ${this.tipo} atacou usando ${ataquesHerois[2]}`)
        }else if(this.tipo === "ninja"){
            console.log(`O ${this.tipo} atacou usando ${ataquesHerois[3]}`)
        }else if(this.tipo === "robo"){
            console.log(`O ${this.tipo} atacou usando ${ataquesHerois[4]}`)
        }else{
            console.log("ataque nao cadastrado")
        }

        
    }
}


const meuHeroi = new heroi("homem de ferro",37,"guerreiro");
const meuHeroi2 = new heroi("punho de ferro",107,"ninja");

console.log(meuHeroi.atacar());
console.log(meuHeroi2.atacar());