function calculate(){
   
    selectArtType = document.getElementById("artType");
    cbFrame = document.getElementById("frame");
    cbGift = document.getElementById("gift");
    taResult = document.getElementById("result");        
    switch(selectArtType.value){
      case "line": price = 100; break;
      case "botanic": price = 150; break;
      case "motto": price = 70; break;
    }
    if(cbFrame.checked)
      price +=50;

    if(cbGift.checked)
      price +=10;
    
    taResult.value = "\nYou choose " + selectArtType.value + " art. \n\nTotal Price is "+price+" TL";                  
  }

  {

    var images = ["motto1.png","motto2.png","motto3.png","motto4.png","motto5.png","motto6.png","motto7.png","motto8.png","motto9.png"];
    var counter=0;

    function showImage(inc){   

      counter +=inc;

      if(counter < 0) 
            counter = 0;

      if(counter >= images.length) 
        counter= images.length-1;  
    
      var imgObj = document.getElementById("motto");
      imgObj.src="images/"+images[counter];

      var imgObj = document.getElementById("botanical");
      imgObj.src="images/"+botanical[counter];

      var imgObj = document.getElementById("line");
      imgObj.src="images/"+line[counter];

    }

  }

  {
       

        const image = [
            {type:"motto", img:"motto1.png", price : 100},
            {type:"motto",img:"motto2.png", price : 100},
            {type:"motto",img:"motto3.png", price : 100},
            {type:"motto",img:"motto4.png", price : 100},
            {type:"motto",img:"motto5.png", price : 100},
            {type:"motto",img:"motto6.png", price : 100},
            {type:"motto",img:"motto7.png", price : 100},
            {type:"motto",img:"motto8.png", price : 100},
            {type:"motto",img:"motto9.png", price : 100},
            {type:"botanical",img:"botanical1.png", price : 200},
            {type:"botanical", img:"botanical2.png", price : 200},
            {type:"botanical",img:"botanical3.png", price : 200},
            {type:"botanical",img:"botanical4.png", price : 200},
            {type:"botanical",img:"botanical5.png", price : 200},
            {type:"botanical",img:"botanical6.png", price : 200},
            {type:"line",img:"lines1.png", price : 300},
            {type:"line",img:"lines2.png", price : 300},
            {type:"line", img:"lines3.png", price : 300},
            {type:"line", img:"lines4.png", price : 300},
            {type:"line", img:"lines5.png", price : 300},
            {type:"line", img:"lines6.png", price : 300},
            {type:"line", img:"lines7.png", price : 300}

        ];

        
    function display(type){     
      out="";
      resultString="";
      var count = 0;
         
      for(let img of image){            
        if(type == 'all' || img.type==type) {  
          count++;

            out+=`<td><img src="images/${img.img}"></td>`;   
         
            if(count==3){

              count=0;
              resultString+=`<tr>${out}</tr>`;
              out="";

            }
        }
      } 
    
    return resultString;     
  }   
  function filter(){
    res = display(artType.value);
    output.innerHTML =res;
  }

        

  }

  
 





