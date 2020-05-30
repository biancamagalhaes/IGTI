window.addEventListener('load', start);

let names = ['João', 'Maria'];
let index = null;

function start() {
  document.querySelector('#inputName').focus();
  form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);

  render();
}

function handleSubmit(event) {
  event.preventDefault();

  const newName = document.querySelector('#inputName');

  if (newName.value !== '') {
    if (index === null) {
      names.push(newName.value);
    } else {
      names[index] = newName.value;
    }
    newName.value = '';
    index = null;
    render();
  }
}

function render() {
  list = document.getElementById('listUl');
  list.innerHTML = '';
  ul = document.createElement('UL');

  names.map(
    (name) => (
      (node = document.createElement('li')),
      (button = document.createElement('button')),
      (textButton = document.createTextNode('X')),
      (span = document.createElement('span')),
      (textNode = document.createTextNode(name)),
      span.appendChild(textNode),
      button.appendChild(textButton),
      (button.value = name),
      button.addEventListener('click', removeElement),
      span.addEventListener('click', editElement),
      node.appendChild(button),
      node.appendChild(span),
      ul.appendChild(node)
    )
  );

  list.appendChild(ul);
}

function removeElement(event) {
  index = names.indexOf(event.srcElement.value);
  names.splice(index, 1);
  render();
}

function editElement(event) {
  input = document.querySelector('#inputName');
  input.value = event.srcElement.textContent;
  index = names.indexOf(event.srcElement.textContent);
  render();
}
