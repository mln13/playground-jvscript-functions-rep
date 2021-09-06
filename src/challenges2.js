// Desafio 10
function techList(arrayDeTecnologias,name1) {
 arrayDeTecnologias.sort();

    let newArrayDeTecnologias =[];
    if(arrayDeTecnologias.length===0){
    return "Vazio!"
    }
    for(let i=0; i<arrayDeTecnologias.length;i++){
        newArrayDeTecnologias[i]={
            tech: arrayDeTecnologias[i],
            name: name1
        };  
    }
    return newArrayDeTecnologias;
}

// Desafio 11
function generatePhoneNumber(arrayPhoneNumber) {
  let novoNumero='';
    if(arrayPhoneNumber.length!=11){
        return "Array com tamanho incorreto.";
    }

    for(let i=0;i<arrayPhoneNumber.length;i++){
    let repetido = 0
    if(arrayPhoneNumber[i]<0 || arrayPhoneNumber[i]>9){
        return "não é possível gerar um número de telefone com esses valores";
    }
    if(i===0){
        novoNumero= "(" + arrayPhoneNumber[i];
    }else
    if(i===1){
        novoNumero= novoNumero + arrayPhoneNumber[i] +")";
    }else
    if(i===2){
        novoNumero= novoNumero + ' ' + arrayPhoneNumber[i];
    }else
    if(i===(arrayPhoneNumber.length-5)){
        novoNumero= novoNumero + arrayPhoneNumber[i] + '-';
    }else{
    novoNumero= novoNumero + arrayPhoneNumber[i];

        }
    for(let j=0; j<arrayPhoneNumber.length;j++){
        if(arrayPhoneNumber[j]===arrayPhoneNumber[i]){
            repetido = repetido+1;
        }
        if(repetido>=3){return "não é possível gerar um número de telefone com esses valores";}
    }
    }
    return novoNumero;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
      let BC = Math.abs(lineB - lineC);
    let CB = Math.abs(lineC - lineB);
    let AB = Math.abs(lineA - lineB);
    let BA = Math.abs(lineB - lineA);
    let AC = Math.abs(lineA - lineC);
    let CA = Math.abs(lineC - lineA);
    
        if(lineA<lineB+lineC && lineB<lineC+lineA && lineC<lineB+lineA && lineA>BC && lineA>CB && lineB>CA && lineB>AC && lineC>AB && lineC>BA){
            return true;
        }else{
            return false;
        }
}

// Desafio 13
function hydrate(stringHydrate) {
  let numeroDeCoposAgua = 0 ;
    for(let i=0;i<stringHydrate.length;i++){
        for(let j=0;j<=9;j++){
            let stringJ = '' + j;
            if(stringHydrate[i]===stringJ){
                numeroDeCoposAgua = j + numeroDeCoposAgua;
            }
        }
    }
    let quantosCopos = '';
    if(numeroDeCoposAgua===1){
        quantosCopos = numeroDeCoposAgua + " copo de água";
    } else{
        quantosCopos = numeroDeCoposAgua + " copos de água";
    }
    return quantosCopos;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
