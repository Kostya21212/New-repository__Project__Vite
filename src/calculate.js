import{CALCULATOR_ACTIONS,CALCULATOR_CONFIG } from './config'
calculator()
export function calculator (){
    const tableEl = document.getElementById('calculatorBtn')

CALCULATOR_CONFIG.forEach((itemArr)=>{
      const trEl = document.createElement('tr')
     
      itemArr.forEach((itemObject) =>{
        createCalculatorData(itemObject, trEl)
      })
      tableEl.appendChild(trEl)
});
}
function switchCaclButton (itemObject){
    switch(itemObject.action){
        case CALCULATOR_ACTIONS.emptyValue:
            emptyValue();
              break;
        case CALCULATOR_ACTIONS.plusMinus:
            plusMinus ();
              break
        default:
            simpleNumberAction(itemObject)
            break
  }
}
function simpleNumberAction(itemObject){
console.log('SimpleNumber')
}
function createCalculatorData(itemObject, trEl){
    if(itemObject.value){
        const tdEl = document.createElement('td');
        tdEl.classList.add('p-6')    
        const btnEl = document.createElement('button')
        btnEl.className += 'btn w-full';
        if(itemObject.class){
             btnEl.className += `${itemObject.class}`;
        }
        if(itemObject.colspan){
             tdEl.colSpan = itemObject.colspan
        }
        btnEl.innerHTML=itemObject.value 
        btnEl.addEventListener('click', (e) => {
           switchCaclButton(itemObject)
             console.log('e', e)
        })
        tdEl.appendChild(btnEl)
        trEl.appendChild(tdEl)
       }
}
function emptyValue(){
    console.log('empty value')
}
function plusMinus (){
    console.log('add plus-minus')
}