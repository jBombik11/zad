let url = "https://picsum.photos/v2/list";

let picture1 = document.querySelector("#img1");
let picture2 = document.querySelector("#img2");
let picture3 = document.querySelector("#img3");
const butLeft = document.querySelector(".buttonLeft");
const butRight = document.querySelector(".buttonRight");

let numberOfSlide = 0; // zmienna identyfikująca aktualnie wyświetlane zdjęcia



function fetchData() {
    fetch(url)
        // wyodrębnianie potrzebnych informacji z linku "url"
        .then(response => {
            return response.json();
        })
        // torzenie z zawartości "url" tablicy "data"
        .then(data => {
            picture1.src = `${data[numberOfSlide].download_url}`; // przypisanie linku zawierającego obraz z tablicy "data" do elementu img
            picture2.src = `${data[numberOfSlide+1].download_url}`;
            picture3.src = `${data[numberOfSlide+2].download_url}`;
        })

}

fetchData();

// implementacja przycisków zmieniających wyświetlane zdjęcia
butLeft.addEventListener("click", function () { // 3 poprzednie zdjęcia
    if (numberOfSlide == 0) {
        numberOfSlide = 0;
    } else {
        numberOfSlide -= 3;
    }
    fetchData();
})
butRight.addEventListener("click", function () { // 3 następne zdjęcia
    if (numberOfSlide == 27) {
        numberOfSlide = 27;
    } else {
        numberOfSlide += 3;
    }
    fetchData();
})