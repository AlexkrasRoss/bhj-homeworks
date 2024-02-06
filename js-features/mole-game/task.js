const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let counterDead = 0;
let counterLost = 0;
getHole = index => document.getElementById(`hole${index}`);
for (let index = 1; index < 9; index++) {
    let hole = getHole(index);
    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')) {
            counterDead++;
            dead.textContent = counterDead;
        } else {
            counterLost++;
            lost.textContent = counterLost;
        }
        if (counterDead === 10) {
            alert('Вы выйграли');
            counterDead = 0;
            counterLost = 0;
            dead.textContent = counterDead;
            lost.textContent = counterLost;
        }
        if (counterLost === 5) {
            alert('Вы проиграли');
            counterDead = 0;
            counterLost = 0;
            lost.textContent = counterLost;
            dead.textContent = counterDead;
        }
    };

}