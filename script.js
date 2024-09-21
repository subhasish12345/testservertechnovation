function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var desiredHeight = canvas.height * 0.5; // 50% of the canvas height for example

 
  
  // You can adjust this scaling factor to control the size of the image (0.5 means 50% of the canvas)
  var scaleFactor = 0.35; // Change this value to make the character bigger or smaller
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio); // Maintain aspect ratio

  var imgWidth = img.width * scaleFactor;
  var imgHeight = img.height * scaleFactor;

  var centerShift_x = (canvas.width - imgWidth) / 2; // Horizontally centered
  var centerShift_y = canvas.height - imgHeight;     // Positioned at the bottom
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,  // Positioned from the bottom
    imgWidth,
    imgHeight      // Adjusted size based on the scaleFactor
  );
}

ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  // Add your rendering logic here
}

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render(); // Ensure render is called on resize
});
document.getElementById('queryForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  var formData = new FormData(this);
  
  fetch('/update_views.php', {
    method: 'POST',
    body: formData
})

  .then(response => response.json())
  .then(data => {
      if (data.message) {
          alert(data.message); // Display success message
      } else if (data.error) {
          alert(data.error); // Display error message
      }
  })
  .catch(error => console.error('Error:', error));
});function sendFeedback() {
  const subject = "Feedback from Website";
  const body = "Please provide your feedback here.";
  window.location.href = `mailto:decodesyndicate@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

