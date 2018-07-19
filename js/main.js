 function preloader() {
     const imagesList = [
           "./img/energy.jpg",
           "./img/power.jpg",
           "./img/wind.jpg"
        ];
     const images = [];
     for (let i = 0; i < imagesList.length; i++) {
         images[i] = new Image();
         images[i].src = imagesList[i];
     }


     console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
 };
 window.addEventListener("load", preloader);



 let btns = document.querySelectorAll(".sub-nav button");

 let content = {
     energy: {
         headingContent: "Energy",
         bodyText: "Green energy includes natural energetic processes that can be harnessed with little pollution. Green power is electricity generated from renewable energy sources.",
         imgUrl: "./img/energy.jpg",
         imgAlt: "energy"
     },
     power: {
         headingContent: "Power",
         bodyText: "Those not satisfied with the third-party grid approach to green energy via the power grid can install their own locally based renewable energy system. Renewable energy electrical systems from solar to wind to even local hydro-power in some cases, are some of the many types of renewable energy systems available locally.",
         imgUrl: "./img/power.jpg",
         imgAlt: "power"
     },
     wind: {
         headingContent: "Wind",
         bodyText: "Solar and wind are Intermittent energy sources that supply electricity 10-40% of the time. To compensate for this characteristic, it is common to pair their production with already existing hydroelectricity or natural gas generation.",
         imgUrl: "./img/wind.jpg",
         imgAlt: "wind"
     }
 }


 let container = document.querySelector(".container");

 btns[0].setAttribute("id", "active");


 container.innerHTML = `<h1>${content.energy.headingContent}</h1><img src="${content.energy.imgUrl}" alt="${content.energy.imgAlt}"><p>${content.energy.bodyText}</p>`;


 function handleSelection() {




     for (let i = 0; i < btns.length; i++) {
         if (btns[i].hasAttribute("id")) {
             btns[i].removeAttribute("id");
         }
     }



     this.setAttribute("id", "active");



     for (let i = 0; i < btns.length; i++) {
         if (btns[i].hasAttribute("id")) {
             if (i == 0) {
                 container.innerHTML = `<h1>${content.energy.headingContent}</h1><img src="${content.energy.imgUrl}" alt="${content.energy.imgAlt}"><p>${content.energy.bodyText}</p>`;
             }
             if (i == 1) {
                 container.innerHTML = `<h1>${content.power.headingContent}</h1><img src="${content.power.imgUrl}" alt="${content.power.imgAlt}"><p>${content.power.bodyText}</p>`;
             }
             if (i == 2) {
                 container.innerHTML = `<h1>${content.wind.headingContent}</h1><img src="${content.wind.imgUrl}" alt="${content.wind.imgAlt}"><p>${content.wind.bodyText}</p>`;
             }
         }
     }


 }


 for (let i = 0; i < btns.length; i++) {
     btns[i].addEventListener("click", handleSelection);
 }
