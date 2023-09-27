function buttonClickedByUser () {
    console.log("button clicked");
    Cookies.set(`button_clicked`, `yes`);
}

let buttonClicked = document.getElementById("clickedButton");
buttonClicked.addEventListener(`click`, buttonClickedByUser);