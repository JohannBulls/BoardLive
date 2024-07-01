import React, { useRef, useEffect, useCallback } from 'react';
import p5 from 'p5';
import axios from 'axios';

/**
 * Functional component representing a board drawing area using p5.js.
 * Handles drawing clicks and posting them to a server.
 * 
 * @param {Object} props - Props object containing clicks and color.
 */
function Board({ clicks, color }) {
  const containerRef = useRef(null);
  const p5InstanceRef = useRef(null);

  /**
   * p5.js sketch function defining setup and draw behavior.
   * 
   * @param {p5} p - p5.js instance passed by p5.js library.
   */
  const sketch = useCallback((p) => {
    p.setup = () => {
      p.createCanvas(700, 700);
      p.background(255); // Initialize with white background
    };

    p.draw = () => {
      if (p.mouseIsPressed) {
        const click = { x: p.mouseX, y: p.mouseY, color };
        axios.post('http://localhost:8080/clicks', click)
          .then(response => {
            console.log('click posted:', response.data);
          })
          .catch(error => {
            console.error('Error posting click:', error);
          });
        drawClick(p, click);
      }
    };
  }, [color]);

  /**
   * Draws a click (ellipse) on the board using p5.js functions.
   * 
   * @param {p5} p - p5.js instance passed by p5.js library.
   * @param {Object} click - click object containing coordinates and color.
   */
  const drawClick = (p, click) => {
    p.fill(click.color);
    p.noStroke(); // Disable stroke (border)
    p.ellipse(click.x, click.y, 10, 10);
  };

  /**
   * Effect hook to initialize and cleanup p5.js instance.
   */
  useEffect(() => {
    if (containerRef.current && !p5InstanceRef.current) {
      p5InstanceRef.current = new p5(sketch, containerRef.current);
    }

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null; // Clear the reference
      }
    };
  }, [containerRef, sketch]);

  /**
   * Effect hook to redraw board when clicks array changes.
   */
  useEffect(() => {
    if (p5InstanceRef.current && p5InstanceRef.current.canvas) {
      p5InstanceRef.current.background(255); // Clear canvas with white color
      clicks.forEach(click => drawClick(p5InstanceRef.current, click));
    }
  }, [clicks]);

  return <div ref={containerRef} id="container"></div>;
}

export default Board;
