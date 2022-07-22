function initTabNav() {
    document.documentElement.className += ' js';

    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add('ativo');

    if (tabMenu.length && tabContent.length) {
        function activeTab(index) {
            tabContent.forEach(item => item.classList.remove('ativo'));
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((item, index) => {
            item.addEventListener('click', () => {
                activeTab(index);
            })
        });
    }
}
initTabNav();

function initAccordion() {
    const $dt = document.querySelectorAll('.js-accordion dt');
    if ($dt.length) {

        $dt[0].classList.add('dd-ativo');
        $dt[0].nextElementSibling.classList.add('dd-ativo');

        function activeAccordion() {
            this.classList.toggle('dd-ativo');
            this.nextElementSibling.classList.toggle('dd-ativo');
        }

        $dt.forEach((item) => item.addEventListener('click', activeAccordion));
    }
}
initAccordion();