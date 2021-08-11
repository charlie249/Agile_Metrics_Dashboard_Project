async function getUserData() {

    const repo = await fetch('https://api.github.com/repos/serge-web/serge/issues');
    const repoData = await repo.json();
    //document.querySelector('#avatar').setAttribute('src', repoData.avatar_url);

    document.querySelector('#info').innerHTML = `<strong> Labels: </strong> ${repoData} <strong> Actions: </strong> ${repoData.actions}` // <strong> Following: </strong> ${repoData.following} `
   // var gs = require('github-scraper');
   // gs(repo, function(err, data) {
   //    document.querySelector('#info').innerHTML = `<strong> Labels: </strong> ${userData.data}`
   // })
}

window.addEventListener('DOMContentLoaded', () => {
    getUserData();
})