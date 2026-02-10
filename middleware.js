(function() {
    // قائمة سوداء للبوتات المعروفة بصيد الروابط
    const blacklistedAgents = [/TelegramBot/i, /Twitterbot/i, /facebookexternalhit/i, /Slackbot/i, /Lighthouse/i, /Googlebot/i];
    const isBot = blacklistedAgents.some(pattern => pattern.test(navigator.userAgent));

    // إذا كان الزائر بوت، قم بتجميد الصفحة تماماً أو تحويله
    if (isBot) {
        window.stop(); // إيقاف تحميل أي كود آخر في المتصفح
        window.location.replace("https://www.google.com"); 
    }

    // حماية إضافية: منع فحص العنصر (Inspect Element) بشكل صامت
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'i')) {
            e.preventDefault();
        }
    });
})();
