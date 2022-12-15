//Ini untuk setting Bot
//Untuk gambar background menu ada -
//Dalam file menu 
//untuk lainya saran jangan di ubah bre nanti eror
//misal gua lupa nambah atau typo benerin aja bre gua pusing njir awokawok 

//Global Owner//
global.owner = ['6285641142178']  // isi jika perlu
global.mods = ['6285641142178']   // isi jika perlu
global.prems = ['6283805685278']  // isi jika perlu

//Nomor Owner & payment//
global.nameowner = 'KaXel-XD' // isi nama kalian bebas
global.numberowner = '6285641142178' // isi ini untuk mengendalikan bot
global.dana = 'Chek Katalog' // isi dengan nomor dana yg kamu punya 
global.pulsa = 'Chek Katalog' // isi dengan nomor pulsa hp kalian
global.gopay = 'Chek Katalog'

//Nama Bot & Grouplink//
global.namebot = '「 ©Saxia˘Botz 」'
global.gc = 'https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz'
global.web = 'https://bit.ly/SaxiaShop' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.instagram = 'https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz'

//Tampilan wm Bot dan pesan bot//
global.lolkey = 'rey2k22' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = '「 ©Saxia˘Botz 」'
global.watermark = wm
global.wm2 = '⫹By⫺ +62 831-1113-6642'
global.wm3 = '「 ©Saxia˘Botz 」'
global.wm4 = 'Wa.me/6283111136642'
global.fla = 'https://botcahx.ddns.net/api/photooxy/harry-potter?text='
global.wait = '「 Wait 99% 」Loading...'
global.eror = '「 ``404 error`` 」'
global.benar = 'Bєɴαʀ ✅\n'
global.salah = 'Sαℓαн ❌\n'
global.stiker_wait = '*┊↬ EStiker sedang dibuat...*'
global.packname = 'Made In'
global.author = '🪴┊↬ Saxia˘MD'

//Apikey Setting//
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://api.neoxr.my.id',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  tio: 'https://botcahx.ddns.net', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  rey: 'https://sekha.me',
  males: 'https://malesin.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://api.neoxr.my.id': 'Register',
  'https://sekha.me': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'Deffbotz',
}

//Setting Rpg//
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//Jangan merubah bagian ini! //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
