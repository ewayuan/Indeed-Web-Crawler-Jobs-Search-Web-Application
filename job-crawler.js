const request = require("request");
const cheerio = require("cheerio");
const url = 'https://ca.indeed.com/Software-Developer-jobs-in-toronto';
const fs = require('fs');


var pageUrls = [];
var JobArr = [];
var index = 0;

for(var i=0 ; i<= 500 ; i+=10){
  if (i == 0){
    pageUrls.push(url);
  } else{
    pageUrls.push('https://ca.indeed.com/jobs?q=Software+Developer&l=toronto&start='+i);
  }
    
}

pageUrls.forEach(function(pageUrl){
  request(pageUrl, (err, res, html) => {
    // SinglePageJob = [];
        console.log(pageUrl);
        const $ = cheerio.load(html);
        $('div.jobsearch-SerpJobCard').each(function(i,v) {
          JobArr.push({
            JobTitle: $(v).find('a.jobtitle.turnstileLink').attr("title"),
            Company: $(v).find(".company").text().trim(),
            Location: $(v).find("div.recJobLoc").attr("data-rc-loc"),
            JobSalary: $(v).find("span.salaryText").text().trim(),
            JobSummary: $(v).find("div.summary").text().trim(),
            PostDate: $(v).find("span.date").text().trim(),
            JobLink: 'https://ca.indeed.com' + $(v).find('a.jobtitle.turnstileLink').attr("href"),
          });
        });
        let data = JSON.stringify(JobArr, null, 2);

        fs.writeFile('job.json', data, (err) => {
          if (err) throw err;
          console.log('Data written to file');
        });

  });
});


