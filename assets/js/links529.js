const state529Links = {
  "alabama": "https://www.collegesavings.org/plans/alabama",
  "alaska": "https://www.collegesavings.org/plans/alaska",
  "arizona": "https://www.collegesavings.org/plans/arizona",
  "arkansas": "https://www.collegesavings.org/plans/arkansas",
  "california": "https://www.collegesavings.org/plans/california",
  "colorado": "https://www.collegesavings.org/plans/colorado",
  "connecticut": "https://www.collegesavings.org/plans/connecticut",
  "delaware": "https://www.collegesavings.org/plans/delaware",
  "district-of-columbia": "https://www.collegesavings.org/plans/district-of-columbia",
  "florida": "https://www.collegesavings.org/plans/florida",
  "georgia": "https://www.collegesavings.org/plans/georgia",
  "hawaii": "https://www.collegesavings.org/plans/hawaii",
  "idaho": "https://www.collegesavings.org/plans/idaho",
  "illinois": "https://www.collegesavings.org/plans/illinois",
  "indiana": "https://www.collegesavings.org/plans/indiana",
  "iowa": "https://www.collegesavings.org/plans/iowa",
  "kansas": "https://www.collegesavings.org/plans/kansas",
  "kentucky": "https://www.collegesavings.org/plans/kentucky",
  "louisiana": "https://www.collegesavings.org/plans/louisiana",
  "maine": "https://www.collegesavings.org/plans/maine",
  "maryland": "https://www.collegesavings.org/plans/maryland",
  "massachusetts": "https://www.collegesavings.org/plans/massachusetts",
  "michigan": "https://www.collegesavings.org/plans/michigan",
  "minnesota": "https://www.collegesavings.org/plans/minnesota",
  "mississippi": "https://www.collegesavings.org/plans/mississippi",
  "missouri": "https://www.collegesavings.org/plans/missouri",
  "montana": "https://www.collegesavings.org/plans/montana",
  "nebraska": "https://www.collegesavings.org/plans/nebraska",
  "nevada": "https://www.collegesavings.org/plans/nevada",
  "new-hampshire": "https://www.collegesavings.org/plans/new-hampshire",
  "new-jersey": "https://www.collegesavings.org/plans/new-jersey",
  "new-mexico": "https://www.collegesavings.org/plans/new-mexico",
  "new-york": "https://www.collegesavings.org/plans/new-york",
  "north-carolina": "https://www.collegesavings.org/plans/north-carolina",
  "north-dakota": "https://www.collegesavings.org/plans/north-dakota",
  "ohio": "https://www.collegesavings.org/plans/ohio",
  "oklahoma": "https://www.collegesavings.org/plans/oklahoma",
  "oregon": "https://www.collegesavings.org/plans/oregon",
  "pennsylvania": "https://www.collegesavings.org/plans/pennsylvania",
  "rhode-island": "https://www.collegesavings.org/plans/rhode-island",
  "south-carolina": "https://www.collegesavings.org/plans/south-carolina",
  "south-dakota": "https://www.collegesavings.org/plans/south-dakota",
  "tennessee": "https://www.collegesavings.org/plans/tennessee",
  "texas": "https://www.collegesavings.org/plans/texas",
  "utah": "https://www.collegesavings.org/plans/utah",
  "vermont": "https://www.collegesavings.org/plans/vermont",
  "virginia": "https://www.collegesavings.org/plans/virginia",
  "washington": "https://www.collegesavings.org/plans/washington",
  "west-virginia": "https://www.collegesavings.org/plans/west-virginia",
  "wisconsin": "https://www.collegesavings.org/plans/wisconsin",
  "wyoming": "https://www.collegesavings.org/plans/wyoming"
};

const stateSelect = document.getElementById("state529");
const go529Btn = document.getElementById("go529Btn");

/*go529Btn.addEventListener("click", () => {
  const selectedState = stateSelect.value;

  if (!selectedState || !state529Links[selectedState]) {
    alert("Please select a state first.");
    return;
  }

  window.open(state529Links[selectedState], "_blank");
});*/

stateSelect.addEventListener("change", () => {
  const selectedState = stateSelect.value;
  if (selectedState && state529Links[selectedState]) {
    window.open(state529Links[selectedState], "_blank");
  }
});