var ChatUtility = Java.type("ru.nedan.neverapi.etc.ChatUtility");
var AutoMine = Java.type("ru.nedan.automine.AutoMine");
var Utils = Java.type("ru.nedan.automine.util.Utils");

// 3. Event handler
on("ru.nedan.automine.event.EventStaffJoin", function(e){
    if(!AutoMine.getInstance().isEnabled()) return;
    ChatUtility.sendMessage("§4§l[!] " + e.getUsername() + "§6 Зашел на Анархию" + Utils.getCurrentAnarchy() + "! §aВыхожу в хаб!");
    ChatUtility.sendMessage("§9§lПривет от §5§lVOID BYPASS");
    chat("/hub");
    ChatUtility.sendMessage("§9§lТаймаут 10 сек");
    // Добавляем задержку 10 секунд
    try {
        java.lang.Thread.sleep(10000); // 5000 миллисекунд = 10 секунд
    } catch (e) {
        // Игнорируем исключения прерывания
    }
    
    AutoMine.getInstance().nextMine = true;
});

ChatUtility.sendMessage("§a✓ Скрипт успешно загружен!");
ChatUtility.sendMessage("   ");
ChatUtility.sendMessage("§kaaaaaaaaaaaaaaa");
ChatUtility.sendMessage("   ");
ChatUtility.sendMessage("§4❌ Скрипт не работает когда автомайн выключен.");
ChatUtility.sendMessage("   ");
ChatUtility.sendMessage("§kaaaaaaaaaaaaaaa");
ChatUtility.sendMessage("   ");
ChatUtility.sendMessage("§2Привет от §5§lVOID BYPASS");
ChatUtility.sendMessage("   ");
ChatUtility.sendMessage("§kaaaaaaaaaaaaaaa");
ChatUtility.sendMessage("   ");
ChatUtility.sendMessage("§3Discord - desmined_rws");
ChatUtility.sendMessage("§9Funpay - https://funpay.com/users/6733254/");
ChatUtility.sendMessage("§bTelegram - @VOID_BYPASS_OWNER");
