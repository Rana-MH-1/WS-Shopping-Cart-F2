//UpdateTotal PRice

let totalPRice = document.getElementById('total-price')
function UpdateTotalPrice(){
let Prices = document.getElementsByClassName('price')
let sum =0;
    for(let i=0;i< Prices.length;i++){
       sum += Number(Prices[i].innerHTML)
    }
   totalPRice.innerHTML = sum
}

//const qte = document.getElementsByClassName('Quantity')
//plus btn
const PlusBtn = document.getElementsByClassName('plus-btn')
for (let i=0;i<PlusBtn.length;i++){
    PlusBtn[i].addEventListener('click',function(event){
        //qte[i].innerHTML = parseInt(qte[i].innerHTML) +1
         let qte = event.target.nextElementSibling
         qte.innerHTML = Number(qte.innerHTML) +1
         //update of total Price / article
         let Prix_Unitaire = event.target.nextElementSibling.nextElementSibling.nextElementSibling
         let PixTotalPArArticle = event.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
        
         PixTotalPArArticle.innerHTML = +(Prix_Unitaire.innerHTML) * +(qte.innerHTML)
         UpdateTotalPrice()

    })
}

//moin btn
const moinBtn = document.getElementsByClassName('sustraction-btn')
for (let i=0;i<moinBtn.length;i++){
    moinBtn[i].addEventListener("click",function(E){
let qte = E.target.previousElementSibling
if(qte.innerHTML>0){
    qte.innerHTML = Number(qte.innerHTML) -1
}
let Prix_Unitaire = E.target.nextElementSibling
let PixTotalPArArticle =  E.target.nextElementSibling.nextElementSibling.nextElementSibling
PixTotalPArArticle.innerHTML = +(Prix_Unitaire.innerHTML) * +(qte.innerHTML)
UpdateTotalPrice()
})
}

