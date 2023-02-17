let addBtn = document.getElementById("add-btn");
let removeBtn = document.getElementById("remove-btn");
let squareCont = document.querySelector(".squares-container");
let input = document.querySelector("#input");

//note ===square

addBtn.addEventListener("click", () => {
  const square = document.createElement("textarea");

  square.innerHTML = input.value;
  input.value = "";
  squareCont.append(square);
  square.classList.add("square");
  square.ondblclick = () => {
    square.classList.toggle("checked");
  };

  removeBtn.addEventListener("click", () => {
    if (square.classList.contains("checked")) {
      square.remove();
    }
  });
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const square = document.createElement("textarea");

    square.innerHTML = input.value;
    input.value = "";
    squareCont.append(square);
    square.classList.add("square");
    square.ondblclick = () => {
      square.classList.toggle("checked");
    };

    removeBtn.addEventListener("click", () => {
      if (square.classList.contains("checked")) {
        square.remove();
      }
    });
  }
});
