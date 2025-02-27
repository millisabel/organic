import waveTextEffect from "../waveTextEffect/waveTextEffect.js";

document.addEventListener("DOMContentLoaded", loadLayout);

function loadLayout() {
    fetch("/sections/header/header.html")
        .then(response => {
            if (!response.ok) throw new Error(`Ошибка загрузки header: ${response.status}`);
            return response.text()
        })
        .then(data => {
            document.getElementById("header-content").innerHTML = data;
            updateNavLinks();
            updateActiveLink();
            updateLogoLink();
            waveTextEffect("[data-effect ='wave']");
        })
        .catch(error => console.error(error));

    fetch("/sections/footer/footer.html")
        .then(response => {
            if (!response.ok) throw new Error(`Ошибка загрузки footer: ${response.status}`);
            return response.text();
        })
        .then(data => {
            document.getElementById("footer-content").innerHTML = data;
        })
        .catch(error => console.error(error));
}

function updateNavLinks() {
    const isNested = window.location.pathname.includes("/pages/");

    document.querySelectorAll(".nav-link").forEach(navLink => {

        if (!isNested && navLink.dataset.path) {
            navLink.href = "pages/" + navLink.getAttribute("data-path");
        }

        if (isNested && navLink.dataset.path) {
            navLink.href = "../" + navLink.getAttribute("data-path");
        }
    });
}

function updateActiveLink() {
    const currentPage = document.body.dataset.page?.toLowerCase().replace(/^\/|\/$/g, "");
    if(!currentPage) return;

    document.querySelectorAll(".nav-link").forEach(navLink => {
        navLink.classList.remove("active");

        if (navLink.dataset.path) {
            const linkPageName  = navLink.dataset.path?.split(".")[0]?.toLowerCase();
            if(currentPage === linkPageName ){
                navLink.classList.add("active");
                navLink.href = "#";
            }
        }
    });
}

function updateLogoLink() {
    const isNested = window.location.pathname.includes("/pages/");
    const logo = document.querySelector(".navbar-brand");

    if (logo) {
        logo.href = isNested ? "../index.html" : "#";
    }
}

