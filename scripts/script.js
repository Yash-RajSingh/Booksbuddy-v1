/*json keys:- name, author, editon, picture, contact */
const btn = document.getElementById("show");
const store = document.querySelector("#store");
const head = document.querySelector(".heading");
const getbooks = async () => {
  const response = await fetch("scripts/books.json");
  const booklist = await response.json();
  var count = booklist.length;
  var i = 0;
  head.innerHTML += `Total books: ${count}`;
  do {
    const updata = () => {
      let cardformat = `
            <div id="${booklist[i].id}" class="card" onclick="test(${booklist[i].id})">
                <img src="${booklist[i].picture}" class="bimg" height=250 width=190>
                <strong><p>${booklist[i].name}</p></strong>
                <strong><span>Author:</strong> ${booklist[i].author}<br>
                <strong>Edition:</strong> ${booklist[i].edition}<br>
                <strong>Price:</strong> ${booklist[i].price}<br>
                <strong>Posted By:</strong> ${booklist[i].by}<br>
                <strong>Contact:</strong> ${booklist[i].contact}</span><br>
                <p></p>
            </div>`;
      store.innerHTML += cardformat;
    };
    updata();
    ++i;
  } while (i < count);
  return booklist;
};
getbooks();
const test = (id) => {
  const card = document.getElementById(`${id}`);
  localStorage.setItem("active", `${id}`);
  //let copied = card.innerHTML;
  window.location.href = "./book.html";
  //localStorage.setItem("current", copied);
  //console.log(localStorage.getItem("current"));
  return card;
};
