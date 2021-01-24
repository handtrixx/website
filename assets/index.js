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
  var userLang = navigator.language || navigator.userLanguage; 
  userLang = userLang.substring(0, 2);
  var userUrl = window.location.pathname;
  var userRef = document.referrer;
  userRef = userRef.replace("qas.", "");
  userRef = userRef.replace("www.", "");

  if (userLang != "de" && userUrl != "/en.html" && userRef != "https://niklas-stephan.de/en.html") {
    window.location.replace("https://niklas-stephan.de/en.html");
  }

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

