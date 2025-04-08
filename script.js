function submitClothes() {
    const clothInput = document.getElementById('cloth').value.trim();
    const status = document.getElementById('status');
    if (clothInput) {
      status.textContent = `Processing: ${clothInput}`;
    } else {
      status.textContent = 'Please enter some clothes to process.';
    }
  }
