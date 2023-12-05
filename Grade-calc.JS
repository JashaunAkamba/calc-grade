document.querySelector('form').addEventListener('submit', checkGrade);


const A = 90;
const B = 80;
const C = 70;
const D = 60;
const F = 50;

function checkGrade(e) {
    e.preventDefault()
    let myGrade = document.querySelector('input').value

    let message = `<ul>`;

    console.log('running ...' + myGrade);




    console.log('running ...' + myGrade);

    if (myGrade >= A) {
        message += `<li>You have a A</li>`;
    }

    if (myGrade >= B && myGrade < A) {
        message += `<li>You have a B</li>`;
    }

    if (myGrade >= C && myGrade < B) {
        message += `<li>You have a C</li>`;
    }

    if (myGrade >= D && myGrade < C) {
        message += `<li>You have a D</li>`;

    }

    if (myGrade <= F) {
        message += `<li>You have an F</li>`;
    };

    document.querySelector('#output').innerHTML = message;
}







