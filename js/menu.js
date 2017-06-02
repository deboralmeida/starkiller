// TOGGLE OPEN/CLOSE MENU
var close = document.getElementById('close');
var menu = document.getElementById('menu');
var sidebar = document.getElementById('sidebar');
var side_border = document.getElementById('side-border');

// CLICK OPEN MENU ICON
menu.addEventListener('click', function() {
    
    //add class .open-sidebar + .border-grow
    // open sidebar animation
    sidebar.classList.add('open-sidebar');
    
    // border animation 
    side_border.classList.add('border-grow');
    
});

// CLICK CLOSE MENU ICON 
close.addEventListener('click', function() {
    
    // remove class .open-sidebar + .border-grow
    // close sidebar animation
    sidebar.classList.remove('open-sidebar');
    
    // border animation
    side_border.classList.remove('border-grow');
    
});


// CURRENT PAGE INDICATOR DISAPPEARS WITH OTHER LINKS HOVER
// SECONDARY LINKS DON'T AFFECT CURRENT PAGE INDICATOR
var link = document.getElementsByTagName('p');
var current = document.getElementById('current');

for (var i=0; i<link.length; i++) {
    
    // MOUSEOVER
    link[i].addEventListener('mouseover', function(){
        
        // IF NOT .current OR .secondary
        if(!this.classList.contains('current') && !this.classList.contains('secondary')){
            
            // remove class .current
            current.classList.remove('current');
            
        }
        
    });
    
    // MOUSEOUT
    link[i].addEventListener('mouseout', function(){
        
        // IF NOT .current OR .secondary
        if(!this.classList.contains('current') && !this.classList.contains('secondary')){
            
            // add class .current
            current.classList.add('current');
        }
        
        
    });
    
};


// OPEN SECONDARY NAV WHEN CLICK INSTRUCTIONS
current.addEventListener('click', function(){
    
    //IF CLOSED
    if(!document.getElementById('secondary-nav').classList.contains('secondary-open')){
        
        //open
        // add class .secondary-open
        document.getElementById('secondary-nav').classList.add('secondary-open');
        
    } else {
        
        //close
        // remove class .secondary-open
        document.getElementById('secondary-nav').classList.remove('secondary-open');
        
    }
    
});