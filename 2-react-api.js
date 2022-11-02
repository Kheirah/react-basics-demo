const InputItem = document.querySelector('[data-js="item"]');
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const rootElement = document.querySelector(
    '[data-js="how-to-add-elements-to-the-dom"]'
  );
  const item = React.createElement("li", null, InputItem.value);
  const root = ReactDOM.createRoot(rootElement);
  root.render(item);
});