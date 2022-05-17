/*h 23.6 exercise async await
Set up:
Set-up
You are going to access the API from https://www.themoviedb.org/settings/api, using async/await. You need a key for this API. That's free. You can request this by registering with your email address and then confirming your account.

Go to https://www.themoviedb.org/settings/api and get an API key
Activate your API key by filling in the contact form (as far as we're concerned you can just fill in "Jan Bakker, vegetable street 1, Broccolitown) (make sure your email address is correct).
All set with an API key? It looks like this (this is not a real key) and you can find it in your account:

0b65efc3e3dcb23271083716646785f4
W? yes
---------------------------------------------------------------
Exercise:
Q1:Create 3 files called api-client.js, script.js and index.html
w? yes

Q2:We are going to put all the relevant JavaScript for retrieving
 data and communicating with the API in the api-client.js file.
 w?y

Q3:In the api-client.js create the variable API_KEY with
 your API key as value.
 w? yes

Q4:Declare an asynchronous function getData() with the async keyword.
w? yes

Q5:In this function, add a const variable called apiUrl and give 
it the value of the endpoint you want to address. In our case,
 we have now chosen the "genres" endpoint of demoviedb. It looks 
 like this: https://api.themoviedb.org/3/genre/movie/list.
 w? yes

Q6:Use the fetch() function with the GET method to fetch the data 
from the API. Put the fetch function in a variable res that you await. 
So the code does not proceed until the await is ready.
W? yes

Q7:Add a standard HTML page to your index.html and connect the 
javascript file api-client.js file with a script tag.
w? yes

Q8:The response must also be converted to a JSON format. Why? 
Because JSON is easier to work with. If we call response.JSON() 
we get a promise back. So in an async function you can 
wait for it (await it).
w? yes

Q9:What do you do with the errors that are potentially there?
 You can catch it with a try{....} catch{....} block. Add this to your code.
W? yes
 Q10:Move the getData() function call to the to script.js. 
 You want to wait for the getData() function. How do you access the await keyword? By putting it in an async function. So create an asyncronous function in which you wait for getData().
W? yes good job

-------------------------------------------------------------------*/
/*exercise async await
Q1: You are going to make simple lists in HTML with a number of movie categories.
w? yes

Q2:Create separate functions for retrieving your data. 
For example: getMovieGenres(), getTopRatedMovies(), getTopRatedActionMovies().
Consider whether these functions should be synchronous or asynchronous.
W? yes only the get function is async the rest is information you can get from the getMovieGenres

Q3:Also in the function's name, you always put the REST method (GET PUT POST DELETE).
 For example: If I wanted to post a rating of a movie to TheMovieDB,
  I would make the function postMovieRating() for it.
Read? done
------------------------------------------------------------------
Part 1: GET different endpoints
Q1:Make a list of all available genres and their corresponding IDs in the TheMovieDB 
W? not yet

Q2:


*/