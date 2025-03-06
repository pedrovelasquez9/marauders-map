const MARAUDERS_PHRASE = "Juro solemnemente que quiero aprender a programar";

function openMap() {
    document.querySelector(".map-base").classList.toggle("active");
}

function speechRecognition() {
    const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = "es-ES";
    recognition.start();
    recognition.continuous = true;
    recognition.onresult = (event) => {
        const detectedSpeech = event?.results[0][0]?.transcript;
        console.log(detectedSpeech);
        if (detectedSpeech.includes(MARAUDERS_PHRASE)) {
            openMap();
            speakToUser();
        }
    }
};

function speakToUser() {
    const synth = window.speechSynthesis;
    console.log(synth.getVoices());
    const utterance = new SpeechSynthesisUtterance();
    utterance.lang = "es-ES";
    utterance.text = "Eres un mago Harry!";
    synth.speak(utterance);
}

speechRecognition();