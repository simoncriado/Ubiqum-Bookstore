// VUE VERSION

var data;
var books;

fetch("https://api.myjson.com/bins/1h3vb3", {
    method: "GET",
}).then(function (response) {
    if (response.ok) {
        return response.json();
    }
    throw new Error(response.statusText);
}).then(function (json) {
    data = json;
    books = json.books;
    getData(books);
}).catch(function (error) {
    console.log("Request failed: " + error.message);
})

function getData(booksArray) {
    var container = document.getElementById("container");

    for (var i = 0; i < booksArray.length; i++) {
        var bigDivOne = document.createElement("div");
        var bigDivTwo = document.createElement("div");
        var smallDivOne = document.createElement("div");
        var smallDivTwo = document.createElement("div");
        bigDivOne.setAttribute("class", "flip-card-inner");
        bigDivTwo.setAttribute("class", "flip-card");
        smallDivOne.setAttribute("class", "flip-card-front");
        smallDivTwo.setAttribute("class", "flip-card-back");

        var allBooks = document.createElement("a");
        allBooks.setAttribute("href", booksArray[i].detalle);
        allBooks.setAttribute("data-fancybox", "gallery");

        var allImages = document.createElement("img");
        allImages.setAttribute("src", booksArray[i].portada);
        allImages.setAttribute("class", "smallImage");

        var title = document.createElement("h2");
        var description = document.createElement("p");
        var button = document.createElement("button");
        button.setAttribute("type", "button");

        title.innerHTML = booksArray[i].titulo;
        description.innerHTML = booksArray[i].descripcion;
        button.innerHTML = "More Info";

        allBooks.append(button);
        smallDivOne.append(allImages);

        smallDivTwo.append(title, description, allBooks);

        bigDivOne.append(smallDivOne, smallDivTwo);
        bigDivTwo.append(bigDivOne);

        container.append(bigDivTwo);
    }
}

function searchBar() {
    var input = document.getElementById("myInput").value.toLowerCase();
    var allBooks = document.getElementsByClassName("flip-card");

    for (var i = 0; i < allBooks.length; i++) {
        if (allBooks[i].innerText.toLowerCase().includes(input)) {
            allBooks[i].style.display = "";
        } else {
            allBooks[i].style.display = "none";
        }
    }
}

