const baseURL = `https://api.giphy.com/v1/gifs/search?`;
const apiKey = 'PQ53kK1P7A17cBoCJm373a6pPIPmsRtq';
const limit = 10

const gifListElement = document.getElementById('gifList');

//SEARCH FORM
const searchInputElement = document.getElementById('search');
const searchFormElement = document.getElementById('searchForm')

//EVENT LISTENER
searchFormElement.addEventListener('submit', async (event) => {
    event.preventDefault();
    const searchText = searchInputElement.value
    const response = await fetchApi(searchText)
    console.log(response.data)
    const gifs = response.data;
    for (i in gifs) {
        const gif = gifs[i] 
        displayGif(gif);
    }
});

// FETCH
const fetchApi = async (searchText) => {
    const res = await fetch(`${baseURL}q=${searchText}&api_key=${apiKey}&limit=${limit}`);
    console.log(res)
    let data = await res.json();
    return data
}

// DISPLAY
const displayGif = (gif) => {
    let node = document.createElement('img');
    gifListElement.appendChild(node);
    node.src = gif.images.downsized.url
}

/*

- set up an event listener on the button submit to call the fetchApi function //check
- grab the value of the input and assign it to the value of serchTerm 
e.target.value = searchTerm // check
then call a display function that takes in the data from the fetch and does Javascript stuff to make elements
*/
