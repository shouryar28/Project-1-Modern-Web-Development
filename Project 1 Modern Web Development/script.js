const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
circleMouseFollower();
var timeout;

// jab mouse move ho to hum log skew kar paaye aur maximum skew define kar paaye , jab mouse move ho to chapta ki value badhe, aur jab mouse chalna band ho jaaye to chapta hata lo 

function circleChaptaKaro() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets) {

        clearTimeout(timeout);
    

        xscale =  gsap.utils.clamp(0.8,1.2, dets.clientX - xprev ); // final scaling of x
        yscale =  gsap.utils.clamp(0.8,1.2,dets.clientY - yprev); // final scaling of y


        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale , yscale);

        timeout = setTimeout(() => {
           `translate(${dets.clientX}px, ${dets.clientY}px)  scale(1,1)` 
        }, 100);
     
    });
}


function circleMouseFollower(xscale , yscale) {
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)  scale(${xscale}, ${yscale})`
    })
}

circleChaptaKaro();

function firstPageAnim() {
    var t1 = gsap.timeline();
    
    t1.from("#nav" , {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    
    .to(".boundingelem" , {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        stagger: .2
    })
    
    .from("#herofooter" , {
        y: -10,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: -1,
        opacity: 0
    })
} 


firstPageAnim();


// teeno element ko select karo, uske baad teeno par ek mousemove lagao, jab mousemove hoto ye pata karo ki mouse kaha par hai , jiska matlab hai mouse ki x and y position pata karo and us image ko move karo, move karte waqt rotate karo, and jaise mouse tez chale waise waise rotation bhi tez ho jaaye

document.querySelectorAll(".elem").forEach(function(elem){

    var rotate = 0;
    var diff = 0;

    var img = elem.querySelector("img");
    elem.addEventListener("mousemove", function(details) {

        var diff = details.clientY - elem.getBoundingClientRect().top;
        diff = details.clientX - rotate;
        rotate = details.clientX;
        
        // Get mouse position relative to the element
        var rect = elem.getBoundingClientRect();
        var x = details.clientX - rect.left;
        var y = details.clientY - rect.top;

        // Center the image on the mouse position
        gsap.to(img, {
            opacity: 1,
            ease: Power3,
            left: x - (img.offsetWidth / 2),
            top: y - (img.offsetHeight / 2),
            rotate: gsap.utils.clamp(-20, 20, diff*0.7),
            duration: 0.3
        });
    });

   elem.addEventListener("mouseleave", function() {
    gsap.to(img, {
        opacity: 0,
        ease: Power1
    });
});

});

// ✨ Crafted a Next-Level Interactive Portfolio Experience!

// 🔥 Pushing the boundaries of web interactivity with:
// - Ultra-smooth locomotive scroll for seamless navigation
// - Dynamic image hover effects that follow your every move
// - Custom cursor that elegantly scales and skews with mouse movement
// - GSAP-powered animations for buttery-smooth transitions
// - Immersive mouse-following effects that bring content to life

// 💻 Tech Stack:
// HTML5 | CSS3 | JavaScript | GSAP | Locomotive Scroll

// 🌟 Every interaction is carefully crafted to create an engaging and memorable user experience. The cursor transforms as you move, images dance with your mouse, and content flows seamlessly - all while maintaining perfect performance!

// Perfect for showcasing creative work, this portfolio demonstrates the power of modern web technologies in creating immersive digital experiences.

// #WebDevelopment #Frontend #Portfolio #JavaScript #GSAP #CreativeCoding #WebDesign #UIUX #DigitalExperience #WebAnimation #InteractiveDesign