//constantes
const na = document.getElementById("name");
const ty = document.getElementById("type");
const de = document.getElementById("desc");
const ju = document.getElementById("juego");
const bo = document.getElementById("body");
const cartas = document.getElementById("cartas");
const apiY = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
const apiM = "https://api.magicthegathering.io/v1/cards.all";
//var
var api = apiY;
//Funciones
function listaY(){
    fetch(api)
    .then(function (response){
        return response.json();
    })
    .then (function(json){
        cartas.innerHTML="";
        if(ju.value == "Y"){
            for (let i = 0; i < json.data.length; i++){
                if(ty.value == json.data[i].frameType && json.data[i].name.includes(na.value)&&json.data[i].desc.includes(de.value)){
                    let Cardtext =document.createElement("p");
                    let Cardname =document.createElement("h5");
                    let ar = document.createElement("article");
                    let im = document.createElement("img");
                    im.setAttribute ("src", json.data[i].card_images[0].image_url);
                    Cardname.innerHTML = json.data[i].name;
                    Cardtext.innerHTML = json.data[i].desc;
                    ar.appendChild(im);
                    ar.appendChild(Cardname);
                    ar.appendChild(Cardtext);
                    cartas.appendChild(ar);
                }
            }
        }else{
            for (let i = 0; i < json.cards.length; i++){
                if(json.cards[i].name.includes(na.value)&&json.cards[i].text.includes(de.value)){
                    let Cardtext =document.createElement("p");
                    let Cardname =document.createElement("h5");
                    let ar = document.createElement("article");
                    ar.style="background-color: lightgrey";
                    Cardtext.style="Background-color:rgb(192, 192, 192)"
                    let im = document.createElement("img");
                    im.setAttribute ("src", json.cards[i].imageUrl);
                    Cardname.innerHTML = json.cards[i].name;
                    Cardtext.innerHTML = json.cards[i].text;
                    ar.appendChild(im);
                    ar.appendChild(Cardname);
                    ar.appendChild(Cardtext);
                    cartas.appendChild(ar);
                }
            }
        }
    })
}

function cambiaJuego(){
    if(ju.value == "Y"){
        api = apiY;
        ty.disabled=false;
        bo.style="background-color: burlywood;";
    }else{
        api = apiM;
        ty.disabled=true;
        bo.style="background-color: grey;";
        
    }
}

//acciones
na.addEventListener("input", listaY);
de.addEventListener("input", listaY);
ty.addEventListener("input", listaY);
ju.addEventListener("input", cambiaJuego);