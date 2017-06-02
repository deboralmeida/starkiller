// ENEMIES
var user = document.querySelectorAll('#user1, #user2, #user3, #user4, #user5, #user6, #user7');
var bullet = document.createElement("div");

// description
var description = document.getElementById('description');
// change description text to 'SHOOT'
description.innerHTML = '<p>SHOOT</p>';
var userID;
var descriptionChange;

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
        document.getElementById('user6').classList.remove('selected');
        document.getElementById('user7').classList.remove('selected');
        
        // add class .selected
        this.classList.add('selected');
        
        // add class .bullet
        bullet.classList.add('bullet'); 
        
        // append on same position
        this.appendChild(bullet);
        
  };
    
    
    // SHOOT ON CLICK
    user[i].onclick = function() { 
        
        var self = this;
        
        // add class .shoot
        bullet.classList.add('shoot');
        
        // after animation time (500ms)
        clearBullet = setTimeout( function() { 
            
                        // remove child
                        self.removeChild(bullet);

                        // remove class .shoot
                        bullet.classList.remove('shoot');
            
                    }, 500);
        
        // after animation time (500ms)
        spawnBullet = setTimeout( function() {
            
                        // append child
                        self.appendChild(bullet);
            
                    }, 500);
        
        
        // CHANGE DESCRIPTION
        var userID = this.id;
        
        // after animation time (500ms) / when enemy is shot
        descriptionChange = setTimeout( function(){ 
            
            // description depends on userID
            if (userID == 'user1'){
                
                // BRUTE
                description.innerHTML = '<p class="title">Brute</p><br><p>Has more life</p><p>Goes after you</p><p>Doesnt shoot</p>';
            
            } else if (userID == 'user2'){
                
                // BUG
                description.innerHTML = '<p class="title">Bug</p><br><p>Has low life</p><p>Weak shots</p>';

            } else if (userID == 'user3'){
                
                // HUNTER
                description.innerHTML = '<p class="title">Hunter</p><br><p>Shoots homing missiles</p>';

            } else if (userID == 'user4'){
                
                // INVADER
                description.innerHTML = '<p class="title">Invader</p><br><p>Doesnt hurt you</p><p>Gives you extra points</p>';

            } else if (userID == 'user5'){
                
                // MINE
                description.innerHTML = '<p class="title">Mine</p><br><p>When killed shoots in</p> <p>every direction</p>';

            } else if (userID == 'user6'){
                
                // SNIPER
                description.innerHTML = '<p class="title">Sniper</p><br><p>Faster shots</p><p>Only shoots when</p><p>aiming at you</p>';

            } else if (userID == 'user7'){
                
                // VIPER
                description.innerHTML = '<p class="title">Viper</p><br><p>Shoots 3 bullets</p>';
            }
            
        }, 500);
        
  };
    
    
    // CLEAR ON MOUSEOUT
    user[i].onmouseout = function() {
        
        // remove child from position
        this.removeChild(bullet);
        
        // remove class .shoot
        bullet.classList.remove('shoot');
        
        // stop shooting setTimeout actions
        clearTimeout(clearBullet);
        clearTimeout(spawnBullet);
        
    }
    
}