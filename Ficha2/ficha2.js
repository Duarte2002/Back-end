/* function imc(peso,altura){
    var imc = Math.round(peso/(altura*altura));

    if(imc < 18.5 ){
        console.log("Abaixo do peso");
    }
    else if (imc > 30) {
        console.log("Acima do peso");
    }
        console.log(imc);
}

imc(62,1.70); 
  */




/* function reverse(str) {
    var splittedStr = str.split(" ");
    var reversedStr = "";

    for (var i = 0; i < splittedStr.length ; i++) {
        var word = splittedStr[i];
        for  (var j = word.length -1; j >= 0; j--){
            var letter = word[j];
            reversedStr += letter;
        }
        reversedStr += " ";
    }
    return console.log(reversedStr);
 }

reverse("hoje e domingo") */
 

/* function vogais (frase){
    var vogais = ["a", "e", "i", "o", "u"];
    var i;

    for (i = 0; i < frase.length; i++ ){
       if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o"  || str[i] == "u" );
       count ++;
    }
    return console.log(count);  
}

vogais("hoje e domingo") */


/* function letra (str, letter){
   count = 0
   str = str.toLowerCase();
    for (var i = 0; i < str.length; i++ ){
        if (str[i] == letter ){
            count++;
        }
    }
    return count;  
}
console.log(letra("Amanha", "a")); */


/* function work (hentrada, mentrada,sentrada, hsaida, msaida, ssaida){
    var entrada = (hentrada * 3600) + (mentrada*60) + (sentrada*1);
    var saida = (hsaida * 3600) + (msaida*60) + (ssaida*1);

    var segundostrabalho = entrada - saida;

    var horastrabalho = Math.floor(segundostrabalho / 3600);
    var horastrabalhoresto = segundostrabalho % 3600;

    var minutos = Math.floor(horastrabalhoresto / 60);
    var segundos = horastrabalhoresto % 60;

    console.log("trabalho " + horastrabalho + "h:" + minutos + "m:" + segundos + "s:" );


}

work(8,0,3,6,1,1) */

/* 
function retangulo (altura, largura){
    var linha =""

    for (var i = 0; i < largura; i++){
        linha += "*";
       
    }

    for (var j = 0; j < altura; j++){
        console.log(linha);

    }

}

retangulo(10,20); */

/* function piramide(altura) {
    for (var i = 0; i < altura; i++) {
      var linha = '';
      for (var j = 0; j < i + 1; j++) {
        linha += '*';
      }
      console.log(linha)
    }
  }
  
  piramide(5); */
/* 


function piramide(altura) {
    var linha = "*";
    for (var i = 0; i < altura; i++) {
        console.log(linha)
        linha += '*';
    }
}

piramide(5); */

/* function caixa (altura,largura) {
    for (var i = 0; i < altura; i++){
        var linha ="";
        for (var j = 0; j < largura; j++){
            if(i == 0 || i == altura -1){
                linha += "*";
            }
            else{
                if(j == 0 || j == largura -1){
                    linha += "*";
                }
                else {
                    linha += " "
                }
            }
        }
        console.log(linha);
    
    }
    

}

caixa(10,10);

 */



var students = [];

for (let i = 0; i <100 ; i++){
    var students = {
        number: Math.ceil(Math.random () * 1000),
        grade: Math.random() * 20
    };
    students.push(student);
}

function listAll(students){
    for (let i = 0; i < students.length; i++) {
        var student = students[i];
        console.log("Number: " + student.number + ", Grade: " + student.grade);
    }
}


function bestGrade(students){
    var biggestGrade = students[0].grade;
    for (let i = 0; i < students.length; i++) {
        if (biggestGrade < students[i].grade){
            biggestGrade = students[i].grade;
        }
    }
    console.log("The biggest grade is: " + biggestGrade);
}

function worstGrade(students){
    var lowestGrade = students[0].grade;
    for (let i = 0; i < students.length; i++) {
        if (lowestGrade > students[i].grade){
            lowestGrade = students[i].grade;
        }
    }
    console.log("The lowest grade is: " + lowestGrade);
}

function averageGrade(students){
    var sum = 0;
    for(i=0; i<students.length; i++){
        sum += students[i].grade;
    }
    var media = sum / students.length;
    console.log("Media: " + media);
}

function closemedia(students){
    var avg = media(students);
    var student
    var resultado = students[0].grade - avg;
    for (let i = 0; i < student.length; i++) {
        if (students[i].grade - avg < resultado) {
            resultado = students[i];
            student = students[i];
        };
    }
    return students;

}

function negativesGrade(students){
    var sum = 0;
    for (var i=0; i<students.length; i++){
        if (students[i].grade < 9.5){
            sum ++;
        }
    }
    console.log ("Numero de Negativas: " + sum)
}

function positiveGrade(students){
    var sum= 0;
    for (var i=0; i<students.length; i++){
        if (students[i].grade >= 9.5){
            sum ++;
        }
    }
    console.log ("Numero de Positivas: " + sum)
}

function studentsStats(students, option){
    switch (option) {
        case 1:
            listAll(students);
            break;
        case 2:
            bestGrade(students);
            break;
        case 3:
            worstGrade(students) ;
            break;
        case 4:
            averageGrade(students);
            break;
        case 5: 
            negativesGrade(students);
            break;
        case 6:
            positiveGrade(students);
        default:
            console.log("Invalid option");
            break;
    }

} 




studentsStats(students,4);




