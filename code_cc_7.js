const ctaForm = document.getElementById("ctaForm");
const headlineInput = document.getElementById("headlineInput");
const ctaHeadline = document.getElementById("ctaHeadline");
const updateMessage = document.getElementById("updateMessage");

ctaForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const newHeadline = headlineInput.value;

    ctaHeadline.innerText = newHeadline;

    updateMessage.innerHTML =
        `<p><strong>Updated Headline:</strong> ${newHeadline}</p>`;

    headlineInput.value = "";

});
