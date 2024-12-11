import React from 'react';
import boyright from "../assets/boyright.png" // Adjust path as needed

function Character1({ activeCharacter, showBubble, currentMessageIndex, messages }) {
  const styling = {
    position: 'relative',
    width: '230px',
    height: '230px',
    marginTop: '370px',
    marginLeft:'250px',

  };

  return (
    <div style={styling}>
        {activeCharacter === 1 && showBubble && (
        <div className="speech-bubble character1" style={{marginLeft:'190px',width:'130px'}}>
          <h3>{messages[currentMessageIndex].text}</h3>
          <h3>{messages[currentMessageIndex].translation}</h3>
        </div>
      )}
      <img src={boyright} alt="Character 1" style={{ width: '450px', height: '450px' }} />
    </div>
  );
}

export default Character1;