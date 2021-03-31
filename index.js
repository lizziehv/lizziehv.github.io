const typingSpeed = 50;
const longPause = 250;
const shortPause = 180;
const introText = "Hi! I'm Lizzie. I don't really know what to write here, but I'm really excited for CS52!!";
let textIdx = 0;

function typeIntro() {
    if (textIdx < introText.length){
        document.getElementById("intro-text").innerHTML += introText.charAt(textIdx);
        
        let delay = typingSpeed;

        /* Add delay for punctuation */
        if (introText.charAt(textIdx) == '!' || introText.charAt(textIdx) == '.' ) {
            delay += longPause;
        } 
        else if (introText.charAt(textIdx) == ',') {
            delay += shortPause;
        }
        
        
        textIdx++;
        setTimeout(typeIntro, delay);
    }
}

typeIntro();