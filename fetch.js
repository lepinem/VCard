let VCard = document.querySelector(".wrapper");

let req = new XMLHttpRequest();
req.addEventListener("load", display);
req.open("GET", "https://api.github.com/users/lepinem");
req.send();

function display() {
  let data = JSON.parse(this.responseText);
  function profilePage(data){
    const myProfile = `
      <header>
        <span>${data.name}</span>
      </header>
      <div class="container">
        <div class="basics">
          <h2>The Basics</h2>
          <ul>
            <li><span>Name:</span>${data.name}</li>
            <li><span>GitHub URL:</span>${data.html_url}</li>
            <li><span>Email:</span>${data.email}</li>
            <li><span>Company:</span>${data.company}</li>
            <li><span>Website:</span>${data.blog}</li>
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
