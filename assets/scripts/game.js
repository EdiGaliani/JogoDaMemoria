let game = {

    lockMode: false,
    firstCard: null,
    secondCard: null,

    setCard: function(id) {
        let card = this.cards.filter(card => card.id === Number(id))[0];
        // let card = null

        // for (let x = 0; x < this.cards.length; x++) {
        //     if (this.cards[x].id === Number(id)) {
        //         card = this.cards[x]
        //     }
        // }
        
        if(card.flipped || this.lockMode) {
            return false;
        }

        const setCard = { id: card.id, icon: card.icon };
      //  this.firstCard  = (!this.firstCard) ?  setCard : this.firstCard
      
       
        if(!this.firstCard) {
            this.firstCard = { id: card.id, icon: card.icon }  
        } else {
            this.secondCard = {id: card.id, icon: card.icon }
            this.lockMode = true;
        }
        return true;
    },

    checkMatch: function () {
        if ( this.firstCard === null || this.secondCard === null ) return false;
        return this.firstCard.icon === this.secondCard.icon;
    },

    clearCards: function() {
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },
    
    techs: [
        'bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react'
    ],
    
    cards: null,

    createCardsFromTechs: function () {
        this.cards = [];
        this.techs.forEach((tech) => {
            this.cards.push(this.createPairFromTech(tech));
        }) 
        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();
        return this.cards;
    },
    
    createPairFromTech: function (tech) {
        return [{
            id: this.creatIdWithTech(tech),
            icon: tech,
            flipped: false,
        }, {
            id: this.creatIdWithTech(tech),
            icon: tech,
            flipped: false,
        }]
    },
    
    creatIdWithTech: function () {
        return parseInt(Math.random() * 1000);
    },

    shuffleCards: function() {
        let currentIndex = this.cards.length;
        let randomIndex = 0;
    
        while(currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
    }
}