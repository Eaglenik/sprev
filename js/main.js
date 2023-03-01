// sidebar
const menubackMenuLinkBtn = document.querySelector('.navbar-button')
const menubackMenuLinkSidebar = document.querySelector('.sidebar')
const divClose = document.querySelector('.divclose')

menubackMenuLinkBtn.addEventListener('click', function(){
  if(menubackMenuLinkBtn.classList.contains('active')){
    menubackMenuLinkBtn.classList.remove('active')
    menubackMenuLinkSidebar.style = `display: none; transform: translate(-340px); transition: 0.5s`
    divClose.style = `display: none;`
    setTimeout(function(){
      menubackMenuLinkSidebar.removeAttribute('style')
    }, 500)
  }else{
    menubackMenuLinkBtn.classList.add('active')
    menubackMenuLinkSidebar.style = `display: flex; transform: translate(0); transition: 0.5s;`
    divClose.style = `display: flex;`
  }
})
divClose.addEventListener('click', function(){
  if(menubackMenuLinkBtn.classList.contains('active')){
    menubackMenuLinkBtn.classList.remove('active')
    menubackMenuLinkSidebar.style = `transform: translate(-340px); transition: 0.3s;`
    divClose.style = `display: none;`
    setTimeout(function(){
      navbarNav.removeAttribute('style')
    }, 500)
  }else{
    menubackMenuLinkBtn.classList.add('active')
    menubackMenuLinkSidebar.style = `transform: translate(0); transition: 0.3s;`
    divClose.style = `display: flex;`
  }
})
window.addEventListener('resize', function(){
  if(window.innerWidth > 1200){
    menubackMenuLinkBtn.classList.remove('active')
    menubackMenuLinkSidebar.removeAttribute('style')
  }
})
window.addEventListener('resize', function(){
  if(window.innerWidth > 1200){
    menubackMenuLinkBtn.classList.remove('active')
    menubackMenuLinkSidebar.removeAttribute('style')
  }
})
// tabs
var tabNavs = document.querySelectorAll(".main-navigation_tab");
var tabPanes = document.querySelectorAll(".main-link");

for (var i = 0; i < tabNavs.length; i++) {

  tabNavs[i].addEventListener("click", function(e){
    e.preventDefault();
    var activeTabAttr = e.target.getAttribute("data-tab");

    for (var j = 0; j < tabNavs.length; j++) {
      var contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("active");
        tabPanes[j].classList.add("active"); 
      } else {
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
      }
    };
  });
}