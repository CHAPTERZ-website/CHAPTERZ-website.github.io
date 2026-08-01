/* =====================================================
   CHAPTERZ | Premium Website Script
===================================================== */


/* ==========================
   PAGE LOADER
========================== */

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.body.classList.add("loaded");

    },3000);

});



/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

const header = document.getElementById("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }


});



/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(link=>{


    link.addEventListener("click",(e)=>{


        const target = document.querySelector(
            link.getAttribute("href")
        );


        if(target){

            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});



/* ==========================
   SCROLL REVEAL
========================== */


const revealElements = document.querySelectorAll(
"section, .service-card, .gallery-item, .stat, .contact-item"
);


const revealObserver = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("active");


        }


    });


},{

    threshold:0.15

});



revealElements.forEach(element=>{


    element.classList.add("reveal");


    revealObserver.observe(element);


});
/* =====================================================
   CHAPTERZ PREMIUM INTERACTIONS
===================================================== */


/* ==========================
   LOGO FLOAT / SCREENSAVER EFFECT
========================== */


const logo = document.querySelector(".loader-content img");


if(logo){


    let angle = 0;


    setInterval(()=>{


        angle += 1;


        logo.style.transform =
        `translateY(-8px) rotate(${Math.sin(angle)*3}deg)`;


    },50);


}




/* ==========================
   HERO PARALLAX EFFECT
========================== */


const hero = document.querySelector(".hero");


const heroContent = document.querySelector(".hero-content");



window.addEventListener("mousemove",(e)=>{


    if(hero && heroContent){


        let x = (window.innerWidth / 2 - e.clientX) / 40;

        let y = (window.innerHeight / 2 - e.clientY) / 40;



        heroContent.style.transform =

        `translate(${x}px,${y}px)`;


    }


});





/* ==========================
   BUTTON GLOW EFFECT
========================== */


const buttons = document.querySelectorAll(".btn");



buttons.forEach(button=>{


    button.addEventListener("mouseenter",()=>{


        button.style.boxShadow =
        "0 0 35px rgba(201,162,39,.55)";


    });



    button.addEventListener("mouseleave",()=>{


        button.style.boxShadow="none";


    });



});





/* ==========================
   IMAGE TILT EFFECT
========================== */


const images = document.querySelectorAll(
".gallery-item, .service-card, .stat"
);



images.forEach(item=>{


    item.addEventListener("mousemove",(e)=>{


        const rect=item.getBoundingClientRect();


        const x =
        e.clientX - rect.left;


        const y =
        e.clientY - rect.top;



        const centerX =
        rect.width/2;


        const centerY =
        rect.height/2;



        const rotateX =
        (y-centerY)/20;


        const rotateY =
        (centerX-x)/20;



        item.style.transform =
        `perspective(700px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;


    });



    item.addEventListener("mouseleave",()=>{


        item.style.transform="";


    });



});





/* ==========================
   CURSOR GOLD TRAIL EFFECT
========================== */


const cursor=document.createElement("div");


cursor.className="gold-cursor";


document.body.appendChild(cursor);



document.addEventListener("mousemove",(e)=>{


    cursor.style.left =
    e.clientX+"px";


    cursor.style.top =
    e.clientY+"px";


});


/* =====================================================
   FINAL CHAPTERZ POLISH
===================================================== */


/* ==========================
   WHATSAPP FLOAT BUTTON
========================== */


const whatsapp = document.createElement("a");


whatsapp.href =
"https://wa.me/917907222026";


whatsapp.target="_blank";


whatsapp.className =
"whatsapp-float";


whatsapp.innerHTML =
'<i class="fa-brands fa-whatsapp"></i>';



document.body.appendChild(whatsapp);





/* ==========================
   ACTIVE NAV LINK
========================== */


const sections =
document.querySelectorAll("section[id]");


const navLinks =
document.querySelectorAll("nav a");



window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


const sectionTop =
section.offsetTop - 150;


if(window.scrollY >= sectionTop){

current =
section.getAttribute("id");

}


});



navLinks.forEach(link=>{


link.classList.remove("active");


if(link.getAttribute("href")
=== "#"+current){


link.classList.add("active");


}


});


});





/* ==========================
   CURRENT YEAR FOOTER
========================== */


const year =
document.querySelector(".copyright");



if(year){


year.innerHTML =

`© ${new Date().getFullYear()} Chapterz.
Crafted With Passion.`;


}





/* ==========================
   PREVENT IMAGE DRAG
========================== */


document.querySelectorAll("img")
.forEach(img=>{


img.addEventListener(
"dragstart",
(e)=>e.preventDefault()
);


});





/* ==========================
   MOBILE MENU PREPARATION
========================== */


const nav =
document.querySelector("nav");


const headerContainer =
document.querySelector("#header .container");



if(nav && headerContainer){


const menu =
document.createElement("div");


menu.className =
"menu-toggle";


menu.innerHTML =
`
<span></span>
<span></span>
<span></span>
`;



headerContainer.appendChild(menu);



menu.addEventListener("click",()=>{


nav.classList.toggle("open");


menu.classList.toggle("active");


});


}
