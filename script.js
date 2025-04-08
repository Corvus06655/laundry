function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        showMainContent(`Lat: ${position.coords.latitude.toFixed(2)}, Lon: ${position.coords.longitude.toFixed(2)}`);
      },
      () => {
        alert("Location access denied. Please enter manually.");
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function enterManualLocation() {
  const location = document.getElementById("manualLocation").value;
  if (location) {
    showMainContent(location);
  } else {
    alert("Please enter your city.");
  }
}

function showMainContent(locationText) {
  document.getElementById("location-screen").style.display = "none";
  document.getElementById("main-content").style.display = "block";
  document.getElementById("location-info").innerText = `Laundry service near: ${locationText}`;
}

function submitClothes() {
  const cloth = document.getElementById("cloth").value;
  const pickup = document.getElementById("pickup").value;
  const detergent = document.getElementById("detergent").value;
  const urgency = document.getElementById("urgency").value;

  const status = document.getElementById("status");
  status.innerHTML = `
    <strong>Processing Order:</strong><br>
    Clothes: ${cloth}<br>
    Pickup: ${pickup}<br>
    Detergent: ${detergent}<br>
    Urgency: ${urgency}
  `;
}
