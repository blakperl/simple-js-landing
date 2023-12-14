// (function() {
//   let landingNav =  document.getElementById("landingNav");
//   let landingBtn = document.getElementById("navbutton");

//   landingBtn.addEventListener('click', function() {
//       let expandClass = 'open'

//       landingNav.hasClass(expandClass) ? landingNav.removeClass(expandClass) :
//           landingNav.addClass(expandClass);
//       landingBtn.hasClass(expandClass) ? landingBtn.removeClass(expandClass) :
//           landingBtn.addClass(expandClass);
//   })
// })()

(function() {
  let landingNav = document.getElementById("landingNav");
  let landingBtn = document.getElementById("navbutton");

  landingBtn.addEventListener('click', function() {
    let expandClass = 'open';
    
    // optional chaining or if statement
    landingNav.classList.contains(expandClass) ? landingNav.classList.remove(expandClass) : landingNav.classList.add(expandClass);
    
      if (landingBtn.classList.contains(expandClass)) {
          landingBtn.classList.remove(expandClass);
      } else {
          landingBtn.classList.add(expandClass);
    }  
  });
})();

        var wrapperMenu = document.querySelector('.wrapper-menu');

        wrapperMenu.addEventListener('click', function() {
            wrapperMenu.classList.toggle('open');
        })

    
function toggleCollapse(id) {
    var element = document.getElementById(id);
    element.classList.toggle('show');
  }

  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var scroll = window.scrollY || document.documentElement.scrollTop;

        var navbar = document.querySelector(".navbar");
        var navLinks = document.querySelectorAll(".navbar li a");

        if (scroll > 100) {
            navbar.style.background = "white";
            navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.76)";
            navLinks.forEach(function (link) {
                link.style.color = "";
            });
        } else {
            navbar.style.background = "";
            navbar.style.boxShadow = "";
            navLinks.forEach(function (link) {
                link.style.color = "white";
            });
        }
    });
});

