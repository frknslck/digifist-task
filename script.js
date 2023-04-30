const itemsContainer = document.getElementById("items-container")

const everydayItems = [
    {
        name: "365 Signature Hoodie",
        price: "€33.95",
        image: "/assets/img/bg-1.png"
    },
    {
        name: "Organic Skinny High Waist Jeans",
        price: "€33.95",
        image: "/assets/img/bg-2.png"
    },
    {
        name: "Organic Skinny High Waist Jeans",
        price: "€33.95",
        image: "/assets/img/bg-3.png"
    }
]

itemsContainer.innerHTML = everydayItems.map((item) => {
    return `<div class="item-card">
                  <img class="item-img" src=${item?.image} alt="item img" />
                  <div class="item-details">
                  <div>
                    <p class="item-name">${item?.name}</p>
                    <div class="detail-layer">
                        <p class="item-price">${item?.price}</p>
                        <div id="item-colors">
                            <button class="btn btn1 active"></button>
                            <button class="btn btn2"></button>
                            <button class="btn btn3"></button>
                            <button class="btn btn4"></button>
                        </div>
                    </div>
                  </div>
                 </div>
            </div>`;
        }).join('');

let colorBtns = document.getElementById("item-colors");

let btns = colorBtns.querySelectorAll(".btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    btns[i].className += " active";
  });
}

const slider = document.querySelector('#items-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.style.cursor = "grabbing"
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
  slider.style.cursor = ""
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1;
  slider.scrollLeft = scrollLeft - walk;
});


