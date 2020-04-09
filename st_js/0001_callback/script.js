const change_btn = document.getElementById('change_btn');
const curtain = document.getElementById('curtain');
const curtain_rGray = document.getElementById('curtain_rGray')
const curtain_gray = document.getElementById('curtain_gray');
const curtain_key = document.getElementById('curtain_key');

function classToggle(el) {
  el.classList.toggle('is-active');
}

change_btn.addEventListener('click', btnClickEvent);

/**
 * btnクリックイベント
 */
function btnClickEvent() {
  changeCurtain(function() {
    classToggle(curtain);
  });
}

const addCurtain_ms = 500;
const removeCurtain_ms = 300;

function changeCurtain(callback) {

  if(!curtain.classList.contains('is-active')) {
    //バインドで実装してみた
    curtainOnRGray(curtainOnGray.bind(null, curtainOnKey.bind()));
  } else {
    //Promiseで実装してみた
    removeCurtain(0).then(function() {
      classToggle(curtain_key);
      return removeCurtain(removeCurtain_ms);
    }).then(function() {
      classToggle(curtain_gray);
      return removeCurtain(removeCurtain_ms);
    }).then(function() {
      classToggle(curtain_rGray);
    })
  }
  callback();
}
//**grayの切り替え */
function curtainOnRGray(callback) {
  setTimeout(function() {
    classToggle(curtain_rGray);
    callback();
  }, 0);
}
function curtainOnGray(callback) {
  setTimeout(function() {
    classToggle(curtain_gray);
    callback();
  }, addCurtain_ms);
}
function curtainOnKey() {
  setTimeout(function() {
    classToggle(curtain_key);
  }, addCurtain_ms);
}

//カーテンオフ
function removeCurtain(ms) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve()
    }, ms)
  })
}