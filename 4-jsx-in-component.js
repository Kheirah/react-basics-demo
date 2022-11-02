const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const InputItem = document.querySelector('[data-js="item"]');

  function Item({ children }) {
    return <li>{children}</li>;
  }

  function createListItem(input) {
    return <Item>{input}</Item>;
  }

  const rootElement = document.querySelector(
    '[data-js="how-to-add-elements-to-the-dom"]'
  );

  const root = ReactDOM.createRoot(rootElement);
  root.render(createListItem(InputItem.value));
});
