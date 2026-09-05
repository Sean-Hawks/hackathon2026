# OpenAI 已讀不回計時器（Fork）

> 本 repo fork 自 SITCON 的 [sitcon-tw/hackathon2026](https://github.com/sitcon-tw/hackathon2026)，感謝 SITCON 團隊開源 BUILD MODE 2026 資訊站。
> 新增的 `openai-countdown.html` 以原站 `countdown.html` 為基底改成紅色主視覺，並把作品繳交倒數改成「ChatGPT Pro 5x 名單送出後，OpenAI 已經多久沒回信」的正數計時器（自 2026/09/01 00:00 GMT+8 起算）。
>
> 線上版：<https://openai-reply.observe.tw/>
>
> GitHub Pages 原址：<https://sean-hawks.github.io/hackathon2026/openai-countdown.html>
>
> 網域部署與 GA4／GTM 設定：[部署說明](deploy/openai-reply/README.md)
>
> 網址參數：`?replied=2026-09-06T10:00:00+08:00` 停止計時並顯示「OpenAI 回信了」；`?sent=`、`?url=`、`?title=` 可覆蓋起算時間、QR 連結與主標。
> 原站 CNAME 已移除，避免與 hackathon2026.sitcon.org 衝突。其餘檔案維持原樣，以下為原 README。

---

# BUILDMODE GEN-AI HACKATHON 2026 資訊站

無框架、無建置步驟的靜態網站。以任一靜態檔案伺服器發布專案根目錄即可。頁面透過 jsDelivr 載入 Anime.js 4.2.2；若套件載入失敗，所有資訊與主要互動仍可正常使用。

## 本機預覽

```bash
python3 serve.py
```

開啟 `http://localhost:8000`。`serve.py` 支援 HTTP Range 請求，音訊可分段串流、邊載邊播；若使用 `python3 -m http.server`，MP3 必須整檔下載完成才能播放。

## 正式網站

- GitHub repository：<https://github.com/sitcon-tw/hackathon2026>
- GitHub Pages：<https://hackathon2026.sitcon.org>

## 更新活動資料

活動資料主要位於 `script.js` 頂部：

- `SITE_CONFIG.submissionOpen`、`SITE_CONFIG.submissionRelease`、`SITE_CONFIG.submissionDeadline` 與 `SITE_CONFIG.links.submission`：作品繳交表單開放狀態、時間、截止期限與 URL
- `SITE_CONFIG.links.track4Submission`：Track 04 科幻賽道作品繳交表單 URL
- `schedule`：三日時程與高亮時間區間
- `teams.json`：正式隊伍編號、名稱與賽道；頁面會動態載入並提供搜尋與篩選
- `teams.html`：獨立隊伍名單頁
- `resources`：下載項目與檔案路徑
- `finalists.js` 的 `finalistTeams`：總排名前 10 名
- `finalists.js` 的 `waitlistTeams`：候補名單
- `lightning.js` 的 `selectedSpeakers`：閃電講 10 位入選講者
- `lightning.js` 的 `standbySpeakers`：閃電講 2 位候補講者

隊伍格式：

```json
{"id":"T001","name":"Team Name","track":"AI for Everyday Life"}
```

表單 URL 設定完成後，按鈕會在各自指定時間開放。開放前會顯示倒數，倒數結束時頁面會自動重新整理；若 URL 仍為空字串，按鈕會安全維持停用並顯示「連結待主辦補上」。

## 主題曲檔案

音訊與同步歌詞統一放在 `assets/audio/`，每首歌的 MP3 與 LRC 使用相同檔名。播放器曲目設定位於 `anthem.js` 的 `tracks` 陣列。

要上架廠商資源時，將檔案放入 `resources/`，再於 `resources` 陣列填入相對路徑。個人兌換碼、API Key 或含個資的檔案不應放入公開下載區。
