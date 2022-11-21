
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
return`
━━━❲ 𝙂𝙐𝙍𝘽𝙊𝙏-𝙈𝘿 ━━━

 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢
 ID : @${sender.split('@')[0]}
 Nama : ${namenya}
 Premium : ${premnya}

 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
 Library : Baileys-MD
 Time : ${jam} WIB
 Date : ${tanggal}
 Terdaftar : ${usernya}
 Room Chat : ${romnya}
 Total Fitur : 600+

 𝘽𝙐𝙂𝙑𝙄𝙋 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}sendbug 628xxx
 ${no++} ➳ ${prefix}philips 628xxx
 ${no++} ➳ ${prefix}philips2 628xxx
 ${no++} ➳ ${prefix}philips3 628xxx
 ${no++} ➳ ${prefix}santet @tag
 ${no++} ➳ ${prefix}santet2 @tag
 ${no++} ➳ ${prefix}santet3 @tag
 ${no++} ➳ ${prefix}virtex 628xxx
 ${no++} ➳ ${prefix}virtex2 628xxx
 ${no++} ➳ ${prefix}virtex3 628xxx
 ${no++} ➳ ${prefix}bug1 628xxx
 ${no++} ➳ ${prefix}bug2 628xxx
 ${no++} ➳ ${prefix}bug3 628xxx
 ${no++} ➳ ${prefix}bug4 628xxx
 ${no++} ➳ ${prefix}bug5 628xxx
 `
}

exports.rulesBot = () =>{
return`*──「 RULES-BOT 」──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *#menu* untuk memulai bot`
}

exports.donasiBot = (cekName,ucapanWaktu) =>{
return`──「 *MENU DONATE* 」──

Hi *${cekName}* ${ucapanWaktu} 👋🏻

*Payment Ovo*
Number: 
A/N: 

*Payment Dana*
Number:
A/N: 

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

──「 *THX FOR YOU* 」──`
}

exports.infoOwner = () =>{
return`──「 *INFO OWNER* 」──

 *Data Profil*
 • *Nama:* Lexxy Official
 • *Umur:* 18 tahun
 • *Hoby:* Turu/Game
 • *Askot:* Palembang
 • *Konten:* Creator

_iam developer bot whatsapp._

 *Sosial Media*
 • *Whatsapp:* Private
 • *Youtube:* Private
 • *Github:* Private
 `
}