async function getUserData() {

    const repo = await fetch('https://api.github.com/repos/serge-web/serge/issues');
    const repoData = await repo.json();
    //document.querySelector('#avatar').setAttribute('src', repoData.avatar_url);
    document.querySelector('#info').innerHTML = `<strong> Labels: </strong> ${repoData} <strong> Actions: </strong> ${repoData.actions}` // <strong> Following: </strong> ${repoData.following} `

   //const userAction = async () => {
      //  const response = await fetch('https://api.github.com/repos/serge-web/serge/issues');
        //const myJson = await response.json(); //extract JSON from the http response
        //document.querySelector('#info').innerHTML = `<strong> Labels: </strong> ${myJson} //<strong> Actions: </strong> ${repoData.actions}`
     // }
    // document.querySelector('#info').innerHTML = `<strong> Labels: </strong> ${repoData} <strong> Actions: </strong> ${repoData.actions}` // <strong> Following: </strong> ${repoData.following} `

   // var gs = require('github-scraper');
   // gs(repo, function(err, data) {
   //    document.querySelector('#info').innerHTML = `<strong> Labels: </strong> ${userData.data}`
   // })
}

window.addEventListener('DOMContentLoaded', () => {
    getUserData();
})