let quantity = document.getElementById('quantidade');
let from = document.getElementById('de');
let to = document.getElementById('ate');
let result = document.getElementById('resultado');

let button = document.getElementById('btn-reiniciar');

function sortear(){
    parseInt(quantity.value);
    parseInt(from.value);
    parseInt(to.value);

    let sorteados = [];
    let numero;

    if (from.value >= to.value){
        alert('Não é possível inserir um número final menor/igual do que o número inicial');
        return;

    }else if(quantity.value > to.value - from.value){
        alert('A quantidade de números que deseja sortear é maior do que o intervalo de números!');
        return;

    }else{

        for (let i = 0; i < quantity.value; i++){
            numero = randomNumber(from.value, to.value);

            while(sorteados.includes(numero)){
                numero = randomNumber(from.value, to.value);
            }

            sorteados.push(numero);

        }
    }
    
    
    result.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    
        //changeButtons();
        if(button.classList.contains('container__botao-desabilitado')){
            button.classList.remove('container__botao-desabilitado');
            button.classList.add('container__botao');

        }
}
/*
function changeButtons(){
    
    

    }else {
        

    }

}
*/
function reiniciar(){
    quantity.value = '';
    from.value = '';
    to.value = '';
    
    result.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    //changeButtons();
        button.classList.remove('container__botao');
        button.classList.add('container__botao-desabilitado');

}


function randomNumber(min, max){

    return Math.floor(Math.random() * (max - min) + min);
}