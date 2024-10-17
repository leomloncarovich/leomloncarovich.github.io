import { useEffect } from 'react';

const CalculatorPage = () => {
  useEffect(() => {
    const container = document.getElementById('calculator-container');
    const existingIframe = container?.querySelector('iframe');
    if (!existingIframe) {
      const iframe = document.createElement('iframe');
      iframe.src = "src/assets/projects/calculator/index.html";
      iframe.style.width = "100%";
      iframe.style.height = "100vh";
      container?.appendChild(iframe);
    }
  }, []);

  return (
    <div id="calculator-container">
    </div>
  );
};

export default CalculatorPage;