const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const newHeader = document.createElement("div");
  newHeader.classList.add("header");

  const newDate = document.createElement("span");
  newDate.classList.add("date");
  newDate.textContent = date;

  const newTitle = document.createElement("h1");
  newTitle.textContent = title;

  const newTemp = document.createElement("span");
  newTemp.classList.add("temp");
  newTemp.textContent = temp;

  newHeader.appendChild(newDate);
  newHeader.appendChild(newTitle);
  newHeader.appendChild(newTemp);

  return newHeader;
};

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerContainer = document.querySelector(".header-container");

  headerContainer.append(Header("Hello World", "6/23/22", "88"));
};

export { Header, headerAppender };
