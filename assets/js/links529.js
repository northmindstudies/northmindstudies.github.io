const state529Links = {
  "alabama": "https://www.collegecounts529.com/",
  "alaska": "https://www.alaska529plan.com/",
  "arizona": "https://www.az529.gov/",
  "arkansas": "https://www.arkansas529.org/",
  "california": "https://www.scholarshare529.com/",
  "colorado": "https://www.collegeinvest.org/",
  "connecticut": "https://www.aboutchet.com/",
  "delaware": "https://treasurer.delaware.gov/education-savings-plan/",
  "district-of-columbia": "https://www.dccollegesavings.com/",
  "florida": "https://www.myfloridaprepaid.com/",
  "georgia": "https://www.path2college529.com/",
  "hawaii": "https://www.hi529.com/",
  "idaho": "https://www.idsaves.org/",
  "illinois": "https://www.brightstart.com/",
  "indiana": "https://www.indiana529direct.com/",
  "iowa": "https://www.isave529.com/",
  "kansas": "https://www.quest529.com/",
  "kentucky": "https://www.kysaves.com/home.html",
  "louisiana": "https://www.startsaving.la.gov/",
  "maine": "https://www.nextgenforme.com/",
  "maryland": "https://maryland529.com/",
  "massachusetts": "https://www.fidelity.com/529-plans/massachusetts",
  "michigan": "https://www.misaves.com/",
  "minnesota": "https://www.mnsaves.org/",
  "mississippi": "https://treasury.ms.gov/for-citizens/college-savings-mississippi/for-parents/learn/macs/",
  "missouri": "https://www.missourimost.org/",
  "montana": "https://www.achievemontana.com/",
  "nebraska": "https://www.nest529.com/",
  "nevada": "https://nvigate.gov/programs/nevadas-529-plans/",
  "new-hampshire": "https://www.treasury.nh.gov/residents/529-college-savings-program",
  "new-jersey": "https://www.njbest.com/",
  "new-mexico": "https://hed.nm.gov/financial-aid/new-mexico-529-college-savings-plan",
  "new-york": "https://www.nysaves.org/",
  "north-carolina": "https://www.cfnc.org/",
  "north-dakota": "https://www.collegesave4u.com/",
  "ohio": "https://www.collegeadvantage.com/",
  "oklahoma": "https://www.oklahoma529.com/",
  "oregon": "https://embarksavings.com/",
  "pennsylvania": "https://www.pa529.com/",
  "rhode-island": "https://treasury.ri.gov/programs/collegebound-saver-529-plan-0",
  "south-carolina": "https://www.futurescholar.com/",
  "south-dakota": "https://www.collegeaccess529.com/",
  "tennessee": "https://tnstars.treasury.tn.gov/",
  "texas": "https://www.texascollegesavings.com/",
  "utah": "https://my529.org/",
  "vermont": "https://vt529.org/",
  "virginia": "https://www.virginia529.com/",
  "washington": "https://wastate529.wa.gov/",
  "west-virginia": "https://www.smart529.com/",
  "wisconsin": "https://dfi.wi.gov/Pages/EducationalServices/CollegeSavingsCareerPlanning/CollegeSavingsProgram.aspx",
  "wyoming": ""
};

const stateSelect = document.getElementById("state529");
const open529Button = document.getElementById("open529Link");

if (stateSelect && open529Button) {
	open529Button.addEventListener("click", function () {
		const selectedState = stateSelect.value;
		const url = state529Links[selectedState];

		if (url) {
			window.open(url, "_blank", "noopener");
		}
	});
}