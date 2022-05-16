var point = 0;
var play = true ;
color = ["blue", "red", "green", "orange","yellow","purple"];
className = ["#left","#right"];
randClass = 0;
trueClass = 0;
falseClassColor = 0;

$(document).ready(function () {

    establishGame();
   

    $('div').click(function(){

        if($(this).attr("class") == "true"){
            point+=1;
            console.log(point);
            $('.point').html(point);
            
        }
        setTimeout(() => {
            $(className[randClass]).empty().removeClass();
            $(className[Math.abs(randClass-1)]).empty();
            establishGame();
        }, 1000);
        
        

    });

    
    $('body').append('<button onclick="location.reload()">Play Again</button>');
});



function establishGame(){

    randClass = Math.floor(Math.random() * className.length);
    trueClass = Math.floor(Math.random() * color.length);
    falseClassColor = Math.floor(Math.random() * color.length);


    $(className[randClass]).append(`<h1>${color[trueClass]}</h1>`)
                            .css("color", color[trueClass]).addClass("true");
       
    $(className[Math.abs(randClass-1)]).append(`<h1>${color[falseClassColor]}</h1>`)
                    .css("color", color[Math.abs(falseClassColor-1)]);
    
                    console.log(point);

                   


}



