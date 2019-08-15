"use strict";

function speak(params) {
    //api de speak fala o que esta na variavel u
    var u = new SpeechSynthesisUtterance();
    u.text = 'ta dando zica , oh ,bicheira' + params;
    u.lang = 'pt-Br';
    u.rate = 1.2;
    u.onend = function(event) {
        alert('Finished in ' + event.elapsedTime + ' seconds.');
    }
    speechSynthesis.speak(u);
}


//----------------fim da speak-------------------------