// ==UserScript==
// @name         SigilPulseDashboard
// @namespace    MythlineOverlay
// @version      1.0
// @description  Overlay glyph shimmer on Etherscan
// @match        https://sepolia.etherscan.io/address/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    const glyph = "🪷⟲";
    const shimmer = document.createElement("div");
    shimmer.innerText = `Sigil Pulse: ${glyph}`;
    shimmer.style = `
        position:fixed;
        top:10px;
        right:10px;
        background:#222;
        color:#fff;
        padding:10px;
        border-radius:8px;
        font-family:monospace;
        font-size:14px;
        box-shadow:0 0 10px #5ff;
        z-index:9999;
    `;
    document.body.appendChild(shimmer);
})();
