/*Q3:make var with API-KEY w.? yes*/
const API_KEY = '0b65efc3e3dcb23271083716646785f4' /* not receive yet but already create it*/

/*Q4:function getData() with the async keyword
W? yes

Q5: ...add a const variable called apiUrl... 
W? yes

Q6:Use the fetch() function with the GET method to fetch the data 
from the API....
W? yes

Q7: Add a standard HTML page ...
W? yes

Q8:

Q9:What do you do with the errors that are potentially there?
 You can catch it with a try{....} catch{....} block.
  Add this to your code.
  w? not yet

  Q10:Move the getData() function call to the to script.js.
   You want to wait for the getData() function. How do you access the await keyword?
    By putting it in an async function. So create an asyncronous function in which you wait for getData().
    w? yes
    test also the wrong link! W? not yet
*/
//goede link
//const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=a4ebbb8e946945de02ec68669f55d5f4'; /*goede link*/
//foute link: mist laatste cijfer namelijk : 4
const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=a4ebbb8e946945de02ec68669f55d5f'; /*foute link*/
async function getData() {
    try {
        const res = await fetch(apiUrl);
        console.log("await fetch apiUrl: ", res);

        const convJson = await res.json();
        console.log('genre name: ', convJson);
        console.log('genres ', res);

    } /*try*/
    catch (err) {
        console.log('catch err: ', err);

    } /*catch*/
}

getData();
/*the end exc async await new way*/

/*exercise async away */
/*Q2:make function of: getMovieGenres(), getTopRatedMovies(), getTopRatedActionMovies()*/
//let getMovieGenres = () => {
//   return console.log('entering getMovieGernes function: ');
//}
//getMovieGenres();

//let getTopRatedMovies = () => {
//    return console.log('entering getTopRatedMovies1 function: ');
//}
//getTopRatedMovies();


//let getTopRatedActionMovies = () => {
//    return console.log('entering getTopRatedActionMovies1 function: ');
//}
//getMovieGenres();