

const toggleBtn = document.querySelector("#hamburger")
const rMenu = document.querySelector(".dropdown")

toggleBtn.addEventListener('click', () => {
    if (rMenu.style.display === "flex") {
        rMenu.style.display = "none";
    } else {
        rMenu.style.display = "flex";
    }
})