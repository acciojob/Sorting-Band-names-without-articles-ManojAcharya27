//your code here
let bandNames = ['The Rolling Stones', 'Pink Floyd', 'The Beatles', 'Led Zeppelin', 'Queen'];

function sortAndDisplayBandNames() {
  // Remove articles from band names and create a new array
  let sortedBandNames = bandNames.map(name => {
    // Remove leading articles using regular expressions
    return name.replace(/^(a|an|the)\s/i, '');
  });

  // Sort the band names in lexicographic order
  sortedBandNames.sort();

  // Get the <ul> element with the id 'band'
  let bandList = document.getElementById('band');

  // Clear any existing content inside the <ul> element
  bandList.innerHTML = '';

  // Add each band name as an <li> element inside the <ul> element
  sortedBandNames.forEach(name => {
    let listItem = document.createElement('li');
    listItem.textContent = name;
    bandList.appendChild(listItem);
  });
}
