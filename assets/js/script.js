// 控制台问候语
console.log("\n %c Made with love %c by AyagawaSeirin | Sakurairinaqwq | arkn.icu ","color:#444;background:#eee;padding:5px 0;","color:#F8F8FF;background:#F4A7B9;padding:5px 0;");

// 动画初始化：让卡片动起来！
AOS.init({
    // 动画持续时间（毫秒）
    duration: 800, 
    // 滚动时是否只触发一次动画
    once: true, 
    // 触发动画时的元素可视比例（从 0 到 1）
    offset: 120,
});


// 增强加载器：加载后使用交错动画隐藏
window.addEventListener('load', function() {
    // 性能优化: 缩短加载器总延迟时间，让页面更快出现
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${(index + 1) * 0.05}s`;
    });
    
    // 缩短为 800ms，加速页面显示
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            // 延迟一点时间再彻底隐藏，防止点击到下面的元素
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500); 
        }
    }, 800); 

    // 修复：MDUI 抽屉在某些情况下需要手动初始化，确保响应式菜单可用
    const drawer = document.getElementById('rin-drawer');
    if (drawer) {
        // 使用 mdui.Drawer 构造函数来初始化
        new mdui.Drawer('#rin-drawer');
    }
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