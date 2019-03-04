let chatbot = new SimpleChatBot('input-text-id','input-text-register');


const appInfoButtonOpen = document.querySelector('.navegation-info-open');
      appInfoButtonOpen.addEventListener('click', displayAppInfoOpen);

      function displayAppInfoOpen(){
        const appInfo = document.querySelector('.app-info');
        appInfo.style.display = "block";
      }

const appInfoButtonClose = document.querySelector('.navegation-info-close');
      appInfoButtonClose.addEventListener('click', displayAppInfoClose);

      function displayAppInfoClose(){
        const appInfo = document.querySelector('.app-info');
        appInfo.style.display = "none";
      }
