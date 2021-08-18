async function getUserData() {

    const repo = await fetch('https://api.github.com/repos/serge-web/serge/issues/988');
    const repoData = await repo.json();
    const normal = await fetch('https://api.github.com/repos/serge-web/serge/issues/988');
    const normalData = await normal.json();
    //TODO!!!! make comments_url display actual data not just the url
    // AND do the same for events_url
    //const comments_url = await fetch('https://api.github.com/repos/serge-web/serge/issues/988/comments');
    //const comments = comments_url.toString();
    //var rawComments = await fetch(repoData.comments_url);
    //document.querySelector('#avatar').setAttribute('src', repoData.avatar_url);
    document.querySelector('#title').innerHTML = `<strong> Issue Title: </strong> ${repoData.title}`
    document.querySelector('#id').innerHTML = `<strong> ID: </strong> ${repoData.id} ` 
    document.querySelector('#number').innerHTML = `<strong> Number: </strong> ${repoData.number}`
    document.querySelector('#comments').innerHTML = `<strong> Comments: </strong> ${repoData.comments} ` 
    docuemnt.querySelector('#state').innerHTML = `<strong> State: </strong> ${normalData.state}`  
}

window.addEventListener('DOMContentLoaded', () => {
    getUserData();
})