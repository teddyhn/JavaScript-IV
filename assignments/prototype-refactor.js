/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

class GameObject {
    constructor(char) {
        this.createdAt = char.createdAt;
        this.name = char.name;
        this.dimensions = char.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

/*
=== CharacterStats ===
* healthPoints
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/

class CharacterStats extends GameObject {
    constructor(race) {
        super(race);
        this.healthPoints = race.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}

/*
=== Humanoid (Having an appearance or character resembling that of a human.) ===
* team
* weapons
* language
* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
* should inherit destroy() from GameObject through CharacterStats
* should inherit takeDamage() from CharacterStats
*/

class Humanoid extends CharacterStats {
    constructor(human) {
        super(human);
        this.team = human.team;
        this.weapons = human.weapons;
        this.language = human.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`
    }
}

/*
=== Hero ===
* renown
* purity
* diplomacy
* heroStrike() // prototype method -> deals 10 damage to other player if Villain
*/

class Hero extends Humanoid {
    constructor(player) {
        super(player);
        this.alignment = player.alignment;
        this.renown = player.renown;
        this.purity = player.purity;
        this.diplomacy = player.diplomacy;
    }
    heroStrike(player) {
        if (player.alignment === 'Villain') {
            player.healthPoints = player.healthPoints - 10;
            if (player.healthPoints <= 0) {
            return player.destroy();
            }
        } else return "You cannot attack other heroes!";
    }
}

/*
=== Villain ===
* notoriety
* corruption
* persuasion
* crushHope() // prototype method -> deals 10 damage to other player if alignment is Hero
*/

class Villain extends Humanoid {
    constructor(player) {
        super(player);
        this.alignment = player.alignment;
        this.notoriety = player.notoriety;
        this.corruption = player.corruption;
        this.persuasion = player.persuasion;
    }
    crushHope(player) {
        if (player.alignment === 'Hero') {
            player.healthPoints = player.healthPoints - 10;
            if (player.healthPoints <= 0) {
            return player.destroy();
            }
        }
    }
}

/*
* Inheritance chain: GameObject -> CharacterStats -> Humanoid -> Hero/Villain
* Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
* Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 1,
    height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
    'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 2,
    height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
    'Giant Sword',
    'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 1,
    width: 2,
    height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
    'Bow',
    'Dagger',
    ],
    language: 'Elvish',
});

let valla = new Hero({
    healthPoints: 20,
    name: 'Valla',
    alignment: 'Hero',
    renown: 90,
    purity: 80,
    diplomacy: 50,
});

let mephisto = new Villain({
    healthPoints: 25,
    name: 'Mephisto',
    alignment: 'Villain',
    notoriety: 100,
    corruption: 100,
    persuasion: 80,
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

mephisto.crushHope(valla);
console.log(mephisto.crushHope(valla));
console.log(valla.healthPoints);

console.log(valla.heroStrike(valla));

valla.heroStrike(mephisto);
valla.heroStrike(mephisto);
console.log(valla.heroStrike(mephisto));
console.log(mephisto.healthPoints);

// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
