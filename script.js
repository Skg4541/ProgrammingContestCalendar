let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contest) => {
  console.log(contest)
  ihtml = ""
  for (item in contest) {
    if (contest[item].status == "CODING") {
      ihtml += `<div id="ContestCard">
        <h5 class="card-title">${contest[item].name}</h5>
        <p class="card-text"> Contest is Hosted on <b>${contest[item].site}</b></p>
        <p class="card-text">Starts at: ${contest[item].start_time}</p>
          <p class="card-text">Ends at: ${contest[item].end_time}</p>
            <a href="${contest[item].url}" class = "btn card-text"> Visit Contest</a >
          </div > `
    }
  }
  Ongoing_Contest.innerHTML=ihtml;
  ihtml=""
  for (item in contest) {
    if (contest[item].status != "CODING") {
      ihtml += `<div id="ContestCard">
        <h5 class="card-title">${contest[item].name}</h5>
        <p class="card-text"> Contest is Hosted on <b>${contest[item].site}</b></p>
        <p class="card-text">Starts at: ${contest[item].start_time}</p>
          <p class="card-text">Ends at: ${contest[item].end_time}</p>
            <a href="${contest[item].url}" class = "btn card-text"> Visit Contest</a >
          </div > `
    }
  }
  Upcoming_Contest.innerHTML=ihtml
})