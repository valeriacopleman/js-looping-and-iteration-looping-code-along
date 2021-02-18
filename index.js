// Code your solutions in this file
const peeps = ['Lisa', 'Kaitlin', 'Jan'];

const date = "surprise"

function writeCards(peeps, date) {
    let message = []
    for (let i = 0; i < peeps.length; i++) {
        message.push(`Thank you, ${peeps[i]}, for the wonderful ${date} gift!`)
    }
    return message;
}

function countDown(num) {
    while (num != -1) {
        console.log(num--)
    }
}