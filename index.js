var homeScore = document.getElementById("homeScore"); //the score of home
var guestScore = document.getElementById("guestScore"); // the score of away
var homeNumScore = 0;  // score count
var guestNumScore = 0; // score count


var titleChildrenButtons = document.getElementsByTagName("BUTTON");

/// home score
    
    for (let i = 0; i < titleChildrenButtons.length; i++) {
    titleChildrenButtons[i].addEventListener('click', function() {
        if (i === 0) {
            homeNumScore += 1;
        } else if (i === 1) {  
            homeNumScore += 2;
        } else if (i === 2) {  
            homeNumScore += 3;
        }
        return homeScore.innerText = homeNumScore;
    });
}

/// away score

    for (let i = 0; i < titleChildrenButtons.length; i++) {
    titleChildrenButtons[i].addEventListener('click', function() {
        if (i === 3) {
            guestNumScore += 1;
        } else if (i === 4) {  
            guestNumScore  += 2;
        } else if (i === 5) {  
            guestNumScore  += 3;
        }
        return guestScore.innerText = guestNumScore;
    });
}