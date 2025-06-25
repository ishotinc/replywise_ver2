# BeautyReply Pro

美容比較サイト向けの革新的な自動返信システム。ネガティブレビューをコピペするだけで、建設的で好感度の高い返信文を自動生成します。

## セットアップ手順

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境設定

1. 環境変数ファイルを作成：

   ```bash
   npm run setup
   ```

2. `.env` ファイルを編集して、Supabase の認証情報を設定：
   ```bash
   # .env ファイル
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your_anon_key_here
   ```

### 3. Supabase プロジェクトの作成

1. [Supabase](https://supabase.com) にアクセスしてアカウントを作成
2. 新しいプロジェクトを作成
3. プロジェクトの設定から認証を有効化

### 4. Supabase 認証情報の取得

1. Supabase ダッシュボードで **Settings → API** に移動
2. **Project URL** をコピー（`https://your-project-id.supabase.co`）
3. **anon/public key** をコピー（`eyJ...` で始まる文字列）
4. これらの値を `.env` ファイルに設定

### 5. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` にアクセス

### 6. 本番ビルド

```bash
npm run build
```

ビルドされたファイルは `dist/` フォルダに出力されます。

## セキュリティ

- `.env` ファイルは `.gitignore` に含まれているため、Git にコミットされません
- 環境変数は Vite によってビルド時に注入されます
- `anon/public` キーのみを使用し、`service_role` キーは絶対にクライアントサイドで使用しないでください

## 開発コマンド

```bash
npm run setup    # 環境変数ファイルを作成
npm run dev      # 開発サーバーを起動
npm run build    # 本番用ビルド
npm run preview  # ビルド結果をプレビュー
```

## 機能

- ネガティブレビューの自動返信生成
- ユーザー認証（サインアップ/ログイン）
- レスポンシブデザイン
- 14 日間無料トライアル

## 技術スタック

- HTML5
- CSS3
- JavaScript (ES6+)
- Vite (ビルドツール)
- Supabase (認証・データベース)
- Font Awesome (アイコン)
- Google Fonts

## ライセンス

All rights reserved.
