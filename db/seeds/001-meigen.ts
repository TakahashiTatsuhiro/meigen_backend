import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("meigen").del();

    // Inserts seed entries
    const meigens = [
        { author: "松岡修造", meigen: "100回叩くと壊れる壁があったとする。でもみんな何回叩けば壊れるかわからないから、90回まで来ていても途中であきらめてしまう。" },
        { author: "松岡修造", meigen: "勝ち負けなんか、ちっぽけなこと。大事なことは、本気だったかどうかだ！" },
        { author: "松岡修造", meigen: "おまえの終わり方は、なんとなくフィニッシュだ！" },
        { author: "松岡修造", meigen: "やがて僕のレベルも知らず知らずに上がっていった。なぜなら、僕が戦う相手は、いつも自分より強かったからである。" },
        { author: "松岡修造", meigen: "崖っぷちありがとう！最高だ！" },
        { author: "松岡修造", meigen: "諦めんなよ！諦めんなよ、お前！！どうしてそこでやめるんだ、そこで！！もう少し頑張ってみろよ！ダメダメダメ！諦めたら！周りのこと思えよ、応援してる人たちのこと思ってみろって！あともうちょっとのところなんだから！" },
        { author: "松岡修造", meigen: "君が次に叩く1回で、壁は打ち破れるかもしれないんだ!" },
        { author: "松岡修造", meigen: "僕が偉そうに話してることは全て、これまで僕ができなかったこと。" },
        { author: "イチロー", meigen: "小さいことを積み重ねる事が、とんでもないところへ行くただひとつの道だと思っています" },
        { author: "イチロー", meigen: "結果が出ない時、どういう自分でいられるか。決して諦めない姿勢が、何かを生み出すきっかけをつくる。" },
        { author: "イチロー", meigen: "壁というのは、できる人にしかやってこない。超えられる可能性がある人にしかやってこない。だから、壁がある時はチャンスだと思っている。" },
        { author: "イチロー", meigen: "考える労力を惜しむと前に進むことを止めてしまうことになります。" },
        { author: "イチロー", meigen: "チャンスは全力で取れるときに取らないといけません。" },
        { author: "岡田武史", meigen: "僕はできると思っている。そう思っていなかったら、やってられない。" },
        { author: "岡田武史", meigen: "終了のホイッスルは次の試合の開始のホイッスルでもある" },
        { author: "スティーブ・ジョブス", meigen: "時間は限られているのだから、他人の真似事をして、自分の時間を無駄に過ごしてはいけない" },
        { author: "アルバート・アインシュタイン", meigen: "人生は自転車に乗ることに似ています。バランスを保つためには、動き続けなくてはならないのです" }
    ];

    for (const meigen of meigens){
        const exist = await knex("meigen").where({author: meigen.author, meigen: meigen.meigen}).first();
        if(!exist){
            await knex("meigen").insert(meigen);
        }
    }
};
