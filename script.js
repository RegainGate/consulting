body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

.container {
    margin: 20px auto;
    max-width: 800px;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

/* PDFビューワーのサイズ設定 */
#pdf-viewer {
    width: 100%;
    height: 80vh;
    overflow: hidden;
    position: relative;
}

/* iframeのスクロール対応 */
iframe {
    width: 100%;
    height: 100%;
    border: none;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    display: block;
}

/* パスワード入力部分 */
#password-container {
    margin-top: 20px;
}

input {
    background-color: white;
    border: 1px solid #ccc;
    padding: 10px;
    margin-right: 10px;
}

button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.hidden {
    display: none;
}

#error-message {
    color: red;
    margin-top: 10px;
}
