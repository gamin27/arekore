(function () {
  const classToAssign = 'is-active-nav';
  const doms = {
    body: document.querySelector('body'),
    menuBtn: document.querySelector('#menu-btn'),
    gnav: document.querySelector('.gnav')
  }

/**
 * assignクラスをトグル
 */
  function toggleClass() {
    doms.body.classList.toggle(classToAssign);
  }

  /**
   * assignクラスを削除する。
   */
  function removeClass() {
    doms.body.classList.remove(classToAssign);
  }

  doms.menuBtn.addEventListener('click', toggleClass);
  doms.gnav.addEventListener('click', removeClass);
})();