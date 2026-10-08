import { useEffect, useRef, useState } from 'react';
import { useTheme } from './ThemeProvider.jsx';

const frequencies = [1.25, 1.5, 2.25, 2.5, 3.25, 3.5, 4.25, 4.5, 5.25];

export default function PatternExplorer() {
  const canvas = useRef(null);
  const [frequency, setFrequency] = useState(2.25);
  const { theme } = useTheme();
  useEffect(() => {
    const context = canvas.current.getContext('2d');
    if (!context) return;
    context.fillStyle = theme === 'dark' ? '#000' : '#fcfcfa';
    context.fillRect(0, 0, 720, 640);
    context.strokeStyle = '#777'; context.lineWidth = 0.8;
    context.beginPath();
    for (let i = 0; i <= 12000; i++) {
      const time = i / 12000 * Math.PI * 20;
      const x = 360 + Math.sin(frequency * time + Math.PI / 2) * 265;
      const y = 320 + Math.sin(3 * time) * 245;
      if (i === 0) context.moveTo(x, y); else context.lineTo(x, y);
    }
    context.stroke();
  }, [frequency, theme]);
  function newPattern() {
    const choices = frequencies.filter(value => value !== frequency);
    setFrequency(choices[Math.floor(Math.random() * choices.length)]);
  }
  return <div className="experiment">
    <canvas id="pattern" ref={canvas} width={720} height={640} role="img" aria-label="A Lissajous curve generated from two sine waves. Change the frequency to explore different patterns.">A mathematical curve formed by two sine waves.</canvas>
    <div className="experiment-controls">
      <label htmlFor="ratio">Frequency <input id="ratio" type="range" min="1" max="6" step="0.25" value={frequency} onChange={event => setFrequency(Number(event.target.value))} /><output id="ratio-value" htmlFor="ratio">{frequency.toFixed(2)}</output></label>
      <button type="button" onClick={newPattern}>New pattern</button>
    </div>
  </div>;
}
