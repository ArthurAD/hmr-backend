const clientText = document.querySelector('#client-text');

clientText.innerHTML = '2222';
clientText.style.color = '#d44950';

if (module.hot) {
	module.hot.accept();
}
