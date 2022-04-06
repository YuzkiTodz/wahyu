const {
WAConnection,
MessageType,
Presence,
Mimetype,
GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')
require('./Yuzaki.js')
nocache('./Yuzaki.js', module => console.log(`${module} Telah Di Update✓`))
const starts = async (Lexxy = new WAConnection()) => {
Lexxy.logger.level = 'warn'
Lexxy.version = [2, 2143, 8]
Lexxy.browserDescription = ["TsukasaChan", "ubuntu", "3.0"];
console.log(banner.string)
Lexxy.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))})
fs.existsSync('./session.json') && Lexxy.loadAuthInfo('./session.json')
Lexxy.on('connecting', () => {
start('2', 'Connecting...')})
Lexxy.on('open', () => {
success('2', 'Connected✓')})
await Lexxy.connect({timeoutMs: 30*1000})
fs.writeFileSync('./session.json', JSON.stringify(Lexxy.base64EncodedAuthInfo(), null, '\t'))
Lexxy.on('chat-update', async (message) => {
require('./Yuzaki.js')(Lexxy, message)})}
function nocache(module, cb = () => { }) {
console.log('[ ! ]', `'${module}'`, 'What Are You Doing? You Gay?')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)})}
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)}})}

starts()