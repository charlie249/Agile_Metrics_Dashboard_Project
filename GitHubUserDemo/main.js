async function getUserData() {

    const repo = await fetch('https://api.github.com/repos/serge-web/serge/issues/994');
    const repoData = await repo.json();
    //TODO make comments_url and events_url display actual data not just the url
    //var rawComments = await fetch(repoData.comments_url);
    //var comments = await rawComments.text();
    //var comment = String(comments);
    //document.querySelector('#avatar').setAttribute('src', repoData.avatar_url);
    document.querySelector('#title').innerHTML = `<strong> Issue Title: </strong> ${repoData.title}`
    document.querySelector('#id').innerHTML = `<strong> ID: </strong> ${repoData.id} ` 
    document.querySelector('#number').innerHTML = `<strong> Number: </strong> ${repoData.number}`
    document.querySelector('#comments').innerHTML = `<strong> Comments: </strong> ${repoData.comments_url}`
    document.querySelector('#state').innerHTML = `<strong> State: </strong> ${repoData.state}`   
    document.querySelector('#created').innerHTML = `<strong> Created at: </strong> ${repoData.created_at}`
    document.querySelector('#closed').innerHTML = `<strong> Closed at: </strong> ${repoData.closed_at}`

}

window.addEventListener('DOMContentLoaded', () => {
    getUserData();
})