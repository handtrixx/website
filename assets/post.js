function socialShare(value) {
   console.log ("You would like to share my post via "+value); 
   currentUrl = window.location.href;
   targetUrl = "";
   if (value == "facebook") {
      sharerUrl = "https://www.facebook.com/sharer/sharer.php?u=";
   } 
   if (value == "twitter") {
      sharerUrl = "https://twitter.com/intent/tweet?url=";
   }
   if (value == "mail") {
      subject = "Ein interessanter Link auf niklas.stephan.de";
      sharerUrl = "mailto:irgendwer@irgendwo.de?subject="+subject+"&body=";
   }
   if (value == "whatsapp") {
      sharerUrl = "https://api.whatsapp.com/send?text=";
   }  
   targetUrl = sharerUrl+currentUrl;
   window.open(targetUrl,'_blank');
}


var i;
var command;
for (i = 0; i <  document.images.length; i++) {
   command = 'document.images['+i+'].addEventListener("click", function(){var url = document.images['+i+'].src;url = url.replace("https://assets.niklas-stephan.de/small?src=storage/uploads/","https://cms.niklas-stephan.de/storage/uploads/");window.open(url);});';
   
   function text2script(){
      return Function(command)();
  }
  text2script();
}






