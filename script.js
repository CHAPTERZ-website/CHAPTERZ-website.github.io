// ===============================
// CHAPTERZ - script.js
// ===============================

// Smooth scroll for navbar links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            e.preventDefault();

            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });

        }

    });
});


// Navbar Background Change

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 60) {

        header.style.background = "rgba(0,0,0,0.95)";
        header.style.transition = ".4s";

    } else {

        header.style.background = "rgba(0,0,0,.75)";

    }

});


// Fade Animation on Scroll

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";
            entry.target.style.transition = ".8s";

        }

    });

},{
    threshold:.15
});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(50px)";

    observer.observe(section);

});


// Hero Button Hover

const btn=document.querySelector(".btn");

if(btn){

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 0 25px rgba(212,175,55,.6)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="none";

});

}


// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#D4AF37";
topBtn.style.color="#000";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


// Floating Animation for Cards

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});


// Hero Text Animation

window.addEventListener("load",()=>{

const hero=document.querySelector(".hero-content");

hero.style.opacity="0";
hero.style.transform="translateY(40px)";

setTimeout(()=>{

hero.style.transition="1.2s";

hero.style.opacity="1";
hero.style.transform="translateY(0px)";

},300);

});


// Console Message

console.log("%cWelcome to CHAPTERZ","color:#D4AF37;font-size:18px;font-weight:bold;");
