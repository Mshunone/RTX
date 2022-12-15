let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Creator'
let numberowner = global.numberowner
let anu = `
Contact Owner:
wa.me/${numberowner}

_Itu Nomer Owner. Jangan di spam cug_
Owner akan menanggapi bila : 
- Tentang Bot
- Saran masukan 
- Sewa bot`
  conn.sendButtonImg(m.chat, fla + teks, anu, instagram, 'Thanks', 'thanks', m) 
}
handler.help = ['main']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
