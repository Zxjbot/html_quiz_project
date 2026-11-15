const quizData = [
    {
        number: 1,
        title: "第 1 題：網頁三層分工",
        scenario: "情境：在網頁畫面上「按下『切換夜間模式』按鈕後，背景顏色馬上記變成黑色」，這主要是哪一層的職責？",
        options: ["(A) HTML", "(B) CSS", "(C) JavaScript", "(D) Live Server"],
        correctIndex: 2,
        rationale: "JavaScript 負責「會做什麼動作」（如按下按鈕後的互動反應）；HTML 負責按鈕的存在（骨架），CSS 負責外觀顏色（衣服）。"
    },
    {
        number: 2,
        title: "第 2 題：HTML 骨架區塊",
        scenario: "情境：想讓瀏覽器分頁的頁籤顯示「小新的網路名片 ✨」，應該把 &lt;title&gt; 標籤放在 HTML 骨架的哪裡？",
        options: ["(A) &lt;body&gt; 區塊", "(B) &lt;head&gt; 區塊", "(C) &lt;!DOCTYPE html&gt; 上方", "(D) &lt;!-- 註解 --&gt; 裡面"],
        correctIndex: 1,
        rationale: "&lt;head&gt; 區塊承載設定與 metadata（包含分頁標題 &lt;title&gt;）；只有在 &lt;body&gt; 區塊裡的內容才會直接繪製在網頁主畫面上。"
    },
    {
        number: 3,
        title: "第 3 題：標籤與屬性名詞辨析",
        scenario: "情境：在 &lt;code&gt;&lt;img src=\"images/me.jpg\" alt=\"大頭貼照片\"&gt;&lt;/code&gt; 程式碼中，&lt;code&gt;src&lt;/code&gt; 代表什麼？",
        options: ["(A) 屬性名稱", "(B) 屬性值", "(C) 元素內容", "(D) 結束標籤"],
        correctIndex: 0,
        rationale: "src 是屬性名稱（Attribute），\"images/me.jpg\" 是屬性值；&lt;img&gt; 屬於沒有結束標籤與內容的空元素。"
    },
    {
        number: 4,
        title: "第 4 題：VS Code 與 Emmet 縮寫",
        scenario: "情境：在 VS Code 中新增 &lt;code&gt;index.html&lt;/code&gt; 檔案後，要快速生成標準的 HTML5 骨架，該輸入什麼符號並按下 Tab？",
        options: ["(A) html:5", "(B) !（半形驚嘆號）", "(C) &lt;doctype&gt;", "(D) #"],
        correctIndex: 1,
        rationale: "在 VS Code 裡輸入半形驚嘆號 ! 再按 Tab 鍵，就能觸發內建的 Emmet 縮寫功能，一鍵長出完整 HTML 骨架。"
    },
    {
        number: 5,
        title: "第 5 題：語意的正確使用",
        scenario: "情境：寫自我介紹時，想標記「超愛半糖珍奶」中的「超愛」作為重要資訊，並讓視障朋友的螢幕閱讀器朗讀時加重語氣，最適合用哪一個標籤？",
        options: ["(A) &lt;h1&gt;", "(B) &lt;b&gt;", "(C) &lt;strong&gt;", "(D) &lt;br&gt;"],
        correctIndex: 2,
        rationale: "&lt;strong&gt; 在語意上代表重要性強調，螢幕閱讀器念到時會加重語氣；&lt;b&gt; 僅改變視覺外觀，&lt;h1&gt; 則用於整頁的大標題。"
    },
    {
        number: 6,
        title: "第 6 題：巢狀結構語法規則",
        scenario: "情境：下列哪一個 HTML 標籤寫法符合正確的「巢狀結構」（俄羅斯娃娃）規則？",
        options: [
            "(A) &lt;code&gt;&lt;p&gt;歡迎來到&lt;em&gt;我的網站&lt;/p&gt;&lt;/em&gt;&lt;/code&gt;",
            "(B) &lt;code&gt;&lt;p&gt;歡迎來到&lt;em&gt;我的網站&lt;/em&gt;&lt;/p&gt;&lt;/code&gt;",
            "(C) &lt;code&gt;&lt;em&gt;&lt;p&gt;歡迎來到我的網站&lt;/em&gt;&lt;/p&gt;&lt;/code&gt;",
            "(D) &lt;code&gt;&lt;p&gt;&lt;em&gt;歡迎來到我的網站&lt;/p&gt;&lt;/em&gt;&lt;/code&gt;"
        ],
        correctIndex: 1,
        rationale: "巢狀結構遵守「後開先關」原則。&lt;em&gt; 在 &lt;p&gt; 內部開啟，就必須在 &lt;p&gt; 結束標籤之前關閉。"
    },
    {
        number: 7,
        title: "第 7 題：超連結屬性功能",
        scenario: "情境：做個人名片時，設置 &lt;code&gt;&lt;a href=\"https://github.com\" target=\"_blank\"&gt;我的 GitHub&lt;/a&gt;&lt;/code&gt;，其中 &lt;code&gt;target=\"_blank\"&lt;/code&gt; 的作用是什麼？",
        options: ["(A) 把字體改為藍色並加上下劃線", "(B) 在瀏覽器中開啟新分頁", "(C) 將目標網頁下載到本機電腦", "(D) 防止使用者點擊該連結"],
        correctIndex: 1,
        rationale: "target=\"_blank\" 能讓連結在「新分頁」開啟，避免使用者離開當前網頁。"
    },
    {
        number: 8,
        title: "第 8 題：網頁字元編碼與亂碼",
        scenario: "情境：如果打開網頁時發現中文全部變成「å°æ–°」這種亂碼，最可能是因為 &lt;code&gt;&lt;head&gt;&lt;/code&gt; 中缺少了哪一行？",
        options: [
            "(A) &lt;code&gt;&lt;title&gt;首頁&lt;/title&gt;&lt;/code&gt;",
            "(B) &lt;code&gt;&lt;meta name=\"viewport\" content=\"width=device-width\"&gt;&lt;/code&gt;",
            "(C) &lt;code&gt;&lt;meta charset=\"UTF-8\"&gt;&lt;/code&gt;",
            "(D) &lt;code&gt;&lt;link rel=\"stylesheet\" href=\"theme.css\"&gt;&lt;/code&gt;"
        ],
        correctIndex: 2,
        rationale: "&lt;meta charset=\"UTF-8\"&gt; 指定文字編碼方式，少了它瀏覽器無法用正確編碼讀取繁體中文與 emoji，導致亂碼。"
    },
    {
        number: 9,
        title: "第 9 題：開發工具 Live Server 功能",
        scenario: "情境：搭配使用 VS Code 的 Live Server 外掛開發網頁時，最主要的好處是什麼？",
        options: [
            "(A) 能自動幫程式碼除錯並修正語法錯誤",
            "(B) 每次按 Ctrl+S 存檔，瀏覽器就會自動重新整理顯示新內容",
            "(C) 不需要寫 HTML 就能產生完整網頁",
            "(D) 自動將網頁部署到遠端免費伺服器"
        ],
        correctIndex: 1,
        rationale: "Live Server 的核心功能就是檔案存檔後，瀏覽器會即時自動重新整理更新畫面。"
    },
    {
        number: 10,
        title: "第 10 題：標題標籤語意理解",
        scenario: "情境：關於 HTML 中的 &lt;code&gt;&lt;h1&gt;&lt;/code&gt; 到 &lt;code&gt;&lt;h6&gt;&lt;/code&gt; 標籤，下列敘述何者正確？",
        options: [
            "(A) &lt;h6&gt; 代表字型最大的標題",
            "(B) 一個網頁中為了讓字變小，應該用 &lt;h5&gt; 代替 &lt;p&gt;",
            "(C) &lt;h1&gt; 到 &lt;h6&gt; 代表內容大綱的重要層級，而非單純控制字體大小",
            "(D) 瀏覽器規定一個網頁絕對不能寫超過兩個 &lt;h2&gt;"
        ],
        correctIndex: 2,
        rationale: "標題階層代表內容的「重要程度與大綱結構」（&lt;h1&gt; 最重要、&lt;h6&gt; 最次要）；字體大小屬於 CSS 外觀調整範疇，不應為了字體小而濫用標題標籤。"
    }
];

const quizContainer = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const resultBox = document.getElementById("result-box");
const progressText = document.getElementById("progress-text");
const progressPercent = document.getElementById("progress-percent");
const progressBar = document.getElementById("progress-bar");
const apiKeyInput = document.getElementById("gemini-api-key");

let isSubmitted = false;

// 自動從瀏覽器讀取之前輸入過的 API Key
if (localStorage.getItem("gemini_quiz_key")) {
    apiKeyInput.value = localStorage.getItem("gemini_quiz_key");
}
apiKeyInput.addEventListener("input", () => {
    localStorage.setItem("gemini_quiz_key", apiKeyInput.value.trim());
});

function renderQuiz() {
    quizContainer.innerHTML = "";
    quizData.forEach((item, qIndex) => {
        const card = document.createElement("section");
        card.className = "question-card";
        card.id = `card-${qIndex}`;

        let optionsHTML = "";
        item.options.forEach((opt, optIndex) => {
            optionsHTML += `
                <label class="option-label" id="label-${qIndex}-${optIndex}">
                    <input type="radio" name="question-${qIndex}" value="${optIndex}" onchange="updateProgress()">
                    <span>${opt}</span>
                </label>
            `;
        });

        card.innerHTML = `
            <div class="question-title">${item.title}</div>
            <div class="question-scenario">${item.scenario}</div>
            <div class="options-list">${optionsHTML}</div>
            <div class="rationale-box" id="rationale-${qIndex}"></div>
            <div class="ai-actions">
                <button type="button" class="btn-ai" onclick="explainQuestion(${qIndex})">🤖 AI 助教深度解題</button>
                <button type="button" class="btn-ai btn-ai-extend" onclick="generateSimilarQuestion(${qIndex})">✨ 生成 1 題延伸練習</button>
            </div>
            <div class="ai-response-box" id="ai-box-${qIndex}"></div>
        `;
        quizContainer.appendChild(card);
    });
    updateProgress();
}

function updateProgress() {
    if (isSubmitted) return;
    let answeredCount = 0;
    quizData.forEach((_, qIndex) => {
        const selected = document.querySelector(`input[name="question-${qIndex}"]:checked`);
        if (selected) answeredCount++;
    });
    const percent = Math.round((answeredCount / quizData.length) * 100);
    progressText.textContent = `作答進度：${answeredCount} / ${quizData.length} 題`;
    progressPercent.textContent = `${percent}%`;
    progressBar.style.width = `${percent}%`;
}

// 去除 HTML 實體符號以便傳給 AI 閱讀
function stripHtml(html) {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}

async function askGemini(promptText, outputElementId) {
    const apiKey = apiKeyInput.value.trim();
    const outputBox = document.getElementById(outputElementId);

    if (!apiKey) {
        alert("請先在網頁最上方的輸入框貼上您的 Gemini API Key 喔！");
        apiKeyInput.focus();
        return;
    }

    outputBox.style.display = "block";
    outputBox.innerHTML = "⏳ AI 助教正在思考中，請稍候...";

   const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: promptText }] }]
            })
        });

        const data = await response.json();

        if (data.error) {
            outputBox.innerHTML = `❌ API 錯誤：${data.error.message}`;
            return;
        }

        const reply = data.candidates[0].content.parts[0].text;
        // 簡易格式化 Markdown 粗體與換行
        const formatted = reply
            .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/\n/g, "<br>");
        outputBox.innerHTML = formatted;
    } catch (error) {
        outputBox.innerHTML = "❌ 連線失敗，請檢查網路狀態或確認 API Key 是否正確。";
    }
}

function explainQuestion(qIndex) {
    const item = quizData[qIndex];
    const cleanScenario = stripHtml(item.scenario);
    const cleanOptions = item.options.map(o => stripHtml(o)).join(" / ");
    const cleanCorrect = stripHtml(item.options[item.correctIndex]);

    const prompt = `你是一位親切的網頁設計助教。請針對以下 HTML 題目，用生活化的比喻為初學者解釋為什麼正確答案是「${cleanCorrect}」，並逐一說明其他錯誤選項錯在哪裡（請用繁體中文回答，語氣輕鬆好懂）：\n題目：${item.title}\n${cleanScenario}\n選項：${cleanOptions}`;
    askGemini(prompt, `ai-box-${qIndex}`);
}

function generateSimilarQuestion(qIndex) {
    const item = quizData[qIndex];
    const cleanScenario = stripHtml(item.scenario);

    const prompt = `你是一位網頁設計老師。請根據以下題目的「核心考點」，為學生設計 1 題全新的類似單選題（包含情境題幹、A/B/C/D 四個選項），並在最下方空兩行附上「正確答案與簡短解析」（請用繁體中文回答）：\n原題考點：${item.title}\n原題情境：${cleanScenario}`;
    askGemini(prompt, `ai-box-${qIndex}`);
}

submitBtn.addEventListener("click", () => {
    let unanswered = [];
    quizData.forEach((item, qIndex) => {
        const selected = document.querySelector(`input[name="question-${qIndex}"]:checked`);
        if (!selected) unanswered.push(item.number);
    });

    if (unanswered.length > 0) {
        if (!confirm(`您還有第 ${unanswered.join("、")} 題尚未作答，確定要直接送出看成績嗎？`)) return;
    }

    isSubmitted = true;
    let score = 0;
    let correctCount = 0;

    quizData.forEach((item, qIndex) => {
        const card = document.getElementById(`card-${qIndex}`);
        const rationaleBox = document.getElementById(`rationale-${qIndex}`);
        const radios = document.querySelectorAll(`input[name="question-${qIndex}"]`);
        const selected = document.querySelector(`input[name="question-${qIndex}"]:checked`);

        radios.forEach(r => r.disabled = true);
        document.getElementById(`label-${qIndex}-${item.correctIndex}`).classList.add("correct-option");

        if (selected && parseInt(selected.value, 10) === item.correctIndex) {
            score += 10;
            correctCount++;
            card.classList.add("correct-card");
            rationaleBox.innerHTML = `<span class="rationale-status status-pass">✅ 答對了！</span>解析：${item.rationale}`;
        } else {
            card.classList.add("wrong-card");
            if (selected) {
                document.getElementById(`label-${qIndex}-${selected.value}`).classList.add("wrong-option");
            }
            const userStatus = selected ? "❌ 答錯了！" : "⚠️ 未作答！";
            rationaleBox.innerHTML = `<span class="rationale-status status-fail">${userStatus}</span>解析：${item.rationale}`;
        }
        rationaleBox.classList.add("show");
    });

    submitBtn.style.display = "none";
    resetBtn.style.display = "inline-block";

    let comment = score === 100 ? "太神啦！滿分通關 HTML 新手村！🎉" :
                  score >= 80 ? "表現非常優秀！核心觀念都掌握得很穩！👏" :
                  score >= 60 ? "順利及格！建議看看紅色錯題的解析複習一下喔！💪" :
                  "再接再厲！點擊上方 AI 助教把觀念釐清後再挑戰一次吧！📚";

    resultBox.style.display = "block";
    resultBox.innerHTML = `測驗成績：${score} 分（答對 ${correctCount} / ${quizData.length} 題）<br><span style="font-size: 0.98rem; font-weight: 500; color: #334155;">${comment}</span>`;
    resultBox.scrollIntoView({ behavior: "smooth" });
});

resetBtn.addEventListener("click", () => {
    isSubmitted = false;
    submitBtn.style.display = "inline-block";
    resetBtn.style.display = "none";
    resultBox.style.display = "none";
    renderQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

renderQuiz();