function startModal(modalID){
    const modal = document.getElementById(modalID);
    if(modal){


    modal.classList.add('view');
    modal.addEventListener('click',function(event){
        if(event.target.id == modalID || event.target.className=='close'){
            modal.classList.remove("view");
        }
        if(event.target.className=='btn-send'){
            saveAddress("modal-address");
            modal.classList.remove("view");
        }
    });
    }
}
const active = document.querySelector(".btn-addAddress");
active.addEventListener('click',function(){
    startModal("modal-address");
})

function saveAddress(){
    var saveAddress =document.getElementById("address");
    var saveComplement =document.getElementById("complement");
    var saveCEP =document.getElementById("CEP");
    var saveCity =document.getElementById("city");
    
    let pAddress =document.getElementById("txt-address");
    let pComplement =document.getElementById("txt-complement");
    let pCEP =document.getElementById("txt-cep");
    let pCity =document.getElementById("txt-city");
        pAddress.innerHTML=saveAddress.value;
        pComplement.innerHTML=saveComplement.value;
        pCEP.innerHTML=saveCEP.value;
        pCity.innerHTML=saveCity.value;

    /*details= JSON.parse(localStorage.getItem("addressDetails"));
    if(details==null){
        localStorage.setItem("addressDetails","[]");
        details = [];
    }
    var aux ={
        endereco: saveAddress.value, complemento: saveComplement.value, cep: saveCEP.value, cidade: saveCity.value
    }
    details.push(aux);
    localStorage.setItem("addressDetails",JSON.stringify(details));*/
    
}

function pushAddress(){
    
}