const pdfFiles = [
    "pdfステップ1-1pdf.pdf",
    "pdfステップ1-2pdf.pdf",
    "pdfステップ1-3pdf.pdf"
];

const passwords = ["1", "2", "3", "4", "5"];
let currentStep = 0;

function checkPassword() {
    const inputPassword = document.getElementById("password-input").value;
    const errorMessage = document.getElementById("error-message");

    if (inputPassword === passwords[currentStep]) {
        errorMessage.classList.add("hidden");
        nextStep();
    } else {
        errorMessage.classList.remove("hidden");
    }
}

function nextStep() {
    if (currentStep < pdfFiles.length - 1) {
        currentStep++;
        document.getElementById("pdf-frame").data = pdfFiles[currentStep];
        document.getElementById("password-input").value = "";
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        document.getElementById("pdf-frame").data = pdfFiles[currentStep];
        document.getElementById("password-input").value = "";
    }
}
