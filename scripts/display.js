const card = document.querySelectorAll('.card');
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
            const name = booklist[current].name;
            const author = booklist[current].author;
            const edition = booklist[current].edition;
            const picture = booklist[current].picture;
            const price = booklist[current].price;
            const owner = booklist[current].by;
            const contact = booklist[current].contact;
            let imgformat = `<img src="${picture}"`;
            img.innerHTML += imgformat;
            let detfor = `
            <h1>${name}</h1>
            <p>Author: ${author}</p>
            <p>Edition: ${edition}</p>
            <p>Price: ${price}</p>
            <p>Posted by: ${owner}</p>
            <p>Contact details: ${contact}</p>
            `;
            detail.innerHTML += detfor;
        }
        getbooks();
    })
});
