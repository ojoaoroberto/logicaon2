// Sistema de cadastro para evento

var idade = 18
var dataEvento = "terça"
var data = "terça"
var participantes = 50
var nome = "João Roberto"



if(dataEvento == data){
    console.log("Continue seu cadastro")
}

if  ( idade  >=  18 )  {
    console.log  ( "Continue seu cadastro pois a idade é maior que 18" ) ;
}   
else  {
    console.log  ( "Cadastro não permitido pela idade" ) ;
}
    

if  ( participantes <  101 )  {
   console.log  ( "Cadastro permitido por que ainda tem vagas!" ) ;
}
else  { 
    console.log  ( "Limite de participantes excedido!" ) ;
}

console.log(`Seu cadastro foi feito com suceso ${nome}`)

