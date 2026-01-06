document.addEventListener('DOMContentLoaded', () => {
    


    const toast = document.getElementById('toast-message');
    const toastBtn = document.getElementById('toast-button');
    const toastCloseBtn = toast.querySelector('.toastClose');
    const popup = document.getElementById('popup');
    const closeBtn = popup.querySelector('.close');

    if (!toast || !toastCloseBtn || !popup || !closeBtn) {
        console.error('Required elements not found in DOM');
        return;
    }

    setTimeout(() => {
        toast.style.visibility = 'visible';
        toast.style.opacity = 1;
    }, 2000);

    toastBtn.addEventListener('click', () => {
        toast.style.visibility = 'hidden';
        popup.style.display = 'flex';
    });

    toastCloseBtn.addEventListener('click', () => {
        toast.style.display = 'none';
    });

    closeBtn.addEventListener('click', () => {
        toast.style.visibility = 'visible';
        popup.style.display = 'none';
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            toast.style.visibility = 'visible';
            popup.style.display = 'none';
        }
    });
});
