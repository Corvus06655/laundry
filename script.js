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
function submitClothes() {
  const clothInput = document.getElementById("cloth").value.trim();
  const receivedList = document.getElementById("received-list");
  const shopSection = document.getElementById("shop");

  if (clothInput === "") {
    alert("Please enter types of clothes!");
    return;
  }

  // Clear previous list
  receivedList.innerHTML = "";

  // Add each item as list
  clothInput.split(",").forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.trim();
    receivedList.appendChild(li);
  });

  // Show processing section
  shopSection.classList.remove("hidden");

  // Optionally scroll to it
  shopSection.scrollIntoView({ behavior: "smooth" });

  // Reset input
  document.getElementById("cloth").value = "";
}
function submitClothes() {
  const clothInput = document.getElementById("cloth").value.trim();

  if (clothInput === "") {
    alert("Please enter types of clothes!");
    return;
  }

  // Redirect to processing.html with data in URL
  const encodedData = encodeURIComponent(clothInput);
  window.location.href = `processing.html?clothes=${encodedData}`;
}
function submitClothes() {
  const clothInput = document.getElementById("cloth").value.trim();

  if (clothInput === "") {
    alert("Please enter types of clothes!");
    return;
  }

  // Redirect to processing.html with data in URL
  const encodedData = encodeURIComponent(clothInput);
  window.location.href = `processing.html?clothes=${encodedData}`;
}

