function buttonClickedByUser () {
    Cookies.set(`button_clicked`, 'true');
}

let buttonClicked = document.getElementById("clickedButton");
buttonClicked.addEventListener(`click`, buttonClickedByUser);

function changedCookieFunction () {
    Cookies.set('button_clicked', 'false');
}

let changedCookie = document.getElementById("changed");
changedCookie.addEventListener(`click`, changedCookieFunction)

function deleteCookiebyclick () {
    Cookies.remove('button_clicked');
}

let deleteCookie = document.getElementById("deleteCookiebutton");
deleteCookie.addEventListener(`click`, deleteCookiebyclick)

const saveResult = Cookies.get("button_clicked");
if (saveResult === undefined) {
    // You create the h1 because we have not clicked the button
    buttonClicked.insertAdjacentHTML(`afterend`, `<h1>button not clicked</h1>`);
}else {
    buttonClicked.insertAdjacentHTML('afterend', '<h1>button clicked creating cookie</h1>');
}


console.log(saveResult);