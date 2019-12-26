let referrer = Libs.ReferralLib.currentUser.attractedByUser();
let ref = amount * 0.10;

if(referrer){
  let referrerRes = Libs.ResourcesLib.anotherUserRes("balance", referrer.telegramid);
let referrerTotalDeposit = Libs.ResourcesLib.anotherUserRes("TotalDeposit", referrer.telegramid);
let referrerTotalGain = Libs.ResourcesLib.anotherUserRes("TotalGain", referrer.telegramid);

referrerRes.add(ref);
referrerTotalDeposit.add(amount);
referrerTotalGain.add(ref);

Bot.sendMessageToChatWithId(referrer.telegramid, "Text");
}
