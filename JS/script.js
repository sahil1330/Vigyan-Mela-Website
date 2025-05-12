
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
     ./IMGS/male0001.webp
     ./IMGS/male0002.webp
     ./IMGS/male0003.webp
     ./IMGS/male0004.webp
     ./IMGS/male0005.webp
     ./IMGS/male0006.webp
     ./IMGS/male0007.webp
     ./IMGS/male0008.webp
     ./IMGS/male0009.webp
     ./IMGS/male0010.webp
     ./IMGS/male0011.webp
     ./IMGS/male0012.webp
     ./IMGS/male0013.webp
     ./IMGS/male0014.webp
     ./IMGS/male0015.webp
     ./IMGS/male0016.webp
     ./IMGS/male0017.webp
     ./IMGS/male0018.webp
     ./IMGS/male0019.webp
     ./IMGS/male0020.webp
     ./IMGS/male0021.webp
     ./IMGS/male0022.webp
     ./IMGS/male0023.webp
     ./IMGS/male0024.webp
     ./IMGS/male0025.webp
     ./IMGS/male0026.webp
     ./IMGS/male0027.webp
     ./IMGS/male0028.webp
     ./IMGS/male0029.webp
     ./IMGS/male0030.webp
     ./IMGS/male0031.webp
     ./IMGS/male0032.webp
     ./IMGS/male0033.webp
     ./IMGS/male0034.webp
     ./IMGS/male0035.webp
     ./IMGS/male0036.webp
     ./IMGS/male0037.webp
     ./IMGS/male0038.webp
     ./IMGS/male0039.webp
     ./IMGS/male0040.webp
     ./IMGS/male0041.webp
     ./IMGS/male0042.webp
     ./IMGS/male0043.webp
     ./IMGS/male0044.webp
     ./IMGS/male0045.webp
     ./IMGS/male0046.webp
     ./IMGS/male0047.webp
     ./IMGS/male0048.webp
     ./IMGS/male0049.webp
     ./IMGS/male0050.webp
     ./IMGS/male0051.webp
     ./IMGS/male0052.webp
     ./IMGS/male0053.webp
     ./IMGS/male0054.webp
     ./IMGS/male0055.webp
     ./IMGS/male0056.webp
     ./IMGS/male0057.webp
     ./IMGS/male0058.webp
     ./IMGS/male0059.webp
     ./IMGS/male0060.webp
     ./IMGS/male0061.webp
     ./IMGS/male0062.webp
     ./IMGS/male0063.webp
     ./IMGS/male0064.webp
     ./IMGS/male0065.webp
     ./IMGS/male0066.webp
     ./IMGS/male0067.webp
     ./IMGS/male0068.webp
     ./IMGS/male0069.webp
     ./IMGS/male0070.webp
     ./IMGS/male0071.webp
     ./IMGS/male0072.webp
     ./IMGS/male0073.webp
     ./IMGS/male0074.webp
     ./IMGS/male0075.webp
     ./IMGS/male0076.webp
     ./IMGS/male0077.webp
     ./IMGS/male0078.webp
     ./IMGS/male0079.webp
     ./IMGS/male0080.webp
     ./IMGS/male0081.webp
     ./IMGS/male0082.webp
     ./IMGS/male0083.webp
     ./IMGS/male0084.webp
     ./IMGS/male0085.webp
     ./IMGS/male0086.webp
     ./IMGS/male0087.webp
     ./IMGS/male0088.webp
     ./IMGS/male0089.webp
     ./IMGS/male0090.webp
     ./IMGS/male0091.webp
     ./IMGS/male0092.webp
     ./IMGS/male0093.webp
     ./IMGS/male0094.webp
     ./IMGS/male0095.webp
     ./IMGS/male0096.webp
     ./IMGS/male0097.webp
     ./IMGS/male0098.webp
     ./IMGS/male0099.webp
     ./IMGS/male0100.webp
     ./IMGS/male0102.webp
     ./IMGS/male0102.webp
     ./IMGS/male0103.webp
     ./IMGS/male0104.webp
     ./IMGS/male0105.webp
     ./IMGS/male0106.webp
     ./IMGS/male0107.webp
     ./IMGS/male0108.webp
     ./IMGS/male0109.webp
     ./IMGS/male0110.webp
     ./IMGS/male0111.webp
     ./IMGS/male0112.webp
     ./IMGS/male0113.webp
     ./IMGS/male0114.webp
     ./IMGS/male0115.webp
     ./IMGS/male0116.webp
     ./IMGS/male0117.webp
     ./IMGS/male0118.webp
     ./IMGS/male0119.webp
     ./IMGS/male0120.webp
     ./IMGS/male0121.webp
     ./IMGS/male0122.webp
     ./IMGS/male0123.webp
     ./IMGS/male0124.webp
     ./IMGS/male0125.webp
     ./IMGS/male0126.webp
     ./IMGS/male0127.webp
     ./IMGS/male0128.webp
     ./IMGS/male0129.webp
     ./IMGS/male0130.webp
     ./IMGS/male0131.webp
     ./IMGS/male0132.webp
     ./IMGS/male0133.webp
     ./IMGS/male0134.webp
     ./IMGS/male0135.webp
     ./IMGS/male0136.webp
     ./IMGS/male0137.webp
     ./IMGS/male0138.webp
     ./IMGS/male0139.webp
     ./IMGS/male0140.webp
     ./IMGS/male0141.webp
     ./IMGS/male0142.webp
     ./IMGS/male0143.webp
     ./IMGS/male0144.webp
     ./IMGS/male0145.webp
     ./IMGS/male0146.webp
     ./IMGS/male0147.webp
     ./IMGS/male0148.webp
     ./IMGS/male0149.webp
     ./IMGS/male0150.webp
     ./IMGS/male0151.webp
     ./IMGS/male0152.webp
     ./IMGS/male0153.webp
     ./IMGS/male0154.webp
     ./IMGS/male0155.webp
     ./IMGS/male0156.webp
     ./IMGS/male0157.webp
     ./IMGS/male0158.webp
     ./IMGS/male0159.webp
     ./IMGS/male0160.webp
     ./IMGS/male0161.webp
     ./IMGS/male0162.webp
     ./IMGS/male0163.webp
     ./IMGS/male0164.webp
     ./IMGS/male0165.webp
     ./IMGS/male0166.webp
     ./IMGS/male0167.webp
     ./IMGS/male0168.webp
     ./IMGS/male0169.webp
     ./IMGS/male0170.webp
     ./IMGS/male0171.webp
     ./IMGS/male0172.webp
     ./IMGS/male0173.webp
     ./IMGS/male0174.webp
     ./IMGS/male0175.webp
     ./IMGS/male0176.webp
     ./IMGS/male0177.webp
     ./IMGS/male0178.webp
     ./IMGS/male0179.webp
     ./IMGS/male0180.webp
     ./IMGS/male0181.webp
     ./IMGS/male0182.webp
     ./IMGS/male0183.webp
     ./IMGS/male0184.webp
     ./IMGS/male0185.webp
     ./IMGS/male0186.webp
     ./IMGS/male0187.webp
     ./IMGS/male0188.webp
     ./IMGS/male0189.webp
     ./IMGS/male0190.webp
     ./IMGS/male0191.webp
     ./IMGS/male0192.webp
     ./IMGS/male0193.webp
     ./IMGS/male0194.webp
     ./IMGS/male0195.webp
     ./IMGS/male0196.webp
     ./IMGS/male0197.webp
     ./IMGS/male0198.webp
     ./IMGS/male0199.webp
     ./IMGS/male0200.webp
     ./IMGS/male0201.webp
     ./IMGS/male0202.webp
     ./IMGS/male0203.webp
     ./IMGS/male0204.webp
     ./IMGS/male0205.webp
     ./IMGS/male0206.webp
     ./IMGS/male0207.webp
     ./IMGS/male0208.webp
     ./IMGS/male0209.webp
     ./IMGS/male0210.webp
     ./IMGS/male0211.webp
     ./IMGS/male0212.webp
     ./IMGS/male0213.webp
     ./IMGS/male0214.webp
     ./IMGS/male0215.webp
     ./IMGS/male0216.webp
     ./IMGS/male0217.webp
     ./IMGS/male0218.webp
     ./IMGS/male0219.webp
     ./IMGS/male0220.webp
     ./IMGS/male0221.webp
     ./IMGS/male0222.webp
     ./IMGS/male0223.webp
     ./IMGS/male0224.webp
     ./IMGS/male0225.webp
     ./IMGS/male0226.webp
     ./IMGS/male0227.webp
     ./IMGS/male0228.webp
     ./IMGS/male0229.webp
     ./IMGS/male0230.webp
     ./IMGS/male0231.webp
     ./IMGS/male0232.webp
     ./IMGS/male0233.webp
     ./IMGS/male0234.webp
     ./IMGS/male0235.webp
     ./IMGS/male0236.webp
     ./IMGS/male0237.webp
     ./IMGS/male0238.webp
     ./IMGS/male0239.webp
     ./IMGS/male0240.webp
     ./IMGS/male0241.webp
     ./IMGS/male0242.webp
     ./IMGS/male0243.webp
     ./IMGS/male0244.webp
     ./IMGS/male0245.webp
     ./IMGS/male0246.webp
     ./IMGS/male0247.webp
     ./IMGS/male0248.webp
     ./IMGS/male0249.webp
     ./IMGS/male0250.webp
     ./IMGS/male0251.webp
     ./IMGS/male0252.webp
     ./IMGS/male0253.webp
     ./IMGS/male0254.webp
     ./IMGS/male0255.webp
     ./IMGS/male0256.webp
     ./IMGS/male0257.webp
     ./IMGS/male0258.webp
     ./IMGS/male0259.webp
     ./IMGS/male0260.webp
     ./IMGS/male0261.webp
     ./IMGS/male0262.webp
     ./IMGS/male0263.webp
     ./IMGS/male0264.webp
     ./IMGS/male0265.webp
     ./IMGS/male0266.webp
     ./IMGS/male0267.webp
     ./IMGS/male0268.webp
     ./IMGS/male0269.webp
     ./IMGS/male0270.webp
     ./IMGS/male0271.webp
     ./IMGS/male0272.webp
     ./IMGS/male0273.webp
     ./IMGS/male0274.webp
     ./IMGS/male0275.webp
     ./IMGS/male0276.webp
     ./IMGS/male0277.webp
     ./IMGS/male0278.webp
     ./IMGS/male0279.webp
     ./IMGS/male0280.webp
     ./IMGS/male0281.webp
     ./IMGS/male0282.webp
     ./IMGS/male0283.webp
     ./IMGS/male0284.webp
     ./IMGS/male0285.webp
     ./IMGS/male0286.webp
     ./IMGS/male0287.webp
     ./IMGS/male0288.webp
     ./IMGS/male0289.webp
     ./IMGS/male0290.webp
     ./IMGS/male0291.webp
     ./IMGS/male0292.webp
     ./IMGS/male0293.webp
     ./IMGS/male0294.webp
     ./IMGS/male0295.webp
     ./IMGS/male0296.webp
     ./IMGS/male0297.webp
     ./IMGS/male0298.webp
     ./IMGS/male0299.webp
     ./IMGS/male0300.webp
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
    end: `800% top`,
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
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `800% top`,
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
gsap.to("#page4",{
  scrollTrigger:{
    trigger:`#page4`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('.nav');

  menuToggle.addEventListener('click', function () {
      nav.classList.toggle('show');
  });

  // Close the mobile menu when clicking outside
  document.addEventListener('click', function (event) {
      if (!menuToggle.contains(event.target) && !nav.contains(event.target)) {
          nav.classList.remove('show');
      }
  });
});

function contact() {
  alert("Thanks for your precious time.");
  window.location.href = "contact.php";
}