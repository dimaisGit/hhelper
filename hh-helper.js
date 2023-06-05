// ==UserScript==
// @name         HH Helper
// @namespace    https://github.com/dimaisgit
// @version      0.1
// @description  HH Helper
// @author       dimaisgit
// @match        *://hh.ru/*
// @icon         data:image/png;base64,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
// @grant        none
// ==/UserScript==

const SELECTORS = {
  navigation: {
    myResumes: "[data-qa='mainmenu_myResumes']",
    vacanciesResponses: "[data-qa='mainmenu_vacancyResponses']",
  },
  search: {
    input: "[data-qa='search-input']",
    button: "[data-qa='search-button']",
  },
};

const init = async () => {
  console.log("hello");
};

init();
