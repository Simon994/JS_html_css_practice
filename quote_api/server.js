const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement, createElement } = require('./utils');


const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () =>{
    console.log(`server listening on ${PORT}`);
});

app.get('/api/quotes/random', (req, res, next) => {
     let randomChosen = getRandomElement(quotes);
     let responseBody = {
         quote: randomChosen
     }
     res.send(responseBody); 
 });

 app.get('/api/quotes', (req, res, next) => {
    let arrayOfQuotes = [];
    if(req.query.person){
        quotes.forEach(quote =>{
            if (quote.person === req.query.person){
                arrayOfQuotes.push(quote);
            }
        })
        let selectedQuotesByAuthor = {
            quotes: arrayOfQuotes
        }
        res.send(selectedQuotesByAuthor);
    } else {
        let allQuotes = {
        quotes: quotes
        }
    res.send(allQuotes);
    }   
 });

 app.post('/api/quotes', (req, res, next) => {
     const createdElement = createElement(req.query);
     if (createdElement){
        quotes.push(createdElement.quote);
        res.status(201).send(createdElement);
     } else {
        res.status(400).send();
      }
 });




