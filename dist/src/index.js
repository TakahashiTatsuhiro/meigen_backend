"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './.env' }); //相対パスの起点はこのファイルがある階層ではなくアプリを起動する階層なので、この指示が正しい。
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const knex_1 = __importDefault(require("knex"));
const knexfile_1 = __importDefault(require("../knexfile"));
//express設定-------------------------------------------------------------
const app = (0, express_1.default)();
const port = process.env.PORT;
// JSONリクエストボディの解析
app.use(express_1.default.json());
// CORS（Cross-Origin Resource Sharing）の設定
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_ORIGIN, // 本番環境では本番のフロントエンドのURLに変更
}));
// Knexインスタンスの初期化--------------------------------------------------
// 環境に応じたKnex設定の選択
const knexConfig = knexfile_1.default[process.env.NODE_ENV || 'development'];
const knex = (0, knex_1.default)(knexConfig);
//ルート-------------------------------------------------------------------
app.get('/', (req, res) => {
    res.status(200).send('サーバー側だよ');
});
//単語データ取得-------------------------------------------------------------
app.get('/meigen', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const meigens = yield knex("meigen").select();
    const meigen = meigens[Math.floor(Math.random() * meigens.length)];
    res.status(200).send(meigen);
}));
//リッスン--------------------------------------------------------------------
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
