const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll("nav a").forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add(
        "border-2",
        "border-[#B9B4C7]",
        "rounded-xl",
        "hover:text-base",
      );
       link.querySelector("img").classList.add("left-7")
       link.querySelector("img").classList.add("hover:h-10","hover:w-10")
    }
  });
console.log(document.querySelector("nav p"))

const setOpen = () => {
  if (document.querySelector("nav").classList.contains("w-60")) {
    document.querySelector("#nav-section").classList.replace("w-68","w-12")
    document.querySelector("#nav-section > img").classList.remove("rotate-180")
    document.querySelector("nav").classList.replace("w-60","w-10");
    document.querySelector("nav > div").classList.replace("ml-16","-ml-3")
    document.querySelectorAll("nav p").forEach((p)=>p.classList.add("hidden"))
    const navLinks = document.querySelectorAll("nav a").forEach((link) => {
      if (!link.href.includes(`${activePage}`)) {
        link.querySelector("img").classList.add("hover:h-12", "hover:w-12");
      }
    });
    document
      .querySelectorAll("nav li")
      .forEach((li) => li.classList.add("pb-2"));
    document.querySelectorAll("a span").forEach((text) => {
      text.classList.add("hidden");
    });
    document.querySelectorAll("nav a").forEach(links=>{
      links.classList.remove(
        "border-2",
      );
    })
    document.querySelectorAll("a img").forEach((img) => {
      img.classList.add("absolute");
    });
  } else {
    document.querySelector("#nav-section").classList.replace("w-12", "w-68");
    document.querySelector("#nav-section > img").classList.add("rotate-180");
    document.querySelector("nav").classList.replace("w-10","w-60");
    document.querySelectorAll("a img").forEach((img) => {img.classList.remove("absolute","hover:h-12","hover:w-12");})
    document
      .querySelectorAll("nav p")
      .forEach((p) => p.classList.remove("hidden"));
    document.querySelectorAll("a span").forEach((img) => {
      img.classList.remove("hidden");
    });
    document
      .querySelectorAll("nav li")
      .forEach((li) => li.classList.remove("pb-2"));
    document.querySelector("nav > div").classList.replace("-ml-3", "ml-16");
    const activePage = window.location.pathname;
      const navLinks = document.querySelectorAll("nav a").forEach((link) => {
        if (link.href.includes(`${activePage}`)) {
          link.classList.add(
            "border-2",
          );
        }
      });
  }
};


/*=============== RANGE SLIDER JS ===============*/
const rangeInputSlider = () => {
  for (let i = 0; i < 4; i++) {
    const rangeThumb = document.getElementsByClassName("range-thumb")[i],
      rangeNumber = document.getElementsByClassName("range-number")[i],
      rangeLine = document.getElementsByClassName("range-line")[i],
      rangeInput = document.getElementsByClassName("range-input")[i];

    console.log(rangeThumb);

    // Insert the value of the input range
    let text = "";
    switch (rangeInput.value) {
      case "0":
        text = "Beginner";
        break;
      case "25":
        text = "Intermediate";
        break;
      case "50":
        text = "Advance";
        break;
      case "75":
        text = "Professional";
        break;
      case "100":
        text = "Expert";
        break;
      default:
        text = "Beginner";
    }
    rangeNumber.textContent = text;

    // Calculate the position of the input thumb
    // rangeInput.value = 50, rangeInput.max = 100, (50 / 100 = 0.5)
    // rangeInput.offsetWidth = 248, rangeThumb.offsetWidth = 32, (248 - 32 = 216)
    const thumbPosition = rangeInput.value / rangeInput.max,
      space = rangeInput.offsetWidth - rangeThumb.offsetWidth;

    // We insert the position of the input thumb
    // thumbPosition = 0.5, space = 216 (0.5 * 216 = 108)
    rangeThumb.style.left = thumbPosition * space + "px";

    // We insert the width to the slider with the value of the input value
    // rangeInput.value = 50, ancho = 50%
    rangeLine.style.width = rangeInput.value + "%";

    // We call the range input
    rangeInput.addEventListener("input", rangeInputSlider);
  }
};


rangeInputSlider()

