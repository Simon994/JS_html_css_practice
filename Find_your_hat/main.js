const prompt = require('prompt-sync')({sigint: true});

// const prompt = require('prompt-sync')();
 const name = prompt('What is your name?');

 console.log(`hi ${name}`);

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';



class Field {
    constructor(fieldArr) {
        this._fieldArr = fieldArr;
    }

    getFieldArr(){
        return this._fieldArr;
    }

    

    print(){
       const arr = this.getFieldArr();
       console.log(arr.join('\n').split(',').join(''));
    }

}

const field1 = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ])
 
field1.print();
const whichWay = prompt(`Which way ${name}?`);

