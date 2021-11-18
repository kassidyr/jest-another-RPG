//imports the Potion() constructor into the test, establishing Potion as a usable variable
const Potion = require('../lib/Potion');

//mocks/replaces the constructor's implementation with our faked data
jest.mock('../lib/Potion');

console.log(new Potion());

const Player = require('../lib/Player');

test('creates a player object', () => {
    const player = new Player('Dave');
  
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    //the players inventory should be an array containing an object
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
  });