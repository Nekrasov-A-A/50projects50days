const forImg = document.getElementById("for-img");
const header = document.getElementById("header");
const user = document.getElementById("user");

const getData = () => {
  forImg.innerHTML = `<img src="https://source.unsplash.com/random/350x200"/>`;
  header.innerHTML = `
    <div class="line"><h3>Lorem, ipsum dolor.</h3></div>
    <div class="line"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, libero.</p></div>
    `;
  user.innerHTML = `
    <div class="circle"><img src='http://www.photoshop-master.ru/lessons/les989/2.jpg'/></div>
    <div class="user-date">
    <div class="line"><h4>Lorem, ipsum dolor.</h4></div>
    <div class="line-small">Lorem ipsum dolor</div>
    </div>
    `;
};
setTimeout(getData, 2500);
