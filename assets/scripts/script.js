const FRONT = "card_front";
const BACK  = "card_back";

let techs = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react',
    
];
let cardsPairs = createCardsFromTechs(techs);
populate(cardsPairs);
function populate(cardsPairs) {
    const totalCards = Object.keys(cardsPairs).length;
    const randomNumber = parseInt(Math.random() * totalCards);
    const cardSelected = cardsPairs[randomNumber];
    console.log(cardSelected);
     
}

function createCardsFromTechs(techs) {
    let cards = [];
    for(let tech of techs) {
        cards.push(createPairFromTech(tech));
    } 
    return cards.flatMap(function devolverDoisArrays(pair) {
         return pair[0];
        } );

    
}

function createPairFromTech(tech) {
    return [{
        id: creatIdWithTech(tech),
        icon: tech,
        flipped: false,
    }, {
        id: creatIdWithTech(tech),
        icon: tech,
        flipped: false,
    }]
}





    n1 => n1 + 2



function mult(m1, m2) {
    let result = (m1) => m1 + 4 * soma(m1, m2);
    return result
}

console.log(mult(2, 5));


function creatIdWithTech(tech) {
    return parseInt(Math.random() * 1000);
}