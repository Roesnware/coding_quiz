// class hooks
const homePage = document.querySelector(".home-page");
const questionsPage = document.querySelector(".questions-page");
const resultsPage = document.querySelector(".results-page");
const highScoresPage = document.querySelector(".highscores-page");

// id hooks 
const questionPageButton = document.getElementById("questions-button");
const highscorePageButton = document.getElementById("high-score-button");

// event listeners
questionPageButton.addEventListener("click", e => {
    // remove hidden class from questions div
    // hide rest of pages
    console.log("clicked questions button");
    console.log(homePage.className);
    homePage.classList.add("display-none");

    console.log(Array.from(homePage.childNodes));

    console.log(homePage.className);
    questionsPage.classList.remove("display-none");
});

highscorePageButton.addEventListener("click", e => {
    // remove hidden class from highscore div
    // hide rest of pages
    console.log("clicked highscores button");
    homePage.classList.add("display-none");
    
    console.log(homePage.className);
    highScoresPage.classList.remove("display-none");
});
