jQuery(document).ready(function($) {
  $("button").click(function(){
    let xmlHttp = new XMLHttpRequest();
    const theUrl = "https://v2.jokeapi.dev/joke/Any?format=txt";
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    $(".joke").text(xmlHttp.responseText);
  })
});
