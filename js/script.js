document.getElementById("home").addEventListener("click", function(){
    window.location.href = "index.html";
})

document.querySelectorAll(".design").forEach(img => {
    img.addEventListener("click", () => {
        window.open(img.src, "_blank");
    });
})

document.getElementById("btn-insta").addEventListener("click", function(){
    const url = "https://www.instagram.com/danieldeandradepli/?theme=dark";
    window.open(url, "_blank", "noopener, noreferrer");
})