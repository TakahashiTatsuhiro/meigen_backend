import dotenv from 'dotenv';
dotenv.config({ path: './.env' }); //相対パスの起点はこのファイルがある階層ではなくアプリを起動する階層なので、この指示が正しい。

import express from 'express';
import cors from 'cors';
import Knex from 'knex';
import knexfile from '../knexfile';

//express設定-------------------------------------------------------------
const app = express();
const port = process.env.PORT;

// JSONリクエストボディの解析
app.use(express.json());

// CORS（Cross-Origin Resource Sharing）の設定
app.use(
	cors({
		origin: process.env.FRONTEND_ORIGIN, // 本番環境では本番のフロントエンドのURLに変更
	})
);

// Knexインスタンスの初期化--------------------------------------------------
// 環境に応じたKnex設定の選択
const knexConfig = knexfile[process.env.NODE_ENV || 'development'];
const knex = Knex(knexConfig);

//ルート-------------------------------------------------------------------
app.get('/', (req, res) => {
	res.status(200).send('サーバー側だよ');
});

//単語データ取得-------------------------------------------------------------
app.get('/meigen', async (req, res) => {
    const meigens = await knex("quote").select();
	const meigen = meigens[Math.floor(Math.random() * meigens.length)]
	res.status(200).send(meigen);
});


//リッスン--------------------------------------------------------------------
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
