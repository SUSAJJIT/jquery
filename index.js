// to check whether our jQuery library is ready OR add  <script> of index.js & jQUERY just above of </body>

// $(document).ready(function() {

//     // apply properties using jQuery
//     $("h1").css("color","red")
// })

// document.querySelectorAll("button"); instead



// to set the values with properties


//   $("h1").css("color","green");

// // to get the values of properties
// console.log($("h1").css("color"))
// console.log($("h1").css("font-size"))

// to add css proprties using class from css file

// $("h1").addClass("big-title");

//adding multiple class
// $("h1").addClass("big-title margin-50");

//if conatins class
// $("h1").hasClass("margin-50"); // true


// ### Manipulating text with jQuery
// $("h1").text("bye");
// $("button").text("text changed")

// .html same as "innerHTML"
// $("button").html("<em>hey</em>")


// #### Manipulating attributes with jQuery L-181

// attributes:-
// <img src="drum.png" alt="">
// <a href="https://www.google.com"></a>

//get attribute value
// console.log($("img").attr("src"));

//set attribute value;

$("a").attr("href","https://www.yahoo.com");

// above line changes attribute(here link) of all anchor tag

// give list of all classes contained by h1
// $("h1").attr("class"); //big-title,margin-50

//### L-182 Adding EventListener with jQuery


// $("h1").click(function(){       //on clicking h1
//     $("h1").css("color","purple");
// });


                  //Using javascript

// for(var i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function() {
//         document.querySelector("h1").style.color="red";
//     });
// }

             //  Using jQuery Insted 

// $("button").click(function(){
//     $("h1").css("color","red");
// }); 


// change h1 text according to what we put in input box(one letter only)
// $("input").keypress(function(event) {
//     $("h1").html(event.key);
//     // $("h1").text(event.key);
// });


         ///.on method

// here on moving mouse over h1 it will change its color to red
//we canadd any event from list of events available in javascript
// $("h1").on("mouseover",function() {
//     $("h1").css("color","red");
// });


// ### L-183 Addind and removing elements with jQuery
 
//add one button before & after h1
//  $("h1").before("<button>New</button>");

//  $("h1").after("<button>New</button>");

//  //add element just before or after of closing and opening tag
//  $("h1").prepend("<button>New</button>"); //before

//  $("h1").append("<button>New</button>");  //after

//  L-184 website animation with jQuery


//on clicking button-h1 will be hidden
// $("button").on("click",function(){
//     $("h1").hide();
// });

//toggle bw hidden and visible

// $("button").on("click",function(){
//     $("h1").toggle();
// });

// $("button").on("click",function(){
//     $("h1").fadeToggle();    //fadeIn() and fadeOut()
// });


$("button").on("click",function(){
    $("h1").slideToggle();    //slideIn() and slideOut()
});

$("button").on("click",function(){
    $("h1").animate({opacity:0.5});    //inside curly braces we can add any css proprty with numeric value
});


 