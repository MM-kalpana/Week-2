let headerdata=[
    {
        imgagesrc :"./crown-solid.svg",
        logoname:"KING",
        navlinkone:"Shop",
        navlinktwo:"Brands",
        navlinkthree:"Contact Us",
        buttion:"Sign Up"

    }
]
let bodyEl=document.getElementById("body");

let leftside=document.getElementById('leftside');
const header = document.getElementById('header');
document.addEventListener('DOMContentLoaded', function() {
   header.innerHTML = `
      <nav>
        <div id="logo">
          <div id="logoimage"><img src=${headerdata[0].imgagesrc} alt="Logo" width="25px" height="25px"></div>
          <div id="logoname">${headerdata[0].logoname}</div>
        </div>
        <div id="navcontent">
          <div id="navlinkone">${headerdata[0].navlinkone}</div>
          <div id="navlinktwo">${headerdata[0].navlinktwo}</div>
          <div id="navlinkthree">${headerdata[0].navlinkthree}</div>
          <button id="button">${headerdata[0].buttion}</button>
        </div>
      </nav>
    `;
    // leftside.innerHTML=`
    // <div id="leftheading">
    //       <h2>Exquisite Watches</h2>
    //       <h3>Gold Luxury<span>Choose Us</span></h3>
    //   </div>
    //     <p>Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch</p>
    //     <h1>$499.00</h1>
    //     <div id="icondiv">
    //       <img src="./image/fb.png" alt="Facebook">
    //       <img src="./image/twitter.png" alt="Twitter">
    //       <img src="./image/you tube.png" alt="YouTube">
    //     </div>
    // `
    // bodyEl.style.backgroundImage = 'linear-gradient(to right, rgb(245, 176, 115),rgb(255, 222, 194))'
 
});
 function callfun(){
  leftside.innerHTML=""
  leftside.innerHTML=`
    <div id="leftheading">
          <h2>Exquisite Watches</h2>
          <h3>Gold Luxury<span>Choose Us</span></h3>
      </div>
        <p>Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch</p>
        <h1>$499.00</h1>
        <div id="icondiv">
          <img src="./image/fb.png" alt="Facebook">
          <img src="./image/twitter.png" alt="Twitter">
          <img src="./image/you tube.png" alt="YouTube">
        </div>
    `
    bodyEl.style.backgroundImage = 'linear-gradient(to right, rgb(245, 176, 115),rgb(255, 222, 194))'
    console.log("working")

 }

  
 

 let watchpinkEl=document.getElementById("watchpink");
 let watchpinkfun= new IntersectionObserver(callfun)
 watchpinkfun.observe(watchpinkEl);



 function blacksilver(){
  leftside.innerHTML=""
  leftside.innerHTML=`
    <div id="leftheading">
          <h2>Dainty Timepieces</h2>
          <h3>Silver Luxury<span>Choose Us</span></h3>
      </div>
        <p>Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece</p>
        <h1>$469.00</h1>
        <div id="icondiv">
          <img src="./image/fb.png" alt="Facebook">
          <img src="./image/twitter.png" alt="Twitter">
          <img src="./image/you tube.png" alt="YouTube">
        </div>
    `
  console.log("working black")
  bodyEl.style.backgroundImage = 'linear-gradient(to right, rgb(177, 181, 181),rgb(224, 224, 224))'

 }
let blacksilverEl=document.getElementById("blacksilver");
let blacksilverfun= new IntersectionObserver(blacksilver)


blacksilverfun.observe(blacksilverEl)



function greensilver(){
  leftside.innerHTML=""
  leftside.innerHTML=`
    <div id="leftheading">
          <h2>Elegant Timepieces</h2>
          <h3>Choose Luxury<span>Choose Us</span></h3>
      </div>
        <p>Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch</p>
        <h1>$469.00</h1>
        <div id="icondiv">
          <img src="./image/fb.png" alt="Facebook">
          <img src="./image/twitter.png" alt="Twitter">
          <img src="./image/you tube.png" alt="YouTube">
        </div>
    `
    bodyEl.style.backgroundImage = 'linear-gradient(to right, rgb(59, 173, 99),rgb(116, 227, 153))'
  console.log("working green")

 }
let greensilverEl=document.getElementById("greensilver");
let greensilverfun= new IntersectionObserver(greensilver)
greensilverfun.observe(greensilverEl)


function redsilver(){
  leftside.innerHTML=""
  leftside.innerHTML=`
    <div id="leftheading">
          <h2>Refined Timepieces</h2>
          <h3>Choose Luxury<span>Choose Us</span></h3>
      </div>
        <p>Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece</p>
        <h1>$469.00</h1>
        <div id="icondiv">
          <img src="./image/fb.png" alt="Facebook">
          <img src="./image/twitter.png" alt="Twitter">
          <img src="./image/you tube.png" alt="YouTube">
        </div>
    `
    bodyEl.style.backgroundImage = 'linear-gradient(to right, rgb(245, 98, 93),rgb(255, 168, 148))'
  console.log("working red")

 }
let redsilverEl=document.getElementById("redsilver");
let redsilverfun= new IntersectionObserver(redsilver);
redsilverfun.observe(redsilverEl);

