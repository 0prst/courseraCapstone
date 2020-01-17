//include header html in the header
document.querySelector("header").innerHTML=`<div id="headerImage"></div>
<nav>
    <button id="headerNavbarToggler">
        <div></div>
        <div></div>
        <div></div>
    </button>
    <div id="mobileNav">
        <a href="index.html">Home</a>
        <a href="boats.html">Boats</a>
        <a href="bays.html">Bays</a>
    </div>
    <div id="mainNav">
        <a href="index.html">Home</a>
        <a href="boats.html">Boats</a>
        <a href="bays.html">Bays</a>
    </div>
</nav>`

//assigning active class to the link
document.querySelectorAll(`header nav a[href="${document.URL.slice(document.URL.lastIndexOf("/")+1, document.URL.length)}"]`).forEach(link => {
    link.classList.add("active");
});

//code for toggling mobile view navbar
document.getElementById("headerNavbarToggler").addEventListener("click", event => {
    let nav = document.querySelector("#mobileNav");
    let button = document.querySelector("#headerNavbarToggler");
    if(!nav.classList.contains("navShow")){
        nav.classList.toggle("navShow");
        button.innerHTML = "&#10006;";
        button.style.backgroundColor = "transparent";

    }else{
        nav.classList.toggle("navShow");
        button.innerHTML = "<div></div><div></div><div></div>";
        button.style.backgroundColor = "rgb(235, 235, 235)";
    }
});

document.querySelector("footer").innerText = "This is a footer";