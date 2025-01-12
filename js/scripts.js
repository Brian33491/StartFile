//inject current year in footer
const thisYear = new Date();
document.querySelector('#year').textContent = thisYear.getFullYear();