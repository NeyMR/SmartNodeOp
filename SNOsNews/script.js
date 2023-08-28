// JavaScript code for tab behavior
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    function showTab(tabId) {
        tabs.forEach(tab => tab.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));

		const tab = document.querySelector(`[data-tab="${tabId}"]`);
		const content = document.querySelector(`[data-tab-content="${tabId}"]`);


        tab.classList.add("active");
        content.classList.add("active");
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const tabId = tab.getAttribute("data-tab");
            showTab(tabId);
        });
    });
});
