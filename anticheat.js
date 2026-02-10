/* نظام حماية المطور أحمد - إصدار منع البوتات الشامل
   وظيفته: قتل الجلسة إذا كان الزائر لا يظهر سلوكاً بشرياً
*/

(function() {
    // 1. فحص البصمة التقنية (التحقق من وجود محرك محاكاة)
    if (navigator.webdriver || !navigator.languages || navigator.plugins.length === 0) {
        window.location.replace("https://www.google.com");
        return;
    }

    // 2. قائمة سوداء شاملة لجميع بوتات المعاينة (تليجرام، فيسبوك، واتساب، إلخ)
    const botList = [
        'TelegramBot', 'Twitterbot', 'facebookexternalhit', 'WhatsApp', 
        'SkypeShell', 'Slackbot', 'Googlebot', 'AdsBot-Google', 'bingbot', 
        'yandex', 'baiduspider', 'Lighthouse'
    ];

    const currentUA = navigator.userAgent;
    const isBot = botList.some(bot => currentUA.includes(bot));

    if (isBot) {
        // إذا كان بوت، نوقف التحميل فوراً ونفرغ الصفحة
        window.stop();
        document.documentElement.innerHTML = ""; 
        window.location.replace("https://www.wikipedia.org");
    }

    // 3. حماية إضافية: إذا كان العرض (Width) صفر أو الارتفاع صفر (متصفحات خفية)
    if (window.innerWidth <= 1 || window.innerHeight <= 1) {
        window.location.replace("https://www.bing.com");
    }
})();
