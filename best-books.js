const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/${year}-${month}-${date}/hardcover-fiction.json`;
  const API_KEY = `R9d7sVZFCMP1fE7SjByAukFdVqnPLkRW`;
  const url = `${BASE_URL}?api-key=${API_KEY}`;

  console.log(url);

  fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {

    let bookList = responseJson.results.books;

    const container = document.getElementById('books-container');
    container.innerHTML = `<h3>Top 5 books for ${month}/${date}/${year}:</h3>`;

    for (let i = 0; i < 5; i++) {

      let wrap = document.createElement('div');
      wrap.id = `book-${i+1}`;
      wrap.className = 'book-wrap';
  
      let title = document.createElement('span');
      title.className = 'book-title';
      title.innerText = bookList[i].title;

      let author = document.createElement('span');
      author.className = 'book-author';
      author.innerText = bookList[i].author;

      let desc = document.createElement('span');
      desc.className = 'book-desc';
      desc.innerText = bookList[i].description;

      let img = document.createElement('img');
      img.className = 'book-img';
      img.src = bookList[i].book_image;

      let rank = document.createElement('span');
      rank.className = 'rank';
      rank.innerText = `#${i+1}`

      wrap.appendChild(rank);
      wrap.appendChild(img);
      wrap.appendChild(title);
      wrap.appendChild(author);
      wrap.appendChild(desc);
      container.appendChild(wrap);

    }

  });

});
