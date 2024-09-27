


function Cards() {

  let wrap = [
    {
      name: "",
      des: "",
      image: "",
    },
    {
      name: "",
      des: "",
      image: "",
    },
    {
      name: "",
      des: "",
      image: "",
    },
    {
      name: "",
      des: "",
      image: "",
    },
    {
      name: "",
      des: "",
      image: "",
    },
    {
      name: "",
      des: "",
      image: "",
    },
    {
      name: "",
      des: "",
      image: "",
    },
  ];
  


  const carousel = document.querySelector(".carousel");
  let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= wrap.length) {
    slideIndex = 0;
  }

  //creating DOM elements
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  // let content = document.createElement("div");
  // let h1 = document.createElement("h1");
  // let p = document.createElement("p");

  //attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  // h1.appendChild(document.createTextNode(wrap[slideIndex].name));
  // p.appendChild(document.createTextNode(wrap[slideIndex].des));
  // content.appendChild(h1);
  // content.appendChild(p);
  // slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  imgElement.src = wrap[slideIndex].image;
  slideIndex++;

  slide.className = "slider";
  // content.className = "slide-content";
  // h1.className = "movie-title";
  // p.className = "movie-des";
  // sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};
for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 5000);
  

  return (
    <div>
      <div className="carousel-container">
        <div className="carousel"></div>
      </div>
    </div>
  );
}

export default Cards