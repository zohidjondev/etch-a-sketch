document.addEventListener("DOMContentLoaded", (event) => {
  const gridContainer = document.querySelector(".grid-container");
  const setGridSizeButton = document.querySelector("button.set-grid-size");
  const setGridSizeHeightInput = document.querySelector(
    "input.set-grid-height"
  );
  const setGridSizeWidthInput = document.querySelector("input.set-grid-width");
  const clearTheGridButton = document.querySelector("button.clear-the-grid");

  const MAX_GRID_SIZE = 100;
  const GRID_SIZES = {
    LARGE: 30,
    MEDIUM: 20,
    SMALL: 10,
    EXTRA_SMALL: 6,
  };

  function showNotification(message, duration = 3000) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.style.display = "block";

    setTimeout(() => {
      notification.style.display = "none";
    }, duration);
  }

  function createGridSquare(size) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add(`grid-square-${size}`);
    gridSquare.addEventListener("mouseout", () => {
      gridSquare.classList.add("hovered");
    });

    return gridSquare;
  }

  setGridSizeButton.addEventListener("click", () => {
    const gridHeight = parseInt(setGridSizeHeightInput.value, 10);
    const gridWidth = parseInt(setGridSizeWidthInput.value, 10);

    if (
      isNaN(gridHeight) ||
      isNaN(gridWidth) ||
      gridHeight <= 0 ||
      gridWidth <= 0
    ) {
      showNotification(
        "Please enter valid positive numbers for grid size.",
        3000
      );
      return;
    }

    if (gridHeight > MAX_GRID_SIZE || gridWidth > MAX_GRID_SIZE) {
      showNotification("Maximum grid size is 100x100.", 3000);
      return;
    }

    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.lastChild);
    }

    let size;
    if (gridHeight > 99 || gridWidth > 99) {
      size = GRID_SIZES.EXTRA_SMALL;
    } else if (gridHeight > 59 || gridWidth > 59) {
      size = GRID_SIZES.SMALL;
    } else if (gridHeight > 29 || gridWidth > 29) {
      size = GRID_SIZES.MEDIUM;
    } else {
      size = GRID_SIZES.LARGE;
    }

    clearTheGridButton.addEventListener("click", () => {
      while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
      }

      for (let i = 0; i < gridHeight * gridWidth; i++) {
        gridContainer.appendChild(createGridSquare(size));
      }
    });

    

    gridContainer.style.width = `${gridWidth * size}px`;

    for (let i = 0; i < gridHeight * gridWidth; i++) {
      gridContainer.appendChild(createGridSquare(size));
    }

    setGridSizeHeightInput.value = "";
    setGridSizeWidthInput.value = "";
  });
});
