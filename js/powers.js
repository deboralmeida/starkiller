// POWER UPS
// id list
var user = document.querySelectorAll('#user1, #user2, #user3, #user4, #user5');

// create divs bullet, spread_left, spread_right and barrier_on
var bullet = document.createElement("div");
var spread_left = document.createElement("div");
var spread_right = document.createElement("div");
var barrier_on = document.createElement("div");
var friend = document.createElement("div");   

var friend_shot;

// check current user id
var userID;

// description
var description = document.getElementById('description');

// setTimeOut
var clearBullet;
var spawnBullet;

for (var i = 0; i < user.length; i++) {
    
    // SELECT POSITION ON MOUSEOVER
    user[i].onmouseover = function() { 
              
        // clear select from all IDs / clear previous .selected
        document.getElementById('user1').classList.remove('selected');
        document.getElementById('user2').classList.remove('selected');
        document.getElementById('user3').classList.remove('selected');
        document.getElementById('user4').classList.remove('selected');
        document.getElementById('user5').classList.remove('selected');
        
        // add class .selected
        this.classList.add('selected');
        
        // add class .bullet
        bullet.classList.add('bullet'); 
        
        // append on same position
        this.appendChild(bullet);
         
        var self = this;
        
        // CHANGE DESCRIPTION
        // CHANGE BULLET TYPE
        var userID = this.id;
        
        if (userID == 'user1'){
                
            // SPREAD
            description.innerHTML = '<p class="title">Spread Shot</p>';    
                
            // LEFT
            // add class .bullet
            spread_left.classList.add('bullet');
            // add class .spread_left
            spread_left.classList.add('spread_left');
            // RIGHT
            // add class .bullet
            spread_right.classList.add('bullet');
            // add class .spread_right
            spread_right.classList.add('spread_right');
            
            // append spread bullets
            this.appendChild(spread_left);
            this.appendChild(spread_right);
                
        } else if (userID == 'user2'){
        
             // MISSILE
            description.innerHTML = '<p class="title">Missile</p>';
            
            // add class .missile_shot / change bullet type
            bullet.classList.add('missile_shot');

        } else if (userID == 'user3'){

            // MACHINE GUN
            description.innerHTML = '<p class="title">Machine Gun</p>';
            
        } else if (userID == 'user4'){
                
            // FRIEND
            description.innerHTML = '<p class="title">Friend</p>';
            

            // add class .friend_anim / animation
            friend.classList.add('friend_anim');
            // append friend
            this.appendChild(friend);
            
            // create bullets
                    friend_shot = document.createElement("div");
                    // add class .bullet
                    friend_shot.classList.add('bullet');
                    // add class .friend_shot / change FRIEND's bullet color
                    friend_shot.classList.add('friend_shot')
                    // append
                    friend.appendChild(friend_shot);
                   
            
            // FRIEND'S BULLETS
            /*idk = setInterval( function(){
             
                    //


                }, 340);*/
            
            // FRIEND'S SHOOTING ANIMATION
            /*cenas = setInterval( function(){
                
                    // add class .shoot
                    friend_shot.classList.add('machine_gun');
 
                }, 350);*/
            
            
        } else if (userID == 'user5'){
                
            // BARrIER
            description.innerHTML = '<p class="title">Barrier</p>';
            
            // add class .barrier_on
            barrier_on.classList.add('barrier_on');
            // append barrier_on
            this.appendChild(barrier_on);
            // change background size - make user's ship smaller so it fits inside barrier
            this.style.backgroundSize = "45%";

        }
        
    };
    
    
    // SHOOT ON CLICK
    user[i].onclick = function() { 
        
        var self = this;
        
        userID = this.id;
        
        // add class .shoot
        if(userID == 'user3'){
            bullet.classList.add('machine_gun');
        } else {
            bullet.classList.add('shoot');
        }
        
        if (userID == 'user1'){
            
            spread_left.classList.add('shoot_left');
            spread_right.classList.add('shoot_right');
            
        }
        
        /*if (userID == 'user3'){
            
           idk = setInterval( function(){
             
                    machine_gun = document.createElement("div");

                    machine_gun.classList.add('bullet');

                    self.appendChild(machine_gun);
                
                }, 240);
            
            
           cenas = setInterval( function(){
                
                    machine_gun.classList.add('shoot');
 
                }, 250);
            
        }*/
        
        // after animation time (500ms)
        clearBullet = setTimeout( function() { 
                            
                // remove child
                self.removeChild(bullet);
                // remove class .shoot
                bullet.classList.remove('shoot');
            
                if (userID == 'user1'){
                
                    self.removeChild(spread_left);
                    spread_left.classList.remove('shoot_left');

                    self.removeChild(spread_right);
                    spread_right.classList.remove('shoot_right');
                    
                }
            
                /*if (userID == 'user3'){
                            
                    self.removeChild(machine_gun);
                    machine_gun.classList.remove('bullet');
                    machine_gun.classList.remove('shoot');
                            
                }*/
        
            }, 500);
        
        // after animation time (500ms)
        spawnBullet = setTimeout( function() {
            
                        // append child bullet
                        self.appendChild(bullet);
            
                        if (userID == 'user1'){
                            self.appendChild(spread_left);
                            self.appendChild(spread_right);
                        }
            
                    }, 500);
    };

      
    // CLEAR ON MOUSEOUT
    user[i].onmouseout = function() {
        
        userID = this.id;
        
        /*clearInterval(idk);
        clearInterval(cenas);*/
        clearTimeout(spawnBullet);
        clearTimeout(clearBullet);
        
        if (userID == 'user1'){
            
            this.removeChild(spread_left);
            this.removeChild(spread_right);
            spread_left.classList.remove('shoot_left');
            spread_right.classList.remove('shoot_right');
            
        } else if (userID == 'user2'){
            
            bullet.classList.remove('missile_shot');
            
        } else if (userID == 'user3'){
            
            //this.removeChild(machine_gun);
            
            bullet.classList.remove('machine_gun');
            //machine_gun.classList.remove('bullet');
            
        } else if (userID == 'user4'){
            
            this.removeChild(friend);
            friend.classList.remove('friend_anim');
            
            this.removeChild(friend_shot);
            friend_shot.classList.remove('bullet');
            
        } else if (userID == 'user5'){
            
            this.style.backgroundSize = 'contain';
            barrier_on.classList.remove('barrier_on');
            
        }
        
        this.removeChild(bullet);  
        bullet.classList.remove('shoot');
                
    };

}