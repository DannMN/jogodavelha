//Pegando todas as div's
const board = document.querySelectorAll('div.q div')     
let count = 0
let jogo = []
let corJ1 = document.querySelector('#corJ1')
let corJ2 = document.querySelector('#corJ2')
let j1 = ''
let j2 = ''
//iniciando o contador que sera usado para verificar o jogador
board.forEach(item => {
    item.addEventListener('click', jogou)
})
const formInfo = document.getElementById('game-info')
formInfo.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(e.submitter.id)
    if(e.submitter.id == 'newTab'){
        board.forEach(position => {
            position.innerHTML = ''
            position.style.background = 'white'
            count = 0
        })
        return
    }
    if(e.submitter.id == 'btnStart'){
        console.log(e.submitter.id)
        j1 = document.querySelector('input#p1').value
        j2 = document.querySelector('input#p2').value
        document.querySelector('p.p1').innerHTML = j1
        document.querySelector('p.p2').innerHTML = j2
        return
    }
    if(e.submitter.id == 'btnNew'){
        document.querySelector('.p1').value = ''
        document.querySelector('.p2').value = ''
        return
    }
})

function jogou(el){
    console.log(el)
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
    if((board[0].innerText === 'X') && (board[1].innerText === 'X')&& (board[2].innerText === 'X')){
        board[0].style.backgroundColor = corJ1.value
        board[1].style.backgroundColor = corJ1.value
        board[2].style.backgroundColor = corJ1.value
        alert(`O jogador ${j1} ganhou!`)
        //Verificando Horizontal 1 linha O
    }else if((board[0].innerText === 'O') && (board[1].innerText === 'O')&& (board[2].innerText === 'O')){
        board[0].style.backgroundColor = corJ2.value
        board[1].style.backgroundColor = corJ2.value
        board[2].style.backgroundColor = corJ2.value
        alert(`O jogador ${j2} ganhou!`)
        //Verificando Horizontal 2 linha O
    }else if((board[3].innerText === 'O') && (board[4].innerText === 'O')&& (board[5].innerText === 'O')){
        board[3].style.backgroundColor = corJ2.value
        board[4].style.backgroundColor = corJ2.value
        board[5].style.backgroundColor = corJ2.value
        alert(`O jogador ${j2} ganhou!`)
        //Verificando Horizontal 2 Linha X
    }else if((board[3].innerText === 'X') && (board[4].innerText === 'X')&& (board[5].innerText === 'X')){
        board[3].style.backgroundColor = corJ1.value
        board[4].style.backgroundColor = corJ1.value
        board[5].style.backgroundColor = corJ1.value
        alert(`O jogador ${j1} ganhou!`)
        //Verificando Horizontal 3 linha O
    }else if((board[6].innerText === 'O') && (board[7].innerText === 'O')&& (board[8].innerText === 'O')){
        board[6].style.backgroundColor = corJ2.value
        board[7].style.backgroundColor = corJ2.value
        board[8].style.backgroundColor = corJ2.value
        alert(`O jogador ${j2} ganhou!`)
        //Verificando Horizontal 3 Linha X
    }else if((board[6].innerText === 'X') && (board[7].innerText === 'X')&& (board[8].innerText === 'X')){
        board[6].style.backgroundColor = corJ1.value
        board[7].style.backgroundColor = corJ1.value
        board[8].style.backgroundColor = corJ1.value
        alert(`O jogador ${j1} ganhou!`)
        //Verificando Vertical 1 coluna O
    }else if((board[0].innerText === 'O') && (board[3].innerText === 'O')&& (board[6].innerText === 'O')){
        board[0].style.backgroundColor = corJ2.value
        board[3].style.backgroundColor = corJ2.value
        board[6].style.backgroundColor = corJ2.value
        alert(`O jogador ${j2} ganhou!`)
        //Verificando Vertical 1 coluna X
    }else if((board[0].innerText === 'X') && (board[3].innerText === 'X')&& (board[6].innerText === 'X')){
        board[0].style.backgroundColor = corJ1.value
        board[3].style.backgroundColor = corJ1.value
        board[6].style.backgroundColor = corJ1.value
        alert(`O jogador ${j1} ganhou!`)
        //Verificando Vertical 2 coluna O
    }else if((board[1].innerText === 'O') && (board[4].innerText === 'O')&& (board[7].innerText === 'O')){
        board[1].style.backgroundColor = corJ2.value
        board[4].style.backgroundColor = corJ2.value
        board[7].style.backgroundColor = corJ2.value
        alert(`O jogador ${j2} ganhou!`)
        //Verificando Vertical 2 coluna X
    }else if((board[1].innerText === 'X') && (board[4].innerText === 'X')&& (board[7].innerText === 'X')){
        board[2].style.backgroundColor = corJ1.value
        board[4].style.backgroundColor = corJ1.value
        board[7].style.backgroundColor = corJ1.value
        alert(`O jogador ${j1} ganhou!`)
        //Verificando Vertical 3 coluna O
    }else if((board[2].innerText === 'O') && (board[5].innerText === 'O')&& (board[8].innerText === 'O')){
        board[2].style.backgroundColor = corJ2.value
        board[5].style.backgroundColor = corJ2.value
        board[8].style.backgroundColor = corJ2.value
        alert(`O jogador ${j2} ganhou!`)
        //Verificando Vertical 3 coluna X
    }else if((board[2].innerText === 'X') && (board[5].innerText === 'X')&& (board[8].innerText === 'X')){
        board[2].style.backgroundColor = corJ1.value
        board[5].style.backgroundColor = corJ1.value
        board[8].style.backgroundColor = corJ1.value
        alert(`O jogador ${j1} ganhou!`)
        //Verificando Diagonal 1 para X
    }else if((board[0].innerText === 'X') && (board[4].innerText === 'X')&& (board[8].innerText === 'X')){
        board[0].style.backgroundColor = corJ1.value
        board[4].style.backgroundColor = corJ1.value
        board[8].style.backgroundColor = corJ1.value
        alert(`O jogador ${j1} ganhou!`)
        //Verificando Diagonal 1 para O
    }else if((board[0].innerText === 'O') && (board[4].innerText === 'O')&& (board[8].innerText === 'O')){
        board[0].style.backgroundColor = corJ2.value
        board[4].style.backgroundColor = corJ2.value
        board[8].style.backgroundColor = corJ2.value
        alert(`O jogador ${j2} ganhou!`)
        //Verificando Diagonal 2 para X
    }else if((board[2].innerText === 'X') && (board[4].innerText === 'X')&& (board[6].innerText === 'X')){
        board[2].style.backgroundColor = corJ1.value
        board[4].style.backgroundColor = corJ1.value
        board[6].style.backgroundColor = corJ1.value
        alert(`O jogador ${j1} ganhou!`)
        //Verificando Diagonal 2 para O
    }else if((board[2].innerText === 'O') && (board[4].innerText === 'O')&& (board[6].innerText === 'O')){
        board[2].style.backgroundColor = corJ2.value
        board[4].style.backgroundColor = corJ2.value
        board[6].style.backgroundColor = corJ2.value
        alert(`O jogador ${j2} ganhou!`)
    }else {
        let velha = 0
        let c = 0
        while(c< board.length){
            if(board[c].innerHTML != ''){                              
                velha++;
            }
        }
        for(let c=0;c < board.length; c++){
            if(board[c].innerHTML != ''){                              
                velha++;
            }
        }
        console.log(velha)
        if(velha > 6){
            alert('Deu Velha!!')
        }        
    }
}
