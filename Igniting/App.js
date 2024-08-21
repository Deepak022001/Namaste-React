const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child1' }, [
    React.createElement('h1', {}, 'I am an h1 tag'),
    React.createElement('h2', {}, 'I am an h2 tag'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'I am another h1 tag'),
    React.createElement('h2', {}, 'I am another h2 tag'),
  ]),
]);

const rootElement = document.getElementById('root');
ReactDOM.render(parent, rootElement);
