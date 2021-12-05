const setbook = () => {
  console.log(localStorage.getItem("current"));
  localStorage.getItem("current") ? bookApp() : bookApp("error");
};
const bookApp = (err) => {
  const detail = document.querySelector("#details");
  err
    ? (detail.innerText = "Error")
    : (detail.innerHTML = localStorage.getItem("current"));
};
