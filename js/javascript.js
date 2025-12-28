document.getElementById("home").addEventListener("click", function(){
    window.location.href = "index.html";
})

document.querySelectorAll(".design").forEach(img => {
    img.addEventListener("click", () => {
        window.open(img.src, "_blank");
    });
})

document.getElementById("btn-insta").addEventListener("click", function(){
    window.location.href = "https://www.instagram.com/?theme=dark"
})