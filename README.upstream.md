> 此檔為 fork 來源 [sitcon-tw/hackathon2026](https://github.com/sitcon-tw/hackathon2026) 的原始 README，內容屬 SITCON，僅供對照，本 fork 未修改其所述之頁面與資料。

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
