class Shiritory {
    constructor() {
        this.words = []
        this.gameOver = false
    }

    play (word) {
        if(this.words.length === 0) {
            this.words.push(word)
            return this.words
        }
        else {
           if(this.words.at(-1).at(-1) === word[0] && !this.words.includes(word)){
               this.words.push(word)
               return this.words
           } 
           else if (this.words.at(-1).at(-1) !== word[0]) {
               this.gameOver = true
               return ` game over  - ${word} should start with ${this.words.at(-1).at(-1)}`}
           else  {
               this.gameOver = true
                return `game over - ${word} have already been said`
           } 
        }
    }


    restart () {
        this.words = []
        this.gameOver = false
        return "Game restarted"
    }
}


