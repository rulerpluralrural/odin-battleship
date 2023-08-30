import Ship from "../Classes/Ship.js";

describe('Ship', () => {
    let ship = new Ship()

    beforeEach(() => {
        ship = new Ship(4)
    })

    test('create a ship', () => {
        expect(ship).toEqual({
            length: 4,
            hits: 0
        })
    })

    test('check ship for hits', () => {
        ship.hit()
        expect(ship.hits).toBe(1)
    })

    test('check ship for multiple hits', () => {
        ship.hit()
        ship.hit()
        ship.hit()
        expect(ship.hits).toBe(3)
    })

    test( 'check if ship sunk', () => {
        ship.hit()
        ship.hit()
        ship.hit()
        ship.hit()
        expect(ship.isSunk()).toBe(true)
    })
})