var gettexte=document.getElementById("x");

function changestyle(){
    if(gettexte.style.fontWeight=="bold")
    { gettexte.style.fontWeight="normal";}
    else {
        gettexte.style.fontWeight="bold";
    }
}
function changestyle2(){
   if(gettexte.style.fontStyle=="italic")
   {gettexte.style.fontStyle="normal";}
   else {
    gettexte.style.fontStyle="italic";
   }
}
function changestyle3(){
    if(gettexte.style.textDecoration=="underline")
    {gettexte.style.textDecoration="none";}
    else {
        gettexte.style.textDecoration="underline";
    }
}
function changestyle4(){
    var x=document.getElementById("sizef").value;
    gettexte.style.fontSize=x;
}
function changestyle5(){
    var  x=document.getElementById("sizea").value;
    gettexte.style.fontFamily=x;
}
$("button").hide();

    $(".rel").mouseenter(function(){
      $(this).animate({opacity:'0.5'});
    });
    $(".rel").mouseleave(function(){
      $(this).animate({opacity:'1'});
    });

    $(".rel").mouseenter(function(){
        ($(this)).find('button').show();
    });
    $(".rel").mouseleave(function(){
        ($(this)).find('button').hide();
    });
    
