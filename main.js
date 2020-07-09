// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [6, 9, 2, 3, 8, 7, 7, 1, 6, 8, 2, 1, 7, 6, 9, 3];


// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

function validateCred(inputArray){
    let resultArray=[];
    let i = inputArray.length-1;
    let sum=0;
    do {
        
          resultArray.unshift(inputArray[i]);
          if (inputArray[i-1]*2 > 9){
            resultArray.unshift(inputArray[i-1]*2-9);
          }else {
            resultArray.unshift(inputArray[i-1]*2);
          }
          i=i-2;   
        } while (i>=1);
    if (i===0){
        resultArray.unshift (inputArray[i]);
    }
    //console.log(resultArray);
    for (let k=0; k<resultArray.length;k++){
        sum=sum+resultArray[k];
    } 
    //console.log(sum);
    if (sum%10===0){
        return true;
    }else{
        return false;
    }
}
function findInvalidCards(creditCardArray){
  let invalidCardArray=[];
  for (let i=0;i<creditCardArray.length; i++){
    if (validateCred(creditCardArray[i])===false){
      invalidCardArray.push(creditCardArray[i]);
    }
  }
  //console.log(invalidCardArray);
  return invalidCardArray;
}


function idInvalidCardCompanies(invalidCardArray){
  let invalidCardCompanies=[];
  const companies=['Amex (American Express)','Visa','Mastercard','Discover'];
  let resultInvalidCardCompanies=[];
  for (let i=0;i<invalidCardArray.length;i++){
         switch(invalidCardArray[i][0]){
         case 3:
         if(invalidCardCompanies.indexOf('Amex (American Express)') ===-1){
         invalidCardCompanies.push('Amex (American Express)');
         }
         break;
         case 4:
         if(invalidCardCompanies.indexOf('Visa') ===-1){
         invalidCardCompanies.push('Visa');
         }
         break;
         case 5:
         if(invalidCardCompanies.indexOf('Mastercard') ===-1){
         invalidCardCompanies.push('Mastercard');
         }
         break;
         case 6:
         if(invalidCardCompanies.indexOf('Discover') ===-1){
         invalidCardCompanies.push('Discover');
         }
         break;
         default:
         console.log('Company not found');
         break;   
         }  
  }
  
  return invalidCardCompanies;
  
}


function removeRepetition(companyList){
  let noRepetition=[];
  let i=0;
  while (i<companyList.length-1){
    let j=i+1;
    while (j<companyList.length){

      if (companyList[i]===companyList[j]){
        i++;
        break;
      } else {
        j++;
      }
    }
    if (j===companyList.length){
      noRepetition.push(companyList[i]);
      i++;
    }
    
  }
  noRepetition.push(companyList[i]);
  return noRepetition;
}
let invalidCardArray=findInvalidCards(batch);
console.log(invalidCardArray);
let invalidCompanies=idInvalidCardCompanies(invalidCardArray);
console.log(invalidCompanies);
console.log(removeRepetition(invalidCompanies));




function strToArray(string){
  let int=parseInt(string);
  console.log(int);
  let thuongSo=Math.floor(int/10);
  let soDu=int%10;
  let array=[];
  while (thuongSo!==0){
    
    array.unshift(soDu);
    soDu=thuongSo%10;
    thuongSo=Math.floor(thuongSo/10);
    
  }
  array.unshift(soDu);
  return array; 
}
console.log(strToArray('108475893'));