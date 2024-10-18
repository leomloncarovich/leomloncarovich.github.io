import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>('0');
  const [pendingOperation, setPendingOperation] = useState<string | null>(null);
  const [pendingValue, setPendingValue] = useState<string | null>(null);
  const [completeOperation, setCompleteOperation] = useState<string>('');

  const keypadNumbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
  const operations: string[] = ['+', '-', '×', '÷'];

  const togglePower = () => {
    setIsOn(!isOn);
    handleClear();
  };

  const handleClick = (value: string) => {
    if (!isOn) return;
    setCurrentValue((prevValue) => {
      if (value === '.' && prevValue.includes('.')) {
        return prevValue;
      }
      if (prevValue === '0' && value !== '.') {
        return value;
      } else {
        return prevValue + value;
      }
    });
    setCompleteOperation((prevOperation) => prevOperation + value);
  };

  const handleOperation = (operation: string) => {
    if (!isOn) return;
    if (pendingOperation) {
      handleCalculate();
    }
    setPendingOperation(operation);
    setPendingValue(currentValue);
    setCompleteOperation(currentValue + ' ' + operation);
    setCurrentValue('0');
  };

  const handleClear = () => {
    setCurrentValue('0');
    setPendingValue(null);
    setPendingOperation(null);
    setCompleteOperation('');
  };

  const handleBackspace = () => {
    if (!isOn) return;
    setCurrentValue((prevValue) =>
      prevValue.length > 1 ? prevValue.slice(0, -1) : '0'
    );
    setCompleteOperation((prevOperation) =>
      prevOperation.length > 1 ? prevOperation.slice(0, -1) : ''
    );
  };

  const handleCalculate = () => {
    if (!isOn || !pendingOperation || !pendingValue) {
      return;
    }
    const num1 = parseFloat(pendingValue);
    const num2 = parseFloat(currentValue);

    let result: number | null = null;

    switch (pendingOperation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '×':
        result = num1 * num2;
        break;
      case '÷':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          setCurrentValue("Error");
          setCompleteOperation("Error");
          setPendingOperation(null);
          setPendingValue(null);
          return;
        }
        break;

      default:
        break;
    }

    const finalResult = result !== null ? result : 0;

    setCompleteOperation(
      `${pendingValue} ${pendingOperation} ${currentValue} = ${result}`
    );
    setCurrentValue(finalResult.toString());
    setPendingValue(null);
    setPendingOperation(null);
  };

  return (
    <main className='flex justify-center items-center'>
      <div className="w-full max-w-md bg-gray-800 p-6 shadow-lg">
        <div className={`w-full min-h-14 border mb-4 text-right py-3 pr-2 text-lg font-mono text-white ${isOn ? 'bg-gray-700' : 'bg-gray-600'}}`}>{isOn ? completeOperation : ''}</div>
        <div className={`w-full h-14 border mb-4 text-right py-3 pr-2 text-2xl font-mono text-white ${isOn ? 'bg-gray-700' : 'bg-gray-600'}`}>{isOn ? currentValue : 'OFF'}</div>
        <div className="grid grid-cols-4 gap-4">
          <button className={`py-2 col-span-2 font-bold rounded ${isOn ? 'bg-green-600' : 'bg-red-500'}`} onClick={togglePower}>On/Off</button>
          <button className='bg-red-500 text-white font-bold py-2 rounded' onClick={handleClear} disabled={!isOn}>AC</button>
          <button className='bg-yellow-500 text-white font-bold py-2 rounded' onClick={handleBackspace} disabled={!isOn}>C</button>       
          {operations.map((operation) => (
            <button className='bg-blue-500 text-white font-bold py-2 rounded' key={operation} onClick={() => handleOperation(operation)} disabled={!isOn}>
              {operation}
            </button>
          ))}
          {keypadNumbers.map((num) => (
            <button className='bg-gray-500 text-white font-bold py-2 rounded' key={num} onClick={() => handleClick(num)} disabled={!isOn}>
              {num}
            </button>
          ))}
          <button className='bg-green-600 text-white font-bold py-2 rounded' onClick={handleCalculate} disabled={!isOn}>=</button> 
        </div>
      </div>
    </main>
  );
};

export default Calculator;