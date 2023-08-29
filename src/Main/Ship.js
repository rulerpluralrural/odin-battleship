export default class Ship {
	constructor(length) {
		this.length = length;
		this.hits = 0;
	}

    hit(){
        this.hits += 1
        return this.isSunk() ? 'Sunked' : 'Hit'
    }

    isSunk() {
        return this.hits === this.length
    }
}
