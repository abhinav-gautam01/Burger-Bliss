// bn=
/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/

const hmaburger = document.getElementById('hamburger');
const navmenu = document.getElementById('nav-menu')
const cross = document.getElementById('cross')
const navlink = document.querySelectorAll('.nav_link')
console.log(navlink)
navlink.forEach(links =>{
    links.addEventListener('click', ( )=> {
        navmenu.classList.add('hidden')
    })

})


hmaburger.addEventListener('click', ()=>
{
    navmenu.classList.remove('hidden');

})
cross.addEventListener('click', ()=> {
    navmenu.classList.add('hidden')
})

/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/

const tabs = document.querySelectorAll('.tabs_wrap ul li')
const all = document.querySelectorAll('.item_wrap');
const foods = document.querySelectorAll('.food');
const beverages = document.querySelectorAll('.beverage');
const snacks = document.querySelectorAll('.snack');

console.log(foods)
tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        tabs.forEach(tab =>{
                tab.classList.remove("active");
        })
        tab.classList.add("active") 
        const tabval = tab.getAttribute("id")
        console.log(tabval)

        all.forEach((item) => {
            item.style.display = "none";
          })
      
          if (tabval == "food") {
            foods.forEach((item) => {
              item.style.display = "block";
            });
          } else if (tabval == "snack") {
            snacks.forEach((item) => {
              item.style.display = "block";
            });
          } else if (tabval == "beverage") {
            beverages.forEach((item) => {
              item.style.display = "block";
            });
          } else {
            all.forEach((item) => {
              item.style.display = "block";
            });
        }

    })
})

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/

const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");
  
    if (this.scrollY >= 250) {
      scrollUpBtn.classList.remove("-bottom-1/2");
      scrollUpBtn.classList.add("bottom-4");
    } else {
      scrollUpBtn.classList.add("-bottom-1/2");
      scrollUpBtn.classList.remove("bottom-4");
    }
  };
  window.addEventListener("scroll", scrollUp);

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/

const scrollHeader = () => {
    const header = document.getElementById("header");
  
    if (this.scrollY >= 50) {
      header.classList.add("border-b", "border-secondaryColor");
    } else {
      header.classList.remove("border-b", "border-secondaryColor");
    }
  };
  window.addEventListener("scroll", scrollHeader);