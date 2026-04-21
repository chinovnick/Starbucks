window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 150) {
        header.classList.add("header_scrolled");
    } else {
        header.classList.remove("header_scrolled");
    }
});

function bob() {
    window.location.href = window.location.href;
}


//menu

const menuBtn = document.getElementById("menu-button");
const closeBtn = document.getElementById("close-button");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("active");
});

//modal

function selectButton() {
    document.getElementById("select").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
}

function selectButton2() {
    document.getElementById("select2").style.display = "flex";
    document.getElementById("overlay2").style.display = "block";
    document.getElementById("select").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


function closeButton() {
    document.getElementById("select").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function closeButton2() {
    document.getElementById("select2").style.display = "none";
    document.getElementById("overlay2").style.display = "none";
}


const modal = document.getElementById("select");
const cancelBtn = document.getElementById("cancel");


cancelBtn.onclick = () => {
    modal.style.display = "none";
    document.getElementById("overlay").style.display = "none";
};

