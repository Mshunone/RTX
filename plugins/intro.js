let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
𝐈𝐍𝐓𝐑𝐎 ‹•════════════❏
│     *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Kelas      :* 
│ *Asal         :* 
╰═════ WELCOME. ━━━━❏
`.trim()) 
}
handler.command = /^(intro)$/i

module.exports = handler
