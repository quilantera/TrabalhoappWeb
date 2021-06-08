let body = document.querySelector("body"); 
let sectionItens=document.getElementById("section-itens");
let sectionJordan=document.createElement("div");
    sectionJordan.style.display="flex";
    sectionJordan.style.flexWrap="wrap";
    sectionJordan.style.width="100%";
let sectionYeezy=document.createElement("div");
    sectionYeezy.style.display="flex";
    sectionYeezy.style.flexWrap="wrap";
    sectionYeezy.style.width="100%";
let sectionAM=document.createElement("div");
    sectionAM.style.display="flex";
    sectionAM.style.flexWrap="wrap";
    sectionAM.style.width="100%";
let divJordan =[];
let imgJordan =[];
let divYeezy =[];
let imgYeezy=[];
let divAirMax =[];
let imgAirMax=[];
let sectionDetailsJordan=[];
let sectionPriceJordan=[];
let nameJordan=[];
let priceJordan=[];
let sectionDetailsYeezy=[];
let sectionPriceYeezy=[];
let nameYeezy=[];
let priceYeezy=[];
let sectionDetailsAirmax=[];
let sectionPriceAirmax=[];
let nameAirmax=[];
let priceAirmax=[];
let i=0
let j=0
let k=0
criaJordan();
criaYeezy();
criaAirMax();
function criaJordan(){
    sectionItens.appendChild(sectionJordan);
    for (i=0;i<6;i++){
        divJordan[i]=document.createElement("div");
        divJordan[i].classList.add("divItens");
        imgJordan[i]=document.createElement("img");
        imgJordan[i].src="/static/images/jordan/j"+(i+1)+".jpg";
        imgJordan[i].style.height="150px";
        imgJordan[i].style.width="270px";
        sectionDetailsJordan[i]=document.createElement("div");
        sectionDetailsJordan[i].classList.add("divDetails");
        sectionPriceJordan[i]=document.createElement("div");
        sectionPriceJordan[i].classList.add("divPrice");
        nameJordan[i]=document.createElement("h1");
        priceJordan[i]=document.createElement("h1");
        infoJordan(i)
        sectionDetailsJordan[i].appendChild(nameJordan[i]);
        sectionPriceJordan[i].appendChild(priceJordan[i]);
        divJordan[i].appendChild(sectionDetailsJordan[i]);
        divJordan[i].appendChild(imgJordan[i]);
        divJordan[i].appendChild(sectionPriceJordan[i]);
        sectionJordan.appendChild(divJordan[i]);  

    }  
}
function criaYeezy(){
    sectionItens.appendChild(sectionYeezy);
    for (i=0;i<6;i++){
        divYeezy[i]=document.createElement("div");
        divYeezy[i].classList.add("divItens");
        imgYeezy[i]=document.createElement("img");
        imgYeezy[i].src="/static/images/yeezy/y"+(i+1)+".jpg";
        imgYeezy[i].style.height="112px";
        imgYeezy[i].style.width="255px";
        sectionDetailsYeezy[i]=document.createElement("div");
        sectionDetailsYeezy[i].classList.add("divDetails");
        sectionPriceYeezy[i]=document.createElement("div");
        sectionPriceYeezy[i].classList.add("divPrice");
        nameYeezy[i]=document.createElement("h1");
        priceYeezy[i]=document.createElement("h1");
        infoYeezy(i)
        sectionDetailsYeezy[i].appendChild(nameYeezy[i]);
        sectionPriceYeezy[i].appendChild(priceYeezy[i]);
        divYeezy[i].appendChild(sectionDetailsYeezy[i]);
        divYeezy[i].appendChild(imgYeezy[i]);
        divYeezy[i].appendChild(sectionPriceYeezy[i]);
        sectionYeezy.appendChild(divYeezy[i]); 
    }  
}
function criaAirMax(){
    sectionItens.appendChild(sectionAM);
    for (i=0;i<6;i++){
        divAirMax[i]=document.createElement("div");
        divAirMax[i].classList.add("divItens");
        imgAirMax[i]=document.createElement("img");
        imgAirMax[i].src="/static/images/airmax/a"+(i+1)+".jpg";
        imgAirMax[i].style.height="132px";
        imgAirMax[i].style.width="242px";
        sectionDetailsAirmax[i]=document.createElement("div");
        sectionDetailsAirmax[i].classList.add("divDetails");
        sectionPriceAirmax[i]=document.createElement("div");
        sectionPriceAirmax[i].classList.add("divPrice");
        nameAirmax[i]=document.createElement("h1");
        priceAirmax[i]=document.createElement("h1");
        infoAirMax(i)
        sectionDetailsAirmax[i].appendChild(nameAirmax[i]);
        sectionPriceAirmax[i].appendChild(priceAirmax[i]);
        divAirMax[i].appendChild(sectionDetailsAirmax[i]);
        divAirMax[i].appendChild(imgAirMax[i]);
        divAirMax[i].appendChild(sectionPriceAirmax[i]);
        sectionAM.appendChild(divAirMax[i]); 
    }  
}
function infoJordan(i){
    switch (i){
        case 0:
            nameJordan[i].innerHTML="Jordan 1 High Royal Toe 2.0";
            priceJordan[i].innerHTML="R$ 1.900";
            break;
        case 1:
            nameJordan[i].innerHTML="Jordan 1 High Travis Scott";
            priceJordan[i].innerHTML="R$ 3.200";
            break;    
        case 2:
            nameJordan[i].innerHTML="jordan 1 High Rust Shadown";
            priceJordan[i].innerHTML="R$ 2.000";
            break        
        case 3:
            nameJordan[i].innerHTML="Jordan 1 High Chicago 2015";
            priceJordan[i].innerHTML="R$ 9.500";
            break;        
        case 4:
            nameJordan[i].innerHTML="Jordan 1 High 'NYC to Paris' ";
            priceJordan[i].innerHTML="R$ 2.400";
            break;
        case 5:
            nameJordan[i].innerHTML="Jordan 1 Shatterd BackBoard 1.0 ";
            priceJordan[i].innerHTML="R$ 7.100";
        break;
    }
}
function infoYeezy(i){
    switch (i){
        case 0:
            nameYeezy[i].innerHTML="Yeezy v.2 'bred'";
            priceYeezy[i].innerHTML="R$ 1.400";
            break;
        case 1:
            nameYeezy[i].innerHTML="Yeezy v.2 static reflective";
            priceYeezy[i].innerHTML="R$ 2.000";
            break;    
        case 2:
            nameYeezy[i].innerHTML="Yeezy v.2 'Zebra'";
            priceYeezy[i].innerHTML="R$ 1.250";
            break        
        case 3:
            nameYeezy[i].innerHTML="Yeezy v.2 Erath";
            priceYeezy[i].innerHTML="R$ 980";
            break;        
        case 4:
            nameYeezy[i].innerHTML="Yeezy v.2 Clay";
            priceYeezy[i].innerHTML="R$ 2.100";
            break;
        case 5:
            nameYeezy[i].innerHTML="Yeezy 'glow in the dark'";
            priceYeezy[i].innerHTML="R$ 3.100";
        break;
    }
}
function infoAirMax(i){
    switch (i){
        case 0:
            nameAirmax[i].innerHTML="Air Max 90 Off-White ";
            priceAirmax[i].innerHTML="R$ 6.250";
            break;
        case 1:
            nameAirmax[i].innerHTML="Air Max limeade";
            priceAirmax[i].innerHTML="R$ 870";
            break;    
        case 2:
            nameAirmax[i].innerHTML="Air Max 1/97 Sean";
            priceAirmax[i].innerHTML="R$ 7.200";
            break        
        case 3:
            nameAirmax[i].innerHTML="Air Max Infra-Red";
            priceAirmax[i].innerHTML="R$ 670";
            break;        
        case 4:
            nameAirmax[i].innerHTML="Air Max 90 'Bacon'";
            priceAirmax[i].innerHTML="R$ 1.100";
            break;
        case 5:
            nameAirmax[i].innerHTML="Air Max 1 Clot";
            priceAirmax[i].innerHTML="R$ 4.240";
        break;
    }
}
