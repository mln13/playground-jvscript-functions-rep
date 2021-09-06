// Desafio 1
function compareTrue(parametro1, parametro2) {
     if(parametro1&&parametro2){
        return true;
    }else{
        return false;
    }
}

// Desafio 2
function calcArea(base,height) {
  let area = (base*height)/2;
return area;

}

// Desafio 3
function splitSentence(stringSentence) {
    let matriz = []
    matriz = stringSentence.split(' ');

    return matriz;
}

// Desafio 4
function concatName(arrayConcatName) {
 let newArrayConcatName='';
    for(let i=0; i<arrayConcatName.length;i++){
        if(i===0){
            newArrayConcatName=newArrayConcatName+(arrayConcatName[arrayConcatName.length-1]);
        }else
        if((arrayConcatName.length-1)===i){
            newArrayConcatName=newArrayConcatName+', '+(arrayConcatName[0]);
        }
    }
    
    return newArrayConcatName;
}

// Desafio 5
function footballPoints(wins,ties) {
    let pontosV = wins*3;
    let pontosT = ties;
    let pontos = pontosT+pontosV;

    return pontos;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
	let maior=arrayDeNumeros[0];
	let vezesMaior=0;
    for(let i=0;i<arrayDeNumeros.length;i++){
        if(arrayDeNumeros[i]>=maior){
            maior = arrayDeNumeros[i];
        }
    }
    for(let i=0;i<arrayDeNumeros.length;i++){
        if(arrayDeNumeros[i]===maior){
            vezesMaior+=1;
        }
    }
    return vezesMaior;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if(cat2-mouse>cat1-mouse && cat2-mouse>mouse-cat1){
        return "cat1";
    }else if(cat1-mouse>cat2>mouse){
        return "cat2";
    }else{
        return "os gatos trombam e o rato foge";
    }
}

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
      let novoArrayFizzBuzz =[];
    for(let i=0;i<arrayFizzBuzz.length;i++){
        if(arrayFizzBuzz[i]%3===0 && arrayFizzBuzz[i]%5===0){
            novoArrayFizzBuzz.push("fizzBuzz");
        }else 
            if(arrayFizzBuzz[i]%3===0){
            novoArrayFizzBuzz.push("fizz");
        }else 
            if(arrayFizzBuzz[i]%5===0){
                novoArrayFizzBuzz.push("buzz");
        }else{
            novoArrayFizzBuzz.push("bug!");
        }
    }
    return novoArrayFizzBuzz;
}

// Desafio 9
function encode(stringEncode) {
 let newStringEncode ="";
    for(let i=0;i<stringEncode.length;i++){
        switch(stringEncode[i]){
            case "a":
                newStringEncode=newStringEncode+ "1";
                break;
            case "e":
                newStringEncode=newStringEncode+ "2";
                break;
            case "i":
                newStringEncode=newStringEncode+ "3";
                break;
            case "o":
            newStringEncode=newStringEncode+ "4";
                break;
            case "u":
                newStringEncode=newStringEncode+ "5";
                break;
            default:
                newStringEncode=newStringEncode+ stringEncode[i];
                break;
            }   
    }
    return newStringEncode;
}
function decode(stringDecode) {
  let newStringEncode ="";
    for(let i=0;i<stringDecode.length;i++){
        switch(stringDecode[i]){
            case "1":
                newStringEncode=newStringEncode+ "a";
                break;
            case "2":
                newStringEncode=newStringEncode+ "e";
                break;
            case "3":
                newStringEncode=newStringEncode+ "i";
                break;
            case "4":
            newStringEncode=newStringEncode+ "o";
                break;
            case "5":
                newStringEncode=newStringEncode+ "u";
                break;
            default:
                newStringEncode=newStringEncode+ stringDecode[i];
                break;
            }   
    }
    return newStringEncode;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
