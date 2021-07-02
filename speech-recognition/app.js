const btn = document.querySelector('.talk')
const content = document.querySelector('.content')
const myText = ['i love you',
'im good',
'im hungry'
]
const Speech = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new Speech()

recognition.onstart = function(){
 console.log('voice is activated, recording voice..')
}

recognition.onresult = function(e){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
content.textContent = transcript
computerSpeak(transcript)
}

btn.addEventListener('click', (e)=>{
    recognition.start()

})


const computerSpeak = function(message){
    const speech = new SpeechSynthesisUtterance()

speech.text = 'i dont know what you say';

    if(message.toLowerCase().includes('hello')){
        const customText = myText[Math.floor(Math.random() * myText.length)]
        speech.text = customText

    }

    speech.pitch = 1
    speech.rate = 1  
    speech.volume = 1

    window.speechSynthesis.speak(speech)
}