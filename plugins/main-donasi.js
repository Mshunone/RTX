let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'donasi'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hai 👋
Ayo Dukung Xia agar tetap on dengan :
┌〔 Donasi • Emoney 〕
├ Dana : ${dana}
├ Pulsa : ${pulsa}
└────
Berapapun donasi kalian akan sangat berarti 👍

Terimakasih =D

Contact person Owner:
wa.me/${numberowner} (Owner)

*Terimakasih yg buat donasi yg pencet doang Fack yu*`
  conn.sendButtonImg(m.chat, fla + teks, anu, instagram, 'Thanks', 'thanks', m) 
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
