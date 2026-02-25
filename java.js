
    // JavaScript for Loader Timing
    window.addEventListener('load', function () {
        setTimeout(function () {
            var loader = document.getElementById('loader');
            loader.style.opacity = '0'; // Smooth hide
            setTimeout(function () {
                loader.style.display = 'none'; // Completely remove
            }, 500); // 0.5s match with transition
        }, 2000); // 3000ms = 3 seconds
    });









    
    const locationBtn = document.getElementById("location");
    const mapModal = document.getElementById("mapModal");
    const cut = document.getElementById("i");

    locationBtn.addEventListener("click", () => {
        mapModal.classList.add("active");
    });

    mapModal.addEventListener("click", (e) => {
        if (e.target === mapModal) {
            mapModal.classList.remove("active");
        }
    });

    cut.addEventListener("click", () => {
        mapModal.classList.remove("active");
    });










const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const hj = document.getElementById("hj");
const hjj = document.getElementById("hjj");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    // icon change
    menuBtn.classList.toggle("fa-bars");
    menuBtn.classList.toggle("fa-xmark");
});

hjj.addEventListener("click", () => {
    nav.classList.remove("active");   // nav hide

    // icon reset
    menuBtn.classList.remove("fa-xmark");
    menuBtn.classList.add("fa-bars");
});

// hj click -> nav hide
hj.addEventListener("click", () => {
    nav.classList.remove("active");   // nav hide

    // icon reset
    menuBtn.classList.remove("fa-xmark");
    menuBtn.classList.add("fa-bars");
});












    const cursor = document.querySelector(".cursor");
    const dot = document.querySelector(".cursor-dot");

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX - 20 + "px";
        cursor.style.top = e.clientY - 20 + "px";

        dot.style.left = e.clientX - 4 + "px";
        dot.style.top = e.clientY - 4 + "px";
    });

    // Click effect
    document.addEventListener("click", () => {
        cursor.style.transform = "scale(1.6)";
        setTimeout(() => {
            cursor.style.transform = "scale(1)";
        }, 150);
    });

