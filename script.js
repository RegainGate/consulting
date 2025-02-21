// 各ステップのパスワード
const passwords = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5"
};

// ステップを進める処理
function checkPassword(step) {
    let inputPassword = document.getElementById(`password${step}`).value;
    if (inputPassword === passwords[step]) {
        document.getElementById(`step${step}`).classList.add("hidden");
        document.getElementById(`step${step + 1}`).classList.remove("hidden");
    } else {
        alert("パスワードが違います");
    }
}

// ステップを戻る処理
function prevStep(step) {
    document.getElementById(`step${step + 1}`).classList.add("hidden");
    document.getElementById(`step${step}`).classList.remove("hidden");
}
