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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_08_37_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDU5LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDYyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDM5LFxuICAgICAgICAxODYsXG4gICAgICAgIDgyLFxuICAgICAgICA1MixcbiAgICAgICAgODMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMCxcbiAgICAgICAgNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAyLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA0OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTQxLFxuICAgICAgICA2NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDcxLFxuICAgICAgICA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDMyLFxuICAgICAgICA4NixcbiAgICAgICAgMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDUyLFxuICAgICAgICA3OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDczLFxuICAgICAgICAxMDQsXG4gICAgICAgIDczLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDk1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjksXG4gICAgICAgIDYwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc0LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDc0LFxuICAgICAgICAzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU3LFxuICAgICAgICA1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgODAsXG4gICAgICAgIDgsXG4gICAgICAgIDUsXG4gICAgICAgIDc4LFxuICAgICAgICA3NixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI5LFxuICAgICAgICA1NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDg1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgODEsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZk5OcktHZU5ad3JaZjNHcUFrRWJ3U2w0V3dYN2pWc3B2blo2ZXdUcVA2Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3MTE2MDcxNjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ1RkExNUI2MTc4MDVENDkyRDgzNTk4NDc0RkMwNzE1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjY3NDIzOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBYzdJQzFhWlJRU1FobFpvT09tamR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjJlZmQxZjlhLTFjZjAtNDlhYy05NTU4LTU5MjFkOTRhM2RlNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDMxLFxuICAgICAgMTM5LFxuICAgICAgMTkxLFxuICAgICAgMjMsXG4gICAgICAxNjgsXG4gICAgICAxMTUsXG4gICAgICA5NSxcbiAgICAgIDE4MCxcbiAgICAgIDE1NixcbiAgICAgIDIwOSxcbiAgICAgIDIwNyxcbiAgICAgIDE1MyxcbiAgICAgIDEzNCxcbiAgICAgIDE0NixcbiAgICAgIDIzOCxcbiAgICAgIDE3NSxcbiAgICAgIDEzNyxcbiAgICAgIDE2MixcbiAgICAgIDE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMixcbiAgICAgIDY1LFxuICAgICAgMTksXG4gICAgICAyMjIsXG4gICAgICAyMzUsXG4gICAgICAyMzUsXG4gICAgICAxODUsXG4gICAgICA4NyxcbiAgICAgIDY3LFxuICAgICAgNDUsXG4gICAgICAxMzYsXG4gICAgICAxODAsXG4gICAgICAyNTQsXG4gICAgICAxNDIsXG4gICAgICAyMzMsXG4gICAgICAxNDEsXG4gICAgICAzNSxcbiAgICAgIDU0LFxuICAgICAgMTU3LFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOVBXWEI5UTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTcxMTYwNzE2OTozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkhhbmNlY2FuYVwiLFxuICAgIFwibGlkXCI6IFwiMTQ0MDYyMjYyODU3OTU2OjM5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08vM3F2c0JFTExZdDdVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQzNhcTJncFBacU9NWE1tUmlEOHpVRlJ2eG84V2VQdGFnRys5aXBmOUptOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiMFZPL2t2eUJJVGZmczYvR2NTMEozL3A2UkVqVlloQ1M3MEZieVBmbjJIVlN2Vmp4eWhBUGd4OU14MDRqM2dleSsxVzEreDF6Vjh0UjNjNHUyRXRBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSbjJyK1ZtOWpRU3RnSmpzL2pqMWFCQlVhempKKzc5d3EycHlsb0FvQU55OHk2cEgwZTFONEpmdEdXVERpQ1V3L3BuK0h2d3hTODBxM21Ea04xUXNEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3MTE2MDcxNjk6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjc0MjMxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSUQvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJRC8uanNvbiI6IHt9Cn0=


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
