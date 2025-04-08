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
