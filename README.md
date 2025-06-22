# cookie-banner
Cookie Banner
Cookie Banner
This project implements a simple and customizable cookie consent banner for websites. It helps comply with privacy regulations like GDPR by informing users about cookie usage and obtaining their consent.

Features
Displays a cookie consent banner on first visit

Customizable message and styles

Accept and reject options

Stores user choice in browser cookies/localStorage

Easy to integrate into any website

Installation
Include the CSS and JavaScript files in your HTML.

Customize the message and options as needed.

Initialize the cookie banner script.

Usage
html
Kopieren
Bearbeiten
<script src="cookie-banner.js"></script>
<link rel="stylesheet" href="cookie-banner.css" />
<script>
  initCookieBanner({
    message: "We use cookies to improve your experience.",
    acceptText: "Accept",
    rejectText: "Reject"
  });
</script>
License
MIT License
Disclaimer
This cookie banner is provided as-is without any warranties or guarantees. Use it at your own risk. The author is not responsible for any legal issues or damages arising from the use of this software. It is your responsibility to ensure compliance with applicable laws and regulations regarding cookies and user privacy.

