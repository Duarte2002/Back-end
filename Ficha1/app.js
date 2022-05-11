/* function notas (notaPratica ,notaTeorica) {
    var media = ((notaPratica + notaTeorica) / 2 )
        console.log("a media é: ",media);
        if (media >= 10){
            console.log("aprovado");
        } else {
            console.log("reprovado");
        }

}
notas(6,15); */



/* function mes (numeromes) {
    if(numeromes == 1) {
        console.log("Janeiro")
    }
    else if(numeromes == 2) {
        console.log("Fevereiro")
    }
    else if(numeromes == 3) {
        console.log("Marco")
    }
    else if(numeromes == 4) {
        console.log("Abril")
    }
    else if(numeromes == 5) {
        console.log("maio")
    }
    else if(numeromes == 6) {
        console.log("junho")
    }
    else if(numeromes == 7) {
        console.log("julho")
    }
    else if(numeromes == 8) {
        console.log("agosto")
    }
    else if(numeromes == 9) {
        console.log("setembro")
    }
    else if(numeromes == 10) {
        console.log("outubro")
    }
    else if(numeromes == 11) {
        console.log("novembro")
    }
    else if(numeromes == 12) {
        console.log("dezembro")
    }
    else {console.log("Nao é um numero valido!")
    }   
}

mes (13) */


/* function operador (n1 ,n2, operador) {
     if (operador == "+"){
        resultado = n1+n2
        console.log(resultado)
     }
     if (operador == "-"){
        resultado = n1-n2
        console.log(resultado)
     }
     if (operador == "*"){
        resultado = n1*n2
        console.log(resultado)
     }
     if (operador == "/"){
        resultado = n1/n2
        console.log(resultado)
     }
     if (operador == "**"){
        resultado = n1**n2
        console.log(resultado)
     }

}
operador(2,3,"**"); */



/* function numero (n1) {
   var passo = 1
   resultado = 5
   while (resultado < 20) {
       multiplos = n1 * passo
       console.log(multiplos)
       passo += 1
       resultado += 5
   }

}
numero(5);  */


/* function sum (n1) {
    var s = 0;
    for(i=0; i <=n1; i++){
        s+=i;
    }
    console.log(s);
 
 }
sum(100); 
 */


/* function calcularFatorial (fatorial) {
    var resultado = fatorial;
    var primeiroMultipicador = fatorial - 1;
    for (var i = primeiroMultipicador; i > 1; i--) {
        resultado *= i;
    }
    
    console.log(resultado);
}
calcularFatorial(4);
 */

function minimo1(n1){
    var npequeno = n1[0];
    var natual = null;
    for (var i = 0; i < n1.lenght; i++){
        if (npequeno > n1[i]){
            npequeno = n1[i];
        }
    }
    console.log(npequeno);
}
minimo1([8,9,3,160,12,15]);

function med(n1){
    var n1len = n1.lenght;
    sum = 0;
    for (i = 0; i < n1len; i++){
        sum = sum + n1[i];

    }
    var media = sum /n1len;
    console.log(media);
}
med([8,9,3,160,12,15]);






