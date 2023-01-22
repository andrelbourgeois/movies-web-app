//constants
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

//elements from index.html also constant - will not change
//assign elements to variables
const main = document.getElementById("section");
const form = document.getElementById("searchForm");
const search = document.getElementById("query");

//call returnMovies and pass APILINK as url
returnMovies(APILINK)

//function(s)
function returnMovies(url){
    //fetch asynchronously pulls a resource from a specified url (APILINK in this case)
    //returns a Promise, a proxy value for something unknown when it is created
    //allows the function to continue moving (asynchronously) while the value is retrieved
    fetch(url).then(res => res.json()).then(function(data){
        //print to console for debugging
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement("div");
            div_card.setAttribute("class", "card");

            const div_row = document.createElement("div");
            div_row.setAttribute("class", "row");

            const div_col = document.createElement("div");
            div_col.setAttribute("class", "col");

            const image = document.createElement("img");
            image.setAttribute("class", "thumbnail");
            image.setAttribute("id", "image");

            const title = document.createElement("h3");
            title.setAttribute("id", "title");

            const center = document.createElement("center");

            title.innerHTML = `${element.title}`;
            image.src = IMGPATH + element.poster_path;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_col.appendChild(div_card);
            div_row.appendChild(div_col);

            main.appendChild(div_row);
        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = "";

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }

});