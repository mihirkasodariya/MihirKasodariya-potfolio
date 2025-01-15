AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
 
  {
    title: "Introduction to HTML 5",
    cardImage: "assets/images/education-page/html5.png",
    moocLink: "https://www.linkedin.com/learning/learning-responsive-web-design-in-the-browser/welcome?u=92695330",
  },
  {
    title: "Introduction to CSS 3",
    cardImage: "assets/images/education-page/css3.jpeg",
    moocLink: "https://www.linkedin.com/learning/tailwind-css-3-essential-training/why-utility-first-frameworks-matter?u=92695330",
  },
  {
    title: "Javascript",
    cardImage: "assets/images/education-page/js.jpeg",
    moocLink: "https://www.linkedin.com/learning/javascript-essential-training/javascript-the-soil-from-which-the-modern-web-grows?u=92695330",
  },
  {
    title: "Bootstrap 5",
    cardImage: "assets/images/education-page/bootstrap-5.0.png",
    moocLink: "https://www.linkedin.com/learning/bootstrap-5-essential-training/the-most-popular-framework?u=92695330",
  },
  {
    title: "Intro to React",
    cardImage: "assets/images/education-page/reactjs.png",
    moocLink: "https://www.linkedin.com/learning/react-js-essential-training-14836121/generating-a-project-with-create-react-app?u=92695330",
  },
  {
    title: "Intro to React Native",
    cardImage: "assets/images/education-page/react-native.png",
    moocLink:
      "https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=92695330",
  },
  {
    title: "NodeJS",
    cardImage: "assets/images/education-page/nodejs.png",
    moocLink: "https://www.linkedin.com/learning/node-js-essential-training-14888164/creating-a-delay-with-settimeout?u=92695330",
  },
  {
    title: "Express and MongoDB",
    cardImage: "assets/images/education-page/express-mongo.jpg",
    moocLink: "https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/generate-server-side-code-with-express?u=92695330",
  },
  {
    title: "Learning Docker",
    cardImage: "assets/images/education-page/docker.jpeg",
    moocLink: "https://www.linkedin.com/learning/learning-docker-17236240/get-up-and-running-quick-with-docker?u=92695330",
  },
  {
    title: "Data Structures & Algorithms",
    cardImage: "assets/images/education-page/algorithms.png",
    moocLink:
      "https://www.linkedin.com/learning/python-data-structures-and-algorithms/python-data-structures-and-algorithms-in-action?u=92695330",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image"  style="height: 200px; width: 100%; object-fit: cover;">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
