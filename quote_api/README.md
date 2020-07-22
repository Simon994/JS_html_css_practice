Completed Quote API challenge project from Codecademy https://www.codecademy.com/practice/projects/quote-api

This is a small Express.js web API to store and serve different quotes about computers, coding, and technology.
The API has:
	1. A GET /api/quotes/random route. This route should send back a random quote from the quotes data. 
	2. A GET /api/quotes route. This route should return all quotes from the data if the request has no query params. 
	If there is a query string with a person attribute, the route should return all quotes said by the same person.
	 For instance, the data set has multiple quotes for Grace Hopper, so GET /api/quotes?person=Grace Hopper should return an array of only those quotes.
	3. a POST /api/quotes route for adding new quotes to the data. New quotes will be passed in a query string with two properties:
 quote with the quote text itself, and person with the person who is credited with saying the quote. This route should verify that both
 properties exist in the request query string and send a 400 response if it does not. If all is well, this route handler should add the
 new quote object to the data array and send back a response with the newly created object.

 

