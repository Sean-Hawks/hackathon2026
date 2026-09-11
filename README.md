<h1 align="center">OpenAI 已讀不回計時器</h1>
<p align="center"><b>ChatGPT Pro 5x 到貨了。從名單送出到帳號升級，總共等了 10 天 23 小時 34 分。</b></p>
<p align="center">
  <a href="https://openai-reply.observe.tw/"><b>openai-reply.observe.tw</b></a> ·
  <a href="https://sean-hawks.github.io/hackathon2026/openai-countdown.html">GitHub Pages 備援</a> ·
  <a href="#網址參數">網址參數</a> ·
  <a href="#本機預覽">本機預覽</a> ·
  <a href="https://github.com/Sean-Hawks/hackathon2026/stargazers">⭐ 一人一顆星星</a>
</p>

---

## 這是什麼

一個單檔、無框架的靜態網頁，從 **2026 年 9 月 1 日 00:00（GMT+8）** 開始往上數，即時顯示 BUILD MODE GEN-AI HACKATHON 2026 參賽者等待 OpenAI 發放 **ChatGPT Pro 5x** 開發資源的時間。回信之前叫「已讀不回」，回信之後 Pro 還沒到，叫「已回不發」。等得越久，畫面越紅、動畫越急、文案越不客氣；到貨之後轉為綠燈紀念頁。

頁面以 SITCON 開源的 [作品繳交截止倒數頁](https://hackathon2026.sitcon.org/countdown.html) 為基底改造：主視覺由青綠改為紅色，倒數改為正數，所有文案換成 Pro 5x 主題。除了新增的頁面與部署設定，**SITCON 原始檔案一律未動**。

## 背景

黑客松報名時承諾提供 ChatGPT Pro 5x 作為開發資源之一。依參賽者群組中工作人員的說明整理出的時間線：

| 日期 | 事件 |
|---|---|
| 8/31 | 資源申請表單關閉，工作人員當天將名單提交給 OpenAI |
| 9/2 | 工作人員表示相關問題正在與 OpenAI 確認，「他們回覆比較慢」 |
| 9/4 | 黑客松第一天，Pro 5x 尚未發放；OpenAI 原訂議程講者亦未出席 |
| 9/5 | 工作人員說明名單已於 8/31 送出，至今未收到任何回覆，無法承諾發放時間 |
| 9/9 | OpenAI 終於回信了，但 GPT Pro 5x 仍未發放。頁面進入「已回不發」模式，計時繼續 |
| 9/11 23:34 | **GPT Pro 5x 到貨。** 計時凍結在 10 天 23 小時 34 分，頁面切換成到貨畫面 |

本頁面把「還要等多久」變成一個大家看得到的數字。起算點取名單送出隔日的 00:00，屬於保守估計。

## 畫面會怎麼變

| 等待天數 | 狀態 | 畫面 |
|---|---|---|
| < 3 天 | 名單已送出，等待 OpenAI 回信中 | 基本紅 |
| ≥ 3 天 | 已讀不回第 3 天，超過一般客服 SLA | 動畫加速，警示跑馬燈出現 |
| ≥ 4 天 | 等待時間比黑客松還長 | 更亮的紅，邊緣暈影 |
| ≥ 5 天 | 等了 5 天，比賽都要結束了（Pro 5x 實測 Pro 0x） | 心跳式暈影、邊緣閃光 |
| ≥ 7 天 | 整整一週，正式進入冷處理（ClosedAI 模式） | 標題 glitch，全速動畫 |

跨過 1、2、3、4、5、6、7、10、14 天門檻時會跳出全螢幕彈幕。

頁面另有兩個狀態切換：

- **已回不發**：OpenAI 回信了，但 Pro 還沒發。主標改為「GPT Pro 還沒發」，狀態列顯示 REPLIED // PRO NOT DELIVERED，計時繼續往上數。
- **到貨紀念**（目前狀態）：計時凍結在 2026/09/11 23:34，主視覺切成綠燈、動畫放慢，全螢幕顯示「GPT Pro 5x 發了！！！」，QR code 改指向 chatgpt.com。想回頭看等待中的樣子，加上 `?delivered=false` 或 `?delivered=2099-01-01` 即可。

## 網址參數

所有參數皆可疊加，不填則使用頁面內建預設值。

| 參數 | 說明 | 範例 |
|---|---|---|
| `replied` | OpenAI 是否已回信。`true` 進入已回不發模式；給 ISO 8601 時間則會一併顯示回信日期；`false` 可切回已讀不回模式 | `?replied=2026-09-09T10:00:00%2B08:00` |
| `delivered` | GPT Pro 實際發放時間（ISO 8601）。預設為 2026-09-11 23:34；給未來時間可暫時回到計時中的畫面 | `?delivered=2099-01-01T00:00:00%2B08:00` |
| `sent` | 覆蓋起算時間 | `?sent=2026-08-31T18:00:00%2B08:00` |
| `title` | 覆蓋主標紅字 | `?title=Sam%20沒回信` |
| `url` | 覆蓋右側 QR code 與按鈕連結（到貨後預設為 chatgpt.com） | `?url=https://help.openai.com/` |

> 網址中的 `+` 需寫成 `%2B`，否則會被當成空格。

## 本機預覽

```bash
git clone https://github.com/Sean-Hawks/hackathon2026.git
cd hackathon2026
python3 serve.py
```

開啟 <http://localhost:8000/openai-countdown.html>。頁面沒有任何建置步驟，直接雙擊 `openai-countdown.html` 也能跑；QR code 由頁內的 JavaScript 產生，無外部相依。

## 部署

- **GitHub Pages**：`main` 分支根目錄，推上去約一分鐘後生效。
- **自訂網域**：`openai-reply.observe.tw` 由 Cloudflare Worker 轉發 GitHub Pages 上的這一頁，網址列保持在自訂網域、查詢參數原樣保留。Worker 原始碼、設定與 GA4／GTM 說明見 [deploy/openai-reply/](deploy/openai-reply/README.md)。
- 上游的 `CNAME` 已移除，避免與 `hackathon2026.sitcon.org` 衝突。

## 檔案說明

| 路徑 | 說明 |
|---|---|
| `openai-countdown.html` | 本專案主體，單一 HTML 檔（CSS、JS、QR 產生器皆內嵌） |
| `deploy/openai-reply/` | Cloudflare Worker 與自訂網域、分析設定 |
| `README.upstream.md` | SITCON 原始 README，供對照 |
| 其餘檔案 | 皆為 fork 來源原樣，未修改 |

## 致謝與授權

- 本 repo fork 自 SITCON 的 [sitcon-tw/hackathon2026](https://github.com/sitcon-tw/hackathon2026)。倒數頁的版面、動畫與視覺系統皆出自 SITCON 團隊，本專案僅做配色與文案改造，特此感謝。
- 上游 repo 未附授權條款，上游檔案的權利仍屬 SITCON；若 SITCON 對本 fork 的使用方式有任何意見，請開 issue 或直接聯絡，會即時配合調整。
- 本 fork 對 `openai-countdown.html` 的修改部分與 `deploy/` 目錄以 [MIT License](LICENSE) 釋出。

## 免責聲明

本頁面為參賽者自發的社群專案，與 OpenAI、SITCON 或黑客松主辦單位均無關聯，亦不代表其立場。時間線內容整理自參賽者群組公開對話，如有錯誤歡迎開 issue 指正。等信是真的，怨氣是玩笑，請大家對現場工作人員溫柔一點。

## 支持

覺得好笑或有共鳴的話，[給一顆星星](https://github.com/Sean-Hawks/hackathon2026/stargazers) 就是最好的支持。數字已經在 9/11 23:34 停下來了，星星還可以繼續。
