//console.log('começa');


window.addEventListener('DOMContentLoaded', function(e) {
    var speakBtn = document.querySelector('#speakBtn');
    var So = navigator.appVersion.indexOf("Linux; Android");
    //alert(So);
    // console.log(So);
    if (window.SpeechRecognition || window.webkitSpeechRecognition && So == -1) {
        var spech_api = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new spech_api(); //caniuse.com
        recognition.lang = 'pt-Br';
        speakBtn.addEventListener('click', function(e) {
            recognition.start();

        }, false);
        recognition.addEventListener('result', function(e) {
            // console.log(e);
            //console.log('aki');
            var result = e.results[0][0].transcript;
            // console.log(result + "  (esse retorno esta na linha 14");
            //passa o novo vetor em caixa baixa
            var vetCaixaBaixa = result.toLowerCase();
            //separa o vetor em index
            var novo1 = vetCaixaBaixa.split(" ");

            var novo = novo1;
            // console.log(novo + " (esse retorno está na linha 18");

            //  console.log(novo.find(filt));
            var res = (novo.find(filt));
            // console.log(res + " linha 24 esta aki");
            //var res = (novo.findIndex(filt));


            //funcao de speak resposta----------------------------
            function speak(params) {
                //api de speak fala o que esta na variavel u.text
                var u = new SpeechSynthesisUtterance();
                //console.log("foi");
                u.text = params;
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
                reservada = ["apagar", "lápis", "vermelha", "escrever", "preto", "preta", "vermelho", "vermelha", "amarelo", "amarela", "azul", "paleta"];
                var qtde = reservada.length;
                var elemento = element.toLowerCase();
                for (let i = 0; i < qtde; i++) {
                    if (reservada[i] == elemento) {
                        var res = elemento;
                        return res.toLowerCase();
                    }

                }


            }
            // --------------------função de acionar menu------------
            function action(idHtml, busca) {
                var id = idHtml;
                $(id)[0].click();
                //ipconfig

                speak("Foi escolhida a opção" + busca)
            }
            //----------------------------------
            function color(color, name) {
                var test = document.getElementsByClassName("color-picker")[0]['value'];
                var u = "Foi escolhida a cor" + name;
                var color = String(color);
                var returnSetcolor = "this.value";
                var loko = $(".color-picker").attr("onchange");
                // console.log(loko);
                speak(u);
                if (loko == "setColor(this.value);") {

                    setColor(color);
                    //$(".color-picker").attr({ 'onChange': setColor(color) });
                    //var novoloko = $(".color-picker").get(0).outerHTML;

                    //console.log(novoloko + "   *(esse retorno linha 78 primeiro IF");

                } else {
                    //if (novoloko != "setColor(this.value);") {
                    console.log(novoloko + "  esse retorno na linha 82 ELSE");
                    $(".color-picker").attr({ 'onchange': 'setColor(' + returnSetcolor + ')' });

                }

            }
            //-----------------------------------


            /*
           
            //switch para definir
            */
            // console.log(res + " antes do switch linha 108");

            switch (res) {

                case 'preto':
                    color('#000000', 'preto');

                    break;
                case 'vermelho':
                    color('#ff0000', 'vermelho');

                    break;
                case 'amarelo':
                    color('#ffff00', 'amarelo');
                    break;

                case 'amarela':
                    color('#ffff00', 'amarelo');
                    break;
                case 'azul':
                    color('#0000ff', 'azul');

                    break;

                case 'preta':
                    color('#000000', 'preto');
                    break;

                case 'paleta':
                    action(".cl-input", "paleta de cores");
                    break;

                case 'apagar':
                    action("#delete", "apagar");
                    break;

                case 'escrever':
                    action("#keyboard", "escrever");
                    break;

                case 'lápis':
                    action("#draw", "lápis");

                    break;
                case 'vermelha':
                    color('#ff0000', 'vermelho');

                    break;
                case 'value':

                    break;
                    /* 
                     */
                default:
                    speak("Pode repetir não foi possivel entender");
                    break;
            }
            //--------------------------------------------------
            if (res == 'luz') {
                document.body.classList.toggle('luz-apagada');
                //o toggle é como um interrupitor
            }
        }, false)
    } else {
        alert("Navegador ou Sistema Operacional não suportam comando de voz");
        console.log("Navegador não suporta");
        $("#speakBtn").css("display", "none");
    }
}, false);