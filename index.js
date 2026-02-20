function setupToggle(buttonId, blockId, showText, hideText) {
    const btn = document.getElementById(buttonId);
    const block = document.getElementById(blockId);

    
    btn.textContent = showText;

    btn.addEventListener("click", () => {
        block.classList.toggle("hidden");

        if (block.classList.contains("hidden")) {
            btn.textContent = showText;
        } else {
            btn.textContent = hideText;
        }
    });
}

setupToggle("toggleQuantBtn", "quantBlock", "Show Quantitative Variables", "Hide Quantitative Variables");
setupToggle("toggleOrdinalBtn", "ordinalBlock", "Show Ordinal Variables", "Hide Ordinal Variables");
setupToggle("toggleNominalBtn", "nominalBlock", "Show Nominal Variables", "Hide Nominal Variables");