//Pegando todas as div's
let divs = document.querySelectorAll('div.q div')     
let count = 0
let jogo = []
let corJ1 = document.querySelector('#corJ1')
let corJ2 = document.querySelector('#corJ2')
let j1 = ''
let j2 = ''
//iniciando o contador que sera usado para verificar o jogador

for (const item of divs) {
    item.addEventListener('click', jogou)
}
let btnStart = document.getElementById('btnStart')

btnStart.addEventListener('click', (e)=>{
    e.preventDefault()
    j1 = document.querySelector('input#p1').value
    j2 = document.querySelector('input#p2').value
    
    document.querySelector('p.p1').innerHTML = j1
    document.querySelector('p.p2').innerHTML = j2
    

})
let btnNew = document.querySelector('#btnNew')

btnNew.addEventListener('click', (e)=>{
    divs.forEach(div =>{
        div.innerHTML = ''
    })
})
let btnTab = document.querySelector('#newTab')

btnTab.addEventListener('click', (e)=>{
    e.preventDefault()
    divs.forEach(el =>{
        el.innerHTML = ''
        el.style.background = 'white'
        count = 0
    })
})

function jogou(el){
        let idDiv = el.target.id
        let divValue = el.target.innerHTML
        let p1 = 'X'
        let p2 = 'O'

        if(divValue === ''){
            if(count%2 == 0){
                document.getElementById(idDiv).innerHTML = p1                            
                    count++
            }else{
                    document.getElementById(idDiv).innerHTML = p2
                    jogo.push(p2)
                    count++
            }
        }else{
            alert(`Esta Casa ja tem ${divValue} escolha outra casa!` )
        }
        if(count >=5){
            verificarJogo()
        }
}

function verificarJogo(){
    //Verificando Horizontal 1 linha X
    if((divs[0].innerText === 'X') && (divs[1].innerText === 'X')&& (divs[2].innerText === 'X')){
        divs[0].style.backgroundColor = corJ1.value
        divs[1].style.backgroundColor = corJ1.value
        divs[2].style.backgroundColor = corJ1.value
        alert(`O jogador ${j1} ganhou!`)
        //Verificando Horizontal 1 linha O
    }else if((divs[0].innerText === 'O') && (divs[1].innerText === 'O')&& (divs[2].innerText === 'O')){
        divs[0].style.backgroundColor = corJ2.value
        divs[1].style.backgroundColor = corJ2.value
        divs[2].style.backgroundColor = corJ2.value
        alert(`O jogador ${j2} ganhou!`)
        //Verificando Horizontal 2 linha O
    }else if((divs[3].innerText === 'O') && (divs[4].innerText === 'O')&& (divs[5].innerText === 'O')){
        divs[3].style.backgroundColor = corJ2.value
        divs[4].style.backgroundColor = corJ2.value
        divs[5].style.backgroundColor = corJ2.value
        alert(`O jogador ${j2} ganhou!`)
        //Verificando Horizontal 2 Linha X
    }else if((divs[3].innerText === 'X') && (divs[4].innerText === 'X')&& (divs[5].innerText === 'X')){
        divs[3].style.backgroundColor = corJ1.value
        divs[4].style.backgroundColor = corJ1.value
        divs[5].style.backgroundColor = corJ1.value
        alert(`O jogador ${j1} ganhou!`)
        //Verificando Horizontal 3 linha O
    }else if((divs[6].innerText === 'O') && (divs[7].innerText === 'O')&& (divs[8].innerText === 'O')){
        divs[6].style.backgroundColor = corJ2.value
        divs[7].style.backgroundColor = corJ2.value
        divs[8].style.backgroundColor = corJ2.value
        alert(`O jogador ${j2} ganhou!`)
        //Verificando Horizontal 3 Linha X
    }else if((divs[6].innerText === 'X') && (divs[7].innerText === 'X')&& (divs[8].innerText === 'X')){
        divs[6].style.backgroundColor = corJ1.value
        divs[7].style.backgroundColor = corJ1.value
        divs[8].style.backgroundColor = corJ1.value
        alert(`O jogador ${j1} ganhou!`)
        //Verificando Vertical 1 coluna O
    }else if((divs[0].innerText === 'O') && (divs[3].innerText === 'O')&& (divs[6].innerText === 'O')){
        divs[0].style.backgroundColor = corJ2.value
        divs[3].style.backgroundColor = corJ2.value
        divs[6].style.backgroundColor = corJ2.value
        alert(`O jogador ${j2} ganhou!`)
        //Verificando Vertical 1 coluna X
    }else if((divs[0].innerText === 'X') && (divs[3].innerText === 'X')&& (divs[6].innerText === 'X')){
        divs[0].style.backgroundColor = corJ1.value
        divs[3].style.backgroundColor = corJ1.value
        divs[6].style.backgroundColor = corJ1.value
        alert(`O jogador ${j1} ganhou!`)
        //Verificando Vertical 2 coluna O
    }else if((divs[1].innerText === 'O') && (divs[4].innerText === 'O')&& (divs[7].innerText === 'O')){
        divs[1].style.backgroundColor = corJ2.value
        divs[4].style.backgroundColor = corJ2.value
        divs[7].style.backgroundColor = corJ2.value
        alert(`O jogador ${j2} ganhou!`)
        //Verificando Vertical 2 coluna X
    }else if((divs[1].innerText === 'X') && (divs[4].innerText === 'X')&& (divs[7].innerText === 'X')){
        divs[2].style.backgroundColor = corJ1.value
        divs[4].style.backgroundColor = corJ1.value
        divs[7].style.backgroundColor = corJ1.value
        alert(`O jogador ${j1} ganhou!`)
        //Verificando Vertical 3 coluna O
    }else if((divs[2].innerText === 'O') && (divs[5].innerText === 'O')&& (divs[8].innerText === 'O')){
        divs[2].style.backgroundColor = corJ2.value
        divs[5].style.backgroundColor = corJ2.value
        divs[8].style.backgroundColor = corJ2.value
        alert(`O jogador ${j2} ganhou!`)
        //Verificando Vertical 3 coluna X
    }else if((divs[2].innerText === 'X') && (divs[5].innerText === 'X')&& (divs[8].innerText === 'X')){
        divs[2].style.backgroundColor = corJ1.value
        divs[5].style.backgroundColor = corJ1.value
        divs[8].style.backgroundColor = corJ1.value
        alert(`O jogador ${j1} ganhou!`)
        //Verificando Diagonal 1 para X
    }else if((divs[0].innerText === 'X') && (divs[4].innerText === 'X')&& (divs[8].innerText === 'X')){
        divs[0].style.backgroundColor = corJ1.value
        divs[4].style.backgroundColor = corJ1.value
        divs[8].style.backgroundColor = corJ1.value
        alert(`O jogador ${j1} ganhou!`)
        //Verificando Diagonal 1 para O
    }else if((divs[0].innerText === 'O') && (divs[4].innerText === 'O')&& (divs[8].innerText === 'O')){
        divs[0].style.backgroundColor = corJ2.value
        divs[4].style.backgroundColor = corJ2.value
        divs[8].style.backgroundColor = corJ2.value
        alert(`O jogador ${j2} ganhou!`)
        //Verificando Diagonal 2 para X
    }else if((divs[2].innerText === 'X') && (divs[4].innerText === 'X')&& (divs[6].innerText === 'X')){
        divs[2].style.backgroundColor = corJ1.value
        divs[4].style.backgroundColor = corJ1.value
        divs[6].style.backgroundColor = corJ1.value
        alert(`O jogador ${j1} ganhou!`)
        //Verificando Diagonal 2 para O
    }else if((divs[2].innerText === 'O') && (divs[4].innerText === 'O')&& (divs[6].innerText === 'O')){
        divs[2].style.backgroundColor = corJ2.value
        divs[4].style.backgroundColor = corJ2.value
        divs[6].style.backgroundColor = corJ2.value
        alert(`O jogador ${j2} ganhou!`)
    }else {
        let velha = 0
        for(let c=0;c < divs.length; c++){
            if(divs[c].innerHTML != ''){
                              
                velha++;
            }
        }
        if(velha > 6){
            alert('Deu Velha!!')
        }
        
    }

}