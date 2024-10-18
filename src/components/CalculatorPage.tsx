import { useEffect } from "react";

const CalculatorPage: React.FC = () => {
  useEffect(() => {
    const container = document.querySelector('.calculatora-container');
    if (!container) return;

    const iframe = document.createElement('iframe');
    iframe.src = '/calculadora/index.html'; // Ajuste o caminho
    iframe.style.width = "100%";
    iframe.style.height = "100vh";
    container.appendChild(iframe);
  }, []);

  return (
    <div className='calculatora-container w-full h-full flex justify-center items-center'>
    </div>
  );
};

export default CalculatorPage;