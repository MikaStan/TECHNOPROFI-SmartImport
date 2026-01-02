const popover = document.getElementById('form-popover');

// Закрыть popover
document.querySelector('.close-button').addEventListener('click', () => {
    popover.hidePopover();
}
);
