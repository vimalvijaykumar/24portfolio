gsap.registerPlugin(ScrollTrigger);
gsap.set(".row .role", {
    opacity: 0
})
const nav=document.querySelector("#nav .social")
const menu=document.querySelector("#nav .drop-down")
nav.addEventListener("click",function(){
    console.log("hi")
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
      } 
    else {
        menu.style.display = 'flex';
      }
})
function revealToSpan() {
    const heads = document.querySelectorAll(".reveal");
    heads.forEach(function (elem) {
        var parent = document.createElement('span');
        var child = document.createElement('span');
        parent.classList.add('parent');
        child.classList.add('child');
        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);
        elem.innerHTML = '';
        elem.appendChild(parent);
    });
    breakText();
}

function loaderAnimation() {
    var tl = gsap.timeline();
    tl.from("#loader .child span", {
        x: 100,
        duration: 1.4,
        stagger: 0.2,
        delay: 1,
        opacity: 0,
        ease: 'power3.easeInOut'
    })
        .to("#loader .parent .child", {
            y: "-100%",
            duration: 1,
            opacity: 0,
            ease: 'Circ.easeInOut',
        })
        .to('#loader', {
            height: 0,
            top: -10,
            duration: 1,
            ease: 'Circ.easeInOut'
        })
        .to('#green', {
            height: '100%',
            top: 0,
            duration: 1,
            delay: -0.8,
            ease: 'Circ.easeInOut',
        })
        .to('#green', {
            height: '0%',
            top: 0,
            duration: 1,
            delay: -0.5,
            ease: 'Circ.easeInOut',
            onComplete: function () {
                animateHeading();
            }
        });
}

function animateHeading() {
    var tl = gsap.timeline();
    tl.to('#nav a', {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        ease: 'Expo.InOut'
    })
        .to('#nav', {
            top: 0,
            duration: 0.2,
            ease: 'Expo.InOut'
        })
        .to('#home .parent .child', {
            y: 0,
            duration: 0.5,
            stagger: 0.05,
            delay: -.03,
            ease: 'Expo.InOut',
        })
        .to('#home .row i', {
            x: -100,
            duration: 0.3,
            rotate: 0,
            opacity: 1,
            ease: 'Expo.InOut',
            onComplete: function () {
                breakText();
                gsap.to('#row .role', {
                    opacity: 1,
                    delay: 0.1,
                    duration: 0.7,
                });
            }
        });
}

function breakText() {
    var rolehead = document.querySelector("#row .role");
    var roleTxt = rolehead.textContent;
    var splittedTxt = roleTxt.split('');
    var clutter = '';
    splittedTxt.forEach(function (elem, inx) {
        if (inx <= splittedTxt.length / 2) {
            clutter += `<span class='a'>${elem}</span>`;
        } else {
            clutter += `<span class='b'>${elem}</span>`;
        }
    });
    rolehead.innerHTML = clutter;
    roleAnimation();
}

function roleAnimation() {
    var tl = gsap.timeline();
    tl.from("#row .role .a", {
        y: 100,
        duration: 0.6,
        delay: 0.5,
        stagger: 0.15,
        opacity: 0,
        ease: "power3"
    })
        .from("#row .role .b", {
            y: 100,
            duration: 0.6,
            delay: -0.5,
            stagger: -0.15,
            opacity: 0,
            ease: "power3"
        });
}

function cardshow() {
    document.querySelectorAll('.cnt').forEach(function (cnt) {
        var showingimage;
        cnt.addEventListener('mousemove', function (dets) {
            document.querySelector('#cursor').children[dets.target.dataset.index].style.opacity = 1;
            showingimage = dets.target;
            document.querySelector('#cursor').children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
            showingimage.style.filter = "grayscale(1)";
            document.querySelector('#work').style.backgroundColor = '#' + dets.target.dataset.color;
        });
        cnt.addEventListener('mouseleave', function () {
            document.querySelector('#cursor').children[showingimage.dataset.index].style.opacity = 0;
            showingimage.style.filter = "grayscale(0)";
            document.querySelector('#work').style.backgroundColor = '';
        });
    });
}
gsap.registerPlugin("scrollTrigger")
gsap.to("#imgrig", {
    scrollTrigger: {
        trigger: "#imgrig .imgcntnr",
        start: "top 20%",
        end: "top -100%",
        scrub: 2,
        yoyo: true
    },
    y: 50,
    rotate: "10deg"
});

gsap.from("#imglef", {
    x: 500,
    opacity: 0,
    duration: 0.4,
    ease: "power3",
    scrollTrigger: "#imglef"
});
gsap.to("#images .cnt1 img", {
    scale: 1.7,
    scrollTrigger: {
        trigger: "#images",
        start: "top 80%",
        end: "top -100%",
        scrub: true,
        markers: false,
    }
});
gsap.to("#images .cnt2 img", {
    scale: 1.7,
    scrollTrigger: {
        trigger: "#images",
        start: "top 80%",
        end: "top -100%",
        scrub: true,
        markers: false,
    }
});
gsap.to("#images2 .cnt3 img", {
    scale: 1.7,
    scrollTrigger: {
        trigger: "#images2",
        start: "top 80%",
        end: "top -100%",
        scrub: true,
        markers: false,
    }
});
gsap.to("#images2 .cnt4 img", {
    scale: 1.7,
    scrollTrigger: {
        trigger: "#images2",
        start: "top 80%",
        end: "top -100%",
        scrub: true,
        markers: false,
    }
});
gsap.to("#footer", {
    backgroundSize: "150%",
    scrollTrigger: {
        trigger: "#footer",
        start: "top 80%",
        end: "top -100%",
        scrub: true,
        markers: false,
    }
});
function educText() {
    const text = document.querySelectorAll('.edu-right li div h1');
    const paraTag = document.querySelectorAll('.edu-right li div p');
    text.forEach(function (elem) {
        var dadchild = document.createElement("span");
        var momchild = document.createElement("span");
        dadchild.classList.add('dads');
        momchild.classList.add('moms');
        momchild.innerHTML = elem.innerHTML;
        dadchild.appendChild(momchild);
        elem.innerHTML = '';
        elem.appendChild(dadchild);
    });
    paraTag.forEach(function (elem) {
        var dadchild = document.createElement("span");
        var momchild = document.createElement("span");
        dadchild.classList.add('dads');
        momchild.classList.add('moms');
        momchild.innerHTML = elem.innerHTML;
        dadchild.appendChild(momchild);
        elem.innerHTML = '';
        elem.appendChild(dadchild);
    });
    eduAni();
}
function headBreakText() {
    const storedArray = [];
    const head = document.querySelector("#work .workrow .heading");
    const head2 = document.querySelector(".info .heading");
    const head3 = document.querySelector("#about-con .info .heading");
    const head4 = document.querySelector("#education .top-head .heading");
    const head5 = document.querySelector("#footer #footer-div .heading");
    const head6 = document.querySelector("#footer #footer-div .heading-two");
    storedArray.push(head, head2, head3, head4, head5, head6);
    storedArray.forEach(function (elem) {
        const parent = document.createElement('span');
        const child = document.createElement('span');
        parent.classList.add('headparent');
        child.classList.add('headchild');
        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);
        elem.innerHTML = '';
        elem.appendChild(parent);
    });
}

function valueSet() {
    educText()
    gsap.set("#nav a", {
        y: "-100%",
        opacity: 0
    });
    gsap.set('#nav', {
        top: 0
    });
    gsap.set('#home .parent .child', {
        y: "100%"
    });
    gsap.set('#home .row i', {
        opacity: 0,
        rotate: 360
    });
    gsap.set('#row .role .a', {
        opacity: 0,
        y: 100
    });
    gsap.set('#row .role .b', {
        opacity: 0,
        y: 100
    });
    gsap.set(".edu-right li div h1 .dads .moms", {
        opacity: 0,
        y: "100%"
    });
    gsap.set(".edu-right li div p .dads .moms", {
        opacity: 0,
        y: "-100%"
    });
    gsap.set("#work .workrow .heading .headparent .headchild", {
        opacity: 0,
        y: 100
    });
    gsap.set(".info .heading .headparent .headchild", {
        opacity: 0,
        y: 100
    });
    gsap.set("#about-con .info .heading .headparent .headchild", {
        opacity: 0,
        y: 100
    });
    gsap.set("#education .top-head .heading .headparent .headchild", {
        opacity: 0,
        y: 100
    });
    gsap.set("#footer #footer-div .heading .headparent .headchild", {
        opacity: 0,
        y: 100
    });
    gsap.set("#footer #footer-div .heading-two .headparent .headchild", {
        opacity: 0,
        y: 100
    });
    gsap.set("#about-con .info a", {
        opacity: 0,
        x: "-20%"
    })
    gsap.set("#education .edu-con .edu-left img", {
        opacity: 0
    })
    gsap.set("#education .edu-con .edu-left p", {
        opacity: 0
    })
}

function eduAni() {
    headBreakText();
    gsap.to("#education .edu-right li div h1 .dads .moms", {
        y: 0,
        opacity: 1,
        duration: .8,
        stagger: .2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#education .edu-right",
            start: "top 90%",
            scrub: false,
            once: true,
            markers: false
        }
    })
    gsap.to("#education .edu-right li div p .dads .moms", {
        y: 0,
        opacity: 1,
        duration: .8,
        stagger: .2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#education .edu-right",
            start: "top 90%",
            scrub: false,
            once: true,
            markers: false
        }
    })
    gsap.to("#education .edu-right li div a img", {
        rotate: "90deg",
        duration: 2,
        delay: .8,
        ease: "Expo.InOut",
        scrollTrigger: {
            trigger: "#education .edu-right",
            start: "top 90%",
            scrub: true,
            markers: false
        }
    })
    gsap.to("#work .workrow .heading .headparent .headchild", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "Expo.InOut",
        scrollTrigger: {
            trigger: "#work .workrow",
            start: "top 70%",
            scrub: false,
            once: true,
        }
    })
    gsap.to(".info .heading .headparent .headchild", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "Expo.InOut",
        scrollTrigger: {
            trigger: ".info .heading",
            start: "top 70%",
            scrub: false,
            once: true
        }
    })
    gsap.to(".info a", {
        x: 0,
        opacity: 1,
        duration: .7,
        stagger: .6,
        scrollTrigger: {
            trigger: "#about-con .info",
            start: "top 70%",
            end: "top 20%",
            scrub: .7,
            once: true
        }
    })
    gsap.to("#about-con .info .heading .headparent .headchild", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "Expo.InOut",
        scrollTrigger: {
            trigger: "#about-con .info",
            start: "top 70%",
            scrub: false,
            once: true,
        }
    })
    gsap.to("#education .top-head .heading .headparent .headchild", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "Expo.InOut",
        scrollTrigger: {
            trigger: "#education .top-head",
            start: "top 70%",
            scrub: false,
            once: true,
        }
    })
    gsap.to("#footer #footer-div .heading .headparent .headchild", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "Expo.InOut",
        scrollTrigger: {
            trigger: "#footer #footer-div",
            start: "top 70%",
            scrub: false,
            once: true,
        }
    })
    gsap.to("#footer #footer-div .heading-two .headparent .headchild", {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.7,
        ease: "Expo.InOut",
        scrollTrigger: {
            trigger: "#footer #footer-div",
            start: "top 70%",
            scrub: false,
            once: true,
        }
    })
    gsap.to("#education .edu-con .edu-left img", {
        opacity: 1,
        duration: 2,
        ease: "Expo.InOut",
        scrollTrigger: {
            trigger: "#education .edu-con .edu-left",
            start: "top 50%",
            scrub: true,
            markers: false,
            once: true,
        }
    })
    gsap.to("#education .edu-con .edu-left p", {
        opacity: 1,
        duration: .8,
        ease: "Expo.InOut",
        scrollTrigger: {
            trigger: "#education .edu-con .edu-left",
            start: "top 70%",
            scrub: false,
            once: true,
        }
    })
}
document.addEventListener('DOMContentLoaded', function () {
    ScrollTrigger.matchMedia({
        "(max-width: 600px)": function () {
            const openIcon = document.querySelector("nav i");
            const closeIcon = document.querySelector(".menu-bar .close-icon");
            const navh1 = document.querySelector('nav h1');
    
            var tl = gsap.timeline({ paused: true });
            gsap.registerPlugin(ScrollTrigger);
    
            gsap.from("nav h1", {
                y: -10,
                duration: 0.5,
                delay: 0.3,
                opacity: 0,
            });
    
            tl.to(".menu-bar", {
                right: '10px',
                display: "flex",
                duration: 0.5,
            })
            .from(".menu-bar a", {
                x: 100,
                display: "none",
                duration: 0.3,
                opacity: 0,
                stagger: 0.2,
                ease: "power3"
            });
    
            if (openIcon) {
                openIcon.addEventListener('click', function () {
                    tl.play();
                });
            }
    
            if (closeIcon) {
                closeIcon.addEventListener('click', function () {
                    tl.reverse();
                });
            }
    
            gsap.to("#imgrig", {
                scrollTrigger: {
                    trigger: "#imgrig",
                    start: "top 80%",
                    end: "top -100%",
                    scrub: 1,
                    yoyo: true,
                },
                y: 20,
                rotate: "5deg"
            });
    
            gsap.to("#imglef", {
                x: 10,
                opacity: 1,
                duration: 0.4,
                ease: "power3",
                scrollTrigger: {
                    trigger: "#imglef",
                    start: "bottom 20%",
                    once: true,
                }
            });
        }
    });
    
})    
function smoothScroll(){
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
}
window.addEventListener('DOMContentLoaded', function () {
    revealToSpan();
    valueSet();
    loaderAnimation();
    cardshow();
    educText();
});
