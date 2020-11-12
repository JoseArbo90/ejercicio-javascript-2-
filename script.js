// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);

function onLoad() {
  addClasses();
  removeElements();
  generateList();
  addDisabled();
}

function addClasses() {
  const elementSelected = document.getElementsByClassName("selected")[0];
  const list = elementSelected.parentNode.parentNode;
  const childrens = [...list.children];
  childrens.forEach((child, index) => {
    targetElement = child.firstChild;
    targetElement.classList.add("element-" + (index + 1));
  });
}

function removeElements() {
  const firstElement = document.getElementById("list1");
  const elementsToRemove = document.querySelectorAll(
    "#list1>li:nth-of-type(even)"
  );
  elementsToRemove.forEach(elemento => firstElement.removeChild(elemento));
}

function generateList() {
  const firstListChilds = [...document.getElementById("list1").children];
  const secondList = document.getElementById("list2");

  firstListChilds.forEach(el => {
    const elhijo = el.firstChild;
    const item = document.createElement("li");
    const button = document.createElement("button");
    const text = document.createTextNode(elhijo.textContent);
    button.className = elhijo.className;
    button.appendChild(text);
    item.appendChild(button);
    secondList.appendChild(item);
  });
}

function addDisabled() {
  const lastButton = document.querySelector("#list2>li:last-of-type>button");
  lastButton.disabled = true;
}