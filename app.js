const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")
const score1 = document.querySelector('#score1')
const score2 = document.querySelector('#score2')
const select = document.querySelector('#select')
const reset = document.querySelector('#reset')

player1.addEventListener('click', function () {
    score1.innerText = `${parseInt(score1.innerText) + 1}`
    if (parseInt(score1.innerText) >= parseInt(select.value) && (parseInt(score1.innerText)-parseInt(score2.innerText)) >= 2) {
        score1.classList.add('has-text-success')
        score2.classList.add('has-text-danger')
        player1.disabled = true;
        player2.disabled = true;
    }
})


player2.addEventListener('click', function () {
    score2.innerText = `${parseInt(score2.innerText) + 1}`
    if (parseInt(score2.innerText) >= parseInt(select.value) && (parseInt(score2.innerText)-parseInt(score1.innerText)) >= 2)  {
        score2.classList.add('has-text-success');
        score1.classList.add('has-text-danger');
        player1.disabled = true;
        player2.disabled = true;
    }
})

reset.addEventListener('click', function () {
    score1.innerText = '0'
    score2.innerText = '0'
    player1.disabled = false;
    player2.disabled = false;
    score1.classList.remove('has-text-success','has-text-danger');
    score2.classList.remove('has-text-success','has-text-danger');
    
})

select.addEventListener('change', function(){
    score1.innerText = '0'
    score2.innerText = '0'
    player1.disabled = false;
    player2.disabled = false;
    score1.classList.remove('has-text-success','has-text-danger');
    score2.classList.remove('has-text-success','has-text-danger');
    
})
