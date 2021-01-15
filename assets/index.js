function cookieFunction() {
  document.getElementById("cookie-notice").classList.add('d-none');
}

function activityWatcher(){
  var secondsSinceLastActivity = 0;
  function activity(){
      secondsSinceLastActivity = 0;
      cookieFunction();  
      document.removeEventListener("keydown", activity, true);
      document.removeEventListener("scroll", activity, true);
  }
  document.addEventListener("scroll", activity, true);
  document.addEventListener("keydown", activity, true);
}

function PageSpecificFunction() {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  if (page == "index.html" || page == "") {
    
  }
}

function lang(){
  document.getElementById("langSelector").classList.remove('d-none');
  if (window.location.pathname == "/en.html") {
    cookieFunction();
    
  }

  

  /*
  const queryString = window.location.search;
  var reqLang = "de";
  
  if (queryString) {
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams);
    reqLang = urlParams.get('lang');
    console.log(reqLang);
  }
  */


  
} 



activityWatcher();
lang();

