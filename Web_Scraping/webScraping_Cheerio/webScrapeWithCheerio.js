
const cheerio = require('cheerio');
const axios = require('axios');
const URL = "https://www.codewars.com/users/leaderboard";

//async function for get request. Get data from CodeWars leaderboard
async function getUser() {
    try {
      const response = await axios.get(URL);
      return response;
      //console.log(response);
    } catch (error) {
      console.error(error);
    }
  }


// use native promise syntax for handling promise returned from async function above
const handleSuccess = (resolvedValue) => {
  let $ = cheerio.load(resolvedValue.data);
  let firstPara = $('title');
  console.log(title.text());
}
const handleFail = (failReason) => {
    console.log(failReason);
}

function nativePromise (){
  getUser().then(handleSuccess, handleFail);
}

nativePromise();




