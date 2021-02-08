var canvas = new fabric.Canvas('myCanvas');

var player_x = 10;

var player_y = 10;

var block_image_width = 30;

var block_image_height = 30;

var player_object = "";

var block_image_object = "";

function player_update() {



fabric.Image.fromURL("player.png" , function(Img){

    player_object = Img;

    player_object.scaleToWidth(150);

    player_object.scaleToHeight(140);

    player_object.set({

    top:player_y,

    left:player_x

    });

    canvas.add(player_object);
    
});

}

function new_Image(get_Image) {

    fabric.Image.fromURL(get_Image , function(Img){
    
      block_image_object = Img;
    
      block_image_object.scaleToWidth(block_image_width);
    
      block_image_object.scaleToHeight(block_image_height);
        
      block_image_object.set({

         top:player_y,
     
         left:player_x
     
         });
    
        canvas.add(block_image_object);
        
    });
    
    }

    window.addEventListener("keydown", my_keydown);

    function my_keydown(e) {

    keyPressed = e.keyCode;

    if(e.shiftKey == true && keyPressed == '80') {

    console.log("p and shift is pressed");

    block_image_height = block_image_height + 10;

    block_image_width = block_image_width + 10;

    document.getElementById("current_height").innerHTML = block_image_height;

    document.getElementById("current_width").innerHTML = block_image_width;

}

    if(e.shiftKey == true && keyPressed == '77') {

        console.log("m and shift is pressed");
    
        block_image_height = block_image_height - 10;
    
        block_image_width = block_image_width - 10;
    
        document.getElementById("current_height").innerHTML = block_image_height;
    
        document.getElementById("current_width").innerHTML = block_image_width;

    }

    if(keyPressed == '38') {

        up();
        
        console.log("up");
    
        }
    
        if(keyPressed == '40') {
    
            down();
            
            console.log("down");
        
        }
    
        if(keyPressed == '37') {
    
                left();
                
                console.log("left");
            
        }
    
        if(keyPressed == '39') {
    
            right();
            
            console.log("right");
        
         } 
    
         if(keyPressed == '82') {
    
            new_Image("captain_america_left_hand.png");
            
            console.log("a");
        
         } 
    
         if(keyPressed == '66') {
    
            new_Image("spiderman_body.png");
            
            console.log("b");
        
         } 
    
         if(keyPressed == '67') {
    
            new_Image("hulk_left_hand.png");
            
            console.log("c");
        
         } 
    
         if(keyPressed == '76') {
    
            new_Image("hulk_legs.png");
            
            console.log("l");
        
         } 
    
         if(keyPressed == '69') {
    
            new_Image("hulk_right_hand.png");
            
            console.log("e");
        
         } 
    
         if(keyPressed == '70') {
    
            new_Image("hulkd_body.png");
            
            console.log("f");
        
         }
         
         if(keyPressed == '71') {
    
            new_Image("ironman_body.png");
            
            console.log("g");
        
         } 
    
         if(keyPressed == '72') {
    
            new_Image("ironman_face.png");
            
            console.log("h");
        
         } 
    
         if(keyPressed == '73') {
    
            new_Image("ironman_left_hand.png");
            
            console.log("i");
        
         } 

         if(keyPressed == '74') {
    
            new_Image("ironman_legs.png");
            
            console.log("j");
        
         } 

         if(keyPressed == '75') {
    
            new_Image("ironman_right_hand.png");
            
            console.log("k");
        
         }

         if(keyPressed == '68') {
    
            new_Image("hulk_face.png");
            
            console.log("d");
        
         }

         if(keyPressed == '78') {
    
            new_Image("spiderman_left_hand.png");
            
            console.log("n");
        
         }

         if(keyPressed == '79') {
    
            new_Image("spiderman_legs.png");
            
            console.log("o");
        
         }

         if(keyPressed == '81') {
    
            new_Image("thor_face.png");
            
            console.log("q");
        
         }

         if(keyPressed == '65') {
    
            new_Image("thor_left_hand.png");
            
            console.log("a");
        
         }

         if(keyPressed == '83') {
    
            new_Image("thor_right_hand.png");
            
            console.log("s");
        
         }

         if(keyPressed == '84') {
    
            new_Image("spiderman_right_hand.png");
            
            console.log("t");
        
         }

         if(keyPressed == '85') {
    
            new_Image("spiderman_face.png");
            
            console.log("u");
        
         }

        }

        function up() {

         if(player_y >=0) {
         
         player_y = player_y - 10;
         
         console.log(player_y,player_x);
         
         canvas.remove(player_object);
         
         player_update();
         
         }
         
         }
         
         function down() {
         
            if(player_y <=500) {
            
            player_y = player_y + 10;
            
            console.log(player_y,player_x);
            
            canvas.remove(player_object);
            
            player_update();
            
            }
            
            }
         
            function left() {
         
               if(player_x >=0) {
               
               player_x = player_x - 10;
               
               console.log(player_y,player_x);
               
               canvas.remove(player_object);
               
               player_update();
               
               }
               
               }
         
               function right() {
         
                  if(player_x <=900) {
                  
                  player_x = player_x + 10;
                  
                  console.log(player_y,player_x);
                  
                  canvas.remove(player_object);
                  
                  player_update();
                  
                  }
                  
                  }