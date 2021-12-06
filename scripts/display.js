const detail = document.getElementById("details");
const img = document.getElementById("picture");
const setbook = () => {
  const current = localStorage.getItem("active");
  const getbooks = async () => {
  const response = await fetch("scripts/books.json");
  const booklist = await response.json();
  const updata = () => {
    console.log(current);
    console.log(booklist[0].name);
    let imgform = `
    <div class="picture"> <img src="${booklist[current].picture}" class="bimg"></div>`
    img.innerHTML += imgform;
    let cardformat = `
      <div class="card">
          <strong><center><h1>${booklist[current].name}</h1></center></strong>
          <strong><p class="head">Author:</strong> ${booklist[current].author}<br>
          <strong>Edition:</strong> ${booklist[current].edition}<br>
          <strong>Price:</strong> ${booklist[current].price}<br>
          <strong>Posted By:</strong> ${booklist[current].by}<br>
          <strong>Contact:</strong> ${booklist[current].contact}</p><br>
          <p></p>
      </div>`;
      detail.innerHTML += cardformat;
      };
    updata();
}
getbooks();
}
//SEARCHING FUNCTIONALITY
const query = document.querySelector("#searching");
query.addEventListener('submit', e => {
  e.preventDefault();
  console.log(query.value);
})