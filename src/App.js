import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';
import conversionData from '../src/lib/conversion.json';

function App() {
  const [unitFrom, setUnitFrom] = useState('');
  const [unitTo, setUnitTo] = useState('');
  const [error, setError] = useState('');

  const conversionHandler = (value, fromUnit, toUnit, category) => {
    try {
      if (isNaN(value)) {
        throw new Error('Input value is not a number');
      }

      const fromFactor = conversionData[category][fromUnit];
      const toFactor = conversionData[category][toUnit];

      if (fromFactor === undefined || toFactor === undefined) {
        throw new Error('Invalid unit conversion');
      }

      const convertedValue = (value * fromFactor) / toFactor;
      return convertedValue;
    } catch (err) {
      setError(err.message);
      return NaN;
    }
  };

  const handleUnitFromChange = (value, fromUnit, toUnit, category) => {
    setError(''); // Reset error message

    const convertedValue = conversionHandler(value, fromUnit, toUnit, category);

    if (!isNaN(convertedValue)) {
      setUnitFrom(value);
      setUnitTo(convertedValue);
    }
  };

  return (
    <div className="App">
      <Header />
      <Section
        unitFrom={unitFrom}
        unitTo={unitTo}
        onUnitFromChange={handleUnitFromChange}
        error={error}
      />
      <Footer />
    </div>
  );
}

export default App;
