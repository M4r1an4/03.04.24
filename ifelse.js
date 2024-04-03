/**
 * O algoritimo ifelse serve para  validação de dados, por exemplo:
 * if (variavel1== variavel2) { algo irá acontecer se a variavel1 for diferente da variavel2}
 *  
 * if: nome do algoritimo 
 * par~enteses (): local onde se declaram os parâmetros ou expressão a ser validada
 * chaves {}: bloco de códigos a serem executados, ou seja, tudo que estiver dentro do bloco de códigos, será executado 
 * else: "senão" é onde serão executados os códigos, que estiverem dentro do código {}, caso a validação do algoritimo "if" retorne falsa 
 * 
 * operadores lógicos:
 * 
 * == serve para comparar se uma variável/valor é igual a outra
 * != serve para comparar se uma variável/valor é diferente da outra
 * > serve para comparar se uma variável/valor é maior que a outra 
 * < serve para comparar se uma variável/valor é menor que a outra
 * >=  serve para comparar se uma variável/valor é maior ou igual a outra
 * <=  serve para comparar se uma variável/valor é menor ou igual a outra
 * 
 * se "falso": adicionar o ponto de exclamação no início da declaração de parâmetros/expressão, por exemplo:
 * if (!variavel1 == variavel2) {bloco de códigos} aqui significa que: 
 * se a comparação da variavel1 com a variavel2 retornar falso, os códigos
 * que estiverem dentro do bloco de código serão executados, não havendo a 
 * necessidade de uso da cláusula "else"
 * 
 * criar 
  
 */

function check(){
    var txtLogin = document.getElementById("txtLogin");
    var txtSenha = document.getElementById("txtSenha");
    
    if(txtLogin.value == txtSenha.value){
        console.log("true");
    }
    else{
        console.log("false");
    }
    
    };