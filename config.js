//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "27682708973";
global.owner = process.env.OWNER_NUMBER || "27682708973";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUh4NUVWaVk2WVdnN3lBQTkyaE5GNDl1SnFpRkZlUkJmWVlIRDRQNmFuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWhxZFZqZWZKUlJ2Q2xJM3NpWTM2dG9uL0VaRmZIcy9ieHpieDZZNGlXbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQTQ2UDFDUnVlTmg5SzMyYmljTFlDcENycmF3cEk2NC9GMFpZV2NBZTBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDci9GclBxOEkvTDdDeU10Q0pKZ2p1cnk5Ump0NTdJaXJWM29ZWDVqa3dJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitNN1NQZ0tTU0Z5SFFUMGE4R0s4Z1o4TFI1R2pvcndEMzlCS3pleDI2SDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE5TmdSclYzaTcvTVF0UGVHNjZGZGZPVG53YkREcGFWeWZDeHNzdTEvUnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0ROUVBpalRKZXhIVlMwTUt4cVl6eWNyY3pRdDZ3WHhrUVZSYmFlc3Ftaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidytoNWxwS2ZzQ05BU0RxYkUvQ25SSUhibFBFbmozQWlVYVBpWGZGOWVuMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im4wWHBOa0sxNW05bnVxRStRUXE3S0VRQ3BIRm5mR3JsTElaOXJBQWdhRkpSblIyU3Y2T2NZQ2daaEJNZUlENEM2MkpmREFBZjcrNHRHWlhzRlA0NUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiJlWjFlWGRrTkxHcmxDREw5ZlUwWXdxL3QyZEJJNFMxVkFiUzgrbU52enEwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXbDlIQm0wblRWcXdlaFpVUFNkdGhRIiwicGhvbmVJZCI6IjhhM2ZjOTQ4LWFkMzYtNGQ0Ni1hMGQ5LWJlZjBiYjc0ZDUyNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQelFSVklNeDVTd2xBU3drUEk4Rmp4NEx4UFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHpGU3RRUUFScHBiNGdxZElRUjh1Nk14ZHlrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5TVzhOTE5GIiwibWUiOnsiaWQiOiIyNzY4MjcwODk3MzozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkltbWFudWVsIEZlbGl4In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPTzBocVVFRU82R2diY0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJuQVlyMERubWcxNGF3cDJqUXExa3VzNkpFbHhJeVgyTytiMDNnR2s2MEdrPSIsImFjY291bnRTaWduYXR1cmUiOiJEdTg0bkVKQkQ5dVRWeVBhcWcwMEdUNlEyUWhpSUNFa2dzNmNNTXoyRTRnRnFzV1hUTWJvbEo2UGJyWVNiNVR4RUlYeGF1NDNYT2lhU3EyWXhydjFEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicmlEWStWSy91ajBlN1RpUUZhbnVJOVRMK2swMFdkczY0K0txMFExcjNGNUlGK2E2VWZPcVBMaldYRVlqdnhnTnI2cDZhbzNvMGxwTVhQZkVMZmFRQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzY4MjcwODk3MzozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlp3R0s5QTU1b05lR3NLZG8wS3RaTHJPaVJKY1NNbDlqdm05TjRCcE90QnAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU5NzMzNzJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
