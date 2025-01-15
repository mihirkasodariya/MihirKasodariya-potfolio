AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
 
  {
    title: "Wevlino",
    cardImage: "assets/images/project-page/wavelino.png",
    description: "A modern and responsive web platform powered by React, offering innovative solutions for seamless online experiences.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://www.wavelino.com/",
    Githublink: "",
  },
  {
    title: "Africa auto connect",
    cardImage: "assets/images/project-page/aac.png",
    description: " A comprehensive platform designed to streamline automotive services and connect buyers and sellers across Africa",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Shree Gopinathji",
    cardImage: "assets/images/project-page/shreegopinathji.png",
    description: "A static website for Shree Gopinathji Group, showcasing their diverse business ventures with an engaging user interface built on React",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "http://www.shreegopinathjigroup.com/",
    Githublink: "",
  },
  {
    title: "Resort Management",
    cardImage: "assets/images/project-page/resort.jpg",
    "description": "A complete resort management system for handling bookings, customer services, and facility management efficiently.",
    "tagimg": "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    "Previewlink": "",
    "Githublink": ""
  },
  {
    "title": "Youtube Clone",
    "cardImage": "assets/images/project-page/youtube.png",
    "description": "A fully functional YouTube clone featuring video streaming, search functionality, and user-friendly navigation.",
    "tagimg": "",
    "Previewlink": "",
    "Githublink": "https://github.com/Fensikotadiya/youtube"
  },
  {
    "title": "Digipay",
    "cardImage": "assets/images/project-page/digipay.png",
    "description": "A secure digital payment platform offering seamless online transactions and wallet management solutions.",
    "tagimg": "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    "Previewlink": "",
    "Githublink": ""
  },
  {
    "title": "E-commerce",
    "cardImage": "assets/images/project-page/e-com.png",
    "description": "A dynamic e-commerce platform designed for smooth online shopping experiences with advanced cart and checkout features.",
    "tagimg": "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    "Previewlink": "",
    "Githublink": ""
  },
  {
    "title": "Resort Admin panel",
    "cardImage": "assets/images/project-page/resort-admin.jpg",
    "description": "An intuitive admin dashboard for managing resort operations, including bookings, staff, and facility monitoring.",
    "tagimg": "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    "Previewlink": "",
    "Githublink": ""
  },
  {
    "title": "Personal Notes",
    "cardImage": "assets/images/project-page/book.png",
    "description": "A personal notes app that helps users take quick notes and store them securely.",
    "tagimg": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX33x4AAAD/5h+OgBH64h7/6B94bA5dVAv64R7NuRnXwhr23h5mXAzeyBt7bw9fVgtJQgnp0xy5pxZyZw6/rBfEsRiWhxJRSQqpmBTw2R2FeBDo0RyhkROcjRPUvxqThRI6NAcdGgOyoRWLfhE0LwYSEAJMRQlWTgo/OQgwKwYYFgNrYQ0hHgQ4MwcxLQYsJwUKCQA6yu78AAAG50l...",
    "Previewlink": "",
    "Githublink": ""
},
{
    "title": "Tic toc toe Game",
    "cardImage": "assets/images/project-page/tic-tac-toe.png",
    "description": "A fun and interactive Tic Tac Toe game built using Flutter, allowing players to challenge each other.",
    "tagimg": "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    "Previewlink": "",
    "Githublink": ""
},
{
    "title": "Word Games",
    "cardImage": "assets/images/project-page/word-game.jpg",
    "description": "Built a battery life calculator and word games using Flutter, combining entertainment with productivity.",
    "tagimg": "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    "Previewlink": "",
    "Githublink": ""
},
{
    "title": "My Tailor",
    "cardImage": "assets/images/project-page/my-tailor.jpg",
    "description": "A custom clothing service platform built using TensorFlow to offer tailored clothing suggestions based on measurements.",
    "tagimg": "https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png",
    "Previewlink": "",
    "Githublink": ""
},
{
    "title": "Maths Puzzles",
    "cardImage": "assets/images/project-page/mathspuzzel.jpg",
    "description": "A collection of challenging math puzzles designed to improve critical thinking and problem-solving skills. Built using Flutter.",
    "tagimg": "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    "Previewlink": "",
    "Githublink": ""
}

];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description,Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                <span style="font-size:18px">${description}</span>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" target="_blank"  class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
