const ImageBox = document.getElementById("img-box");
const userHeader = document.getElementById("user-header");
const userFooter = document.getElementById("user-footer");

const getData = () => {
  ImageBox.innerHTML = `<img src="https://source.unsplash.com/random/350x200"/>`;
  userHeader.innerHTML = `
    <div class="line"><h3>Lorem, ipsum dolor.</h3></div>
    <div class="line"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, libero.</p></div>
    `;
  userFooter.innerHTML = `
    <div class="circle"><img src='http://www.photoshop-master.ru/lessons/les989/2.jpg'/></div>
    <div class="user-date">
    <div class="line"><h4>Lorem, ipsum dolor.</h4></div>
    <div class="line-small">Lorem ipsum dolor</div>
    </div>
    `;
};
setTimeout(getData, 2500);
