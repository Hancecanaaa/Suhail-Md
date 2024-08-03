const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255711607169";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_05_43_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk4LFxuICAgICAgICA2MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODksXG4gICAgICAgIDIxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTksXG4gICAgICAgIDM3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgODgsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDg1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk5LFxuICAgICAgICA5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQxLFxuICAgICAgICA5MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDgxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU2LFxuICAgICAgICA1NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MixcbiAgICAgICAgODYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjU4NWlLL0thanVUMXRnQXVrU2U0ajUzUFpONXBNVXlhNDZLcUFtYkcvYVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRzMGtjc085UWNxcjNPcjFlcjRkUlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzI1NjlkY2EtNWI0MC00MTY5LWE4M2EtYTc4NjRlNWIxODI0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDMsXG4gICAgICAxODYsXG4gICAgICAxODcsXG4gICAgICAxMTQsXG4gICAgICAxODksXG4gICAgICAxMzUsXG4gICAgICA0MCxcbiAgICAgIDQ5LFxuICAgICAgMTkxLFxuICAgICAgNDMsXG4gICAgICAxMTksXG4gICAgICA5MCxcbiAgICAgIDcyLFxuICAgICAgNDQsXG4gICAgICAxNzcsXG4gICAgICAxNDQsXG4gICAgICA2OCxcbiAgICAgIDE5NCxcbiAgICAgIDE5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTAsXG4gICAgICAxNjcsXG4gICAgICAxNyxcbiAgICAgIDIzMyxcbiAgICAgIDQ4LFxuICAgICAgMTEyLFxuICAgICAgMTEwLFxuICAgICAgMTQsXG4gICAgICAyMTksXG4gICAgICAyMTQsXG4gICAgICAxMjksXG4gICAgICAxMSxcbiAgICAgIDE2MyxcbiAgICAgIDgzLFxuICAgICAgMTYwLFxuICAgICAgNjAsXG4gICAgICA1OCxcbiAgICAgIDE1MSxcbiAgICAgIDIwOSxcbiAgICAgIDIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkw4NTRNTEdIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3MTE2MDcxNjk6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJIYW5jZWNhbmFcIixcbiAgICBcImxpZFwiOiBcIjE0NDA2MjI2Mjg1Nzk1NjozNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPNzNxdnNCRVBDR3Q3VUdHQXdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkMzYXEyZ3BQWnFPTVhNbVJpRDh6VUZSdnhvOFdlUHRhZ0crOWlwZjlKbTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiemFVRmtGWTFGQzhqc2ZwVzBkV0o1b0d2UlRMZVlvVUN5dVlKRVF4cFluekI2YlRzdlkzRlhTeUg2azIyYjRPTnBVNWRmY0tBYm5KOGs5WUF6N3RhQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRXhqS1NxZXZoRld0cFRSdmtOWnBKcFM2R1l1ZlBiWW9ZajRZREg1QVlOb1ZrTldyZlpjQ0N1aE91WVBQRENYR2tLZTdWeHdENDFNRFJob3lxRUE1QVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzExNjA3MTY5OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjY2Mzc5NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlEL1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUQvLmpzb24iOiB7fQp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
