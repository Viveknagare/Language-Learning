import { useEffect, useState } from 'react';
import './App.css';
import background from './assets/background.jpg'; // Adjust path as needed
import Character1 from './components/Character1';
import Character2 from './components/Character2';

import hey from './assets/hey.mp3';
import howareyou from './assets/How_are_you.mp3';
import Hello from './assets/Helllo.mp3';
import iamgood from './assets/i_am_good.mp3';
import wun from './assets/whats_your_name.mp3';
import mnix from './assets/my_name_is_xiao_ming.mp3';
import on from './assets/oh_nice.mp3';
import wau from './assets/What_about_you.mp3';
import mnil from './assets/My_name_is_ling.mp3';
import hoau from './assets/How_old_are_you.mp3';
import iam from './assets/i_am_6.mp3';

import wdyl from './assets/wdyl.mp3';
import ilt from './assets/ilt.mp3';
import dhap from './assets/dhap.mp3';
import yihac from './assets/yihac.mp3';
import wciyc from './assets/wciyc.mp3';
import mcw from './assets/mcw.mp3';
import dywtp from './assets/dywtp.mp3';
import ylp from './assets/ylp.mp3';
import wyff from './assets/wyff.mp3';
import ilic from './assets/ilic.mp3';
import wtii from './assets/wtii.mp3';
import i5o from './assets/i5o.mp3';



const messages = [
  { text: "Hey", translation: "Hola", audio: hey },
  { text: "Hello?", translation: "¿Hola?", audio: Hello },
  { text: "How are you?", translation: "¿Cómo estás?", audio: howareyou },
  { text: "I am good", translation: "Estoy bien", audio: iamgood },
  { text: "What's your name", translation: "¿Cómo te llamas?", audio: wun },
  { text: "My name is Xiao Ming", translation: "Me llamo Xiao Ming", audio: mnix },
  { text: "Oh nice", translation: "Oh, qué bien", audio: on },
  { text: "What about you", translation: "¿Y tú?", audio: wau },
  { text: "My name is Ling", translation: "Me llamo Ling", audio: mnil },
  { text: "How old are you", translation: "¿Cuántos años tienes?", audio: hoau },
  { text: "I am 6", translation: "Tengo seis años", audio: iam },
  { text: "What do you like?", translation: "¿Qué te gusta?", audio: wdyl },
  { text: "I like toys", translation: "Me gustan los juguetes", audio: ilt },
  { text: "Do you have any pets?", translation: "¿Tienes mascotas?", audio: dhap },
  { text: "Yes, I have a cat", translation: "Sí, tengo un gato", audio: yihac },
  { text: "What color is your cat?", translation: "¿De qué color es tu gato?", audio: wciyc },
  { text: "My cat is white", translation: "Mi gato es blanco", audio: mcw },
  { text: "Do you want to play?", translation: "¿Quieres jugar?", audio: dywtp },
  { text: "Yes, let's play", translation: "Sí, juguemos", audio: ylp },
  { text: "What's your favorite food?", translation: "¿Cuál es tu comida favorita?", audio: wyff },
  { text: "I love ice cream", translation: "Me encanta el helado", audio: ilic },
  { text: "What time is it?", translation: "¿Qué hora es?", audio: wtii },
  { text: "It’s 5 o'clock", translation: "Son las cinco en punto", audio: i5o },
];


function App() {
  const sectionstyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: '100%',
    width: '100vw',
    height: '100vh',
    display: 'flex',
  };

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [activeCharacter, setActiveCharacter] = useState(1);
  const [showBubble, setShowBubble] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    const playAudio = () => {
      const audio = new Audio(messages[currentMessageIndex].audio);
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    };

    const speakTranslation = () => {
      const message = new SpeechSynthesisUtterance();
      message.lang = 'es-ES'; // Set language to Spanish
      message.text = messages[currentMessageIndex].translation;
      window.speechSynthesis.speak(message);
};

    const showMessage = () => {
      setShowBubble(true);
      playAudio();
      setTimeout(() => {
        speakTranslation();
      }, 2300); // Speak translation 1 second after the English audio starts
    };

    showMessage();

    const interval = setInterval(() => {
      setShowBubble(false);
      setActiveCharacter(prev => (prev === 1 ? 2 : 1));

      setTimeout(() => {
        setCurrentMessageIndex(prevIndex => (prevIndex + 1));
        setShowBubble(true); // Start showing the bubble again for the next message
      }, 1000); // Delay before switching to the next message (match with bubble duration)
    }, 6000); // Total time for displaying message, playing audio, and speaking translation

    return () => clearInterval(interval);
  }, [started, currentMessageIndex]);

  const startConversation = () => {
    setStarted(true);
  };

  return (
    <>
<div style={sectionstyle}>
  <div className={`character1 ${activeCharacter === 1 ? 'active' : ''}`}>
    <Character1
      activeCharacter={activeCharacter}
      showBubble={showBubble}
      currentMessageIndex={currentMessageIndex}
      messages={messages}
    />
  </div>
  
  <div className={`character2 ${activeCharacter === 2 ? 'active' : ''}`}>
    <Character2
      activeCharacter={activeCharacter}
      showBubble={showBubble}
      currentMessageIndex={currentMessageIndex}
      messages={messages}
    />
  </div>
</div>
      <div>
        {!started && (
          <button onClick={startConversation} style={{ position: 'absolute', top: '20px', left: '200px', zIndex: 10, marginLeft: '620px' }}>
            Start Conversation
          </button>
        )}
      </div>
    </>
  );
}

export default App;