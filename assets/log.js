function blockIE () {
   var ua = window.navigator.userAgent;
   var msie = ua.indexOf("MSIE ");
   var page = window.location.pathname;
   page = page.split("/").pop();

   if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  
   {
      if (page != "404.html") {
         window.location.replace("/404.html");
      }
   } 
}

console.log(`%c
MMMMMMMMMMMm++mMMMMMMMMMMM
MMMMMMMMMm+:  :+mMMMMMMMMM
MMMMMMMm+:      :+mMMMMMMM
MMMMMm yyy  shhhy+.+mMMMMM
MMMm+: hdddy//+hddy :+mMMM
Mmo:   hddy    /ddd:  :+mM
d-     hddo    :ddd:    -d
Mmo:   hdd+    :ddd:  :omM
MMMmo: hdd+    :ddd::omMMM
MMMMMm+yyy/    -yyhomMMMMM
MMMMMMMm+:      :+mMMMMMMM
MMMMMMMMMm+:  :+mMMMMMMMMM
MMMMMMMMMMMm++mMMMMMMMMMMM
`,"color: #8945f8;font-family:monospace");
console.log("%cWelcome to niklas-stephan.de - v2021.1.1", "color: #8945f8;");
console.log("Client Date: "+new Date());
blockIE();