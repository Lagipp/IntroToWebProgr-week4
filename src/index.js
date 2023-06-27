import "./styles.css";

const inputField = document.querySelector("#input-show");
const inputBtn = document.querySelector("#submit-data");
const showsList = document.querySelector(".showsList");
let url = "https://api.tvmaze.com/search/shows?q=";

inputBtn.addEventListener("click", (e) => {
  e.preventDefault();

  url += inputField.value;

  fetchShows(url);

  inputField.value = "";
});

const fetchShows = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      data.forEach((el) => {
        // console.log(el);
        // console.log(`name: ${el.show.name}  score: ${el.score}  summary: ${el.show.summary}`);

        // console.log(el.show.image ?? "no image");
        // console.log(el.show.image?.medium ?? "no image.medium");
        // console.log(el.show.image?.original ?? "no image.original");

        // let img = document.createElement("img");
        // img.src = el.show.image?.medium ?? "";
        // showsList.appendChild(img);

        let newDiv = document.createElement("div");
        newDiv.classList.add("show-data");

        let newImg = document.createElement("img");

        let showInfo = document.createElement("div");
        showInfo.classList.add("show-info");

        let newH1 = document.createElement("h1");
        let newP = document.createElement("p");

        newImg.src = el.show.image?.medium ?? "";
        newH1.innerText = el.show.name;
        newP.innerHTML = el.show.summary;

        showInfo.appendChild(newH1);
        showInfo.appendChild(newP);
        newDiv.appendChild(newImg);
        newDiv.appendChild(showInfo);
        showsList.appendChild(newDiv);
      });
    });
};
