// #CardNumber numero en la tarjeta
// #titular titular de la tarjeta
// #expiration fecha de expiración
// #CVCcode codigo de la tarjeta

const inputs = document.querySelectorAll ("input");
console.log(inputs);


let titular = document.getElementById('titular');
let cardNumer = document.getElementById('cardNumber');
let expiration = document.getElementById('expiration');
let CVCcode = document.getElementById('CVCcode');

for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    
    //Forma 1
        element.oninput = function (){ 
            console.log("Se ingresaron "+this.value.length +" caracteres");
            console.log(this.id)

            if (this.id == "Name"){
                titular.innerText =this.value ;
            }else 
            if (this.id == "CardNum") {
                cardNumer.innerText =this.value ;
            }else 
                if (this.id == "CardMonth") { 
                    const index = expiration.innerText.indexOf("/")
                    if (index == -1){
                        expiration.innerText = this.value + "/";
                    }else{
                        let Year = expiration.innerText.substring(index);
                        expiration.innerText = this.value + Year;
                    }
                }else
                if (this.id == "CardYear") {
                    const index = expiration.innerText.indexOf("/")
                    let Month = expiration.innerText.substring(0, index+1)
                    expiration.innerText = Month + this.value;                
                }else
            if (this.id == "CardCVC") {
                CVCcode.innerText =this.value ;
            }
            
        };
    }
    //