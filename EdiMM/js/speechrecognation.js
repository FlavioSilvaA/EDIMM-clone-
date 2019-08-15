//console.log('começa');
window.addEventListener('DOMContentLoaded', function(e) {
    var speakBtn = document.querySelector('#speakBtn');
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        var spech_api = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new spech_api(); //caniuse.com
        speakBtn.addEventListener('click', function(e) {
            recognition.start();
        }, false);
        recognition.addEventListener('result', function(e) {
            console.log(e);
            //console.log('aki');
            var result = e.results[0][0].transcript;
            console.log(result);
            var novo1 = result.split(" "); //separa o vetor em index
            //passa o novo vetor em caixa baixa
            var novo = novo1;
            console.log(novo);

            //  console.log(novo.find(filt));
            var res = (novo.find(filt));
            //var res = (novo.findIndex(filt));


            //funcao de speak resposta----------------------------
            function speak(params) {
                //api de speak fala o que esta na variavel u
                var u = new SpeechSynthesisUtterance();
                //console.log("foi");
                u.text = 'Voçê escolheu a cor ' + params;
                u.lang = 'pt-Br';
                u.rate = 1.2;
                // u.onend = function(event) {
                //    alert('Finished in ' + event.elapsedTime + ' seconds.');
                //}
                return speechSynthesis.speak(u);
            }

            //funcao de speak acaba aki-----------------


            function filt(element) {
                var reservada = [];
                reservada = ["luz", "preto", "preta", "vermelho", "vermelha", "amarelo", "amarela", "azul", "paleta"];
                var qtde = reservada.length;
                var elemento = element.toLowerCase();
                for (let i = 0; i < qtde; i++) {
                    if (reservada[i] == elemento) {
                        var res = elemento;
                        return res;
                    }

                }


            }
            //----------------------------------
            function color(color, name) {
                var test = document.getElementsByClassName("color-picker")[0]['value'];
                var u = name;
                var color = String(color);
                var returnSetcolor = "this.value";
                var loko = $(".color-picker").attr("onchange");
                console.log(loko);
                speak(u);
                if (loko == "setColor(this.value);") {
                    console.log("primeiro");

                    $(".color-picker").attr({ 'onChange': setColor(color) });
                    var novoloko = $(".color-picker").get(0).outerHTML;

                    console.log(novoloko + "   primeiro");

                } else {
                    //if (novoloko != "setColor(this.value);") {
                    console.log(novoloko + "getisssssssso");
                    $(".color-picker").attr({ 'onchange': 'setColor(' + returnSetcolor + ')' });

                }

                RGBColor('blue');

                //var test = document.getElementsByClassName("color-picker");
                // var test = $(".color-picker").find("input");
                console.log(test);
                console.log('cor azullll');
            }



            //-----------------------------------
            var teste1 = document.cookie;
            var teste = document.getElementsByClassName("color-picker");
            console.log(teste);
            //switch para definir
            console.log(res);
            switch (res.toLowerCase()) {
                case 'luz':
                    console.log("Foi inte ate aki!");
                    speak('Foi inte ate aki!');
                    break;

                case 'preto':
                    color('#000000', 'preto');


                    break;
                case 'vermelho':
                    color('#ff0000', 'vermelho');

                    break;
                case 'amarelo':

                    color('#ffff00', 'amarelo');
                    break;
                case 'azul':
                    color('#0000ff', 'azul');

                    break;
                case 'paleta':

                    break;

                case 'preta':
                    color('#000000', 'preto');
                    break;
                    /*
                case value:

                    break;
                case value:

                    break;
                case value:

                    break;
                case value:

                    break;
*/
                default:
                    break;
            }
            //--------------------------------------------------
            if (res == 'luz') {
                document.body.classList.toggle('luz-apagada');
                //o toggle é como um interrupitor
            }
        }, false)
    } else {
        console.log("Navegador não suporta");
    }
}, false);