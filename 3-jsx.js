const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const InputItem = document.querySelector('[data-js="item"]');
  const item = <li>{InputItem.value}</li>;
  const rootElement = document.querySelector(
    '[data-js="how-to-add-elements-to-the-dom"]'
  );
  const root = ReactDOM.createRoot(rootElement);
  root.render(item);
});
