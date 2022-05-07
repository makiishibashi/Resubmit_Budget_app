# 簡易予算管理アプリ
[https://makiishibashi.github.io/Resubmit_Budget_app/]

## 収入、支出を表示させるアプリ
Firebase連携できるようになりました。

# 苦労したところ
- Firebaseへの連携が上手くいかず、import、export関連でのエラーが出ていた
- 調べて行くと、お手本にしたアプリがFirebaseのバージョン８だったため、バージョン９へのアップグレードが必要だった
- アップグレードにはnpmが必要そうだったので環境を構築し、webpackを使ってビルドを試みるも余計にエラーが増えて、ドン詰まってしまった
- 最終的に木曜の夜、山崎先生のYouTube動画でFirebaseの回を視聴し、どうにかFirebeseへの連携ができた

# こだわったところ
- アイコンにBootstrapを導入してみたところ
