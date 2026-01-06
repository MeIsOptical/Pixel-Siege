//#region COPYING TEXT
function copyText(container, textToCopy) {
    navigator.clipboard.writeText(textToCopy).then(function () {
        const tooltip = container.querySelector('.hover-text');
        tooltip.textContent = "Copied!";
        tooltip.style.color = "lime";
    }, function (err) {
        const tooltip = container.querySelector('.hover-text');
        tooltip.textContent = "Failed to copy :(";
        tooltip.style.color = "red";
        console.error("Copy failed", err);
    });
}

function resetTooltip(container) {
    const tooltip = container.querySelector('.hover-text');
    tooltip.textContent = "Click to copy";
    tooltip.style.color = "";
}

//#endregion


//#region NAV-LINK

const currentPath = window.location.pathname;
document.querySelectorAll('.navSelect').forEach(link => {
    if (link.getAttribute('href').toLowerCase() === currentPath.toLowerCase()) {
        link.classList.add('active');
    }
});


//#endregion


//#region DROPDOWN

document.querySelectorAll('.ps-dropdown-toggle').forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault();
        const menu = button.nextElementSibling;
        menu.classList.toggle('show');
    });
});

// Optional: Close dropdown if clicking outside
document.addEventListener('click', e => {
    document.querySelectorAll('.ps-dropdown-menu.show').forEach(menu => {
        if (!menu.contains(e.target) && !menu.previousElementSibling.contains(e.target)) {
            menu.classList.remove('show');
        }
    });
});


//#endregion