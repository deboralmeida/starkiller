// STARS
document.body.onload = createStars;

function createStars () { 
    
    // # of stars created
    var star_num = 250;
    
    for(var i=0; i < star_num ; i++){
    
        // generate random positions 
        var randomL = Math.floor(Math.random() * 2000) + 0;
        var randomT = Math.floor(Math.random() * -900) + 1000;
        
        // create stars 
        var newDiv = document.createElement("div"); 
        
        // add class .star
        newDiv.classList.add('star');
        
        // set random positions
        newDiv.style.left= randomL + 'px';
        newDiv.style.top= randomT + 'px';    
    
        // fall animation
        var falling = ['fall', 'fall2', 'fall3', 0]; 
        var random_class = falling[Math.floor(Math.random() * falling.length)];
        newDiv.classList.add(random_class);
        
        // if it's not animated
        if(newDiv.classList.contains('0')){
            // append in body (end)
            document.body.appendChild(newDiv);
        } else {
            // append in div #space
            document.getElementById('space').appendChild(newDiv);
        };
    
    };

}