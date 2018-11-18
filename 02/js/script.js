function blogSlider(){
    const slideshow = document.querySelector(".slideshow");
    let slideshowElems = document.querySelectorAll(".slideshow .elem");
    let elemWidth = calcWidth();
    let isRun = false;
    let inProgress = false;

    function calcWidth(){
        if(window.innerWidth >= 1100) return (slideshow.clientWidth - 60)/3;
        else if(window.innerWidth >= 700) return (slideshow.clientWidth - 40)/2;
        else return (slideshow.clientWidth - 20);
    }

    function runSlider(){
        if(!isRun || inProgress) return;
        inProgress = true;
        resizeSlider();
        setTimeout(switchNode, 3000);

        function switchNode(){
            slideshowElems[0].style.marginLeft = (elemWidth + 10)*-1 + "px";
            setTimeout(function(){
                let frag = document.createDocumentFragment();
                frag.appendChild(slideshowElems[0])
                slideshow.appendChild(frag);
                slideshowElems = document.querySelectorAll(".slideshow .elem");
                inProgress = false;
                runSlider();
            }, 1200);
        }
    }

    function resizeSlider(){
        elemWidth = calcWidth();
        slideshowElems.forEach(function(elem){
            elem.style.minWidth = elemWidth + "px";
            elem.style.marginLeft = "10px";
        });
    }

    function checkClientPosition(){
        if(slideshow.getBoundingClientRect().top < window.innerHeight && slideshow.getBoundingClientRect().top > (window.innerHeight)*-1){
            if(!isRun) {
                isRun = true;
                runSlider();
            }
        }
        else {
            isRun = false;
        }
    }
    
    window.addEventListener("scroll", checkClientPosition);
    window.addEventListener("resize", resizeSlider);
    checkClientPosition()
};
window.addEventListener("load", blogSlider);


function galleryImgResize(){
    const imgs = document.querySelectorAll("#gallery .galleryContainer img");
    imgs.forEach(function(img){
        img.parentNode.style.minHeight = (img.parentNode.clientWidth/100)*66 + "px";
        img.style.width = (img.parentNode.clientWidth) + "px";
        img.style.height = "auto";
        if(img.parentNode.clientHeight > img.clientHeight){
            img.style.height = (img.parentNode.clientHeight) + "px";
            img.style.width = "auto";
        }
    });
}
window.addEventListener("resize", galleryImgResize);
window.addEventListener("load", galleryImgResize);



function hamburgerMenu(){
    const hamburger = document.querySelector("#hamburger");
    const menuList = document.querySelector("header ul");
    hamburger.addEventListener("click", function(){
        menuList.classList.toggle("active");
        hamburger.classList.toggle("hamburgerActive");
    });
}
window.addEventListener("load", hamburgerMenu);


function scrolledMenu(){
    const menu = document.querySelector("header");
    window.addEventListener("scroll", addScrolledClass);
    function addScrolledClass(){
        if(window.scrollY > 0 && !(menu.classList.contains("scrolled"))) menu.classList.add("scrolled");
        else if (window.scrollY <= 0 && menu.classList.contains("scrolled")) menu.classList.remove("scrolled");
    }
    addScrolledClass();
}
window.addEventListener("load", scrolledMenu);


function scrollToHeading(){
    const navElems = document.querySelectorAll("header ul a");
    navElems.forEach(function(elem){
        elem.addEventListener("click", setTarget);
    });

    let navTarget = null;
    let inProgress = false;

    function setTarget(e){
        e.preventDefault();
        navTarget = document.querySelector(e.target.hash);
        let distance =  Math.floor(navTarget.getBoundingClientRect().top);
        if(!inProgress) goToTarget(distance);
    }

    function goToTarget(distance){
        inProgress = true;
        function moveScreen(){
            if(distance > 0 && distance >= 100){
                window.scrollTo(0, (window.pageYOffset + 100));
            } else if(distance < 0 && distance <= -100){
                window.scrollTo(0, (window.pageYOffset - 100));
            } else {
                window.scrollTo(0, (window.pageYOffset + distance));
                clearInterval(interval);
                inProgress = false;
            }
            if(window.pageYOffset + window.innerHeight >= document.body.clientHeight) {
                clearInterval(interval);
                inProgress = false;
            } 
            distance = Math.floor(navTarget.getBoundingClientRect().top);
        }
        let interval = setInterval(moveScreen, 30);
    }
}

window.addEventListener("load", scrollToHeading);


function slideGallery(){
    let items = null;
    let srcs = [];

    items = document.querySelectorAll("#gallery .galleryContainer div:not(.row):not(.small) img");
    items.forEach(function(item){
        item.addEventListener("click", makeGallery);
        srcs.push(item.src);
    });

    function makeGallery(e){
        let clickedGallery = document.createElement("div");
        clickedGallery.classList.add("clickedGallery");

        let container = document.createElement("div");
        container.classList.add("galCont");

        let prev = document.createElement("i");
        prev.classList.add("prev", "fas", "fa-chevron-left");

        let img = document.createElement("img");
        img.src = e.target.src;

        let next = document.createElement("i");
        next.classList.add("next", "fas", "fa-chevron-right");

        container.appendChild(prev);
        container.appendChild(img);
        container.appendChild(next);

        let closeBtn = document.createElement("div");
        closeBtn.classList.add("close");

        let closeIcon = document.createElement("i");
        closeIcon.classList.add("fas", "fa-times");

        closeBtn.appendChild(closeIcon);

        clickedGallery.appendChild(container);
        clickedGallery.appendChild(closeBtn);

        document.body.appendChild(clickedGallery);

        switchGalleryPhoto(e.target.src);

        closeGallery();
    }

    function switchGalleryPhoto(src){
        const img = document.querySelector(".clickedGallery img");
        let index = null;
        for(let i = 0; i < srcs.length; i++){
            if(srcs[i] == src) index = i;
        }
        const prev = document.querySelector(".clickedGallery .prev");
        prev.addEventListener("click", function(){
            if(index - 1 < 0) index = srcs.length;
            img.src = srcs[--index];
        });

        const next = document.querySelector(".clickedGallery .next");
        next.addEventListener("click", function(){
            if(index + 1 >= srcs.length) index = -1;
            img.src = srcs[++index];
        });
    }

    function closeGallery(){
        const closeGallery = document.querySelector(".clickedGallery .close");
        closeGallery.addEventListener("click", function(){
            document.querySelector(".clickedGallery").remove();
        });
    }
}
window.addEventListener("load", slideGallery);