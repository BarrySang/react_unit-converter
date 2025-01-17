import React, { useState } from 'react';

function Section({ unitFrom, unitTo, onUnitFromChange, error }) {
  const [selectedFromUnit, setSelectedFromUnit] = useState('m');
  const [selectedToUnit, setSelectedToUnit] = useState('km');
  const [category, setCategory] = useState('distance');

  const handleFromUnitChange = (e) => {
    const fromUnit = e.target.value;
    setSelectedFromUnit(fromUnit);
    onUnitFromChange(unitFrom, fromUnit, selectedToUnit, category);
  };

  const handleToUnitChange = (e) => {
    const toUnit = e.target.value;
    setSelectedToUnit(toUnit);
    onUnitFromChange(unitFrom, selectedFromUnit, toUnit, category);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    onUnitFromChange(unitFrom, selectedFromUnit, selectedToUnit, selectedCategory);
  };

  const handleValueChange = (e) => {
    const value = e.target.value;
    onUnitFromChange(value, selectedFromUnit, selectedToUnit, category);
  };

  return (
    <div className="mt-3">
      <div className="form-group">
        <div className="input-group mb-2">
          <select className="form-control" value={category} onChange={handleCategoryChange}>
            <option value="distance">Distance</option>
            <option value="weight">Weight</option>
          </select>
        </div>
        <div className="input-group mb-2">
          <select className="form-control" value={selectedFromUnit} onChange={handleFromUnitChange}>
            <option value="m">Meter</option>
            <option value="km">Kilometer</option>
            <option value="cm">Centimeter</option>
            <option value="mm">Millimeter</option>
            <option value="mi">Mile</option>
            <option value="yd">Yard</option>
            <option value="ft">Foot</option>
            <option value="in">Inch</option>
            <option value="kg">Kilogram</option>
            <option value="g">Gram</option>
            <option value="mg">Milligram</option>
            <option value="lb">Pound</option>
            <option value="oz">Ounce</option>
          </select>
          <input
            type="text"
            className="form-control"
            name="unit-from"
            placeholder="convert from"
            value={unitFrom}
            onChange={handleValueChange}
          />
        </div>
        <div className="input-group mb-2">
          <select className="form-control" value={selectedToUnit} onChange={handleToUnitChange}>
            <option value="m">Meter</option>
            <option value="km">Kilometer</option>
            <option value="cm">Centimeter</option>
            <option value="mm">Millimeter</option>
            <option value="mi">Mile</option>
            <option value="yd">Yard</option>
            <option value="ft">Foot</option>
            <option value="in">Inch</option>
            <option value="kg">Kilogram</option>
            <option value="g">Gram</option>
            <option value="mg">Milligram</option>
            <option value="lb">Pound</option>
            <option value="oz">Ounce</option>
          </select>
          <input
            type="text"
            className="form-control"
            name="unit-to"
            placeholder="convert to"
            value={unitTo}
            readOnly
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
}

export default Section;
