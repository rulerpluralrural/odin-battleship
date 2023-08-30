export default class Ship {
	constructor(length,name = 'Ship') {
		this.length = length;
		this.hits = 0;
        this.name = name
	}

    hit(){
        this.hits += 1
        return this.isSunk() ? 'Sunked' : 'Hit'
    }

    isSunk() {
        return this.hits === this.length
    }
}
