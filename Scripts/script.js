// tagggles


const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});


// buttons
const links = document.querySelectorAll(".lamp");
console.log(links);

const clickHandler = (link) => {
    links.forEach((link) => {
        link.classList.remove("active")
    })
    link.classList.add("active")
    console.log("sasdasds");
}

links.forEach((link) => {
    link.addEventListener("click" , () => clickHandler(link))
})
 document.querySelector('.container').style.display = 'none'
// loader
document.addEventListener('DOMContentLoaded', function() {
    // 3 ثانیه (3000 میلی‌ثانیه) صبر کنید
    setTimeout(function() {
        document.querySelector('.container').style.display = 'block'
      document.querySelector('.loader').style.display = 'none';
    });
  });