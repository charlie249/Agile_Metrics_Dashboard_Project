async function getUserData() {

    const repo = await fetch('https://api.github.com/repos/serge-web/serge');
    const repoData = await repo.json();
    //const pullData = await pulls.json();
    //const pull = await fetch('https://github.com/serge-web/serge/pull/987');
    //document.querySelector('#avatar').setAttribute('src', repoData.avatar_url);
    document.querySelector('#info').innerHTML = `<strong> Labels: </strong> ${repoData} <strong> Proper: </strong> ${repoData.followers}` // <strong> Following: </strong> ${repoData.following} `
    
   // var gs = require('github-scraper');
   // gs(repo, function(err, data) {
   //    document.querySelector('#info').innerHTML = `<strong> Labels: </strong> ${userData.data}`
   // })
}

window.addEventListener('DOMContentLoaded', () => {
    getUserData();
})