window.onload = function () {
    fetch("https://api.exchangeratesapi.io/latest?base="+ selectHave.value)
        .then(response => response.json())
        .then(results => {
            // console.log(results.rates);
            for (let result in results.rates){
                selectHave.innerHTML +=
                    `
                            <option value="${result}">${result}</option>
                        `;
                selectWant.innerHTML +=
                    `
                            <option value="${result}">${result}</option>
                        `
            }
            // return results
        })
    // .then(results => {
    //     console.log(results.rates);
    //     inputHave.onchange = (results) =>{
    //         console.log(results);
    //         console.log(inputHave.value);
    //         let inpHave = inputHave.value * results.rates[selectWant.value];
    //         inputWant.value = inpHave.toFixed(4)
    //     }
    // })
};
function  exchangeHave(){
    fetch("https://api.exchangeratesapi.io/latest?base="+ selectHave.value)
        .then(response => response.json())
        .then(results => {     // console.log(results.rates);  // console.log(inputHave.value);
                let inpHave = inputHave.value * results.rates[selectWant.value];
                inputWant.value = inpHave.toFixed(4)
            }
        )
}
function  exchangeWant(){
    fetch("https://api.exchangeratesapi.io/latest?base="+ selectWant.value)
        .then(response => response.json())
        .then(results => {
                let inpWant = inputWant.value * results.rates[selectHave.value];
                inputHave.value = inpWant.toFixed(4)
            }
        )
}