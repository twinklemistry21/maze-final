class Game 
{
  constructor() 
  {
    this.resetTitle = createElement("h2");
    this.resetButton = createButton("");
    this.playerMoving = false;
    this.leftKeyActive = false;
    
   }

  getState() 
  {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) 
  {
    database.ref("/").update({
      gameState: state
    });
  }

  
  start() 
  {
    player = new Player();
    playerCount = player.getCount();

    forms = new Formm();
    forms.display();

    //this.createmaze();

    edgegroup = new Group();

    

        edge1 =createSprite(400,380,7,560);
        edge2 =createSprite(1135,380,7,560);
        edge3 =createSprite(546.5,100,300,7);
        edge4 =createSprite(971,100,335,7);
        edge5 =createSprite(596.5,660,400,7);
        edge6 =createSprite(1013.5,660,250,7);
        edge7 =createSprite(885,613.5,7,100);
        edge8 =createSprite(680,570,7,180);
        edge9 =createSprite(732.5,530,100,7);
        edge10 =createSprite(810,595,150,7);
        edge11 =createSprite(803.5,121.5,7, 50);
        edge12 =createSprite(1003.5,136.5,7,80);
        edge13 =createSprite(853.5,175.5,7,50);
        edge14 =createSprite(898.5,153.5,90,7);
        edge15 =createSprite(943.5,215.5,7,130);
        edge16 =createSprite(1061,250,7,200);
        edge17 =createSprite(1001.75,245,117.5,7);
        edge18 =createSprite(1095,405,75,7);
        edge19 =createSprite(803.5,261.5,7,120);
        edge20 =createSprite(876.3,280.5,141.5,7);
        edge21 =createSprite(969,347.5,188.25,7);
        edge22 =createSprite(875,379.5,7,70);
        edge23 =createSprite(1000,369,7,150);
        edge24 =createSprite(827.5,379.5,100,7);
        edge25 =createSprite(827.5,409.5,7,60);
        edge26 =createSprite(1016.5,447.5,40,7);
        edge27 =createSprite(1036.5,484,7,80);
        edge28 =createSprite(1020,527.5,40,7);
        edge29 =createSprite(936.5,497.5,7,170);
        edge30 =createSprite(958,582.5,50,7);
        edge31 =createSprite(1050,620,7,80);
        edge32 =createSprite(680,340,7,160);
        edge33 =createSprite(768.5,318,70,7);
        edge34 =createSprite(681.5,201.5,250,7);
        edge35 =createSprite(590,340,180,7);
        edge36 =createSprite(460,270,120,7);
        edge37 =createSprite(480,440,160,7);
        edge38 =createSprite(620,480,7,160);
        edge39 =createSprite(530,580,7,160);
        edge40 =createSprite(603.5,247.5,7,90);
        edge41 =createSprite(646.5,400,60,7);
        edge42 =createSprite(653.5,121.5,7, 50);
        edge43 =createSprite(559,174.5,7,50);
        edge44 =createSprite(512.5,160,100,7);
        edge45 =createSprite(693.5,50,7,100); 
        edge46 =createSprite(803.5,50,7,100);
        edge47 =createSprite(750,3.5,106,7);

        
        edgegroup.add(edge1);
        edgegroup.add(edge2);
        edgegroup.add(edge3);
        edgegroup.add(edge4);
        edgegroup.add(edge5);
        edgegroup.add(edge6);
        edgegroup.add(edge7);
        edgegroup.add(edge8);
        edgegroup.add(edge9);
        edgegroup.add(edge10);
        edgegroup.add(edge11);
        edgegroup.add(edge12);
        edgegroup.add(edge13);
        edgegroup.add(edge14);
        edgegroup.add(edge15);
        edgegroup.add(edge16);
        edgegroup.add(edge17);
        edgegroup.add(edge18);
        edgegroup.add(edge19);
        edgegroup.add(edge20);
        edgegroup.add(edge21);
        edgegroup.add(edge22);
        edgegroup.add(edge23);
        edgegroup.add(edge24);
        edgegroup.add(edge25);
        edgegroup.add(edge26);
        edgegroup.add(edge27);
        edgegroup.add(edge28);
        edgegroup.add(edge29);
        edgegroup.add(edge30);
        edgegroup.add(edge31);
        edgegroup.add(edge32);
        edgegroup.add(edge33);
        edgegroup.add(edge34);
        edgegroup.add(edge35);
        edgegroup.add(edge36);
        edgegroup.add(edge37);
        edgegroup.add(edge38);
        edgegroup.add(edge39);
        edgegroup.add(edge40);
        edgegroup.add(edge41);
        edgegroup.add(edge42);
        edgegroup.add(edge43);
        edgegroup.add(edge44);
        edgegroup.add(edge45);
        edgegroup.add(edge46);
        edgegroup.add(edge47);
        

        /*var options ={
          isStatic:true
        }
        this.body1=Bodies.circle(725,65,20,options);
        image(player1,this.body1.position.x,this.body1.position.y,20)
        
        this.body2 = Bodies.circle(775,65,20,options);
        image(player2,this.body2.position.x,this.body2.position.y,20)

        players = [this.body1, this.body2];
        */
        
        man = createSprite(725,65);
        man.addImage("man1", player1);
        man.scale = 0.2;

        child = createSprite(775, 65);
        child.addImage("child1", player2);
        child.scale = 0.15;

        man.setCollider("rectangle",0,0,man.width-100,man.height-100);
        man.debug = true;

        child.setCollider("rectangle",0,0,child.width-100,child.height-100);
        child.debug = true;

        players = [man, child];

        
        man.collide(edgegroup);
        child.collide(edgegroup);

        //man.collide(child);

       //man.collide(edge1);
       //man.collide(edge2);
       

    //edgegroup.collide(players);

   //edgegroup.collide(man);
   //edgegroup.collide(child);
    //man.collide(child);

    /*for(var i =0 ; i<2 ; i++)
    {
      if (i===0)
      {
        players[i].collide(players[1])
      }
      else
      {
        players[i].collide(players[0])
      }
    }  */

      /*var collision = Matter.SAT.collides(players[i], edgegroup);
      if (collision.collided)
      {

      }
    }*/

    }
  

  

  handleElements() 
  {
    forms.hide();
    forms.titleImg.position(40, 50);
    forms.titleImg.class("gameTitleAfterEffect");

    //C39
    this.resetTitle.html("Reset Game");
    this.resetTitle.class("resetText");
    this.resetTitle.position(1300, 20);

    this.resetButton.class("resetButton");
    this.resetButton.position(1330, 70);
  }


  play() 
  {
    this.handleElements();
    this.handleResetButton();

    Player.getPlayersInfo();
    player.getCarsAtEnd();



    
  


    if (allPlayers !== undefined)
    {

      
     
      //index of the array
      var index = 0;
      for (var plr in allPlayers) 
      {
        //add 1 to the index for every loop
        index = index + 1;

        
        //use data form the database to display the cars in x and y direction
        var x = allPlayers[plr].positionX;
        var y = allPlayers[plr].positionY;

        //console.log(x , y);

        

        players[index - 1].position.x = x;
        players[index - 1].position.y = y;

        if (index === player.index) 
        {
            stroke(10);
            fill("red");
            ellipse(x, y, 30, 30);
            
          //this.handlePlayerCollisionWithEdges(index);
          //this.handlePlayerCollisionWithPlayer(index);

          
          // Changing camera position in x & y direction
          //camera.position.y = players[index - 1].position.y;
          //camera.position.x = players[index - 1].position.x;

          if(edgegroup.isTouching(players[index-1]))
          {
            this.gameOver();
            players[index-1].visible = false;
            fill(64, 66, 70)
            ellipse(players[index-1].position.x, players[index-1].position.y, 30,30);

            this.playerMoving = true;
          /*
            players[index-1].position.x = 725;
            players[index-1].position.y = 65;
            stroke(10);
            fill("red");
            ellipse(775, 65, 30, 30);
            //this.playerMoving = false;
            player.update();
            */
           
          }
        

          /*if(edgegroup.isTouching(players[index]))
          {
            this.gameOver();
            players[index].visible = false;
            fill(64, 66, 70)
            ellipse(man.position.x, man.position.y, 30,30)

            /*
            child.x = 775;
            child.y = 65;
            stroke(10);
            fill("red");
            ellipse(775, 65, 30, 30);
            this.playerMoving = false;
            player.update();
          }
          */

          player.update();
          

          

        }
      }

      /*if (this.playerMoving) {
        player.positionY += 5;
        player.update();
      }*/



      // handling keyboard events
      this.handlePlayerControls();

      // Finshing Line
      //const finshLine = height * 6 - 100;

      if (player.positionY > 700 ) {
        gameState = 2;
        player.rank += 1;
        Player.updateCarsAtEnd(player.rank);
        player.update();
        this.showRank();
      }

      drawSprites();
    }
  }

  /*handlePlayerCollisionWithPlayer(index)
  {
    if (index === 1) {
      if (players[index - 1].collide(players[1])) {
        if (this.leftKeyActive) {
          player.positionX += 100;
        } else {
          player.positionX -= 100;
        }

        
        

        player.update();
      }
    }
    if (index === 2) {
      if (players[index - 1].collide(players[0])) {
        if (this.leftKeyActive) {
          player.positionX += 100;
        } else {
          player.positionX -= 100;
        }

        
+
        player.update();
      }
    }
  }*/

  handleResetButton() 
  {
    this.resetButton.mousePressed(() => {
      database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        players: {},
        carsAtEnd: 0
      });
      window.location.reload();
    });
  }



  handlePlayerControls()
  {
    if(!this.playerMoving)
    {
      if (keyIsDown(UP_ARROW)) 
      {
      
        player.positionY -= 2;
        stroke(10);
        fill("red");
        ellipse(player.positionX, player.positionY, 30, 30);
        player.update();
        
      }

      if (keyIsDown(DOWN_ARROW) ) 
      {
        
        player.positionY += 2;
        stroke(10);
        fill("red");
        ellipse(player.positionX, player.positionY, 30, 30);
        player.update();
        
      }
  
      if (keyIsDown(LEFT_ARROW) ) 
      {
        //this.leftKeyActive = true;
        player.positionX -= 2;
        stroke(10);
        fill("red");
        ellipse(player.positionX, player.positionY, 30, 30);
        player.update();
        /*if(players[index-1].collide(edgegroup))
        {
          player.positionX += 5;
          player.update();
        }*/
        
      }
  
      if (keyIsDown(RIGHT_ARROW) ) 
      {
        
        player.positionX += 2;
        stroke(10);
        fill("red");
        ellipse(player.positionX, player.positionY, 30, 30);
        player.update();
        
      }
     
    }

  }

 

  showRank()
  {
    swal({
      title: `Awesome!${"\n"}Rank${"\n"}${player.rank}`,
      text: "You reached the finish line successfully",
      imageUrl:
        "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    });
  }

  gameOver() 
  {
    swal({
      title: `Game Over`,
      text: "Oops you lost the race....!!!",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Thanks For Playing"
    });


  }

  end()
  {
    console.log("Game Is Over");
  }
}
