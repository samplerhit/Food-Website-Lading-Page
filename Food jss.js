document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelector(".nav-links");
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "☰";
    toggleButton.classList.add("nav-toggle");
    document.querySelector(".navbar").appendChild(toggleButton);
    
    toggleButton.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});
