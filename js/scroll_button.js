function scrollToElement(buttonId, targetId) {
    document.getElementById(buttonId).addEventListener('click', function() {
        // Scroll to target element
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
}

scrollToElement('SimpleCommandsButton', 'SimpleCommands')
scrollToElement('R34Button', 'R34')
scrollToElement('EconomyButton', 'Economy')