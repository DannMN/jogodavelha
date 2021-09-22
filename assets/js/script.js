// INITIALIZE STATEMENT
let board = {
    q0: '', q1: '', q2: '',
    q3: '', q4: '', q5: '',
    q6: '', q7: '', q8: '',
}
let typesOfVictory = [
    'q0,q1,q2',
    'q3,q4,q5',
    'q6,q7,q8',

    'q0,q3,q6',
    'q1,q4,q7',
    'q2,q5,q8',

    'q0,q4,q8',
    'q2,q4,q6',
]
let turn = ''
let warning = ''
let playing = false;
// EXECUTIONS
resetBoard()
document.querySelector('.new-game').addEventListener('click', resetBoard)
document.querySelectorAll('.item').forEach(item => item.addEventListener('click', itemClick))