import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const headlineDiv = document.createElement("div");
  headlineDiv.classList.add("headline");
  headlineDiv.textContent = article.headline;

  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");

  const authorImgContainer = document.createElement("div");
  authorImgContainer.classList.add("img-container");

  const authorImg = document.createElement("img");
  authorImg.src = article.authorPhoto;

  const authorNameSpan = document.createElement("span");
  authorNameSpan.textContent = `By ${article.authorName}`;

  authorImgContainer.appendChild(authorImg);
  authorDiv.appendChild(authorImgContainer);
  authorDiv.appendChild(authorNameSpan);

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);

  cardDiv.addEventListener("click", () => {
    console.log(article.headline);
  });

  return cardDiv;
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios
    .get("http://localhost:5001/api/articles")
    .then((res) => {
      const javascriptArticles = res.data.articles.javascript;
      const bootStrapArticles = res.data.articles.bootstrap;
      const technologyArticles = res.data.articles.technology;
      const jqueryArticles = res.data.articles.jquery;
      const nodeArticles = res.data.articles.node;

      const cardsContainer = document.querySelector(".cards-container");

      javascriptArticles.forEach((article) => {
        cardsContainer.appendChild(Card(article));
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export { Card, cardAppender };
