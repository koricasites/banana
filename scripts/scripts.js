function scrollSostav() {
    document.getElementById("sostav").scrollIntoView({behavior: "smooth"});
}

function scrollProperties() {
    document.getElementById("properties").scrollIntoView({behavior: "smooth"});
}

function scrollRecipes() {
    document.getElementById("recipes").scrollIntoView({behavior: "smooth"});
}

function scrollForm() {
    document.getElementById("form").scrollIntoView({behavior: "smooth"});
}

function scrollMain() {
    document.getElementById("main").scrollIntoView({behavior: "smooth"});
    hideArrow()
}

let isRotating = false;

function startRotation() {
    if (!isRotating) {
        isRotating = true;
        const object = document.querySelector(".sostav-grafic-banana-img-img");
        object.style.animationPlayState = "running";
    }
}

function stopRotation() {
    isRotating = false;
    const object = document.querySelector(".sostav-grafic-banana-img-img");
    object.style.animationPlayState = "paused";
}

function showSmothie() {
    var smothie = document.getElementById("smoothie-recipe");
    smothie.style.display = "block";
    var recipes = document.getElementById("all-recipes");
    recipes.style.display = "none";
}

function closeSmothie() {
    var smothie = document.getElementById("smoothie-recipe");
    smothie.style.display = "none";
    var recipes = document.getElementById("all-recipes");
    recipes.style.display = "block";
}


function showPan() {
    var smothie = document.getElementById("pan-recipe");
    smothie.style.display = "block";
    var recipes = document.getElementById("all-recipes");
    recipes.style.display = "none";
}

function closePan() {
    var smothie = document.getElementById("pan-recipe");
    smothie.style.display = "none";
    var recipes = document.getElementById("all-recipes");
    recipes.style.display = "block";
}


function showIce() {
    var smothie = document.getElementById("ice-recipe");
    smothie.style.display = "block";
    var recipes = document.getElementById("all-recipes");
    recipes.style.display = "none";
}

function closeIce() {
    var smothie = document.getElementById("ice-recipe");
    smothie.style.display = "none";
    var recipes = document.getElementById("all-recipes");
    recipes.style.display = "block";
}


function showBread() {
    var smothie = document.getElementById("bread-recipe");
    smothie.style.display = "block";
    var recipes = document.getElementById("all-recipes");
    recipes.style.display = "none";
}

function closeBread() {
    var smothie = document.getElementById("bread-recipe");
    smothie.style.display = "none";
    var recipes = document.getElementById("all-recipes");
    recipes.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}


function noInput() {
    let name = document.getElementById("name");
    let mail = document.getElementById("mail");
    let hasError = false;
    [name, mail].forEach(item => {
        if (!item.value) {
            item.style.borderColor = "#ff0000";
            item.style.borderBottom = "2px solid #ff0000";
            hasError = true;
        } else {
            item.style.borderColor = "#787878";
            item.style.borderBottom = "1px solid #787878";
        }
    });

    if (!hasError) {
        [name, mail].forEach(item => {
            item.value = "";
        })
        showPopup();
    }
}

function showArrow(){
    var arrow = document.getElementById("arrow");
    arrow.style.display = "block";
}

function hideArrow(){
    var arrow = document.getElementById("arrow");
    arrow.style.display = "none";
}