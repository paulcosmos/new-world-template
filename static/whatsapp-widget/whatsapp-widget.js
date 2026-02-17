const whatsappWidget = document.querySelector('.whatsapp-widget');

function loadWidget() {
    fetch('./whatsapp-widget/whatsapp-widget.html')
        .then(res => res.text())
        .then(html => {
            whatsappWidget.innerHTML = html;

            // Get the current time
            const timeElement = whatsappWidget.querySelector('time');
            if (timeElement) {
                const now = new Date();
                const hours = now.getHours().toString().padStart(2, '0');
                const minutes = now.getMinutes().toString().padStart(2, '0');
                timeElement.textContent = `${hours}:${minutes}`;
            }

            // Format phone number
            const whatsappLink = whatsappWidget.querySelector('.chat-body a[href^="https://wa.me/"]');
            if (whatsappLink) {
                let phoneNumber = whatsappLink.getAttribute('href').replace('https://wa.me/', '');

                // Remove spaces and replace leading 0 with +44
                phoneNumber = phoneNumber.replace(/\s+/g, '').replace(/^0/, '+44');

                // Update href with the correct format
                whatsappLink.setAttribute('href', `https://wa.me/${phoneNumber}`);
            }

            // Widget interactions
            const widgetIcon = whatsappWidget.querySelector('.whatsapp-icon');
            const chatWindow = whatsappWidget.querySelector('.whatsapp-chat-window');
            const closeButton = whatsappWidget.querySelector('.close-chat-window');

            if (widgetIcon && chatWindow) {
                widgetIcon.addEventListener('click', () => {
                    chatWindow.classList.toggle('open-chat-window');
                });
            }

            if (closeButton && chatWindow) {
                closeButton.addEventListener('click', () => {
                    chatWindow.classList.remove('open-chat-window');
                });
            }

            // Scroll detection
            window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY + window.innerHeight;
                const pageHeight = document.documentElement.scrollHeight;

                // Add slide-up-icon class if scrolled more than 200px
                if (window.scrollY > 200) {
                    whatsappWidget.classList.add('slide-up-icon');
                }
            });
        })
        .catch(err => console.error('Error loading WhatsApp widget:', err));
}

loadWidget();
