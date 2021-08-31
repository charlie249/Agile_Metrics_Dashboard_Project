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

    
    var DateDiff = {
        inDays: function(d1, d2) {
            var t2 = d2.getTime();
            var t1 = d1.getTime();

            return parseInt((t2-t1)/(24*3600*1000));
        },

        inWeeks: function(d1, d2) {
            var t2 = d2.getTime();
            var t1 = d1.getTime();

            return parseInt((t2-t1)/(24*3600*1000*7));
        },

        inMonths: function(d1, d2) {
            var d1Y = d1.getFullYear();
            var d2Y = d2.getFullYear();
            var d1M = d1.getMonth();
            var d2M = d2.getMonth();

            return (d2M+12*d2Y) - (d1M+12*d1Y);
        },
        inYears: function(d1, d2) {
            return d2.getFullYear()-d1.getFullYear();
        }
    }

    var dString = "May, 20, 1984";

    var d1 = new Date(dString);
    var d2 = new Date90;

    document.querySelector('#days').innerHTML = `<strong> Days: </strong> <br />Number of <b>days</b> since`+dString+`: `+DateDiff.inDays(d1, d2);
    document.querySelector('#weeks').innerHTML = `<strong> Closed at: </strong> ${repoData.closed_at}`
    document.querySelector('#months').innerHTML = `<strong> Closed at: </strong> ${repoData.closed_at}`
    document.querySelector('#years').innerHTML = `<strong> Closed at: </strong> ${repoData.closed_at}`

   // Document.write("<br />Number of <b>days</b> since"+dString+": "+DateDiff.inDays(d1, d2));
   // Document.write("<br />Number of <b>weeks</b> since"+dString+": "+DateDiff.inWeeks(d1, d2));
   // Document.write("<br />Number of <b>months</b> since"+dString+": "+DateDiff.inMonths(d1, d2));
   // Document.write("<br />Number of <b>years</b> since"+dString+": "+DateDiff.inYears(d1, d2));
    
    
    
    //Set two dates to two variables
    //var rawCreated = await fetch(repoData.created_at);
    //var rawClosed = await fetch(repoData.closed_at);
    //var date1 = new Date("06/30/2019"); 
	//var date2 = new Date("07/30/2019"); 
  
    //var Time = rawClosed.getTime();
    //var Days = Time / (1000 * 3600 * 24); //Difference in Days

    //document.write(Days);
    //document.querySelector('#calculation').innerHTML = `<strong> Calculation: </strong> ${Days}`
    



    

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