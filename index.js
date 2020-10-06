const baseURL =  `https://api.giphy.com/v1/gifs/search?`;
const apiKey = 'PQ53kK1P7A17cBoCJm373a6pPIPmsRtq';

 
let dataElement = document.getElementById('data');


//SEARCH FORM
const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('.form')
const submitBtn = document.querySelector('.btnSearch')

//EVENT LISTENER
let btn = document.getElementById('btnSearch'); 

btn.addEventListener('click', async (event) => {
    const data = await fetchApi(event)
    console.log(event.type)
     
});

// FETCH
const fetchApi = (event) => {
    event.preventDefault();
    event.target.value = searchTerm;
    fetch(`${baseURL}q=${searchTerm}&api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => console.log(data))

    //displayFunction(data)
}
fetchApi();

/*

- set up an event listener on the button submit to call the fetchApi function //check
- grab the value of the input and assign it to the value of serchTerm
e.target.value = searchTerm
then call a display function that takes in the data from the fetch and does 
Javascript stuff to make elements
*/
