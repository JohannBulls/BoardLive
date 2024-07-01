import { useState } from 'react';
import Board from './Board';
import ActionFetcher from './ActionFetcher';
import axios from 'axios';

/**
 * Functional component representing the main application.
 * Manages state for actions and color using React hooks.
 */
function App() {
  // State variables using useState hook
  const [clicks, setClicks] = useState([]);
  const [color] = useState(getRandomColor()); // Generates a random color

  /**
   * Handles the clearing of the board by sending a DELETE request to the server.
   * Clears local clicks state after successful deletion.
   */
  const handleClearBoard = () => {
    axios.delete('http://localhost:8080/clicks')
      .then(response => {
        console.log('Board cleared');
        setClicks([]); // Clear local clicks as well
      })
      .catch(error => {
        console.error('Error clearing board:', error);
      });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* Component to fetch actions and update clicks state */}
      <ActionFetcher setActions={setClicks} />
      
      {/* Component to render the board with current clicks and color */}
      <Board clicks={clicks} color={color} />
      
      {/* Button to clear the board */}
      <button 
        onClick={handleClearBoard} 
        style={{ 
          marginTop: '20px', 
          padding: '10px 20px', 
          fontSize: '16px', 
          backgroundColor: '#007BFF', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}
      >
        Clear Board
      </button>
    </div>
  );
}

/**
 * Generates a random hexadecimal color code.
 * 
 * @returns {string} Random color code in hexadecimal format.
 */
const getRandomColor = () => {
  const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return color;
};

export default App;
