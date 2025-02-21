const pdfFiles = [
    "ステップ1-1.pdf", "ステップ1-2.pdf", "ステップ1-3.pdf",
    "ステップ1-4.pdf", "ステップ1-5.pdf", "ステップ1-6.pdf",
    "ステップ1-7.pdf", "ステップ2-1.pdf", "ステップ3-1.pdf",
    "ステップ4-1.pdf", "ステップ5-1.pdf", "ステップ6-1.pdf"
];

const passwords = {
    "ステップ2-1.pdf": "1",
    "ステップ3-1.pdf": "2",
    "ステップ4-1.pdf": "3",
    "ステップ5-1.pdf": "4",
    "ステップ6-1.pdf": "5"
};

let currentIndex = 0;

function updateViewer() {
    document.getElementById("pdfFrame").src = pdfFiles[currentIndex];

    const passwordInput = document.getElementById("passwordInput");
    const nextBtn = document.getElementById("nextBtn");

    // ステップ1-1〜ステップ1-7はパスワードなしで進める
    if (currentIndex <= 6) {
        passwordInput.style.display = "none";
        nextBtn.disabled = false;
    } else {
        passwordInput.style.display = "inline";
        passwordInput.value = ""; // 入力をクリア
        nextBtn.disabled = true;
    }

    // 「戻る」ボタンの有効・無効化
    document.getElementById("prevBtn").disabled = (currentIndex === 0);
}

function nextStep() {
    if (currentIndex < pdfFiles.length - 1) {
        currentIndex++;
        updateViewer();
    }
}

function prevStep() {
    if (currentIndex > 0) {
        currentIndex--;
        updateViewer();
    }
}

function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value;
    const currentPdf = pdfFiles[currentIndex];

    if (passwords[currentPdf] && passwordInput === passwords[currentPdf]) {
        document.getElementById("nextBtn").disabled = false;
    } else {
        document.getElementById("nextBtn").disabled = true;
    }
}

// 初期表示の設定
updateViewer();
