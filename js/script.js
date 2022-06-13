class Conta{

    //não é necessário criar essas variáveis
    nome
    cpf
    //static faz o atributo ser da classe, não da classe
    static numeroConta = 0
    saldo
    constructor(nome,cpf){
        this.nome = nome
        this.cpf = cpf
        this.numeroConta = Conta.numeroConta++
        this.saldo = 0
    }
    exibirInfo(){
        return "*************************\n" +
        "Nome: " + this.nome +
        "\nNumero da Conta: " + this.numeroConta +
        "\nSaldo: " + this.saldo
    }
    depositar(valor){
        this.saldo += valor
    }
    sacar(valor){
        if(valor > this.saldo){
            console.log("SAQUE NÃO FOI POSSÍVEL")
        }
        else{
            this.saldo -= valor
            console.log("SAQUE REALIZADO COM SUCESSO")
        }
    }
    transferir(valor, Conta){
        //saca o valor da conta de quem ta chamando com o this
         this.sacar(valor)

         //adiciona o valor na conta da conta definida
         Conta.saldo += valor

         //ou podemos chamar o método depositar
         //Conta.depositar(valor)
    }
}

conta1 = new Conta("Gustavo", "213321321")
conta2 = new Conta("Thomas Shelby", "164314234")

console.log(conta1.exibirInfo())
conta1.depositar(100000)
console.log(conta1.exibirInfo())
conta1.sacar(1000000)
console.log(conta1.exibirInfo())
console.log(conta2.exibirInfo())

conta1.transferir(45, conta2)

console.log(conta1.exibirInfo())
console.log(conta2.exibirInfo())

var obj = {
    //propriedade: valor 
    nome: "Fernando",
    idade: 99,
    cpf: "9385098431605"
}

console.log(obj.nome)
console.log(obj["idade"])