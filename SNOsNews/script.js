// JavaScript code for tab behavior
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs and tab contents
            tabs.forEach(t => t.classList.remove("active"));
            tabContents.forEach(tc => tc.classList.remove("active"));

            // Add active class to the clicked tab and its corresponding content
            tab.classList.add("active");
            const activeTabContent = document.querySelector(`[data-tab=${tab.getAttribute("data-tab")}]`);
            activeTabContent.classList.add("active");
        });
    });
});