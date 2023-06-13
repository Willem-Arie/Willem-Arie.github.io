// API call to get carbon intensity data from the National Grid
const headers = {
  'Accept': 'application/json'
};

async function getCarbonIntensity() {
  try {
    const response = await fetch('https://api.carbonintensity.org.uk/intensity/date', {
      method: 'GET',
      headers: headers
    });

    const body = await response.json();

    // DOM manipulation
    for (var i = 0; i < body.data.length; i++) {
      let break1 = document.createElement("br")
      let break2 = document.createElement("br")
      let break3 = document.createElement("br")
      let htmlselect = document.createElement("details");
      let starttime = document.createElement("summary")
      starttime.innerHTML += "Start Time: " + body.data[i].from;
      let htmlbody = document.getElementById("data");
      let date = document.createElement("summary")
      date.innerHTML += "Date: " + body.data[i].from.slice(0, 10) + " Period: " + body.data[i].from.slice(11, 16) + " - " + body.data[i].to.slice(11, 16);
      let endtime = document.createElement("summary")
      endtime.innerHTML += "End Time: " + body.data[i].to;
      let forecast = document.createElement("summary")
      forecast.innerHTML += "Forecast Intensity: " + body.data[i].intensity.forecast;
      let actual = document.createElement("summary")
      actual.innerHTML += "Actual Intensity: " + body.data[i].intensity.actual;
      let index = document.createElement("summary")
      if (body.data[i].intensity.index == "very low") {
      index.innerHTML += "Index: " + body.data[i].intensity.index;
      index.style.color = "green";
      } else if (body.data[i].intensity.index == "low") {
      index.innerHTML += "Index: " + body.data[i].intensity.index;
      index.style.color = "yellow";
      } else if (body.data[i].intensity.index == "moderate") {
      index.innerHTML += "Index: " + body.data[i].intensity.index;
      index.style.color = "orange";
      } else if (body.data[i].intensity.index == "high") {
      index.innerHTML += "Index: " + body.data[i].intensity.index;
      index.style.color = "red";
      } else if (body.data[i].intensity.index == "very high") {
      index.innerHTML += "Index: " + body.data[i].intensity.index;
      index.style.color = "purple";
      } else if (body.data[i].intensity.index == "extreme") {
      index.innerHTML += "Index: " + body.data[i].intensity.index;
      index.style.color = "black";
      }

      htmlbody.appendChild(htmlselect);
      htmlselect.appendChild(date);
      htmlselect.appendChild(starttime);
      htmlselect.appendChild(endtime);
      htmlselect.appendChild(break1);
      htmlselect.appendChild(forecast);
      htmlselect.appendChild(actual);
      htmlselect.appendChild(break2);
      htmlselect.appendChild(index);
      htmlselect.appendChild(break3);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

getCarbonIntensity();
