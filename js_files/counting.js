async function countingSort() {
  const ele = document.querySelectorAll(".bar");
  const n = ele.length;

  // Find the maximum and minimum values in the array
  let max = parseInt(ele[0].style.height);
  let min = parseInt(ele[0].style.height);
  for (let i = 1; i < n; i++) {
    let height = parseInt(ele[i].style.height);
    if (height > max) {
      max = height;
    }
    if (height < min) {
      min = height;
    }
  }

  // Create a count array to store the count of each height
  const count = Array(max - min + 1).fill(0);

  // Count the occurrences of each height in the array
  for (let i = 0; i < n; i++) {
    count[parseInt(ele[i].style.height) - min]++;
  }

  // Calculate the cumulative count
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Create a temporary array to store the sorted elements
  const temp = new Array(n);

  // Build the sorted array
  for (let i = n - 1; i >= 0; i--) {
    ele[i].style.background = 'blue';
    await waitforme(delay);

    const height = parseInt(ele[i].style.height);
    const index = count[height - min] - 1;
    temp[index] = height;
    count[height - min]--;

    ele[i].style.background = 'cyan';
  }

  // Copy the sorted elements back to the original array
  for (let i = 0; i < n; i++) {
    ele[i].style.height = `${temp[i]}px`;
    await waitforme(delay);
  }
}

// Add an event listener for the Counting Sort button
const countingSortBtn = document.querySelector(".countingSort");
countingSortBtn.addEventListener('click', async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await countingSort();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
