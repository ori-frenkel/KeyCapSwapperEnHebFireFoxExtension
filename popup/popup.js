"use strict";

/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */
async function listenForClicks() {
    document.addEventListener("click", (e) => {
        /**
         * Given the name of a button that been clicked, excuting the corresponding content script.
         */
        async function actionToScript(clickedBtn) {
            switch (clickedBtn) {
                case "Next Field":
                    browser.tabs.executeScript({
                        code: 'var firstField = 0;'
                      }).catch(reportError);
                    browser.tabs.executeScript({file: "./../content_scripts/nextFieldMarker.js"}).catch(
                        reportError);
                    break;
                case "Swap":
                    // console.log("swap btn been clicked, now calling the script");
                    browser.tabs.executeScript({file: "./../content_scripts/inputLanguageSwapper.js"}).catch(
                        reportError);
                    break;
                case "First Field":
                    // inserting flag that to mark the first input field
                    browser.tabs.executeScript({
                        code: 'var firstField = 1;'
                      }).catch(reportError);
                    browser.tabs.executeScript({file: "./../content_scripts/nextFieldMarker.js"}).catch(
                        reportError);
                    break;
                default:
                    break;
            }
        }

        /**
         * log the error
         */
        function reportError(error) {
            console.error(`Something went wrong: ${error}`);
            alert(`Something went wrong: ${error}`);
        }

        if (e.target.classList.contains("btn")) {
            console.log("what?");
            actionToScript(e.target.textContent);
        }
    });
}

listenForClicks();