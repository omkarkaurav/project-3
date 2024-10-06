var dropdown = gsap.timeline()


dropdown.from("nav div", {
    y :-60,
    duration:0.8,
    stagger:0.2,
})

dropdown.from(" .main-video",{
    duration:0.8,
    opacity:0,
})


dropdown.from(".section-1-text ",{
    x:-300,
    duration:0.5,
    opacity:0,
    scrub:0.1
})

  


dropdown.from("#section-2 div",{
    scrollTrigger:{
        trigger:"#section-2 div",
        scroll:".section-1-text",
        start:"top 120%",
        end:"top -10%",
        scrub:1,
        // markers:true,
    },
    x:-300,
    duration:5,
    opacity:0,
    stagger:1,
    scrub:1,
    
})


gsap.to(".boxes-4",{
    y:"-100%",
    duration:2,
    scrollTrigger:{
        trigger:".pinned-img",
        scroll:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        stagger:2
    }
})
gsap.to(".boxes-3",{
    y:"100%",
    duration:2,
    scrollTrigger:{
        trigger:".pinned-img",
        scroll:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        stagger:5
    }
})

gsap.to(".pinned-img",{
    scrollTrigger:{
        trigger:".pinned-img",
        scroll:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})


