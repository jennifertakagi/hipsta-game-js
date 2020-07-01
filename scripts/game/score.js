/**
 * Class representing a score
 */
class Score {

    /**
     * Creates a score
     */
    constructor () {
        this.numberScore = 0
    }

    /**
     * Show the score
     */
    show () {
        textAlign('right')
        fill('#fff')
        textSize(45)
        text(parseInt(this.numberScore), width - 30, 50)
    }

    /**
     * Add the score
     */
    addScore () {
        this.numberScore = this.numberScore + 0.1
    }
}