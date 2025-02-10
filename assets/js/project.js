AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [

  {
    title: "Wevlino",
    // cardImage: "assets/images/project-page/wavelino.png",
    description: "Wavelino is a media-sharing platform where users can upload and download high-quality photos and videos. I worked on the Node.js backend, ensuring seamless media uploads, secure storage, and efficient downloads. The platform provides a user-friendly experience with optimized performance for handling large files. I also contributed by uploading some of the best images to showcase high-quality content on the platform.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://www.wavelino.com/",
    Githublink: "",
  },
  {
    title: "Africa auto connect",
    // cardImage: "assets/images/project-page/aac.png",
    description: "Africa Auto Connect is the ultimate platform for buying and selling used cars across Africa. Whether you're a dealer looking to list vehicles or a buyer searching for the perfect ride, our platform offers a seamless and secure experience. With verified listings, direct communication, and an easy-to-use interface, finding or selling a car has never been easier. Connect with trusted sellers, explore a wide range of vehicles, and drive away with confidence.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Real-Time Chat Application",
    // cardImage: "assets/images/project-page/shreegopinathji.png",
    description: "A messaging app using Socket.IO with Node.js for the backend and React for the front-end. You can implement features like private chats, group chats, and real-time notifications.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "http://www.shreegopinathjigroup.com/",
    Githublink: "",
  },
  {
    title: "E-commerce Platform",
    // cardImage: "assets/images/project-page/resort.jpg",
    "description": "Build a full-fledged e-commerce website using Node.js with Next.js for server-side rendering. You can integrate a payment gateway like Stripe and manage products, orders, and customers.",
    "tagimg": "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    "Previewlink": "",
    "Githublink": ""
  },
  {
    "title": "Youtube Clone",
    // "cardImage": "assets/images/project-page/youtube.png",
    "description": "A fully functional YouTube clone featuring video streaming, search functionality, and user-friendly navigation.",
    "tagimg": "",
    "Previewlink": "",
    "Githublink": "https://github.com/Fensikotadiya/youtube"
  },
  {
    "title": "Social Media Download",
    // "cardImage": "assets/images/project-page/digipay.png",
    "description": "A Node.js and Angular-based tool for downloading videos, images, and content from Instagram, Facebook, YouTube, and Reels. Simply paste the URL to fetch high-quality media for offline use. Ideal for content creators and marketers.",
    "tagimg": "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    "Previewlink": "",
    "Githublink": ""
  },
  {
    "title": "Office Management",
    // "cardImage": "assets/images/project-page/e-com.png",
    "description": "A full-featured Office Management System built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This system streamlines employee management, attendance tracking, and report generation with a modern UI and secure backend.",
    "tagimg": "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    "Previewlink": "",
    "Githublink": ""
  },
  {
    "title": "AMG Gediya Iron Factory Management",
    // "cardImage": "assets/images/project-page/resort-admin.jpg",
    "description": "A comprehensive admin panel built with Node.js and Angular to manage workers, salaries, and billing for the entire iron factory. This tool streamlines operations by providing an easy-to-use interface for tracking worker performance, processing payments, and managing factory resources efficiently. Perfect for factory owners and managers to maintain smooth workflows and ensure accurate financial tracking.",
    "tagimg": "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    "Previewlink": "",
    "Githublink": ""
  },
  {
    "title": "Cloths Maker Cloth Factory Management",
    // "cardImage": "assets/images/project-page/book.png",
    "description": "A role-based factory management system built with Node.js and Angular, designed to streamline operations in a clothing manufacturing unit. It features secure role-based login for admins, employees, and managers, ensuring controlled access to different functionalities. The system manages employee records, salary processing, payment history, order tracking, and overall factory operations. This tool enhances efficiency, transparency, and accuracy in factory workflow management.",
    "tagimg": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX33x4AAAD/5h+OgBH64h7/6B94bA5dVAv64R7NuRnXwhr23h5mXAzeyBt7bw9fVgtJQgnp0xy5pxZyZw6/rBfEsRiWhxJRSQqpmBTw2R2FeBDo0RyhkROcjRPUvxqThRI6NAcdGgOyoRWLfhE0LwYSEAJMRQlWTgo/OQgwKwYYFgNrYQ0hHgQ4MwcxLQYsJwUKCQA6yu78AAAG50l...",
    "Previewlink": "",
    "Githublink": ""
  },
  // {
  //     "title": "Tic toc toe Game",
  //     "cardImage": "assets/images/project-page/tic-tac-toe.png",
  //     "description": "A fun and interactive Tic Tac Toe game built using Flutter, allowing players to challenge each other.",
  //     "tagimg": "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
  //     "Previewlink": "",
  //     "Githublink": ""
  // },
  // {
  //     "title": "Word Games",
  //     "cardImage": "assets/images/project-page/word-game.jpg",
  //     "description": "Built a battery life calculator and word games using Flutter, combining entertainment with productivity.",
  //     "tagimg": "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
  //     "Previewlink": "",
  //     "Githublink": ""
  // },
  // {
  //     "title": "My Tailor",
  //     "cardImage": "assets/images/project-page/my-tailor.jpg",
  //     "description": "A custom clothing service platform built using TensorFlow to offer tailored clothing suggestions based on measurements.",
  //     "tagimg": "https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png",
  //     "Previewlink": "",
  //     "Githublink": ""
  // },
  // {
  //     "title": "Maths Puzzles",
  //     "cardImage": "assets/images/project-page/mathspuzzel.jpg",
  //     "description": "A collection of challenging math puzzles designed to improve critical thinking and problem-solving skills. Built using Flutter.",
  //     "tagimg": "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
  //     "Previewlink": "",
  //     "Githublink": ""
  // }

];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description, Previewlink, Githublink }, index) => {
    if (index % 2 === 0) {
      // Start a new row every two projects
      output += `<div class="custom-row-xyz">`;
    }

    output += `
      <div class="custom-box-123">
        <h6 class="custom-title-123">${title}</h6>
        <p class="custom-desc-123"><strong>${description}</strong></p>
      </div>
    `;

    // <div class="card-links">
    //       <a href="${Previewlink}" target="_blank">Preview</a>
    //       <a href="${Githublink}" target="_blank">GitHub</a>
    //     </div>
    if (index % 2 === 1 || index === projects.length - 1) {
      // Close the row after two projects or if it's the last item
      output += `</div>`;
    }
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
