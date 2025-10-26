const hamburgerButton = document.querySelector(".header__menu-toggle");

hamburgerButton.addEventListener("click", () => {
    const isExpanded = hamburgerButton.getAttribute("aria-expanded") === "true";
    hamburgerButton.setAttribute("aria-expanded", !isExpanded);
});

const navbar = document.querySelector(".header__nav");
let lastScrollY = window.scrollY;

const showScrollBarBgAt = 100;

window.addEventListener("scroll", handleScroll);

function handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        navbar.setAttribute("aria-hidden", "true");
    } else {
        navbar.setAttribute("aria-hidden", "false");

        if (currentScrollY > showScrollBarBgAt) {
            navbar.classList.add("header__nav--background-active");
        } else {
            setTimeout(() => {
                if (window.scrollY === 0) {
                    navbar.classList.remove("header__nav--background-active");
                }
            }, 300);
        }
    }

    lastScrollY = currentScrollY;
}
