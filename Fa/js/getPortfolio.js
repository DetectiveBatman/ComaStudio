$(document).ready(() => {
  $.post('/api/getPortfolio', (res) => {
    console.log(res);
  });
});
