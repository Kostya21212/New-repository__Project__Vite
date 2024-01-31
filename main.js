import './style.scss'
const CALCULATOR_ACTIONS = {
      emptyValue : 'empty-value',
      plusMinus : 'plus-minus'
}
const CALCULATOR_CONFIG = [
      [{value : 'AC', action: CALCULATOR_ACTIONS.emptyValue},{value : '+/-', action: CALCULATOR_ACTIONS.plusMinus},{value : '%'},{value : '/'}],
      [{value : '7'},{value : '8'},{value : '9'},{value : 'x'}],
      [{value : '4'},{value : '5'},{value : '6'},{value : '-'}],
      [{value : '1'},{value : '2'},{value : '3'},{value : '+'}],
      [{value : '0', class: 'w-full', colspan: 2},{value : '.'},{value : '='}]
];


const tableEl = document.getElementById('calculatorBtn')

CALCULATOR_CONFIG.forEach((itemArr)=>{
      const trEl = document.createElement('tr')
     
      itemArr.forEach((itemObject) =>{
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
                  switch(itemObject.action){
                        case CALCULATOR_ACTIONS.emptyValue:
                              console.log('empty value');
                              break;
                        case CALCULATOR_ACTIONS.plusMinus:
                              console.log('add plus-minus');
                              break
                        default:
                  }
                  
                  console.log('e', e)
             })
             tdEl.appendChild(btnEl)
             trEl.appendChild(tdEl)
            }
      })
      tableEl.appendChild(trEl)
});
