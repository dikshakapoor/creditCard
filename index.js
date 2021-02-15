
let  creditCardType = '';
const visa = "fab fa-cc-visa";
const mastercard = "fab fa-cc-mastercard";
const amex = "fab fa-cc-amex";
const diners = "fab fa-cc-diners-club";
const jcb = "fab fa-cc-jcb";
const discover = "fab fa-cc-discover";

//element
const card_number_element = document.getElementsByClassName("input")[0];
const cardBrand = document.getElementById("cardBrand")

const onKeyPress = (event) => {
  const creditCardNumber  = event.target.value;
  debugger
   creditCardType = getCreditCardType(creditCardNumber);
  if (creditCardType){
    addCardType(creditCardType)
  }
}

 function getCreditCardType(card_number) {
  let amex = new RegExp('^3[47][0-9]{13}$');
  let visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
  let cup1 = new RegExp('^62[0-9]{14}[0-9]*$');
  let cup2 = new RegExp('^81[0-9]{14}[0-9]*$');
 
  let mastercard = new RegExp('^5[1-5][0-9]{14}$');
  let mastercard2 = new RegExp('^2[2-7][0-9]{14}$');
 
  let disco1 = new RegExp('^6011[0-9]{12}[0-9]*$');
  let disco2 = new RegExp('^62[24568][0-9]{13}[0-9]*$');
  let disco3 = new RegExp('^6[45][0-9]{14}[0-9]*$');
  
  let diners = new RegExp('^3[0689][0-9]{12}[0-9]*$');
  let jcb =  new RegExp('^35[0-9]{14}[0-9]*$');
 
 
  if (visa.test(card_number)) {
    return 'VISA';
  }
  if (amex.test(card_number)) {
    return 'AMEX';
  }
  if (mastercard.test(card_number) || mastercard2.test(card_number)) {
    return 'MASTERCARD';
  }
  if (disco1.test(card_number) || disco2.test(card_number) || disco3.test(card_number)) {
    return 'DISCOVER';
  }
  if (diners.test(card_number)) {
    return 'DINERS';
  }
  if (jcb.test(card_number)) {
    return 'JCB';
  }
  if (cup1.test(card_number) || cup2.test(card_number)) {
    return 'CHINA_UNION_PAY';
  }
  return undefined;
}

const addCardType = (type) =>{  
      switch (type) {
        case "VISA":
          cardBrand.setAttribute("class", visa);
          break;
        case "MASTERCARD":
          cardBrand.setAttribute("class", mastercard);
          break;
        case "AMEX":
          cardBrand.setAttribute("class", amex);
          break;
        case "DINERS":
          cardBrand.setAttribute("class", diners);
          break;
        case "JCB":
          cardBrand.setAttribute("class", jcb);
          break;
        case "DISCOVER":
          cardBrand.setAttribute("class", discover);
          break;
        default:
          cardBrand.setAttribute("class", "");
          break;
      }
    }

const formElement = document.querySelector("form");
const onPayment = (event)=>{
  if (event.target.type === "submit"){
    event.preventDefault();
 
    const formData = new FormData(formElement);
    let object = {};
    formData.forEach((value, key) => { object[key] =value});
    console.log(object)
    debugger;
  }
    }

//eventListener
card_number_element.addEventListener('keyup', onKeyPress)
formElement.addEventListener("submit", onPayment)

