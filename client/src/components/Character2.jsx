import React from 'react';
import boyleft from '../assets/boyleft.png'; // Adjust path as needed

function Character2({ activeCharacter, showBubble, currentMessageIndex, messages }) {
  const styling = {
    position: 'relative',
    width: '230px',
    height: '230px',
    marginTop: '300px',
    marginLeft:'200px'
  };

  return (
    <div style={styling}>
            {activeCharacter === 2 && showBubble && (
        <div className="speech-bubble character2" style={{marginTop:'50px',width:'130px'}}>
          <h3>{messages[currentMessageIndex].text}</h3>
          <h3>{messages[currentMessageIndex].translation}</h3>
        </div>
      )}
      <img src={boyleft} alt="Character 2" style={{ width: '600px', height: '600px',marginRight:'500px' }} />
    </div>
  );
}

export default Character2;