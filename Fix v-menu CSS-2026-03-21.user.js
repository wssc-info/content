// ==UserScript==
// @name         Fix v-menu CSS
// @namespace    http://tampermonkey.net/
// @version      2026-03-21
// @description  Override v-menu positioning!
// @author       You
// @match        https://westsideswimclub.com/wp-admin/admin.php?page=member-splash-dashboard
// @icon         https://www.google.com/s2/favicons?sz=64&domain=westsideswimclub.com
// @grant        none
// ==/UserScript==

//

(function() {
    'use strict';

    const css = `
        @media (max-width: 1559px) {
            .v-menu > .v-menu__content {
                position: unset !important;
            }
            .v-menu {
                position: relative !important;
                top: 0px !important;
                left: 0px !important;
            }
        }
    `;

    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);


})();
