// Heapify a subtree rooted at given index
async function heapify(ele, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && parseInt(ele[left].style.height) > parseInt(ele[largest].style.height)) {
    largest = left;
  }

  if (right < n && parseInt(ele[right].style.height) > parseInt(ele[largest].style.height)) {
    largest = right;
  }

  if (largest !== i) {
    ele[i].style.background = 'blue';
    ele[largest].style.background = 'blue';

    await waitforme(delay);

    swap(ele[i], ele[largest]);

    ele[i].style.background = 'cyan';
    ele[largest].style.background = 'cyan';

    await heapify(ele, n, largest);
  }
}

// Main function to perform heap sort
async function heapSort() {
  const ele = document.querySelectorAll(".bar");
  const n = ele.length;

  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(ele, n, i);
  }

  // Heap sort
  for (let i = n - 1; i > 0; i--) {
    ele[i].style.background = 'green';
    ele[0].style.background = 'green';

    await waitforme(delay);

    swap(ele[i], ele[0]);

    ele[i].style.background = 'cyan';
    ele[0].style.background = 'cyan';

    await heapify(ele, i, 0);
    ele[i].style.background = 'green';
  }
  ele[0].style.background = 'green';
}

// Add an event listener for the Heap Sort button
const heapSortBtn = document.querySelector(".heapSort");
heapSortBtn.addEventListener('click', async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await heapSort();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
