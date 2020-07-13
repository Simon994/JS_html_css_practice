

const prompt = require('prompt-sync')({sigint: true});

const whatSizeField = prompt('What size field (number)?');
const whatDifficulty = prompt('Difficulty level (1-5)?');
 

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


let fullArr = [];
let ySize = parseInt(whatSizeField);
let xSize = ySize;
for (i = 0; i < ySize; i++){
  let row = [];
  for (j = 0; j<xSize; j++){
    row.push(fieldSelect(parseInt(whatDifficulty)*10));
  }
  fullArr.push(row);
}
fullArr[0][0] = pathCharacter;

function getHatPosition(){
    let rndHatPositionX = Math.floor(Math.random()*(parseInt(whatSizeField)));
    let rndHatPositionY = Math.floor(Math.random()*(parseInt(whatSizeField)));
    if (rndHatPositionX === 0 && rndHatPositionY === 0) {
      getHatPosition();
    }
    return fullArr[rndHatPositionY][rndHatPositionX] = hat;
}

getHatPosition();


function fieldSelect (percentage){
let rndChoice = Math.random();
 if (rndChoice < percentage/100) {
    return hole;
  } else {
    return fieldCharacter;
  }
} 


let play = true;

class Field {
    constructor(fieldArr) {
        this._fieldArr = fieldArr;
        this._headX = 0;
        this._headY = 0;
    }

    getFieldArr(){
        return this._fieldArr;
    }

    setFieldArr(newFieldArr){
        this._fieldArr = newFieldArr;
        return this._fieldArr;
    }

   mvRight(){
    this._headX = this._headX+1;
    movement(this, this._fieldArr, this._headY, this._headX);
 
   }

   mvLeft(){
    this._headX = this._headX-1;
    movement(this, this._fieldArr, this._headY, this._headX);
   }

   mvDown(){
    this._headY = this._headY+1;
    movement(this, this._fieldArr, this._headY, this._headX);
   }

   mvUp(){
    this._headY = this._headY-1;
    movement(this, this._fieldArr, this._headY, this._headX);
   }

    print(){
       const arr = this.getFieldArr();
       console.log(arr.join('\n').split(',').join(''));
    }

}

const field1 = new Field(fullArr);
 
function movement (pointer, currField, headY, headX){
    if (headY < 0 || headX < 0 || currField[headY][headX] === undefined){
        console.log('Out of bounds, you lose');
        play = false;
    } else if (currField[headY][headX] === hole){
        console.log('Whaaat?! You fell in a hole')
        play = false;
    } else if (currField[headY][headX] === pathCharacter){
        console.log('You ate yourself!');
        play = false;
    } else if (currField[headY][headX] === hat) {
        console.log('Winner winner chicken dinner. You found your hat!')
        play = false;
    }
     else {
        currField[headY][headX] = pathCharacter; 
        pointer.print();
        }
    }

field1.print();

while(play === true){
const whichWay = prompt('Which way?');
if (whichWay === 'r'){
    field1.mvRight();
} else if(whichWay === 'l'){
    field1.mvLeft();
} else if(whichWay === 'd'){
    field1.mvDown();
} else if (whichWay === 'u'){
   field1.mvUp(); 
}

}






