const list = document.querySelector(
  '[data-js="how-to-add-elements-to-the-dom"]'
);
const InputItem = document.querySelector('[data-js="item"]');
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const Listitem = document.createElement("li");
  Listitem.textContent = InputItem.value;
  list.append(Listitem);
});
