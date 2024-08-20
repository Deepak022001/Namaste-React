// Create the React element structure
const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I am an h1 tag'),
    React.createElement('h2', {}, 'I am an h2 tag'), // Changed this to h2
  ])
);

// Render the element to the DOM
const root = ReactDOM.createRoot(document.getElementById('root')); // Corrected ReactDOM
root.render(parent);
