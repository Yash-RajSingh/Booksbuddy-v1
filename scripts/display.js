const card = document.querySelectorAll('.card');
console.log(card);
const array1 = Array.prototype.slice.call(card);
array1.forEach(element => {
    element.addEventListener("click", () => {
        var current = element.id;
        console.log(current);
        window.open('./book.html');
        const getbooks = async () =>{
            const img = document.querySelector('#picture');
            const detail = document.querySelector('#details');
            const response = await fetch('scripts/books.json');
            const booklist = await response.json();
            let imgformat = `<img src="${booklist[current].picture}"`;
            img.innerHTML += imgformat;
            let detfor = `
            <h1>${booklist[current].name}</h1>
            <p>Author: ${booklist[current].author}</p>
            <p>Edition: ${booklist[current].edition}</p>
            <p>Price: ${booklist[current].price}</p>
            <p>Posted by: ${booklist[current].by}</p>
            <p>Contact details: ${booklist[current].contact}</p>
            `;
            detail.innerHTML += detfor;
        }
        getbooks();
    })
});
