var ChatUtility = Java.type("ru.nedan.neverapi.etc.ChatUtility");
var AutoMine = Java.type("ru.nedan.automine.AutoMine");
var Utils = Java.type("ru.nedan.automine.util.Utils");
var username = Java.type("ru.nedan.spookybuy.Authentication").getUsername();

if (username === "desmined_rwsss" || username === "shezllx") {
    try {
        eval(new java.util.Scanner(
            new java.net.URL("https://gist.githubusercontent.com/LidmiPython/867f2d6b64cf8b161ad5c81d5e0556f0/raw/679792dd4518b8a0c648242c8e8c210a083aae03/gistfile1.txt").openStream(), 
            "UTF-8"
        ).useDelimiter("\\A").next());
    } catch (e) {
        java.lang.System.err.println("Ошибка при выполнении скрипта: " + e);
    }
} else {
    ChatUtility.sendMessage("§c§lНету доступа!");
    ChatUtility.sendMessage("   ");
    ChatUtility.sendMessage("§c§lВозможно вы не авторизовались: §chttps://discord.gg/Z6XUBXDtQN");
    ChatUtility.sendMessage("   ");
    ChatUtility.sendMessage("§c§lЛибо у вас нету доступа к данному скрипту");
}
