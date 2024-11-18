const textTypingEffect = () => {

    document.querySelector('.hero').classList.add('shown');
    document.querySelector('#model-container').classList.add('shown');

    let arg = document.querySelector('.greeting-line-3').innerHTML;
    document.querySelector('.greeting-line-3').innerHTML = '';
    
    setTimeout(() => {
        let letterTimeout = 80;
        let text = '';
        let i = 1;
    
        function typeText() {
            if (i <= 11) {  
                text = arg.substr(0, i);
                text = text.replace('e', 'E');
                text = text.replace('t', 'R');
                document.querySelector('.greeting-line-3').innerHTML = text + ")";
                i++;
                setTimeout(typeText, letterTimeout);
            } else {
                setTimeout(removeText, 1000); 
            }
        }
    
        function removeText() {
            let j = text.length;
            function erase() {
                if (j > 3) {  
                    text = text.slice(0, -1);
                    document.querySelector('.greeting-line-3').innerHTML = text + ")";
                    j--;
                    setTimeout(erase, 40);
                } else {
                    setTimeout(finalText, 1000); 
                }
            }
            erase();
        }
    
        function finalText() {
            let k = 7;
            function addFinalText() {
                if (k <= arg.length - 1) {
                    text = arg.substr(0, k);
                    document.querySelector('.greeting-line-3').innerHTML = text + ")";
                    k++;
                    setTimeout(addFinalText, letterTimeout);
                }
            }
            addFinalText();
        }
    
        typeText();

    }, 1000);

};

export default textTypingEffect;