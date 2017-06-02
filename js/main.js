// STARS
document.body.onload = createStars;

function createStars () { 
    
    var star_num = 250;
    
    for(var i=0; i < star_num ; i++){
        
        // generate random positions 
        var randomL = Math.floor(Math.random() * 2000) + 0;
        var randomT = Math.floor(Math.random() * -900) + 1000;
        // creat stars 
        var newDiv = document.createElement("div"); 
        
        // add class
        newDiv.classList.add('star');
        // add id 
        // newDiv.setAttribute('id', 'star');
        // set random positions */
        newDiv.style.left= randomL + 'px';
        newDiv.style.top= randomT + 'px';    
    
        // fall animation
        var falling = ['fall', 'fall2', 'fall3', 0]; 
        var random_class = falling[Math.floor(Math.random() * falling.length)];
        newDiv.classList.add(random_class);
        
        // appear in body
        // if it's not animated
        if(newDiv.classList.contains('0')){
            // append in body (end)
            document.body.appendChild(newDiv);
        } else {
            // append in .space
            document.getElementById('space').appendChild(newDiv);
        };
    
    };

}


// MENU
var close = document.getElementById('close');
var menu = document.getElementById('menu');
var sidebar = document.getElementById('sidebar');

menu.addEventListener('click', function() {
    sidebar.classList.add('open-sidebar');
});

close.addEventListener('click', function() {
    sidebar.classList.remove('open-sidebar');
});



