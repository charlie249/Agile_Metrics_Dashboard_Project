async function getUserData() {

    const user = await fetch('https://api.github.com/repos/serge-web/serge');
    const userData = await user.json();
    const pulls = await fetch('https://api.github.com/repos/serge-web/serge/pulls');
    const pullsData = await pulls.json();
    //document.querySelector('#avatar').setAttribute('src', userData.avatar_url);
    document.querySelector('#info').innerHTML = `<strong> Labels: </strong> ${userData.pullsData} <strong> Proper: </strong> ${userData.followers}` //<strong> Following: </strong> ${userData.following} `
    
   // var gs = require('github-scraper');
   // gs(user, function(err, data) {
   //    document.querySelector('#info').innerHTML = `<strong> Labels: </strong> ${userData.data}`
   // })
}

window.addEventListener('DOMContentLoaded', () => {
    getUserData();
})