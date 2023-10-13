valueSetter();
function startAnim(){
    const tl = gsap.timeline({default: {ease: 'power4.out', duration: .7}});
    gsap.set('g',{
        autoAlpha: 1
    })
    gsap.set('#frontend' ,{
        xPercent: -6
    })
    gsap.to('#loder>svg',{
        scale: 1.2,
        duration: 4
    })
    tl
    .from('#frontend .stf',{
        yPercent: -200,
        stagger: .03,
        skewY:60,
        skewX: 30,
        scaleY: .9,
        opacity: 0
    })
    .from('#developer .std',{
        yPercent: 200,
        stagger: .03,
        scaleY: .5,
        skewY:60,
        skewX: 30,
        opacity: 0
    } , " = .001")
    .to('#frontend', {
        xPercent: 0,
        ease: 'elastic.out(1, .5)'
    }, "1.3")
    .from('#arrow .st0', {
        xPercent: -107,
        opacity: 0,
        ease: 'elastic.out(1, .5)'
    } , "-=.5")
    .to('#frontend .stf',{
        skewX:30,
        x:30,
        scaleX: 0,
        stagger: .03,
        opacity: 0,
        duration: .2
    }, "+=1")
    .to('#developer .std',{
        skewX:30,
        x:30,
        scaleX: 0,
        stagger: .03,
        opacity: 0,
        duration: .2
    }, "<")
    .to('#arrow .st0',{
        xPercent:'276',
        duration: 1.3,
        ease: 'elastic.out(1, .3)'
    }, "<")
    .to('#arrow .st0',{
        rotateZ:90,
        transformOrigin: 'center'
    }, "-=.1")
    .to('#arrow .st0',{
        yPercent:760,
        duration: 1.3,
        ease: 'elastic.out(1, .3)'
    }, "=.5")
    .to('.loding',{
        scale:2,
        backgroundColor: 'red',
        boxShadow:'0px 0px 40px 4px red',
        duration:.3,
        ease: 'elastic.out(1, .3)'

    },"<")
    .to('#arrow .st0',{
        yPercent: -2000,
        ease: 'back.in(1)',
        duration: .5
    }, "=.5")
    .to('#loder',{
        scaleY: 0,
        height:0,
        transformOrigin: 'top',
        duration: 1.2,
        ease: 'power4.inOut'
    } , "-=.6")
    .to('#loder2',{
        height: "100vh",
        duration:1,
        ease: 'power4.inOut'
    }, "-=.9")
    .to('#loder2',{
        height:0,
        top: 0,
        duration:.7,
        ease:'power4.inOut',
        onComplete: function(){
            homepageAnimation();
        }
    },"-=.4")
}

function mobileScreen(){
    const tl = gsap.timeline({default: {ease: 'power4.out', duration: .7}});
    gsap.set('g',{
        autoAlpha: 1
    })
    gsap.set('#frontend' ,{
        xPercent: -6
    })
    gsap.to('#loder>svg',{
        scale: 1.3,
        duration: 4
    })
    tl
    .from('#frontend .stf',{
        yPercent: -200,
        stagger: .03,
        skewY:60,
        skewX: 30,
        scaleY: .9,
        opacity: 0
    })
    .from('#developer .std',{
        yPercent: 200,
        stagger: .03,
        scaleY: .5,
        skewY:60,
        skewX: 30,
        opacity: 0
    } , " = .001")
    .to('#frontend', {
        xPercent: 0,
        ease: 'elastic.out(1, .5)'
    }, "1.3")
    .from('#arrow .st0', {
        xPercent: -107,
        opacity: 0,
        ease: 'elastic.out(1, .5)'
    } , "-=.5")
    .to('#frontend .stf',{
        skewX:30,
        x:30,
        scaleX: 0,
        stagger: .03,
        opacity: 0,
        duration: .2
    }, "+=1")
    .to('#developer .std',{
        skewX:30,
        x:30,
        scaleX: 0,
        stagger: .03,
        opacity: 0,
        duration: .2
    }, "<")
    .to('#arrow .st0',{
        xPercent:'276',
        duration: 1.3,
        ease: 'elastic.out(1, .3)',
    }, "<")
    .to('#arrow .st0',{
        rotateZ:90,
        transformOrigin: 'center'
    }, "-=.1")
    .to('#arrow .st0',{
        yPercent:1800,
        duration: 1.3,
        ease: 'elastic.out(1, .3)',
    }, "=.5")
    .to('.loding',{
        scale:2,
        backgroundColor: 'red',
        boxShadow:'0px 0px 40px 4px red',
        duration:.3,
        ease: 'elastic.out(1, .3)',
        

    },"<")
    .to('#arrow .st0',{
        yPercent: -2000,
        ease: 'back.in(1)',
        duration: .3,
        onComplete: function(){
            homepageAnimation();
        }
    }, "=.5")
    .to('#loder',{
        scaleY: 0,
        height:0,
        transformOrigin: 'top',
        duration: 1.2,
        ease: 'power4.inOut'
    } , "-=.6")
    .to('.loding' ,{
        scale:0,
        duration:.7,
        ease: Expo.easeInOut,
    } , "<")
    .to('#loder2',{
        height: "100vh",
        duration:1,
        ease: 'power4.inOut',
    }, "-=.9")
    .to('#loder2',{
        height:0,
        top: 0,
        duration:.7,
        ease:'power4.inOut',
    },"-=.4")
}
function locomotiveAnim(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('main'),
        smooth: true
    });
}
locomotiveAnim()
var a = document.querySelector('body')
if(a.clientWidth <= 600){
    mobileScreen();
}
else{
    startAnim();
}

function horizontalScroll(){
    let scrollContainer = document.querySelector('.projects');
    let leftBtn = document.querySelector('.left');
    let rightBtn = document.querySelector('.right');

    var cntnrWidth = scrollContainer.getBoundingClientRect().width
    scrollContainer.addEventListener("wheel" , (evt)=>{
        console.log(evt)
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaX
        scrollContainer.style.scrollBehavior = "auto";

    })
    rightBtn.addEventListener("click" ,(evt)=>{
        scrollContainer.scrollLeft += cntnrWidth
        scrollContainer.style.scrollBehavior = "smooth";

    })
    leftBtn.addEventListener("click" , (evt)=>{
        scrollContainer.scrollLeft -= cntnrWidth
        scrollContainer.style.scrollBehavior = "smooth";


    })
}
horizontalScroll();

function circleFllower(){
    var circle = document.querySelector('#circle')
    window.addEventListener("mousemove" , (dets)=>{
        gsap.to(circle , {
            left: dets.clientX,
            top: dets.clientY,
            duration:.5,
        })
    })
    document.querySelectorAll('nav a').forEach((elem)=>{
        elem.addEventListener("mouseenter" , ()=>{
            gsap.to(circle ,{
                scale:2,
                duration:.5
            })
        })
        elem.addEventListener("mouseleave" , ()=>{
            gsap.to(circle ,{
                scale:1
            })
        })
    })
    document.querySelector('.projects').addEventListener("mouseenter" ,()=>{
        gsap.to(circle , {
            scale : 2,
            duration :.4
        })
    })
    document.querySelector('.projects').addEventListener("mouseleave" ,()=>{
        gsap.to(circle , {
            scale : 1,
        })
    })
}
circleFllower();

function cardAnim(){
    var languagecard = document.querySelectorAll('.lang-cntnr h3')
    languagecard.forEach(function(lang){
        lang.addEventListener("mouseenter", ()=>{
            gsap.to(lang.children[1] , {
                display : "unset",
                duration: .5
            })
        })
        lang.addEventListener("mouseleave", ()=>{
            gsap.to(lang.children[1] , {
                display : "none",
            })
        })
        
    })
    var card = document.querySelectorAll('.project-img');
    card.forEach(function(cards){
        cards.addEventListener("mousemove" , (dets)=>{
            var boundry = cards.getBoundingClientRect().left
            var percent = (boundry * 23) / 100;
            var imgs = cards.children[2];
            gsap.to(imgs , {
                opacity : 1,
                x: dets.x - boundry - percent,
                scale:1.2

            })
        })
        cards.addEventListener("mouseleave" , (dets)=>{
            console.log(dets)
            var imgs = cards.children[2];
            gsap.to(imgs , {
                opacity : 0,
                rotate : 0,
                scale:1
            })
        })
    })
}
cardAnim();

function valueSetter(){
    document.querySelectorAll("#Visual>g").forEach((e)=>{
        let character = e.childNodes[1].childNodes[1];
        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
        console.log(character.getTotalLength())
    })
}

function svgAnimation(){
    gsap.to("#Visual>g>g>path",{
        strokeDashoffset: 0,
        duration:3,
        ease:Expo.easeInOut
    })
    gsap.to("#Visual>g>g>polyline",{
        strokeDashoffset: 0,
        duration:3,
        ease:Expo.easeInOut
    })
}
function homepageAnimation(){
    const t2 = gsap.timeline();
    t2
    .from('nav',{
        y:-200,
        opacity:0,
        duration:.7
    })
    .from("#creative>g path" , {
        y: 100,
        stagger: .1,
        skewY:60,
        skewX: 30,
        scaleY: .1,
        opacity: 0
    })
    .from("#Design>g path" , {
        y: 100,
        stagger: .1,
        skewY:60,
        skewX: 30,
        scaleY: .1,
        opacity: 0
    })
    .from('.cntnr-l h1 , .cntnr-l button' ,{
        opacity:0,
        duration :.5
    })
    .from('.img-cntnr img' , {
        opacity:0,
        y: 50,
        duration:1
    })
    .from('.description' , {
        opacity: 0,
        scale:0,
        duration:1,
        y:20,
    }, "<")
    .from('.lang-cntnr h3' ,{
        opacity:0,
        x:200,
        duration:.5,
        stagger:.2,
        onComplete: function(){
            svgAnimation()
        }
    },"=1")
}
