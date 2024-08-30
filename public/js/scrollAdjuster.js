// 文件: public/js/scrollAdjuster.js

function initScrollAdjuster() {
    const banner = document.querySelector('.swiper-wrapper-container');
    const header = document.querySelector('header'); // 假设有一个固定定位的 header
    
    function getOffset() {
      const bannerHeight = banner ? banner.offsetHeight : 0;
      const headerHeight = header ? header.offsetHeight : 0;
      return headerHeight + 20; // 20px 的额外空间
    }
  
    function adjustScroll() {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const target = document.querySelector(hash);
          if (target) {
            const offset = getOffset();
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    }
  
    // 处理页内链接点击
    document.body.addEventListener('click', function(e) {
      if (e.target.tagName === 'A' && e.target.hash) {
        e.preventDefault();
        window.location.hash = e.target.hash;
        adjustScroll();
      }
    });
  
    // 处理直接访问带hash的URL
    window.addEventListener('load', adjustScroll);
    
    // 处理通过浏览器前进/后退按钮导航
    window.addEventListener('hashchange', adjustScroll);
  }