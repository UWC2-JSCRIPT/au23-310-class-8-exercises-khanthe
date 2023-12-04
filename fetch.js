// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const API_KEY = `R9d7sVZFCMP1fE7SjByAukFdVqnPLkRW`;
const url = `${BASE_URL}?q=cars&api-key=${API_KEY}`;
//https://developer.nytimes.com/docs/books-product/1/routes/lists/best-sellers/history.json/get


fetch(url)
  .then(function(data) {
    console.log('Data', data);
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    const snippet = article.snippet;
    const linkUrl = article.web_url;
    const nytByLine = article.byline.original;
    document.getElementById('article-title').innerText = mainHeadline;
    document.getElementById('article-snippet').innerText = snippet;
    document.getElementById('article-link').href = linkUrl;

    let contentDiv = document.querySelector('.container');
    console.log(contentDiv);
    const byLine = document.createTextNode(nytByLine);
    contentDiv.appendChild(byLine);

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
    }
  });
