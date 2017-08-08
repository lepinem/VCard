
let VCard = document.querySelector(".wrapper");

let req = new XMLHttpRequest();
req.addEventListener("load", display);
req.open("GET", "https://api.github.com/users/lepinem");
req.send();

function display() {
  // let list = "";
  let data = JSON.parse(this.responseText);

  function profilePage(data){
    const myProfile = `
      <header>
        <h1><center>${data.name}<center></h1>
      </header>
      <div class="container"
      <div class="basics">
          <h2>The Basics</h2>
          <ul>
            <li><p>Name:</p>${data.name}</li>
            <li><p>GitHub URL:</p>${data.html_url}</li>
            <li><p>Email:</p>${data.email}</li>
            <li><p>Company:</p>${data.company}</li>
            <li><p>Website:</p>${data.blog}</li>
          </ul>
      </div>
      <div class="story">
        <h2>The Story</h2>
        <p>${data.bio}</p>
      </div>
      <div class="image">
      <img src=${data.avatar_url}></img>
      </div>
      </div>
    `
    return myProfile;
  }
  let allHtml = profilePage(data)


 VCard.innerHTML = allHtml;
 }
