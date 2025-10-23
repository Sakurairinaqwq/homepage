// 控制台问候语
console.log("\n %c Made with love %c by AyagawaSeirin | Sakurairinaqwq | arkn.icu ","color:#444;background:#eee;padding:5px 0;","color:#F8F8FF;background:#F4A7B9;padding:5px 0;");

// 增强加载器：加载后使用交错动画隐藏
window.addEventListener('load', function() {
    // 在加载器中隐藏字母之前播放动画
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${(index + 1) * 0.05}s`;
    });
    
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 2500); // 延长完整动画的延迟时间
});

// 锚链接的平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 视差效果已移除 - Hero 部分现为静态

// Google Analytics（如有需要，请取消注释）
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', '');