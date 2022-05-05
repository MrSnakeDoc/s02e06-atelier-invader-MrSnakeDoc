(function play() {
  class GridSize {
    constructor(id, parentId, placeHolder, radius, value) {
      if (!radius) radius = "0px";
      this.parent = document.getElementById(parentId);
      this._element = document.createElement("input");
      this._element.setAttribute("id", id);
      this._element.setAttribute("type", "number");
      this._element.setAttribute("placeholder", placeHolder);
      this._element.setAttribute("value", value);
      this._element.style.border = "1px solid black";
      this._element.style.marginRight = "0.0005rem";
      this._element.style.height = "2.5rem";
      this._element.style.width = "10rem";
      this._element.style.borderRadius = radius;
      this.parent.append(this._element);
    }
  }
  class ButtonSize {
    constructor(id, parentId, radius) {
      this.parent = document.getElementById(parentId);
      this._element = document.createElement("button");
      this._element.setAttribute("id", id);
      this._element.setAttribute("type", "submit");
      this._element.style.border = "1px solid black";
      this._element.style.height = "2.9rem";
      this._element.style.width = "4rem";
      this._element.style.borderRadius = radius;
      this._element.style.color = "white";
      this._element.style.backgroundColor = "#9B68E4";
      this._element.innerHTML = "Valider";
      this.parent.append(this._element);
    }
  }
  class Grid {
    constructor(parentId, size, pix) {
      this.parent = document.getElementById(parentId);
      this._element = document.createElement("div");
      this._element.setAttribute("id", "container");
      this._element.style.maxWidth = `${size * (pix + 10)}px`;
      this._element.style.height = `${size * (pix + 10)}px`;
      this._element.style.display = "flex";
      this._element.style.flexWrap = "wrap";
      this._element.style.backgroundColor = "white";
      this._element.style.justifyContent = "center";
      this._element.style.alignItems = "center";
      this.parent.append(this._element);
      this.ref = document.getElementById("container");
    }
  }
  class Pixel {
    static currentPixel = "";
    constructor(parentId, size, j) {
      this.parent = parentId;
      this._element = document.createElement("div");
      this._element.setAttribute("id", `pixel${j}`);
      this._element.setAttribute("class", "pixel");
      this._element.style.minWidth = `${size}px`;
      this._element.style.height = `${size}px`;
      this._element.style.backgroundColor = "#D2DAE2";
      this._element.style.border = "5px solid grey";
      this.parent.append(this._element);
    }
  }
  class ColorsGrid {
    constructor(parentId) {
      this.parent = document.getElementById(parentId);
      this._element = document.createElement("div");
      this._element.setAttribute("id", "colorGrid");
      this._element.style.width = `25rem`;
      this._element.style.height = `2.5rem`;
      this._element.style.display = "flex";
      this._element.style.position = "absolute";
      this._element.style.right = "1rem";
      this._element.style.bottom = "1rem";
      this._element.style.padding = "0.3rem 0rem";
      this._element.style.backgroundColor = "#00000070";
      this._element.style.justifyContent = "center";
      this._element.style.alignItems = "center";
      this.parent.append(this._element);
      this.ref = document.getElementById("colorGrid");
    }
  }
  class Colors {
    constructor(parentId, color) {
      this.parent = parentId;
      this._element = document.createElement("div");
      this._element.setAttribute("class", "color");
      this._element.setAttribute("id", color);
      this._element.style.width = `1.5rem`;
      this._element.style.height = `1.5rem`;
      this._element.style.marginRight = "0.30rem";
      this._element.style.justifyContent = "center";
      this._element.style.alignItems = "flex-end";
      this._element.style.backgroundColor = color;
      this._element.style.border = "5px solid white";
      this._element.style.borderRadius = "50%";
      this.parent.append(this._element);
    }
  }
  const colorsArray = [
    "white",
    "black",
    "red",
    "orange",
    "green",
    "blue",
    "pink",
    "purple",
    "yellow",
    "#D2DAE2",
  ];
  let gridSize = new GridSize(
    "gridSize",
    "form",
    "Taille de la grille",
    "10px 0px 0px 10px"
  );
  let chosenColor;
  let pixelSize = new GridSize("pixelSize", "form", "Taille des pixels", "0px");
  let buttonSize = new ButtonSize("submit", "form", "0px 10px  10px 0px");
  let colorsGrid = new ColorsGrid("body");
  for (let i = 0; i < colorsArray.length; i++) {
    let colors = new Colors(colorsGrid.ref, colorsArray[i]);
    let elements = document.getElementsByClassName(`color`);
    elements[i].addEventListener("click", function (event) {
      chosenColor = event.target.id;
    });
  }
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let grid = parseInt(document.getElementById("gridSize").value);
    if (!grid) grid = 10;
    let pixel = parseInt(document.getElementById("pixelSize").value);
    if (!pixel) pixel = 50;
    invader.innerText = "";
    let gridDraw = new Grid("invader", grid, pixel);
    console.log(gridDraw.ref);
    for (let i = 0; i < grid * grid; i++) {
      let pixelDraw = new Pixel(gridDraw.ref, pixel, i);
      let elements = document.getElementsByClassName(`pixel`);
      elements[i].addEventListener("click", function (event) {
        let pixelTarget = event.target;
        if (chosenColor === undefined) chosenColor = "#D2DAE2";
        pixelTarget.style.backgroundColor = chosenColor;
      });
    }
  });
})();
