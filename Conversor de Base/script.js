
function convert() {    
  let binary = document.getElementById('binary-input').value;
  let decimal = parseInt(binary, 2);
  if (binary === '') { 
    window.alert('Digite um Numero Binario')  
  };
  
  
  binary.split('').map((char) => {
        if (char !== '0' && char !== '1') return alert('Por favor digite um numero Binario');
    }); 
    
  binaryTable.innerHTML = `<tr><th>Passo a Passo</th></tr>`
  let binList = Array.from(String(binary), Number)
  let binListReverse = binList.reverse()
  for (let i = 0; i < binListReverse.length; i++) {   
    binaryTable.innerHTML += `<tr><td>${binListReverse[i]} x 2<sup>${i}</sup> = ${binListReverse[i] * Math.pow(2, i)}</td></tr>`    
  }
  binaryTable.innerHTML += `<tr><td>Soma dos produtos = ${decimal}</td></tr>`
  
}


function convertDec() {
  let decimal = document.getElementById('dec-input').value;
  let binaryBefore = []  
  if (decimal === '') return alert('Por favor digite um numero Decimal');
  if (decimal == 1) { 
    decimalTable.innerHTML = `<tr><th colspan="2">Passo a Passo</th></tr>`
    decimalTable.innerHTML += `<tr><td> 1 é 1 -_-</td><td>Resto</td></tr>`
    
  };
  
  if (decimal == 0) { 
    decimalTable.innerHTML = `<tr><th colspan="2">Passo a Passo</th></tr>`
    decimalTable.innerHTML += `<tr><td>0 é 0 -_-</td><td>Resto</td></tr>`
    
  };
  if (decimal < 0) return alert('Digite um Numero Positivo'); 
    
  if (decimal > 1) {
    decimalTable.innerHTML = `<tr><th colspan="2">Passo a Passo</th></tr>`
    decimalTable.innerHTML += `<tr><td>Divisão Inteira</td><td>Resto</td></tr>`
    for (let i = decimal; i > 1; i = Math.floor(i/2)) {
      var add = binaryBefore.push(i%2);
      decimalTable.innerHTML += `<tr><td>${i} / 2 = ${Math.floor(i/2)}</td><td>${i % 2}</td></tr>`
    }
    var add = binaryBefore.push(1);
    decimalTable.innerHTML += `<tr><td>Ultimo Quociente</td><td>1</td></tr>`
    decimalTable.innerHTML += `<tr><td colspan="2">Organize debaixo pra cima</td></tr>`  
    decimalTable.innerHTML += `<tr><td colspan="2"> &darr; Resultado  &darr; </td></tr>`  
    let binaryAfter = binaryBefore.reverse()
    decimalTable.innerHTML += `<tr><td colspan="2">${binaryAfter.join("")}</td></tr>`
    binaryBefore = [] 
  };
}
