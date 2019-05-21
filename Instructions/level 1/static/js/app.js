// from data.js
var tableData = data;

// Table references
var tbody = d3.select("tbody");

function buildTable(data) {

// Clearing any existing data
tbody.html("");
  
// Loop through each object in the data, append a row and cells for each value in the row
      data.forEach((dataRow) => {
      // Append a row to the table body
      var row = tbody.append("tr");
  
// Loop through each field in the dataRow, add each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        var cell = row.append("td");
          cell.text(val);
        }
      );
    });
  }
  
  function handleClick() {
  
    // Prevent the form from refreshing the page
    d3.event.preventDefault();
  
    // Grab the datetime value from the filter
    var date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
    // Check to see if a date was entered and filter the data using that date.
    if (date) {
      // Filter` table data to only keep the rows where the `datetime` is same as filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
    // Rebuild table using the filtered data 
     buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);
  