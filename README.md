# 2026 世界盃出線計算機

單一網頁的離線小工具：輸入小組賽比分 → 自動算出晉級 32 隊 → 帶出淘汰賽行事曆（台灣時間）→ 產出晉級隊伍國旗剪貼表。

## 檔案
- `index.html`：主程式（國旗已全部內嵌，可離線使用）
- `manifest.webmanifest`：App 名稱與圖示設定
- `sw.js`：離線快取（Service Worker）
- `icon-192.png` / `icon-512.png`：App 圖示

## 部署（GitHub Pages）
1. 建立 public repo，把以上檔案全部放在「根目錄」。
2. Settings → Pages → Source 選 `main` /（root）→ 儲存。
3. 等 1–2 分鐘出現網址：`https://你的帳號.github.io/repo名稱/`

## 手機安裝
- iPhone：用 **Safari** 開網址 → 分享 → 加入主畫面。
- Android：用 **Chrome** 開網址 → 安裝應用程式。

## 更新
重新上傳 `index.html` 即可。若手機沒立即更新，把 `sw.js` 裡的 `wc2026-v1` 改成 `wc2026-v2` 再上傳，可強制刷新快取。

## 備份
工具內「匯出備份／匯入備份」可存取 JSON；資料只存在你自己的裝置。
