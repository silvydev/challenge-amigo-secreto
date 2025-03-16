let listaAmigos = [];
let ulListaAmigos = document.getElementById("listaAmigos");

/**
 * Agrega un nuevo nombre a la lista de amigos
 */

function agregarAmigo(){

    let inputAmigo = document.getElementById("amigo");
    let nuevoAmigo = inputAmigo.value;

    //Valida que el usuario ingrese un valor al input para agregar un amigo a la lista

    if(nuevoAmigo != ''){

        agregarContenidoLista(ulListaAmigos, nuevoAmigo);

        listaAmigos.push(nuevoAmigo);

        inputAmigo.value='';

    }else{

        alert("Por favor agregue un nombre válido");

    }

}

/**
 * Realiza el sorteo que elige de manera automática el amigo secreto 
 */
function sortearAmigo(){

    let numeroAmigos = listaAmigos.length;
    let ulResultado = document.getElementById("resultado");
    
    ulResultado.innerHTML="";

    //Valida que existan nombres en la lita para realizar el sorteo
    if(numeroAmigos > 0 ){

        let itemsListaAmigos = ulListaAmigos.getElementsByTagName("li");
        let posicionAmigo = Math.floor(Math.random() * numeroAmigos);
        let amigoSecreto = listaAmigos[posicionAmigo];

        //Muestra el amigo secreto en pantalla y reorganiza el listado de nombres
        agregarContenidoLista(ulResultado, `El amigoSecreto sorteado es: ${amigoSecreto}`);

        listaAmigos.splice(posicionAmigo, 1);

        if(itemsListaAmigos.length > 0 ){

            ulListaAmigos.removeChild(itemsListaAmigos[posicionAmigo]);

        }


    }else{

        alert("No hay personas en la lista. Por favor agregue por lo menos un amigo para realizar el sorteo");

    }

}

/**
 * Agrega contenido a las lista que se presentan en la interfaz
 * @param {string} elementoLista 
 * @param {string} contenido 
 */
function agregarContenidoLista(elementoLista, contenido){

    let nuevoLi = document.createElement("li");

    nuevoLi.textContent = contenido;
    elementoLista.appendChild(nuevoLi);

}

