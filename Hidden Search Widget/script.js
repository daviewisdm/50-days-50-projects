const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

function searchGoogle() {
    var searchText = document.getElementById('search-input').value;
    var apiKey = AIzaSyCHDwJFBhK5tOJgI1tlbhqhHPbP80TkL0k;
    var customSearchEngineId = 'AIzaSyCHDwJFBhK5tOJgI1tlbhqhHPbP80TkL0k';
    var url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${customSearchEngineId}&q=${searchText}`;

    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}