const arrData = [
  {
    img: "sources/project-1.jpg",
    link: "artworks/project1.html",
    txt: "23 | Beneath the Surface",
  },
  {
    img: "sources/project-2.jpg",
    link: "artworks/project2.html",
    txt: "23 | Beneath the Surface",
  },
  {
    img: "sources/project-3.jpg",
    link: "artworks/project3.html",
    txt: "23 | Beneath the Surface",
  },
  {
    img: "sources/project-1.jpg",
    link: "artworks/project1.html",
    txt: "23 | Beneath the Surface",
  },
  {
    img: "sources/project-2.jpg",
    link: "artworks/project2.html",
    txt: "23 | Beneath the Surface",
  },
  {
    img: "sources/project-3.jpg",
    link: "artworks/project3.html",
    txt: "23 | Beneath the Surface",
  },
  {
    img: "sources/project-1.jpg",
    link: "artworks/project1.html",
    txt: "23 | Beneath the Surface",
  },
  {
    img: "sources/project-2.jpg",
    link: "artworks/project2.html",
    txt: "23 | Beneath the Surface",
  },
  {
    img: "sources/project-3.jpg",
    link: "artworks/project3.html",
    txt: "23 | Beneath the Surface",
  },
];

const myObj = document.querySelector("#artworks");

arrData.forEach(({ img, link, txt }) => {
  myObj.innerHTML += `
  <div class="artwork-card" onclick="location.href='${link}';">
            <div class="artwork-title">${txt}</div>
            <div class="artwork-img">
              <img src="${img}" alt="">
            </div>
    </div>`;
            
});
