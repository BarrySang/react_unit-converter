# React Unit Converter

A simple React application for converting values between common distance and weight units. The app provides a clean, form-based interface and updates conversion results instantly as the user changes the input value or unit selection.

## Overview

This project is a front-end unit conversion app built with React and Bootstrap. It supports two conversion categories:

- Distance: meters, kilometers, centimeters, millimeters, miles, yards, feet, inches
- Weight: kilograms, grams, milligrams, pounds, ounces

The conversion data is centralized in `src/lib/conversion.json`, and the app logic lives in `src/App.js`.

## Features

- Live conversion between units as the user types
- Category switching between distance and weight
- Unit selection for both source and target values
- Validation for invalid numeric input
- Error message display for unsupported or invalid conversion attempts
- Responsive Bootstrap-based layout

## Project Structure

```text
react_unit-converter/
├── public/
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   └── Section.js
│   ├── lib/
│   │   └── conversion.json
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## How It Works

- `src/App.js` manages the conversion state and handles validation.
- `src/lib/conversion.json` contains the base conversion factors used by the app.
- `src/components/Section.js` renders the input form, unit selectors, and result field.
- `src/components/Header.js` and `src/components/Footer.js` provide the page header and footer.

Example conversion logic:

```js
const convertedValue = (value * fromFactor) / toFactor;
```

This calculates the target value using the selected units and the conversion factor from the JSON data source.

## Getting Started

### Prerequisites

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm start
```

This starts the React development server and opens the app in the browser (typically at `http://localhost:3000`).

### Build for production

```bash
npm run build
```

### Run tests

```bash
npm test
```

## Usage

1. Choose a category: Distance or Weight.
2. Select the source unit and target unit.
3. Enter a numeric value in the source field.
4. The converted value is displayed automatically in the target field.
5. If the input is invalid, an error message is shown.

## Notes

This project was created with Create React App and uses Bootstrap for styling. The current implementation is intentionally lightweight and focused on straightforward unit conversion without external APIs or persistence.
