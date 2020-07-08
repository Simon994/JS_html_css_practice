// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//proto
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate(){
     
      let randomDnaIndex = [Math.floor(Math.random()*15)];
      let randomDnaBase = dna[randomDnaIndex];
      let randomNewBase = returnRandBase();
      while (randomDnaBase === randomNewBase) {
          randomNewBase = returnRandBase(); 
        }
      
      dna[randomDnaIndex] = randomNewBase;
      return dna;
    },
    compareDNA(pAequor){
      let currentDna = this.dna;
      let otherDna = pAequor.dna;
      let count = 0;
      for(i=0; i<currentDna.length; i++){
        if(currentDna[i] === otherDna[i]){
          count++;
        } 
      }
      console.log(`specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${Math.round(count/15 *100)}% DNA in common.`);
    },
    willLikelySurvive(){
      let currentDna = this.dna;
      let count = 0;
      currentDna.forEach(e =>{
        if (e === 'C' || e === 'G'){
          count++;
        }
      });
      return (count/15 >= 0.6) ? true : false;
    }
  }
}


let pAequorStore = [];
for (i=0; i<30; i++){
  let dnaI = mockUpStrand();
  let pI = pAequorFactory(i, dnaI); 
  pAequorStore.push(pI);
}


pAequorStore[0].compareDNA(pAequorStore[5]);