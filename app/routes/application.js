import Route from '@ember/routing/route';

const electionYears = [2004, 2008, 2012];

const stateCodes = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL',
  'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME',
  'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH',
  'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI',
  'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI',
  'WY'
]

const parties2004 = {
  "AIP": "American Independent",
  "AKI": "Alaskan Independence",
  "AKL": "Alaska Libertarian",
  "AMC": "American Constitution Party",
  "BLD": "Builders",
  "BP": "By Petition",
  "C": "Conservative",
  "CEN": "Centrist",
  "CHF": "Christian Freedom",
  "CNC": "Concerned Citizens",
  "CON": "Constitution",
  "CPF": "Constitution Party Of Florida",
  "CPP": "Concerns Of People Party",
  "CRP": "Colorado Reform Party",
  "CST": "Constitutional",
  "D": "Democratic",
  "DCG": "D.C. Statehood Green",
  "DFL": "Democratic-Farmer Labor",
  "DNL": "Democratic-Nonpartisan League",
  "EPU": "E Pluribus Unum",
  "FAA": "For All Americans",
  "FSW": "Florida Socialist Workers",
  "GI": "Green Independent",
  "GPF": "Green Party Of Florida",
  "GR": "Green-Rainbow",
  "GRA": "Green Party Of Arkansas",
  "GRN": "Green",
  "HEA": "Healthcare Party",
  "HMR": "Help Middlesex/Monmouth/Somerset/Union Residents",
  "I": "Independent",
  "IAP": "Independent American",
  "IDE": "Independent Party Of Delaware",
  "IDP": "Independence",
  "IG": "Iowa Green Party",
  "IMN": "Immigration Moratorium Now",
  "JEB": "Jobs Equality Business",
  "LBF": "Libertarian Party Of Florida",
  "LBT": "Libertarian",
  "LG": "Louisiana Green Party",
  "LU": "Liberty Union",
  "M": "Marijuana",
  "MTP": "Mountain Party",
  "N": "Nonpartisan",
  "NB": "Nebraska Party",
  "NJC": "NJ Conservative Party",
  "NL": "Natural Law",
  "NP": "Nominated By Petition",
  "NPA": "No Party Affiliation",
  "NPP": "New Progressive Party",
  "O": "Other",
  "OP": "Other-Party Candidate",
  "P": "Prohibition Party",
  "PC": "Politicos Son Corruptos",
  "PCH": "Personal Choice",
  "PCN": "Petitioning Candidate",
  "PFP": "Peace And Freedom",
  "PG": "Pacific Green",
  "PJP": "Peace And Justice",
  "PLC": "Pro Life Conservative",
  "POP": "Populist",
  "PPA": "Populist Party Of Arkansas",
  "PPD": "Popular Democratic Party",
  "PRI": "Puerto Rican Independent Party",
  "PRO": "Progressive",
  "PWF": "Protect Working Families",
  "R": "Republican",
  "RAN": "Randolph For Congress",
  "REF": "Reform",
  "SEP": "Socialist Equality Party",
  "SFL": "Socialist Party Of Florida",
  "SOC": "Socialist Party USA",
  "SPW": "Socialist Party Of Wisconsin",
  "SV": "Save Our Children",
  "SWP": "Socialist Workers Party",
  "TBL": "The Better Life",
  "U": "Unenrolled",
  "UC": "United Citizens",
  "UN": "Unaffiliated",
  "USM": "U.S. Marijuana Party",
  "UST": "U.S. Taxpayers",
  "V": "Veterans Party",
  "VGR": "Vermont Green",
  "W": "Write-In",
  "WF": "Working Families",
  "WG": "Wisconsin Greens"
}

const parties2008 = {
  "ADB": "All-Day Breakfast Party",
  "AIF": "America’s Independent Party of Florida",
  "AIP": "American Independent",
  "AKI": "Alaskan Independence",
  "AMC": "American Constitution Party",
  "AMI": "America’s Independent",
  "BBA": "Back to Basics",
  "BFS": "Boss for Senate",
  "BP": "By Petition",
  "BTP": "Boston Tea Party",
  "CMS": "Common Sense Ideas",
  "CNJ": "Constitution Party NJ",
  "CON": "Constitution",
  "CPF": "Constitution Party of Florida",
  "CPI": "Constitution Party of Illinois",
  "CRV": "Conservative",
  "D": "Democratic",
  "DCG": "D.C. Statehood Green",
  "DFL": "Democratic-Farmer Labor",
  "DNL": "Democratic-Nonpartisan League",
  "ECO": "Ecology Party of Florida",
  "ENE": "Energy Independence",
  "ETP": "Eliminate the Primary",
  "FSL": "Party for Socialism and Liberation-Florida",
  "FSW": "Florida Socialist Workers",
  "FTP": "For The People",
  "GI": "Green Independent",
  "GOP": "Grand Old Party",
  "GPF": "Green Party of Florida",
  "GPP": "Green Populist",
  "GR": "Green-Rainbow",
  "GRC": "Green Party of Colorado",
  "GRE": "Green",
  "GWT": "God We Trust",
  "HFC": "Hsing for Congress",
  "HQK": "HeartQuake ‘08",
  "I": "Independent",
  "IAP": "Independent American  Party",
  "IDE": "Independent Party of Delaware",
  "IDP": "Independence",
  "IGR": "Independent Green Party",
  "IP": "Independent Party",
  "IPR": "Independent/Progressive",
  "LBC": "Libertarian Party of Colorado",
  "LBF": "Libertarian Party of Florida",
  "LBT": "Libertarian",
  "LFC": "Lindsay for Congress",
  "LTX": "Louisiana Taxpayers Party",
  "LU": "Liberty Union",
  "MTP": "Mountain Party",
  "N": "Nonpartisan",
  "NA": "No Affiliation",
  "NB": "Nebraska Party",
  "NEW": "New",
  "NLP": "Natural Law Party",
  "NMI": "New Mexico Independent Party",
  "NMR": "NMI Republican Party Association",
  "NNE": "None",
  "NOP": "No Party Preference",
  "NP": "Nominated by Petition",
  "NPA": "No Party Affiliation",
  "NPP": "New Progressive Party",
  "NSP": "No Slogan Provided",
  "OBF": "Objectivist Party of Florida",
  "OBJ": "Objectivist Party",
  "OTH": "Other",
  "P": "Prohibition Party",
  "PAF": "Peace And Freedom",
  "PE": "Peace",
  "PET": "Petition",
  "PG": "Pacific Green",
  "PNW": "Prosperity Not War",
  "POP": "Populist",
  "PPC": "Poor People's Campaign",
  "PPD": "Popular Democratic Party",
  "PPR": "Puerto Ricans for Puerto Rico Party",
  "PRI": "Puerto Rican Independence Party",
  "PRO": "Progressive",
  "PSL": "Party for Socialism and Liberation",
  "R": "Republican",
  "REF": "Reform",
  "RIN": "Regular Independent",
  "RTB": "Rock the Boat",
  "SFL": "Socialist Party of Florida",
  "SLP": "Socialism and Liberation Party",
  "SOC": "Socialist Party USA",
  "SUS": "Socialist Party USA",
  "SWP": "Socialist Workers Party",
  "THI": "Think Independently",
  "TLP": "Term Limits for the United States Congress Party",
  "UN": "Unaffiliated",
  "UPA": "Unity Party of America",
  "USP": "U.S. Pacificist Party",
  "UST": "U.S. Taxpayers",
  "VH": "Vote Here",
  "VPC": "Vote People Change",
  "W": "Write-In",
  "WF": "Working Families",
  "WG": "Wisconsin Greens"
}

const parties2012 = {
  "AA": "Abundant America",
  "AE": "Americans Elect",
  "AF": "America First",
  "AIP": "American Independent",
  "AMC": "American Constitution Party",
  "AMP": "America’s Party",
  "APF": "America’s Party of Florida",
  "ATP": "American Third Position",
  "BFC": "Bednarski for Congress",
  "BFJ": "Bob's for Jobs",
  "BP": "By Petition",
  "CC": "Constitutional Conservative",
  "CCC": "Conservative, Compassionate, Creative",
  "CG": "Constitutional Government",
  "CHA": "Change, Change, Change",
  "CON": "Constitution",
  "COU": "Country",
  "CPF": "Constitution Party of Florida",
  "CRV": "Conservative",
  "CSP": "Common Sense",
  "D": "Democratic",
  "DCG": "D.C. Statehood Green",
  "DFL": "Democratic-Farmer Labor",
  "DNL": "Democratic-Nonpartisan League",
  "EWP": "Employmentwealth Party",
  "FDR": "F.D.R. Democrat Party",
  "GI": "Green Independent",
  "GOP": "G.O.P. Party",
  "GPF": "Green Party of Florida",
  "GR": "Green-Rainbow",
  "GRE": "Green",
  "GRT": "Grassroots",
  "IAP": "Independent American  Party",
  "IDA": "I.D.E.A.",
  "IDE": "Independent Party of Delaware",
  "IDP": "Independence",
  "IFL": "Independent for Liberty",
  "IFM": "Independent for Maine",
  "IG": "Iowa Green",
  "IGR": "Independent Green",
  "IND": "Independent",
  "IP": "Independent Party",
  "IR": "Independent Reform Candidate",
  "JPF": "Justice Party of Florida",
  "JSI": "Jersey Strong Independents",
  "JUS": "Justice Party",
  "LBF": "Libertarian Party of Florida",
  "LIB": "Libertarian",
  "LMP": "Legalize Marijuana Party",
  "LU": "Liberty Union",
  "MOP": "Minnesota Open Progresssives",
  "MTP": "Mountain Party",
  "MUS": "Sovereignty Union Movement",
  "N": "Nonpartisan",
  "NAF": "Non-Affiliated",
  "NJJ": "New Jersey Justice Party",
  "NLP": "Natural Law Party",
  "NMI": "New Mexico Independent Party",
  "NNP": "Prefers The 99% Party",
  "NON": "Non-Party",
  "NOP": "No Party Preference",
  "NOT": "None of Them",
  "NP": "Nominated by Petition",
  "NPA": "No Party Affiliation",
  "NPP": "New Progressive Party",
  "NS": "No Slogan",
  "NSA": "NSA Did 911",
  "NSF": "No Slogan Filed",
  "OAI": "Overthrow All Incumbents",
  "OBF": "Objectivist Party of Florida",
  "OBJ": "Objectivist Party",
  "OCG": "Opposing Congressional Gridlock",
  "P": "Prohibition Party",
  "PAC": "Politicians are Crooks",
  "PAF": "Peace and Freedom",
  "PC": "Petitioning Candidate",
  "PEP": "Peace and Prosperity",
  "PFF": "Peace and Freedom Party of Florida",
  "PFP": "Peace and Freedom",
  "PG": "Pacific Green",
  "PIN": "Progressive Independent Party",
  "PPD": "Popular Democratic Party",
  "PPR": "Puerto Ricans for Puerto Rico",
  "PPT": "Party of the Working People",
  "PRI": "Puerto Rican Independence Party",
  "PRO": "Progressive",
  "PSL": "Party for Socialism and Liberation",
  "R": "Republican",
  "RAP": "Restoring America's Promise",
  "REF": "Reform",
  "RFI": "Responsibility Fairness Integrity",
  "RN": "Reform Nation",
  "SEP": "Socialist Equality Party",
  "SFL": "Socialist Party of Florida",
  "SLF": "Party for Socialism and Liberation - Florida",
  "SLP": "Socialism and Liberation Party",
  "STG": "Statehood Green",
  "SUS": "Socialist Party USA",
  "SWP": "Socialist Workers Party",
  "TIC": "Totally Independent Candidate",
  "TPA": "The People's Agenda",
  "TRP": "Tax Revolt",
  "TVH": "Truth Vision Hope",
  "UIS": "Unity Is Strength",
  "UJP": "Utah Justice Party",
  "UN": "Unaffiliated",
  "USM": "United States Marijuana",
  "UST": "U.S. Taxpayers",
  "VKS": "Vote KISS",
  "W": "Write-In",
  "WF": "Working Families",
  "WTP": "We the People"
}

const results2004 = {
  "2004_AL": {
    "Bush, George W.": {
      "id": "2004_AL",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "AL",
      "state": "Alabama",
      "votes": 1176394,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_AL",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "AL",
      "state": "Alabama",
      "votes": 693933,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_AL",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "AL",
      "state": "Alabama",
      "votes": 6701,
      "parties": [
        "Independent"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_AL",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "AL",
      "state": "Alabama",
      "votes": 3529,
      "parties": [
        "Independent"
      ]
    },
    "Peroutka, Michael": {
      "id": "2004_AL",
      "year": 2004,
      "name": "Peroutka, Michael",
      "abbr": "AL",
      "state": "Alabama",
      "votes": 1994,
      "parties": [
        "Independent"
      ]
    }
  },
  "2004_AK": {
    "Bush, George W.": {
      "id": "2004_AK",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "AK",
      "state": "Alaska",
      "votes": 190889,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_AK",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "AK",
      "state": "Alaska",
      "votes": 111025,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_AK",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "AK",
      "state": "Alaska",
      "votes": 5069,
      "parties": [
        "Populist"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2004_AK",
      "year": 2004,
      "name": "Peroutka, Michael A.",
      "abbr": "AK",
      "state": "Alaska",
      "votes": 2092,
      "parties": [
        "Alaskan Independence"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_AK",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "AK",
      "state": "Alaska",
      "votes": 1675,
      "parties": [
        "Alaska Libertarian"
      ]
    },
    "Cobb, David": {
      "id": "2004_AK",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "AK",
      "state": "Alaska",
      "votes": 1058,
      "parties": [
        "Green"
      ]
    }
  },
  "2004_AZ": {
    "Bush, George W.": {
      "id": "2004_AZ",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 1104294,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_AZ",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 893524,
      "parties": [
        "Democratic"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_AZ",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 11856,
      "parties": [
        "Libertarian"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_AZ",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 2773,
      "parties": [
        "Write-In"
      ]
    },
    "Cobb, David": {
      "id": "2004_AZ",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 138,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_AR": {
    "Bush, George W.": {
      "id": "2004_AR",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "AR",
      "state": "Arkansas",
      "votes": 572898,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_AR",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "AR",
      "state": "Arkansas",
      "votes": 469953,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_AR",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "AR",
      "state": "Arkansas",
      "votes": 6171,
      "parties": [
        "Populist Party Of Arkansas"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_AR",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "AR",
      "state": "Arkansas",
      "votes": 2352,
      "parties": [
        "Libertarian"
      ]
    },
    "Peroutka, Michael Anthony": {
      "id": "2004_AR",
      "year": 2004,
      "name": "Peroutka, Michael Anthony",
      "abbr": "AR",
      "state": "Arkansas",
      "votes": 2083,
      "parties": [
        "Constitutional"
      ]
    },
    "Cobb, David": {
      "id": "2004_AR",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "AR",
      "state": "Arkansas",
      "votes": 1488,
      "parties": [
        "Green Party Of Arkansas"
      ]
    }
  },
  "2004_CA": {
    "Kerry, John F.": {
      "id": "2004_CA",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "CA",
      "state": "California",
      "votes": 6745485,
      "parties": [
        "Democratic"
      ]
    },
    "Bush, George W.": {
      "id": "2004_CA",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "CA",
      "state": "California",
      "votes": 5509826,
      "parties": [
        "Republican"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_CA",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "CA",
      "state": "California",
      "votes": 50165,
      "parties": [
        "Libertarian"
      ]
    },
    "Cobb, David": {
      "id": "2004_CA",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "CA",
      "state": "California",
      "votes": 40771,
      "parties": [
        "Green"
      ]
    },
    "Peltier, Leonard": {
      "id": "2004_CA",
      "year": 2004,
      "name": "Peltier, Leonard",
      "abbr": "CA",
      "state": "California",
      "votes": 27607,
      "parties": [
        "Peace And Freedom"
      ]
    },
    "Peroutka, Michael Anthony": {
      "id": "2004_CA",
      "year": 2004,
      "name": "Peroutka, Michael Anthony",
      "abbr": "CA",
      "state": "California",
      "votes": 26645,
      "parties": [
        "American Independent"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_CA",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "CA",
      "state": "California",
      "votes": 21213,
      "parties": [
        "Write-In"
      ]
    },
    "Jabin, Anthony": {
      "id": "2004_CA",
      "year": 2004,
      "name": "Jabin, Anthony",
      "abbr": "CA",
      "state": "California",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Kennedy, John Joseph": {
      "id": "2004_CA",
      "year": 2004,
      "name": "Kennedy, John Joseph",
      "abbr": "CA",
      "state": "California",
      "votes": 82,
      "parties": [
        "Write-In"
      ]
    },
    "Alexander-Pace, James": {
      "id": "2004_CA",
      "year": 2004,
      "name": "Alexander-Pace, James",
      "abbr": "CA",
      "state": "California",
      "votes": 8,
      "parties": [
        "Write-In"
      ]
    },
    "Parker, John": {
      "id": "2004_CA",
      "year": 2004,
      "name": "Parker, John",
      "abbr": "CA",
      "state": "California",
      "votes": 49,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_CO": {
    "Bush, George W.": {
      "id": "2004_CO",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 1101255,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_CO",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 1001732,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_CO",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 12718,
      "parties": [
        "Colorado Reform Party"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_CO",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 7664,
      "parties": [
        "Libertarian"
      ]
    },
    "Peroutka, Michael Anthony": {
      "id": "2004_CO",
      "year": 2004,
      "name": "Peroutka, Michael Anthony",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 2562,
      "parties": [
        "American Constitution Party"
      ]
    },
    "Cobb, David": {
      "id": "2004_CO",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 1591,
      "parties": [
        "Green"
      ]
    },
    "Andress, Stanford E. (Andy)": {
      "id": "2004_CO",
      "year": 2004,
      "name": "Andress, Stanford E. (Andy)",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 804,
      "parties": [
        "Unaffiliated"
      ]
    },
    "Kennedy, John Joseph": {
      "id": "2004_CO",
      "year": 2004,
      "name": "Kennedy, John Joseph",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 700,
      "parties": [
        "Write-In"
      ]
    },
    "Amondson, Gene": {
      "id": "2004_CO",
      "year": 2004,
      "name": "Amondson, Gene",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 378,
      "parties": [
        "Concerns Of People Party"
      ]
    },
    "Van Auken, Bill": {
      "id": "2004_CO",
      "year": 2004,
      "name": "Van Auken, Bill",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 329,
      "parties": [
        "Socialist Equality Party"
      ]
    },
    "Harris, James E.": {
      "id": "2004_CO",
      "year": 2004,
      "name": "Harris, James E.",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 241,
      "parties": [
        "Socialist Workers Party"
      ]
    },
    "Brown, Walter F.": {
      "id": "2004_CO",
      "year": 2004,
      "name": "Brown, Walter F.",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 216,
      "parties": [
        "Socialist Party USA"
      ]
    },
    "Dodge, Earl F.": {
      "id": "2004_CO",
      "year": 2004,
      "name": "Dodge, Earl F.",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 140,
      "parties": [
        "Prohibition Party"
      ]
    }
  },
  "2004_CT": {
    "Kerry, John F.": {
      "id": "2004_CT",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 857488,
      "parties": [
        "Democratic"
      ]
    },
    "Bush, George W.": {
      "id": "2004_CT",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 693826,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_CT",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 12969,
      "parties": [
        "Politicos Son Corruptos"
      ]
    },
    "Cobb, David": {
      "id": "2004_CT",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 9564,
      "parties": [
        "Green"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_CT",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 3367,
      "parties": [
        "Libertarian"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2004_CT",
      "year": 2004,
      "name": "Peroutka, Michael A.",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 1543,
      "parties": [
        "Concerned Citizens"
      ]
    },
    "Calero, Róger": {
      "id": "2004_CT",
      "year": 2004,
      "name": "Calero, Róger",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 12,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_DE": {
    "Kerry, John F.": {
      "id": "2004_DE",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 200152,
      "parties": [
        "Democratic"
      ]
    },
    "Bush, George W.": {
      "id": "2004_DE",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 171660,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_DE",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 2153,
      "parties": [
        "Independent Party Of Delaware"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_DE",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 586,
      "parties": [
        "Libertarian"
      ]
    },
    "Peroutka, Michael Anthony": {
      "id": "2004_DE",
      "year": 2004,
      "name": "Peroutka, Michael Anthony",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 289,
      "parties": [
        "Constitution"
      ]
    },
    "Cobb, David": {
      "id": "2004_DE",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 250,
      "parties": [
        "Green"
      ]
    },
    "Brown, Walter F.": {
      "id": "2004_DE",
      "year": 2004,
      "name": "Brown, Walter F.",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 100,
      "parties": [
        "Natural Law"
      ]
    }
  },
  "2004_DC": {
    "Kerry, John F.": {
      "id": "2004_DC",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "DC",
      "state": "District of Columbia",
      "votes": 202970,
      "parties": [
        "Democratic"
      ]
    },
    "Bush, George W.": {
      "id": "2004_DC",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "DC",
      "state": "District of Columbia",
      "votes": 21256,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_DC",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "DC",
      "state": "District of Columbia",
      "votes": 1485,
      "parties": [
        "Independent"
      ]
    },
    "Cobb, David": {
      "id": "2004_DC",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "DC",
      "state": "District of Columbia",
      "votes": 737,
      "parties": [
        "D.C. Statehood Green"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_DC",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "DC",
      "state": "District of Columbia",
      "votes": 502,
      "parties": [
        "Libertarian"
      ]
    },
    "Harris, James": {
      "id": "2004_DC",
      "year": 2004,
      "name": "Harris, James",
      "abbr": "DC",
      "state": "District of Columbia",
      "votes": 130,
      "parties": [
        "Socialist Workers Party"
      ]
    }
  },
  "2004_FL": {
    "Bush, George W.": {
      "id": "2004_FL",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "FL",
      "state": "Florida",
      "votes": 3964522,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_FL",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "FL",
      "state": "Florida",
      "votes": 3583544,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_FL",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "FL",
      "state": "Florida",
      "votes": 32971,
      "parties": [
        "Reform"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_FL",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "FL",
      "state": "Florida",
      "votes": 11996,
      "parties": [
        "Libertarian Party Of Florida"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2004_FL",
      "year": 2004,
      "name": "Peroutka, Michael A.",
      "abbr": "FL",
      "state": "Florida",
      "votes": 6626,
      "parties": [
        "Constitution Party Of Florida"
      ]
    },
    "Cobb, David": {
      "id": "2004_FL",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "FL",
      "state": "Florida",
      "votes": 3917,
      "parties": [
        "Green Party Of Florida"
      ]
    },
    "Brown, Walter F.": {
      "id": "2004_FL",
      "year": 2004,
      "name": "Brown, Walter F.",
      "abbr": "FL",
      "state": "Florida",
      "votes": 3502,
      "parties": [
        "Socialist Party Of Florida"
      ]
    },
    "Harris, James": {
      "id": "2004_FL",
      "year": 2004,
      "name": "Harris, James",
      "abbr": "FL",
      "state": "Florida",
      "votes": 2732,
      "parties": [
        "Florida Socialist Workers"
      ]
    }
  },
  "2004_GA": {
    "Bush, George W.": {
      "id": "2004_GA",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 1914254,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_GA",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 1366149,
      "parties": [
        "Democratic"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_GA",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 18387,
      "parties": [
        "Libertarian"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_GA",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 2231,
      "parties": [
        "Write-In"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2004_GA",
      "year": 2004,
      "name": "Peroutka, Michael A.",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 580,
      "parties": [
        "Write-In"
      ]
    },
    "Cobb, David": {
      "id": "2004_GA",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 228,
      "parties": [
        "Write-In"
      ]
    },
    "Tancredo, Tom": {
      "id": "2004_GA",
      "year": 2004,
      "name": "Tancredo, Tom",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 26,
      "parties": [
        "Write-In"
      ]
    },
    "Kennedy, John J.": {
      "id": "2004_GA",
      "year": 2004,
      "name": "Kennedy, John J.",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 8,
      "parties": [
        "Write-In"
      ]
    },
    "Byrne, David": {
      "id": "2004_GA",
      "year": 2004,
      "name": "Byrne, David",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 7,
      "parties": [
        "Write-In"
      ]
    },
    "Pace, James": {
      "id": "2004_GA",
      "year": 2004,
      "name": "Pace, James",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 5,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_HI": {
    "Kerry, John F.": {
      "id": "2004_HI",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "HI",
      "state": "Hawaii",
      "votes": 231708,
      "parties": [
        "Democratic"
      ]
    },
    "Bush, George W.": {
      "id": "2004_HI",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "HI",
      "state": "Hawaii",
      "votes": 194191,
      "parties": [
        "Republican"
      ]
    },
    "Cobb, David": {
      "id": "2004_HI",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "HI",
      "state": "Hawaii",
      "votes": 1737,
      "parties": [
        "Green"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_HI",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "HI",
      "state": "Hawaii",
      "votes": 1377,
      "parties": [
        "Libertarian"
      ]
    }
  },
  "2004_ID": {
    "Bush, George W.": {
      "id": "2004_ID",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 409235,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_ID",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 181098,
      "parties": [
        "Democratic"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_ID",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 3844,
      "parties": [
        "Libertarian"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2004_ID",
      "year": 2004,
      "name": "Peroutka, Michael A.",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 3084,
      "parties": [
        "Constitution"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_ID",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 1115,
      "parties": [
        "Write-In"
      ]
    },
    "Cobb, David": {
      "id": "2004_ID",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 58,
      "parties": [
        "Write-In"
      ]
    },
    "Kennedy, John Joseph": {
      "id": "2004_ID",
      "year": 2004,
      "name": "Kennedy, John Joseph",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 9,
      "parties": [
        "Write-In"
      ]
    },
    "Brown, Walt": {
      "id": "2004_ID",
      "year": 2004,
      "name": "Brown, Walt",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 3,
      "parties": [
        "Write-In"
      ]
    },
    "Merepeace-msmere, Reverend": {
      "id": "2004_ID",
      "year": 2004,
      "name": "Merepeace-msmere, Reverend",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_IL": {
    "Kerry, John F.": {
      "id": "2004_IL",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 2891550,
      "parties": [
        "Democratic"
      ]
    },
    "Bush, George W.": {
      "id": "2004_IL",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 2345946,
      "parties": [
        "Republican"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_IL",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 32442,
      "parties": [
        "Libertarian"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_IL",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 3571,
      "parties": [
        "Write-In"
      ]
    },
    "Peroutka, Michael Anthony": {
      "id": "2004_IL",
      "year": 2004,
      "name": "Peroutka, Michael Anthony",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 440,
      "parties": [
        "Write-In"
      ]
    },
    "Cobb, David": {
      "id": "2004_IL",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 241,
      "parties": [
        "Write-In"
      ]
    },
    "Camejo, Peter M.": {
      "id": "2004_IL",
      "year": 2004,
      "name": "Camejo, Peter M.",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 115,
      "parties": [
        "Write-In"
      ]
    },
    "Virag, Ernest": {
      "id": "2004_IL",
      "year": 2004,
      "name": "Virag, Ernest",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 4,
      "parties": [
        "Write-In"
      ]
    },
    "Bone, Lawson": {
      "id": "2004_IL",
      "year": 2004,
      "name": "Bone, Lawson",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 4,
      "parties": [
        "Write-In"
      ]
    },
    "Kennedy, John Joseph": {
      "id": "2004_IL",
      "year": 2004,
      "name": "Kennedy, John Joseph",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 3,
      "parties": [
        "Write-In"
      ]
    },
    "Cook, David": {
      "id": "2004_IL",
      "year": 2004,
      "name": "Cook, David",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Trowe, Margaret": {
      "id": "2004_IL",
      "year": 2004,
      "name": "Trowe, Margaret",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Kennedy, John": {
      "id": "2004_IL",
      "year": 2004,
      "name": "Kennedy, John",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Christensen, Robert M.": {
      "id": "2004_IL",
      "year": 2004,
      "name": "Christensen, Robert M.",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Breivogel, Joann": {
      "id": "2004_IL",
      "year": 2004,
      "name": "Breivogel, Joann",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_IN": {
    "Bush, George Walker": {
      "id": "2004_IN",
      "year": 2004,
      "name": "Bush, George Walker",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 1479438,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_IN",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 969011,
      "parties": [
        "Democratic"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_IN",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 18058,
      "parties": [
        "Libertarian"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_IN",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 1328,
      "parties": [
        "Write-In"
      ]
    },
    "Cobb, David": {
      "id": "2004_IN",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 102,
      "parties": [
        "Write-In"
      ]
    },
    "Kennedy, John Joseph": {
      "id": "2004_IN",
      "year": 2004,
      "name": "Kennedy, John Joseph",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 37,
      "parties": [
        "Write-In"
      ]
    },
    "Brown, Walt": {
      "id": "2004_IN",
      "year": 2004,
      "name": "Brown, Walt",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 22,
      "parties": [
        "Write-In"
      ]
    },
    "Bone, Lawson Mitchell": {
      "id": "2004_IN",
      "year": 2004,
      "name": "Bone, Lawson Mitchell",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 6,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_IA": {
    "Bush, George W.": {
      "id": "2004_IA",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 751957,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_IA",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 741898,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_IA",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 5973,
      "parties": [
        "Nominated By Petition"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_IA",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 2992,
      "parties": [
        "Libertarian"
      ]
    },
    "Peroutka, Michael Anthony": {
      "id": "2004_IA",
      "year": 2004,
      "name": "Peroutka, Michael Anthony",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 1304,
      "parties": [
        "Constitution"
      ]
    },
    "Cobb, David": {
      "id": "2004_IA",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 1141,
      "parties": [
        "Iowa Green Party"
      ]
    },
    "Harris, James": {
      "id": "2004_IA",
      "year": 2004,
      "name": "Harris, James",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 373,
      "parties": [
        "Socialist Workers Party"
      ]
    },
    "Van Auken, Bill": {
      "id": "2004_IA",
      "year": 2004,
      "name": "Van Auken, Bill",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 176,
      "parties": [
        "Nominated By Petition"
      ]
    }
  },
  "2004_KS": {
    "Bush, George W.": {
      "id": "2004_KS",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 736456,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_KS",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 434993,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_KS",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 9348,
      "parties": [
        "Reform"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_KS",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 4013,
      "parties": [
        "Libertarian"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2004_KS",
      "year": 2004,
      "name": "Peroutka, Michael A.",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 2899,
      "parties": [
        "Independent"
      ]
    },
    "Cobb, David": {
      "id": "2004_KS",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 33,
      "parties": [
        "Write-In"
      ]
    },
    "Van Auken, Bill": {
      "id": "2004_KS",
      "year": 2004,
      "name": "Van Auken, Bill",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 5,
      "parties": [
        "Write-In"
      ]
    },
    "Kennedy, John Joseph": {
      "id": "2004_KS",
      "year": 2004,
      "name": "Kennedy, John Joseph",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 5,
      "parties": [
        "Write-In"
      ]
    },
    "Brown, Walt": {
      "id": "2004_KS",
      "year": 2004,
      "name": "Brown, Walt",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 4,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_KY": {
    "Bush, George W.": {
      "id": "2004_KY",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 1069439,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_KY",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 712733,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_KY",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 8856,
      "parties": [
        "Independent"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_KY",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 2619,
      "parties": [
        "Libertarian"
      ]
    },
    "Peroutka, Michael Anthony": {
      "id": "2004_KY",
      "year": 2004,
      "name": "Peroutka, Michael Anthony",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 2213,
      "parties": [
        "Constitution"
      ]
    },
    "Brown, Walt": {
      "id": "2004_KY",
      "year": 2004,
      "name": "Brown, Walt",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 13,
      "parties": [
        "Write-In"
      ]
    },
    "Kennedy, John Joseph": {
      "id": "2004_KY",
      "year": 2004,
      "name": "Kennedy, John Joseph",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 9,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_LA": {
    "Bush, George W.": {
      "id": "2004_LA",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 1102169,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_LA",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 820299,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_LA",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 7032,
      "parties": [
        "The Better Life"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2004_LA",
      "year": 2004,
      "name": "Peroutka, Michael A.",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 5203,
      "parties": [
        "Constitution"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_LA",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 2781,
      "parties": [
        "Libertarian"
      ]
    },
    "Brown, Walter F.": {
      "id": "2004_LA",
      "year": 2004,
      "name": "Brown, Walter F.",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 1795,
      "parties": [
        "Protect Working Families"
      ]
    },
    "Amondson, Gene": {
      "id": "2004_LA",
      "year": 2004,
      "name": "Amondson, Gene",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 1566,
      "parties": [
        "Prohibition Party"
      ]
    },
    "Cobb, David": {
      "id": "2004_LA",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 1276,
      "parties": [
        "Louisiana Green Party"
      ]
    },
    "Harris, James": {
      "id": "2004_LA",
      "year": 2004,
      "name": "Harris, James",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 985,
      "parties": [
        "Socialist Workers Party"
      ]
    }
  },
  "2004_ME": {
    "Kerry, John F.": {
      "id": "2004_ME",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "ME",
      "state": "Maine",
      "votes": 396842,
      "parties": [
        "Democratic"
      ]
    },
    "Bush, George W.": {
      "id": "2004_ME",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "ME",
      "state": "Maine",
      "votes": 330201,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_ME",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "ME",
      "state": "Maine",
      "votes": 8069,
      "parties": [
        "The Better Life"
      ]
    },
    "Cobb, David": {
      "id": "2004_ME",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "ME",
      "state": "Maine",
      "votes": 2936,
      "parties": [
        "Green Independent"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_ME",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "ME",
      "state": "Maine",
      "votes": 1965,
      "parties": [
        "Libertarian"
      ]
    },
    "Peroutka, Michael": {
      "id": "2004_ME",
      "year": 2004,
      "name": "Peroutka, Michael",
      "abbr": "ME",
      "state": "Maine",
      "votes": 735,
      "parties": [
        "Constitution"
      ]
    }
  },
  "2004_MD": {
    "Kerry, John F.": {
      "id": "2004_MD",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 1334493,
      "parties": [
        "Democratic"
      ]
    },
    "Bush, George W.": {
      "id": "2004_MD",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 1024703,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_MD",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 11854,
      "parties": [
        "Populist"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_MD",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 6094,
      "parties": [
        "Libertarian"
      ]
    },
    "Cobb, David": {
      "id": "2004_MD",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 3632,
      "parties": [
        "Green"
      ]
    },
    "Peroutka, Michael Anthony": {
      "id": "2004_MD",
      "year": 2004,
      "name": "Peroutka, Michael Anthony",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 3421,
      "parties": [
        "Constitution"
      ]
    },
    "Schriner, Joe": {
      "id": "2004_MD",
      "year": 2004,
      "name": "Schriner, Joe",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 27,
      "parties": [
        "Write-In"
      ]
    },
    "Kennedy, John Joseph": {
      "id": "2004_MD",
      "year": 2004,
      "name": "Kennedy, John Joseph",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 7,
      "parties": [
        "Write-In"
      ]
    },
    "Brown, Theodis (Ted), Sr.": {
      "id": "2004_MD",
      "year": 2004,
      "name": "Brown, Theodis (Ted), Sr.",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 4,
      "parties": [
        "Write-In"
      ]
    },
    "Bone, Lawson Mitchell": {
      "id": "2004_MD",
      "year": 2004,
      "name": "Bone, Lawson Mitchell",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Boyle, Robert Abraham, II": {
      "id": "2004_MD",
      "year": 2004,
      "name": "Boyle, Robert Abraham, II",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_MA": {
    "Kerry, John F.": {
      "id": "2004_MA",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "MA",
      "state": "Massachusetts",
      "votes": 1803800,
      "parties": [
        "Democratic"
      ]
    },
    "Bush, George W.": {
      "id": "2004_MA",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "MA",
      "state": "Massachusetts",
      "votes": 1071109,
      "parties": [
        "Republican"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_MA",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "MA",
      "state": "Massachusetts",
      "votes": 15022,
      "parties": [
        "Libertarian"
      ]
    },
    "Cobb, David": {
      "id": "2004_MA",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "MA",
      "state": "Massachusetts",
      "votes": 10623,
      "parties": [
        "Green-Rainbow"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_MA",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "MA",
      "state": "Massachusetts",
      "votes": 4806,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_MI": {
    "Kerry, John F.": {
      "id": "2004_MI",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 2479183,
      "parties": [
        "Democratic"
      ]
    },
    "Bush, George W.": {
      "id": "2004_MI",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 2313746,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_MI",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 24035,
      "parties": [
        "Independent"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_MI",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 10552,
      "parties": [
        "Libertarian"
      ]
    },
    "Cobb, David": {
      "id": "2004_MI",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 5325,
      "parties": [
        "Green"
      ]
    },
    "Peroutka, Michael Anthony": {
      "id": "2004_MI",
      "year": 2004,
      "name": "Peroutka, Michael Anthony",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 4980,
      "parties": [
        "U.S. Taxpayers"
      ]
    },
    "Brown, Walter": {
      "id": "2004_MI",
      "year": 2004,
      "name": "Brown, Walter",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 1431,
      "parties": [
        "Natural Law"
      ]
    }
  },
  "2004_MN": {
    "Kerry, John F.": {
      "id": "2004_MN",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 1445014,
      "parties": [
        "Democratic-Farmer Labor"
      ]
    },
    "Bush, George W.": {
      "id": "2004_MN",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 1346695,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_MN",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 18683,
      "parties": [
        "The Better Life"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_MN",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 4639,
      "parties": [
        "Libertarian"
      ]
    },
    "Cobb, David": {
      "id": "2004_MN",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 4408,
      "parties": [
        "Green"
      ]
    },
    "Peroutka, Michael": {
      "id": "2004_MN",
      "year": 2004,
      "name": "Peroutka, Michael",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 3074,
      "parties": [
        "Constitution"
      ]
    },
    "Harens, Thomas J.": {
      "id": "2004_MN",
      "year": 2004,
      "name": "Harens, Thomas J.",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 2387,
      "parties": [
        "Christian Freedom"
      ]
    },
    "Van Auken, Bill": {
      "id": "2004_MN",
      "year": 2004,
      "name": "Van Auken, Bill",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 539,
      "parties": [
        "Socialist Equality Party"
      ]
    },
    "Calero, Róger": {
      "id": "2004_MN",
      "year": 2004,
      "name": "Calero, Róger",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 416,
      "parties": [
        "Socialist Workers Party"
      ]
    },
    "Kennedy, John Joseph": {
      "id": "2004_MN",
      "year": 2004,
      "name": "Kennedy, John Joseph",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 4,
      "parties": [
        "Write-In"
      ]
    },
    "Wishnatsky, Martin": {
      "id": "2004_MN",
      "year": 2004,
      "name": "Wishnatsky, Martin",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Renderos, Debra Joyce": {
      "id": "2004_MN",
      "year": 2004,
      "name": "Renderos, Debra Joyce",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Brown, Walt": {
      "id": "2004_MN",
      "year": 2004,
      "name": "Brown, Walt",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Graham-Pendergast, Joy Elaina": {
      "id": "2004_MN",
      "year": 2004,
      "name": "Graham-Pendergast, Joy Elaina",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_MS": {
    "Bush, George W.": {
      "id": "2004_MS",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "MS",
      "state": "Mississippi",
      "votes": 684981,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_MS",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "MS",
      "state": "Mississippi",
      "votes": 458094,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_MS",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "MS",
      "state": "Mississippi",
      "votes": 3177,
      "parties": [
        "Reform"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_MS",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "MS",
      "state": "Mississippi",
      "votes": 1793,
      "parties": [
        "Libertarian"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2004_MS",
      "year": 2004,
      "name": "Peroutka, Michael A.",
      "abbr": "MS",
      "state": "Mississippi",
      "votes": 1759,
      "parties": [
        "Constitution"
      ]
    },
    "Harris, James": {
      "id": "2004_MS",
      "year": 2004,
      "name": "Harris, James",
      "abbr": "MS",
      "state": "Mississippi",
      "votes": 1268,
      "parties": [
        "Independent"
      ]
    },
    "Cobb, David": {
      "id": "2004_MS",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "MS",
      "state": "Mississippi",
      "votes": 1073,
      "parties": [
        "Green"
      ]
    }
  },
  "2004_MO": {
    "Bush, George W.": {
      "id": "2004_MO",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "MO",
      "state": "Missouri",
      "votes": 1455713,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_MO",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "MO",
      "state": "Missouri",
      "votes": 1259171,
      "parties": [
        "Democratic"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_MO",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "MO",
      "state": "Missouri",
      "votes": 9831,
      "parties": [
        "Libertarian"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2004_MO",
      "year": 2004,
      "name": "Peroutka, Michael A.",
      "abbr": "MO",
      "state": "Missouri",
      "votes": 5355,
      "parties": [
        "Constitution"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_MO",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "MO",
      "state": "Missouri",
      "votes": 1294,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_MT": {
    "Bush, George W.": {
      "id": "2004_MT",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "MT",
      "state": "Montana",
      "votes": 266063,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John": {
      "id": "2004_MT",
      "year": 2004,
      "name": "Kerry, John",
      "abbr": "MT",
      "state": "Montana",
      "votes": 173710,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_MT",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "MT",
      "state": "Montana",
      "votes": 6168,
      "parties": [
        "Independent"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2004_MT",
      "year": 2004,
      "name": "Peroutka, Michael A.",
      "abbr": "MT",
      "state": "Montana",
      "votes": 1764,
      "parties": [
        "Constitution"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_MT",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "MT",
      "state": "Montana",
      "votes": 1733,
      "parties": [
        "Libertarian"
      ]
    },
    "Cobb, David": {
      "id": "2004_MT",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "MT",
      "state": "Montana",
      "votes": 996,
      "parties": [
        "Green"
      ]
    },
    "Kennedy, John Joseph": {
      "id": "2004_MT",
      "year": 2004,
      "name": "Kennedy, John Joseph",
      "abbr": "MT",
      "state": "Montana",
      "votes": 6,
      "parties": [
        "Write-In"
      ]
    },
    "Beattie, Robert Leslie": {
      "id": "2004_MT",
      "year": 2004,
      "name": "Beattie, Robert Leslie",
      "abbr": "MT",
      "state": "Montana",
      "votes": 3,
      "parties": [
        "Write-In"
      ]
    },
    "Brown, Walter Frederick": {
      "id": "2004_MT",
      "year": 2004,
      "name": "Brown, Walter Frederick",
      "abbr": "MT",
      "state": "Montana",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_NE": {
    "Bush, George W.": {
      "id": "2004_NE",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "NE",
      "state": "Nebraska",
      "votes": 512814,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_NE",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "NE",
      "state": "Nebraska",
      "votes": 254328,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_NE",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "NE",
      "state": "Nebraska",
      "votes": 5698,
      "parties": [
        "By Petition"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_NE",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "NE",
      "state": "Nebraska",
      "votes": 2041,
      "parties": [
        "Libertarian"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2004_NE",
      "year": 2004,
      "name": "Peroutka, Michael A.",
      "abbr": "NE",
      "state": "Nebraska",
      "votes": 1314,
      "parties": [
        "Nebraska Party"
      ]
    },
    "Cobb, David": {
      "id": "2004_NE",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "NE",
      "state": "Nebraska",
      "votes": 978,
      "parties": [
        "Green"
      ]
    },
    "Calero, Róger": {
      "id": "2004_NE",
      "year": 2004,
      "name": "Calero, Róger",
      "abbr": "NE",
      "state": "Nebraska",
      "votes": 82,
      "parties": [
        "By Petition"
      ]
    }
  },
  "2004_NV": {
    "Bush, George W.": {
      "id": "2004_NV",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "NV",
      "state": "Nevada",
      "votes": 418690,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_NV",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "NV",
      "state": "Nevada",
      "votes": 397190,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_NV",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "NV",
      "state": "Nevada",
      "votes": 4838,
      "parties": [
        "Independent"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_NV",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "NV",
      "state": "Nevada",
      "votes": 3176,
      "parties": [
        "Libertarian"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2004_NV",
      "year": 2004,
      "name": "Peroutka, Michael A.",
      "abbr": "NV",
      "state": "Nevada",
      "votes": 1152,
      "parties": [
        "Independent American"
      ]
    },
    "Cobb, David": {
      "id": "2004_NV",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "NV",
      "state": "Nevada",
      "votes": 853,
      "parties": [
        "Green"
      ]
    }
  },
  "2004_NH": {
    "Kerry, John F.": {
      "id": "2004_NH",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 340511,
      "parties": [
        "Democratic"
      ]
    },
    "Bush, George W.": {
      "id": "2004_NH",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 331237,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_NH",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 4479,
      "parties": [
        "Independent"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_NH",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 372,
      "parties": [
        "Write-In"
      ]
    },
    "McCain, John": {
      "id": "2004_NH",
      "year": 2004,
      "name": "McCain, John",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 357,
      "parties": [
        "Write-In"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2004_NH",
      "year": 2004,
      "name": "Peroutka, Michael A.",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 161,
      "parties": [
        "Write-In"
      ]
    },
    "Dean, Howard": {
      "id": "2004_NH",
      "year": 2004,
      "name": "Dean, Howard",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 42,
      "parties": [
        "Write-In"
      ]
    },
    "Clark, Wesley": {
      "id": "2004_NH",
      "year": 2004,
      "name": "Clark, Wesley",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 14,
      "parties": [
        "Write-In"
      ]
    },
    "Powell, Wesley": {
      "id": "2004_NH",
      "year": 2004,
      "name": "Powell, Wesley",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 14,
      "parties": [
        "Write-In"
      ]
    },
    "Kucinich, Dennis": {
      "id": "2004_NH",
      "year": 2004,
      "name": "Kucinich, Dennis",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 8,
      "parties": [
        "Write-In"
      ]
    },
    "Edwards, John": {
      "id": "2004_NH",
      "year": 2004,
      "name": "Edwards, John",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 5,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_NJ": {
    "Kerry, John F.": {
      "id": "2004_NJ",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 1911430,
      "parties": [
        "Democratic"
      ]
    },
    "Bush, George W.": {
      "id": "2004_NJ",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 1670003,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_NJ",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 19418,
      "parties": [
        "Independent"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_NJ",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 4514,
      "parties": [
        "Libertarian"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2004_NJ",
      "year": 2004,
      "name": "Peroutka, Michael A.",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 2750,
      "parties": [
        "Constitution"
      ]
    },
    "Cobb, David": {
      "id": "2004_NJ",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 1807,
      "parties": [
        "Green"
      ]
    },
    "Brown, Walter": {
      "id": "2004_NJ",
      "year": 2004,
      "name": "Brown, Walter",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 664,
      "parties": [
        "Socialist Party USA"
      ]
    },
    "Van Auken, Bill": {
      "id": "2004_NJ",
      "year": 2004,
      "name": "Van Auken, Bill",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 575,
      "parties": [
        "Socialist Equality Party"
      ]
    },
    "Calero, Róger": {
      "id": "2004_NJ",
      "year": 2004,
      "name": "Calero, Róger",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 530,
      "parties": [
        "Socialist Workers Party"
      ]
    }
  },
  "2004_NM": {
    "Bush, George W.": {
      "id": "2004_NM",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "NM",
      "state": "New Mexico",
      "votes": 376930,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_NM",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "NM",
      "state": "New Mexico",
      "votes": 370942,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_NM",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "NM",
      "state": "New Mexico",
      "votes": 4053,
      "parties": [
        "Independent"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_NM",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "NM",
      "state": "New Mexico",
      "votes": 2382,
      "parties": [
        "Libertarian"
      ]
    },
    "Cobb, David": {
      "id": "2004_NM",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "NM",
      "state": "New Mexico",
      "votes": 1226,
      "parties": [
        "Green"
      ]
    },
    "Peroutka, Michael": {
      "id": "2004_NM",
      "year": 2004,
      "name": "Peroutka, Michael",
      "abbr": "NM",
      "state": "New Mexico",
      "votes": 771,
      "parties": [
        "Constitution"
      ]
    }
  },
  "2004_NY": {
    "Kerry, John F.": {
      "id": "2004_NY",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "NY",
      "state": "New York",
      "votes": 4314280,
      "parties": [
        "Democratic",
        "Working Families"
      ]
    },
    "Bush, George W.": {
      "id": "2004_NY",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "NY",
      "state": "New York",
      "votes": 2962567,
      "parties": [
        "Republican",
        "Conservative"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_NY",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "NY",
      "state": "New York",
      "votes": 99873,
      "parties": [
        "Independence",
        "Peace And Justice"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_NY",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "NY",
      "state": "New York",
      "votes": 11607,
      "parties": [
        "Libertarian"
      ]
    },
    "Calero, Róger": {
      "id": "2004_NY",
      "year": 2004,
      "name": "Calero, Róger",
      "abbr": "NY",
      "state": "New York",
      "votes": 2405,
      "parties": [
        "Socialist Workers Party"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2004_NY",
      "year": 2004,
      "name": "Peroutka, Michael A.",
      "abbr": "NY",
      "state": "New York",
      "votes": 207,
      "parties": [
        "Write-In"
      ]
    },
    "Cobb, David": {
      "id": "2004_NY",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "NY",
      "state": "New York",
      "votes": 87,
      "parties": [
        "Write-In"
      ]
    },
    "Kennedy, John Joseph": {
      "id": "2004_NY",
      "year": 2004,
      "name": "Kennedy, John Joseph",
      "abbr": "NY",
      "state": "New York",
      "votes": 4,
      "parties": [
        "Write-In"
      ]
    },
    "Halpin, Michael": {
      "id": "2004_NY",
      "year": 2004,
      "name": "Halpin, Michael",
      "abbr": "NY",
      "state": "New York",
      "votes": 4,
      "parties": [
        "Write-In"
      ]
    },
    "Van Auken, Bill": {
      "id": "2004_NY",
      "year": 2004,
      "name": "Van Auken, Bill",
      "abbr": "NY",
      "state": "New York",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_NC": {
    "Bush, George W.": {
      "id": "2004_NC",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "NC",
      "state": "North Carolina",
      "votes": 1961166,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_NC",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "NC",
      "state": "North Carolina",
      "votes": 1525849,
      "parties": [
        "Democratic"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_NC",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "NC",
      "state": "North Carolina",
      "votes": 11731,
      "parties": [
        "Libertarian"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_NC",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "NC",
      "state": "North Carolina",
      "votes": 1805,
      "parties": [
        "Write-In"
      ]
    },
    "Brown, Walt": {
      "id": "2004_NC",
      "year": 2004,
      "name": "Brown, Walt",
      "abbr": "NC",
      "state": "North Carolina",
      "votes": 348,
      "parties": [
        "Write-In"
      ]
    },
    "Cobb, David": {
      "id": "2004_NC",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "NC",
      "state": "North Carolina",
      "votes": 108,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_ND": {
    "Bush, George W.": {
      "id": "2004_ND",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "ND",
      "state": "North Dakota",
      "votes": 196651,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_ND",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "ND",
      "state": "North Dakota",
      "votes": 111052,
      "parties": [
        "Democratic-Nonpartisan League"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_ND",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "ND",
      "state": "North Dakota",
      "votes": 3756,
      "parties": [
        "Independent"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_ND",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "ND",
      "state": "North Dakota",
      "votes": 851,
      "parties": [
        "Libertarian"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2004_ND",
      "year": 2004,
      "name": "Peroutka, Michael A.",
      "abbr": "ND",
      "state": "North Dakota",
      "votes": 514,
      "parties": [
        "Constitution"
      ]
    },
    "Wishnatsky, Martin": {
      "id": "2004_ND",
      "year": 2004,
      "name": "Wishnatsky, Martin",
      "abbr": "ND",
      "state": "North Dakota",
      "votes": 9,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_OH": {
    "Bush, George W.": {
      "id": "2004_OH",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 2859768,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_OH",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 2741167,
      "parties": [
        "Democratic"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_OH",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 14676,
      "parties": [
        "Nonpartisan"
      ]
    },
    "Peroutka, Michael Anthony": {
      "id": "2004_OH",
      "year": 2004,
      "name": "Peroutka, Michael Anthony",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 11939,
      "parties": [
        "Nonpartisan"
      ]
    },
    "Cobb, David Keith": {
      "id": "2004_OH",
      "year": 2004,
      "name": "Cobb, David Keith",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 192,
      "parties": [
        "Write-In"
      ]
    },
    "Schriner, Joe": {
      "id": "2004_OH",
      "year": 2004,
      "name": "Schriner, Joe",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 114,
      "parties": [
        "Write-In"
      ]
    },
    "Harris, James": {
      "id": "2004_OH",
      "year": 2004,
      "name": "Harris, James",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 22,
      "parties": [
        "Write-In"
      ]
    },
    "Duncan, Richard A.": {
      "id": "2004_OH",
      "year": 2004,
      "name": "Duncan, Richard A.",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 17,
      "parties": [
        "Write-In"
      ]
    },
    "Zych, Thomas F.": {
      "id": "2004_OH",
      "year": 2004,
      "name": "Zych, Thomas F.",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 11,
      "parties": [
        "Write-In"
      ]
    },
    "Parker, John T.": {
      "id": "2004_OH",
      "year": 2004,
      "name": "Parker, John T.",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_OK": {
    "Bush, George W.": {
      "id": "2004_OK",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "OK",
      "state": "Oklahoma",
      "votes": 959792,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_OK",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "OK",
      "state": "Oklahoma",
      "votes": 503966,
      "parties": [
        "Democratic"
      ]
    }
  },
  "2004_OR": {
    "Kerry, John F.": {
      "id": "2004_OR",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "OR",
      "state": "Oregon",
      "votes": 943163,
      "parties": [
        "Democratic"
      ]
    },
    "Bush, George W.": {
      "id": "2004_OR",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "OR",
      "state": "Oregon",
      "votes": 866831,
      "parties": [
        "Republican"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_OR",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "OR",
      "state": "Oregon",
      "votes": 7260,
      "parties": [
        "Libertarian"
      ]
    },
    "Cobb, David": {
      "id": "2004_OR",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "OR",
      "state": "Oregon",
      "votes": 5315,
      "parties": [
        "Pacific Green"
      ]
    },
    "Peroutka, Michael Anthony": {
      "id": "2004_OR",
      "year": 2004,
      "name": "Peroutka, Michael Anthony",
      "abbr": "OR",
      "state": "Oregon",
      "votes": 5257,
      "parties": [
        "Constitution"
      ]
    }
  },
  "2004_PA": {
    "Kerry, John F.": {
      "id": "2004_PA",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "PA",
      "state": "Pennsylvania",
      "votes": 2938095,
      "parties": [
        "Democratic"
      ]
    },
    "Bush, George W.": {
      "id": "2004_PA",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "PA",
      "state": "Pennsylvania",
      "votes": 2793847,
      "parties": [
        "Republican"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_PA",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "PA",
      "state": "Pennsylvania",
      "votes": 21185,
      "parties": [
        "Libertarian"
      ]
    },
    "Cobb, David K.": {
      "id": "2004_PA",
      "year": 2004,
      "name": "Cobb, David K.",
      "abbr": "PA",
      "state": "Pennsylvania",
      "votes": 6319,
      "parties": [
        "Green"
      ]
    },
    "Peroutka, Michael Anthony": {
      "id": "2004_PA",
      "year": 2004,
      "name": "Peroutka, Michael Anthony",
      "abbr": "PA",
      "state": "Pennsylvania",
      "votes": 6318,
      "parties": [
        "Constitution"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_PA",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "PA",
      "state": "Pennsylvania",
      "votes": 2656,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_RI": {
    "Kerry, John F.": {
      "id": "2004_RI",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 259765,
      "parties": [
        "Democratic",
        "Write-In"
      ]
    },
    "Bush, George W.": {
      "id": "2004_RI",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 169046,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_RI",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 4661,
      "parties": [
        "Reform",
        "Write-In"
      ]
    },
    "Cobb, David": {
      "id": "2004_RI",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 1333,
      "parties": [
        "Green"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_RI",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 907,
      "parties": [
        "Libertarian"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2004_RI",
      "year": 2004,
      "name": "Peroutka, Michael A.",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 339,
      "parties": [
        "Constitution"
      ]
    },
    "McCain, John": {
      "id": "2004_RI",
      "year": 2004,
      "name": "McCain, John",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 284,
      "parties": [
        "Write-In"
      ]
    },
    "Parker, John": {
      "id": "2004_RI",
      "year": 2004,
      "name": "Parker, John",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 253,
      "parties": []
    },
    "Powell, Colin": {
      "id": "2004_RI",
      "year": 2004,
      "name": "Powell, Colin",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 35,
      "parties": [
        "Write-In"
      ]
    },
    "Chafee, Lincoln": {
      "id": "2004_RI",
      "year": 2004,
      "name": "Chafee, Lincoln",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 12,
      "parties": [
        "Write-In"
      ]
    },
    "Dean, Howard": {
      "id": "2004_RI",
      "year": 2004,
      "name": "Dean, Howard",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 12,
      "parties": [
        "Write-In"
      ]
    },
    "Buchanan, Patrick": {
      "id": "2004_RI",
      "year": 2004,
      "name": "Buchanan, Patrick",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 10,
      "parties": [
        "Write-In"
      ]
    },
    "Bush, George, Sr.": {
      "id": "2004_RI",
      "year": 2004,
      "name": "Bush, George, Sr.",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 9,
      "parties": [
        "Write-In"
      ]
    },
    "Guilliani, Rudy": {
      "id": "2004_RI",
      "year": 2004,
      "name": "Guilliani, Rudy",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 9,
      "parties": [
        "Write-In"
      ]
    },
    "Clinton, Hillary": {
      "id": "2004_RI",
      "year": 2004,
      "name": "Clinton, Hillary",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 8,
      "parties": [
        "Write-In"
      ]
    },
    "Kucinich, Dennis J.": {
      "id": "2004_RI",
      "year": 2004,
      "name": "Kucinich, Dennis J.",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 8,
      "parties": [
        "Write-In"
      ]
    },
    "Clinton, Bill": {
      "id": "2004_RI",
      "year": 2004,
      "name": "Clinton, Bill",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 7,
      "parties": [
        "Write-In"
      ]
    },
    "Lieberman, Joseph": {
      "id": "2004_RI",
      "year": 2004,
      "name": "Lieberman, Joseph",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 6,
      "parties": [
        "Write-In"
      ]
    },
    "Mouse, Mickey": {
      "id": "2004_RI",
      "year": 2004,
      "name": "Mouse, Mickey",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 6,
      "parties": [
        "Write-In"
      ]
    },
    "Shilling, Curt": {
      "id": "2004_RI",
      "year": 2004,
      "name": "Shilling, Curt",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 6,
      "parties": [
        "Write-In"
      ]
    },
    "None of the Above": {
      "id": "2004_RI",
      "year": 2004,
      "name": "None of the Above",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 5,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_SC": {
    "Bush, George W.": {
      "id": "2004_SC",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "SC",
      "state": "South Carolina",
      "votes": 937974,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_SC",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "SC",
      "state": "South Carolina",
      "votes": 661699,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_SC",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "SC",
      "state": "South Carolina",
      "votes": 5520,
      "parties": [
        "Independence"
      ]
    },
    "Peroutka, Michael": {
      "id": "2004_SC",
      "year": 2004,
      "name": "Peroutka, Michael",
      "abbr": "SC",
      "state": "South Carolina",
      "votes": 5317,
      "parties": [
        "Constitution"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_SC",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "SC",
      "state": "South Carolina",
      "votes": 3608,
      "parties": [
        "Libertarian"
      ]
    },
    "Brown, Walter F. \"Walt\"": {
      "id": "2004_SC",
      "year": 2004,
      "name": "Brown, Walter F. \"Walt\"",
      "abbr": "SC",
      "state": "South Carolina",
      "votes": 2124,
      "parties": [
        "United Citizens"
      ]
    },
    "Cobb, David": {
      "id": "2004_SC",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "SC",
      "state": "South Carolina",
      "votes": 1488,
      "parties": [
        "Green"
      ]
    }
  },
  "2004_SD": {
    "Bush, George W.": {
      "id": "2004_SD",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "SD",
      "state": "South Dakota",
      "votes": 232584,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_SD",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "SD",
      "state": "South Dakota",
      "votes": 149244,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_SD",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "SD",
      "state": "South Dakota",
      "votes": 4320,
      "parties": [
        "Independent"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2004_SD",
      "year": 2004,
      "name": "Peroutka, Michael A.",
      "abbr": "SD",
      "state": "South Dakota",
      "votes": 1103,
      "parties": [
        "Constitution"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_SD",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "SD",
      "state": "South Dakota",
      "votes": 964,
      "parties": [
        "Libertarian"
      ]
    }
  },
  "2004_TN": {
    "Bush, George W.": {
      "id": "2004_TN",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 1384375,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_TN",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 1036477,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_TN",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 8992,
      "parties": [
        "Independent"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_TN",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 4866,
      "parties": [
        "Independent"
      ]
    },
    "Peroutka, Michael Anthony": {
      "id": "2004_TN",
      "year": 2004,
      "name": "Peroutka, Michael Anthony",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 2570,
      "parties": [
        "Independent"
      ]
    },
    "Cobb, David": {
      "id": "2004_TN",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 33,
      "parties": [
        "Write-In"
      ]
    },
    "Brown, Walt": {
      "id": "2004_TN",
      "year": 2004,
      "name": "Brown, Walt",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 6,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_TX": {
    "Bush, George W.": {
      "id": "2004_TX",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "TX",
      "state": "Texas",
      "votes": 4526917,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_TX",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "TX",
      "state": "Texas",
      "votes": 2832704,
      "parties": [
        "Democratic"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_TX",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "TX",
      "state": "Texas",
      "votes": 38787,
      "parties": [
        "Libertarian"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_TX",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "TX",
      "state": "Texas",
      "votes": 9159,
      "parties": [
        "Write-In"
      ]
    },
    "Peroutka, Michael Anthony": {
      "id": "2004_TX",
      "year": 2004,
      "name": "Peroutka, Michael Anthony",
      "abbr": "TX",
      "state": "Texas",
      "votes": 1636,
      "parties": [
        "Write-In"
      ]
    },
    "Cobb, David Keith": {
      "id": "2004_TX",
      "year": 2004,
      "name": "Cobb, David Keith",
      "abbr": "TX",
      "state": "Texas",
      "votes": 1014,
      "parties": [
        "Write-In"
      ]
    },
    "Falk, Andrew J.": {
      "id": "2004_TX",
      "year": 2004,
      "name": "Falk, Andrew J.",
      "abbr": "TX",
      "state": "Texas",
      "votes": 219,
      "parties": [
        "Write-In"
      ]
    },
    "Kennedy, John Joseph": {
      "id": "2004_TX",
      "year": 2004,
      "name": "Kennedy, John Joseph",
      "abbr": "TX",
      "state": "Texas",
      "votes": 126,
      "parties": [
        "Write-In"
      ]
    },
    "Brown, Walt": {
      "id": "2004_TX",
      "year": 2004,
      "name": "Brown, Walt",
      "abbr": "TX",
      "state": "Texas",
      "votes": 111,
      "parties": [
        "Write-In"
      ]
    },
    "Allen, Deborah Elaine": {
      "id": "2004_TX",
      "year": 2004,
      "name": "Allen, Deborah Elaine",
      "abbr": "TX",
      "state": "Texas",
      "votes": 92,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_UT": {
    "Bush, George W.": {
      "id": "2004_UT",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "UT",
      "state": "Utah",
      "votes": 663742,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_UT",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "UT",
      "state": "Utah",
      "votes": 241199,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_UT",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "UT",
      "state": "Utah",
      "votes": 11305,
      "parties": [
        "Unaffiliated"
      ]
    },
    "Peroutka, Michael Anthony": {
      "id": "2004_UT",
      "year": 2004,
      "name": "Peroutka, Michael Anthony",
      "abbr": "UT",
      "state": "Utah",
      "votes": 6841,
      "parties": [
        "Constitution"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_UT",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "UT",
      "state": "Utah",
      "votes": 3375,
      "parties": [
        "Libertarian"
      ]
    },
    "Jay, Charles": {
      "id": "2004_UT",
      "year": 2004,
      "name": "Jay, Charles",
      "abbr": "UT",
      "state": "Utah",
      "votes": 946,
      "parties": [
        "Personal Choice"
      ]
    },
    "Harris, James": {
      "id": "2004_UT",
      "year": 2004,
      "name": "Harris, James",
      "abbr": "UT",
      "state": "Utah",
      "votes": 393,
      "parties": [
        "Socialist Workers Party"
      ]
    },
    "Cobb, David": {
      "id": "2004_UT",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "UT",
      "state": "Utah",
      "votes": 39,
      "parties": [
        "Write-In"
      ]
    },
    "Topham, Lawrence Rey": {
      "id": "2004_UT",
      "year": 2004,
      "name": "Topham, Lawrence Rey",
      "abbr": "UT",
      "state": "Utah",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Schriner, Joe": {
      "id": "2004_UT",
      "year": 2004,
      "name": "Schriner, Joe",
      "abbr": "UT",
      "state": "Utah",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Kennedy, John Joseph": {
      "id": "2004_UT",
      "year": 2004,
      "name": "Kennedy, John Joseph",
      "abbr": "UT",
      "state": "Utah",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_VT": {
    "Kerry, John F.": {
      "id": "2004_VT",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 184067,
      "parties": [
        "Democratic"
      ]
    },
    "Bush, George W.": {
      "id": "2004_VT",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 121180,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_VT",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 4494,
      "parties": [
        "Independent"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_VT",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 1102,
      "parties": [
        "Libertarian"
      ]
    },
    "Parker, John Thompson": {
      "id": "2004_VT",
      "year": 2004,
      "name": "Parker, John Thompson",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 265,
      "parties": [
        "Liberty Union"
      ]
    },
    "Calero, Róger": {
      "id": "2004_VT",
      "year": 2004,
      "name": "Calero, Róger",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 244,
      "parties": [
        "Socialist Workers Party"
      ]
    }
  },
  "2004_VA": {
    "Bush, George W.": {
      "id": "2004_VA",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 1716959,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_VA",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 1454742,
      "parties": [
        "Democratic"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_VA",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 11032,
      "parties": [
        "Libertarian"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2004_VA",
      "year": 2004,
      "name": "Peroutka, Michael A.",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 10161,
      "parties": [
        "Constitution"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_VA",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 2393,
      "parties": [
        "Write-In"
      ]
    },
    "Cobb, David": {
      "id": "2004_VA",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 104,
      "parties": [
        "Write-In"
      ]
    },
    "Brown, Walter F.": {
      "id": "2004_VA",
      "year": 2004,
      "name": "Brown, Walter F.",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 23,
      "parties": [
        "Write-In"
      ]
    },
    "Spence, Joseph": {
      "id": "2004_VA",
      "year": 2004,
      "name": "Spence, Joseph",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_WA": {
    "Kerry, John": {
      "id": "2004_WA",
      "year": 2004,
      "name": "Kerry, John",
      "abbr": "WA",
      "state": "Washington",
      "votes": 1510201,
      "parties": [
        "Democratic"
      ]
    },
    "Bush, George": {
      "id": "2004_WA",
      "year": 2004,
      "name": "Bush, George",
      "abbr": "WA",
      "state": "Washington",
      "votes": 1304894,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_WA",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "WA",
      "state": "Washington",
      "votes": 23283,
      "parties": [
        "Independent"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_WA",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "WA",
      "state": "Washington",
      "votes": 11955,
      "parties": [
        "Libertarian"
      ]
    },
    "Peroutka, Michael Anthony": {
      "id": "2004_WA",
      "year": 2004,
      "name": "Peroutka, Michael Anthony",
      "abbr": "WA",
      "state": "Washington",
      "votes": 3922,
      "parties": [
        "Constitution"
      ]
    },
    "Cobb, David": {
      "id": "2004_WA",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "WA",
      "state": "Washington",
      "votes": 2974,
      "parties": [
        "Green"
      ]
    },
    "Parker, John": {
      "id": "2004_WA",
      "year": 2004,
      "name": "Parker, John",
      "abbr": "WA",
      "state": "Washington",
      "votes": 1077,
      "parties": []
    },
    "Harris, James": {
      "id": "2004_WA",
      "year": 2004,
      "name": "Harris, James",
      "abbr": "WA",
      "state": "Washington",
      "votes": 547,
      "parties": [
        "Socialist Workers Party"
      ]
    },
    "Van Auken, Bill": {
      "id": "2004_WA",
      "year": 2004,
      "name": "Van Auken, Bill",
      "abbr": "WA",
      "state": "Washington",
      "votes": 231,
      "parties": [
        "Socialist Equality Party"
      ]
    }
  },
  "2004_WV": {
    "Bush, George W.": {
      "id": "2004_WV",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 423778,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_WV",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 326541,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_WV",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 4063,
      "parties": [
        "Independent"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_WV",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 1405,
      "parties": [
        "Libertarian"
      ]
    },
    "Peroutka, Michael": {
      "id": "2004_WV",
      "year": 2004,
      "name": "Peroutka, Michael",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 82,
      "parties": [
        "Write-In"
      ]
    },
    "Kennedy, John": {
      "id": "2004_WV",
      "year": 2004,
      "name": "Kennedy, John",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 13,
      "parties": [
        "Write-In"
      ]
    },
    "Cobb, David": {
      "id": "2004_WV",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 5,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2004_WI": {
    "Kerry, John F.": {
      "id": "2004_WI",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 1489504,
      "parties": [
        "Democratic"
      ]
    },
    "Bush, George W.": {
      "id": "2004_WI",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 1478120,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_WI",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 16390,
      "parties": [
        "The Better Life"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_WI",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 6464,
      "parties": [
        "Libertarian"
      ]
    },
    "Cobb, David": {
      "id": "2004_WI",
      "year": 2004,
      "name": "Cobb, David",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 2661,
      "parties": [
        "Wisconsin Greens"
      ]
    },
    "Brown, Walter F.": {
      "id": "2004_WI",
      "year": 2004,
      "name": "Brown, Walter F.",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 471,
      "parties": [
        "Socialist Party Of Wisconsin"
      ]
    },
    "Harris, James": {
      "id": "2004_WI",
      "year": 2004,
      "name": "Harris, James",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 411,
      "parties": [
        "Socialist Workers Party"
      ]
    }
  },
  "2004_WY": {
    "Bush, George W.": {
      "id": "2004_WY",
      "year": 2004,
      "name": "Bush, George W.",
      "abbr": "WY",
      "state": "Wyoming",
      "votes": 167629,
      "parties": [
        "Republican"
      ]
    },
    "Kerry, John F.": {
      "id": "2004_WY",
      "year": 2004,
      "name": "Kerry, John F.",
      "abbr": "WY",
      "state": "Wyoming",
      "votes": 70776,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2004_WY",
      "year": 2004,
      "name": "Nader, Ralph",
      "abbr": "WY",
      "state": "Wyoming",
      "votes": 2741,
      "parties": [
        "Independent"
      ]
    },
    "Badnarik, Michael": {
      "id": "2004_WY",
      "year": 2004,
      "name": "Badnarik, Michael",
      "abbr": "WY",
      "state": "Wyoming",
      "votes": 1171,
      "parties": [
        "Libertarian"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2004_WY",
      "year": 2004,
      "name": "Peroutka, Michael A.",
      "abbr": "WY",
      "state": "Wyoming",
      "votes": 631,
      "parties": [
        "Independent"
      ]
    }
  }
}

const results2008 = {
  "2008_AL": {
    "McCain, John": {
      "id": "2008_AL",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "AL",
      "state": "Alabama",
      "votes": 1266546,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_AL",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "AL",
      "state": "Alabama",
      "votes": 813479,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_AL",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "AL",
      "state": "Alabama",
      "votes": 6788,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_AL",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "AL",
      "state": "Alabama",
      "votes": 4991,
      "parties": [
        "Independent"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_AL",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "AL",
      "state": "Alabama",
      "votes": 4310,
      "parties": [
        "Independent"
      ]
    }
  },
  "2008_AK": {
    "McCain, John": {
      "id": "2008_AK",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "AK",
      "state": "Alaska",
      "votes": 193841,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_AK",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "AK",
      "state": "Alaska",
      "votes": 123594,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_AK",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "AK",
      "state": "Alaska",
      "votes": 3783,
      "parties": [
        "Independent"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_AK",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "AK",
      "state": "Alaska",
      "votes": 1660,
      "parties": [
        "Alaskan Independence"
      ]
    },
    "Barr, Bob": {
      "id": "2008_AK",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "AK",
      "state": "Alaska",
      "votes": 1589,
      "parties": [
        "Libertarian"
      ]
    }
  },
  "2008_AZ": {
    "McCain, John": {
      "id": "2008_AZ",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 1230111,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_AZ",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 1034707,
      "parties": [
        "Democratic"
      ]
    },
    "Barr, Bob": {
      "id": "2008_AZ",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 12555,
      "parties": [
        "Libertarian"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_AZ",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 11301,
      "parties": [
        "Independent"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_AZ",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 3406,
      "parties": [
        "Green"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_AZ",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 1371,
      "parties": [
        "Write-In"
      ]
    },
    "Jay, Charles": {
      "id": "2008_AZ",
      "year": 2008,
      "name": "Jay, Charles",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 16,
      "parties": [
        "Write-In"
      ]
    },
    "Allen, Jonathan": {
      "id": "2008_AZ",
      "year": 2008,
      "name": "Allen, Jonathan",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 8,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_AR": {
    "McCain, John": {
      "id": "2008_AR",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "AR",
      "state": "Arkansas",
      "votes": 638017,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_AR",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "AR",
      "state": "Arkansas",
      "votes": 422310,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_AR",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "AR",
      "state": "Arkansas",
      "votes": 12882,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_AR",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "AR",
      "state": "Arkansas",
      "votes": 4776,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_AR",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "AR",
      "state": "Arkansas",
      "votes": 4023,
      "parties": [
        "Constitution"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_AR",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "AR",
      "state": "Arkansas",
      "votes": 3470,
      "parties": [
        "Green"
      ]
    },
    "La Riva, Gloria": {
      "id": "2008_AR",
      "year": 2008,
      "name": "La Riva, Gloria",
      "abbr": "AR",
      "state": "Arkansas",
      "votes": 1139,
      "parties": [
        "Socialism and Liberation Party"
      ]
    }
  },
  "2008_CA": {
    "Obama, Barack": {
      "id": "2008_CA",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "CA",
      "state": "California",
      "votes": 8274473,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_CA",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "CA",
      "state": "California",
      "votes": 5011781,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_CA",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "CA",
      "state": "California",
      "votes": 108381,
      "parties": [
        "Peace And Freedom"
      ]
    },
    "Barr, Bob": {
      "id": "2008_CA",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "CA",
      "state": "California",
      "votes": 67582,
      "parties": [
        "Libertarian"
      ]
    },
    "Keyes, Alan": {
      "id": "2008_CA",
      "year": 2008,
      "name": "Keyes, Alan",
      "abbr": "CA",
      "state": "California",
      "votes": 40673,
      "parties": [
        "American Independent"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_CA",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "CA",
      "state": "California",
      "votes": 38774,
      "parties": [
        "Green"
      ]
    },
    "Paul, Ron": {
      "id": "2008_CA",
      "year": 2008,
      "name": "Paul, Ron",
      "abbr": "CA",
      "state": "California",
      "votes": 17006,
      "parties": [
        "Write-In"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_CA",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "CA",
      "state": "California",
      "votes": 3145,
      "parties": [
        "Write-In"
      ]
    },
    "Harris, James": {
      "id": "2008_CA",
      "year": 2008,
      "name": "Harris, James",
      "abbr": "CA",
      "state": "California",
      "votes": 49,
      "parties": [
        "Write-In"
      ]
    },
    "Moore, Frank": {
      "id": "2008_CA",
      "year": 2008,
      "name": "Moore, Frank",
      "abbr": "CA",
      "state": "California",
      "votes": 36,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_CO": {
    "Obama, Barack": {
      "id": "2008_CO",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 1288633,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_CO",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 1073629,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_CO",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 13352,
      "parties": [
        "Unaffiliated"
      ]
    },
    "Barr, Bob": {
      "id": "2008_CO",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 10898,
      "parties": [
        "Libertarian Party of Colorado"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_CO",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 6233,
      "parties": [
        "Constitution"
      ]
    },
    "Keyes, Alan": {
      "id": "2008_CO",
      "year": 2008,
      "name": "Keyes, Alan",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 3051,
      "parties": [
        "America’s Independent"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_CO",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 2822,
      "parties": [
        "Green Party of Colorado"
      ]
    },
    "McEnulty, Frank Edward": {
      "id": "2008_CO",
      "year": 2008,
      "name": "McEnulty, Frank Edward",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 829,
      "parties": [
        "Unaffiliated"
      ]
    },
    "Jay, Charles": {
      "id": "2008_CO",
      "year": 2008,
      "name": "Jay, Charles",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 598,
      "parties": [
        "Boston Tea Party"
      ]
    },
    "Allen, Jonathan E.": {
      "id": "2008_CO",
      "year": 2008,
      "name": "Allen, Jonathan E.",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 348,
      "parties": [
        "HeartQuake ‘08"
      ]
    },
    "Stevens, Thomas Robert": {
      "id": "2008_CO",
      "year": 2008,
      "name": "Stevens, Thomas Robert",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 336,
      "parties": [
        "Objectivist Party"
      ]
    },
    "Moore, Brian": {
      "id": "2008_CO",
      "year": 2008,
      "name": "Moore, Brian",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 226,
      "parties": [
        "Socialist Party USA"
      ]
    },
    "La Riva, Gloria": {
      "id": "2008_CO",
      "year": 2008,
      "name": "La Riva, Gloria",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 158,
      "parties": [
        "Socialism and Liberation Party"
      ]
    },
    "Harris, James": {
      "id": "2008_CO",
      "year": 2008,
      "name": "Harris, James",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 154,
      "parties": [
        "Socialist Workers Party"
      ]
    },
    "Lyttle, Bradford": {
      "id": "2008_CO",
      "year": 2008,
      "name": "Lyttle, Bradford",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 110,
      "parties": [
        "U.S. Pacificist Party"
      ]
    },
    "Amondson, Gene C.": {
      "id": "2008_CO",
      "year": 2008,
      "name": "Amondson, Gene C.",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 85,
      "parties": [
        "Prohibition Party"
      ]
    }
  },
  "2008_CT": {
    "Obama, Barack": {
      "id": "2008_CT",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 997772,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_CT",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 629428,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_CT",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 19162,
      "parties": [
        "Independent"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_CT",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 311,
      "parties": [
        "Write-In"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_CT",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 90,
      "parties": [
        "Write-In"
      ]
    },
    "Moore, Brian": {
      "id": "2008_CT",
      "year": 2008,
      "name": "Moore, Brian",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 19,
      "parties": [
        "Write-In"
      ]
    },
    "Calero, Roger": {
      "id": "2008_CT",
      "year": 2008,
      "name": "Calero, Roger",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 15,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_DE": {
    "Obama, Barack": {
      "id": "2008_DE",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 255459,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_DE",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 152374,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_DE",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 2401,
      "parties": [
        "Independent Party of Delaware"
      ]
    },
    "Barr, Bob": {
      "id": "2008_DE",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 1109,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_DE",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 626,
      "parties": [
        "Constitution"
      ]
    },
    "McKinney, Cynthia A.": {
      "id": "2008_DE",
      "year": 2008,
      "name": "McKinney, Cynthia A.",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 385,
      "parties": [
        "Green"
      ]
    },
    "Calero, Roger": {
      "id": "2008_DE",
      "year": 2008,
      "name": "Calero, Roger",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 58,
      "parties": [
        "Socialist Workers Party"
      ]
    }
  },
  "2008_DC": {
    "Obama, Barack": {
      "id": "2008_DC",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "DC",
      "state": "District of Columbia",
      "votes": 245800,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_DC",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "DC",
      "state": "District of Columbia",
      "votes": 17367,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_DC",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "DC",
      "state": "District of Columbia",
      "votes": 958,
      "parties": [
        "Independent"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_DC",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "DC",
      "state": "District of Columbia",
      "votes": 590,
      "parties": [
        "D.C. Statehood Green"
      ]
    }
  },
  "2008_FL": {
    "Obama, Barack": {
      "id": "2008_FL",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "FL",
      "state": "Florida",
      "votes": 4282074,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_FL",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "FL",
      "state": "Florida",
      "votes": 4045624,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_FL",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "FL",
      "state": "Florida",
      "votes": 28124,
      "parties": [
        "Ecology Party of Florida"
      ]
    },
    "Barr, Bob": {
      "id": "2008_FL",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "FL",
      "state": "Florida",
      "votes": 17218,
      "parties": [
        "Libertarian Party of Florida"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_FL",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "FL",
      "state": "Florida",
      "votes": 7915,
      "parties": [
        "Constitution Party of Florida"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_FL",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "FL",
      "state": "Florida",
      "votes": 2887,
      "parties": [
        "Green Party of Florida"
      ]
    },
    "Keyes, Alan": {
      "id": "2008_FL",
      "year": 2008,
      "name": "Keyes, Alan",
      "abbr": "FL",
      "state": "Florida",
      "votes": 2550,
      "parties": [
        "America’s Independent Party of Florida"
      ]
    },
    "La Riva, Gloria": {
      "id": "2008_FL",
      "year": 2008,
      "name": "La Riva, Gloria",
      "abbr": "FL",
      "state": "Florida",
      "votes": 1516,
      "parties": [
        "Party for Socialism and Liberation-Florida"
      ]
    },
    "Jay, Charles": {
      "id": "2008_FL",
      "year": 2008,
      "name": "Jay, Charles",
      "abbr": "FL",
      "state": "Florida",
      "votes": 795,
      "parties": [
        "Boston Tea Party"
      ]
    },
    "Harris, James": {
      "id": "2008_FL",
      "year": 2008,
      "name": "Harris, James",
      "abbr": "FL",
      "state": "Florida",
      "votes": 533,
      "parties": [
        "Florida Socialist Workers"
      ]
    },
    "Stevens, Thomas Robert": {
      "id": "2008_FL",
      "year": 2008,
      "name": "Stevens, Thomas Robert",
      "abbr": "FL",
      "state": "Florida",
      "votes": 419,
      "parties": [
        "Objectivist Party of Florida"
      ]
    },
    "Moore, Brian": {
      "id": "2008_FL",
      "year": 2008,
      "name": "Moore, Brian",
      "abbr": "FL",
      "state": "Florida",
      "votes": 405,
      "parties": [
        "Socialist Party of Florida"
      ]
    },
    "Nettles, Gary": {
      "id": "2008_FL",
      "year": 2008,
      "name": "Nettles, Gary",
      "abbr": "FL",
      "state": "Florida",
      "votes": 391,
      "parties": [
        "Write-In"
      ]
    },
    "Amondson, Gene": {
      "id": "2008_FL",
      "year": 2008,
      "name": "Amondson, Gene",
      "abbr": "FL",
      "state": "Florida",
      "votes": 293,
      "parties": [
        "Prohibition Party"
      ]
    }
  },
  "2008_GA": {
    "McCain, John": {
      "id": "2008_GA",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 2048759,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_GA",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 1844123,
      "parties": [
        "Democratic"
      ]
    },
    "Barr, Bob": {
      "id": "2008_GA",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 28731,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_GA",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 1402,
      "parties": [
        "Write-In"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_GA",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 1158,
      "parties": [
        "Write-In"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_GA",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 250,
      "parties": [
        "Write-In"
      ]
    },
    "Peroutka, Michael A.": {
      "id": "2008_GA",
      "year": 2008,
      "name": "Peroutka, Michael A.",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 23,
      "parties": [
        "Write-In"
      ]
    },
    "Harris, James": {
      "id": "2008_GA",
      "year": 2008,
      "name": "Harris, James",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 20,
      "parties": [
        "Write-In"
      ]
    },
    "Allen, Jonathan": {
      "id": "2008_GA",
      "year": 2008,
      "name": "Allen, Jonathan",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 8,
      "parties": [
        "Write-In"
      ]
    },
    "Moore, Frank": {
      "id": "2008_GA",
      "year": 2008,
      "name": "Moore, Frank",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 6,
      "parties": [
        "Write-In"
      ]
    },
    "Byrne, David C.": {
      "id": "2008_GA",
      "year": 2008,
      "name": "Byrne, David C.",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 4,
      "parties": [
        "Write-In"
      ]
    },
    "Brown, Brian Russell": {
      "id": "2008_GA",
      "year": 2008,
      "name": "Brown, Brian Russell",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_HI": {
    "Obama, Barack": {
      "id": "2008_HI",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "HI",
      "state": "Hawaii",
      "votes": 325871,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_HI",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "HI",
      "state": "Hawaii",
      "votes": 120566,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_HI",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "HI",
      "state": "Hawaii",
      "votes": 3825,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_HI",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "HI",
      "state": "Hawaii",
      "votes": 1314,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_HI",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "HI",
      "state": "Hawaii",
      "votes": 1013,
      "parties": [
        "Constitution"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_HI",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "HI",
      "state": "Hawaii",
      "votes": 979,
      "parties": [
        "Green"
      ]
    }
  },
  "2008_ID": {
    "McCain, John": {
      "id": "2008_ID",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 403012,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_ID",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 236440,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_ID",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 7175,
      "parties": [
        "Independent"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_ID",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 4747,
      "parties": [
        "Constitution"
      ]
    },
    "Barr, Bob": {
      "id": "2008_ID",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 3658,
      "parties": [
        "Libertarian"
      ]
    },
    "Keyes, Alan": {
      "id": "2008_ID",
      "year": 2008,
      "name": "Keyes, Alan",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 40,
      "parties": [
        "Write-In"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_ID",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 39,
      "parties": [
        "Write-In"
      ]
    },
    "Claus, Santa": {
      "id": "2008_ID",
      "year": 2008,
      "name": "Claus, Santa",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 6,
      "parties": [
        "Write-In"
      ]
    },
    "Moore, Brian": {
      "id": "2008_ID",
      "year": 2008,
      "name": "Moore, Brian",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 3,
      "parties": [
        "Write-In"
      ]
    },
    "Bone, Lawson Mitchell": {
      "id": "2008_ID",
      "year": 2008,
      "name": "Bone, Lawson Mitchell",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Reverend MerePeace-MsMere": {
      "id": "2008_ID",
      "year": 2008,
      "name": "Reverend MerePeace-MsMere",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_IL": {
    "Obama, Barack": {
      "id": "2008_IL",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 3419348,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_IL",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 2031179,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_IL",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 30948,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_IL",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 19642,
      "parties": [
        "Libertarian"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_IL",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 11838,
      "parties": [
        "Green"
      ]
    },
    "Baldwin, Charles O.": {
      "id": "2008_IL",
      "year": 2008,
      "name": "Baldwin, Charles O.",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 8256,
      "parties": [
        "Constitution Party of Illinois"
      ]
    },
    "Polachek, John Joseph": {
      "id": "2008_IL",
      "year": 2008,
      "name": "Polachek, John Joseph",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 1149,
      "parties": [
        "New"
      ]
    },
    "Hobbs, Ronald G.": {
      "id": "2008_IL",
      "year": 2008,
      "name": "Hobbs, Ronald G.",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 4,
      "parties": [
        "Write-In"
      ]
    },
    "Allen, Donald K.": {
      "id": "2008_IL",
      "year": 2008,
      "name": "Allen, Donald K.",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 3,
      "parties": [
        "Write-In"
      ]
    },
    "Moore, Frank James": {
      "id": "2008_IL",
      "year": 2008,
      "name": "Moore, Frank James",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 3,
      "parties": [
        "Write-In"
      ]
    },
    "Paul, Ron": {
      "id": "2008_IL",
      "year": 2008,
      "name": "Paul, Ron",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_IN": {
    "Obama, Barack": {
      "id": "2008_IN",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 1374039,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_IN",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 1345648,
      "parties": [
        "Republican"
      ]
    },
    "Barr, Bob": {
      "id": "2008_IN",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 29257,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_IN",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 1024,
      "parties": [
        "Write-In"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_IN",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 909,
      "parties": [
        "Write-In"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_IN",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 87,
      "parties": [
        "Write-In"
      ]
    },
    "Castle, Darrell L.": {
      "id": "2008_IN",
      "year": 2008,
      "name": "Castle, Darrell L.",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 51,
      "parties": [
        "Write-In"
      ]
    },
    "Moore, Brian": {
      "id": "2008_IN",
      "year": 2008,
      "name": "Moore, Brian",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 14,
      "parties": [
        "Write-In"
      ]
    },
    "Faith, Michael L.": {
      "id": "2008_IN",
      "year": 2008,
      "name": "Faith, Michael L.",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 12,
      "parties": [
        "Write-In"
      ]
    },
    "Mottus, Kevin": {
      "id": "2008_IN",
      "year": 2008,
      "name": "Mottus, Kevin",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 9,
      "parties": [
        "Write-In"
      ]
    },
    "Bone, Lawson Mitchell": {
      "id": "2008_IN",
      "year": 2008,
      "name": "Bone, Lawson Mitchell",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Kujawski, \"Lou\"": {
      "id": "2008_IN",
      "year": 2008,
      "name": "Kujawski, \"Lou\"",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Plemons, John Leroy": {
      "id": "2008_IN",
      "year": 2008,
      "name": "Plemons, John Leroy",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_IA": {
    "Obama, Barack": {
      "id": "2008_IA",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 828940,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_IA",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 682379,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_IA",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 8014,
      "parties": [
        "Peace And Freedom"
      ]
    },
    "Barr, Bob": {
      "id": "2008_IA",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 4590,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_IA",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 4445,
      "parties": [
        "Constitution"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_IA",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 1423,
      "parties": [
        "Green"
      ]
    },
    "Harris, James": {
      "id": "2008_IA",
      "year": 2008,
      "name": "Harris, James",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 292,
      "parties": [
        "Socialist Workers Party"
      ]
    },
    "Moore, Brian": {
      "id": "2008_IA",
      "year": 2008,
      "name": "Moore, Brian",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 182,
      "parties": [
        "Socialist Party USA"
      ]
    },
    "La Riva, Gloria": {
      "id": "2008_IA",
      "year": 2008,
      "name": "La Riva, Gloria",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 121,
      "parties": [
        "Party for Socialism and Liberation"
      ]
    }
  },
  "2008_KS": {
    "McCain, John": {
      "id": "2008_KS",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 699655,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_KS",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 514765,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_KS",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 10527,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_KS",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 6706,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_KS",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 4148,
      "parties": [
        "Reform"
      ]
    },
    "McKinney, Cynthia A.": {
      "id": "2008_KS",
      "year": 2008,
      "name": "McKinney, Cynthia A.",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 35,
      "parties": [
        "Write-In"
      ]
    },
    "Keyes, Alan": {
      "id": "2008_KS",
      "year": 2008,
      "name": "Keyes, Alan",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 31,
      "parties": [
        "Write-In"
      ]
    },
    "Allen, Jonathan E.": {
      "id": "2008_KS",
      "year": 2008,
      "name": "Allen, Jonathan E.",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Moore, Frank": {
      "id": "2008_KS",
      "year": 2008,
      "name": "Moore, Frank",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Judd, Keith Russell": {
      "id": "2008_KS",
      "year": 2008,
      "name": "Judd, Keith Russell",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_KY": {
    "McCain, John": {
      "id": "2008_KY",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 1048462,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_KY",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 751985,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_KY",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 15378,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_KY",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 5989,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_KY",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 4694,
      "parties": [
        "Constitution"
      ]
    },
    "Habermehl, Leonard C.": {
      "id": "2008_KY",
      "year": 2008,
      "name": "Habermehl, Leonard C.",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 57,
      "parties": [
        "Write-In"
      ]
    },
    "Keyes, Alan": {
      "id": "2008_KY",
      "year": 2008,
      "name": "Keyes, Alan",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 27,
      "parties": [
        "Write-In"
      ]
    },
    "Mills, Billy": {
      "id": "2008_KY",
      "year": 2008,
      "name": "Mills, Billy",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 18,
      "parties": [
        "Write-In"
      ]
    },
    "Moore, Brian": {
      "id": "2008_KY",
      "year": 2008,
      "name": "Moore, Brian",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 7,
      "parties": [
        "Write-In"
      ]
    },
    "Allen, Jonathan": {
      "id": "2008_KY",
      "year": 2008,
      "name": "Allen, Jonathan",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Judd, Keith Russell": {
      "id": "2008_KY",
      "year": 2008,
      "name": "Judd, Keith Russell",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Upchurch, Shelley Renée": {
      "id": "2008_KY",
      "year": 2008,
      "name": "Upchurch, Shelley Renée",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_LA": {
    "McCain, John": {
      "id": "2008_LA",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 1148275,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_LA",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 782989,
      "parties": [
        "Democratic"
      ]
    },
    "Paul, \"Ron\"": {
      "id": "2008_LA",
      "year": 2008,
      "name": "Paul, \"Ron\"",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 9368,
      "parties": [
        "Louisiana Taxpayers Party"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_LA",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 9187,
      "parties": [
        "Green"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_LA",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 6997,
      "parties": [
        "Independent"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_LA",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 2581,
      "parties": [
        "Constitution"
      ]
    },
    "Harris, James": {
      "id": "2008_LA",
      "year": 2008,
      "name": "Harris, James",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 735,
      "parties": [
        "Socialist Workers Party"
      ]
    },
    "La Riva, Gloria": {
      "id": "2008_LA",
      "year": 2008,
      "name": "La Riva, Gloria",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 354,
      "parties": [
        "Socialism and Liberation Party"
      ]
    },
    "Amondson, Gene C.": {
      "id": "2008_LA",
      "year": 2008,
      "name": "Amondson, Gene C.",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 275,
      "parties": [
        "Prohibition Party"
      ]
    }
  },
  "2008_ME": {
    "Obama, Barack": {
      "id": "2008_ME",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "ME",
      "state": "Maine",
      "votes": 421923,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_ME",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "ME",
      "state": "Maine",
      "votes": 295273,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_ME",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "ME",
      "state": "Maine",
      "votes": 10636,
      "parties": [
        "Independent"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_ME",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "ME",
      "state": "Maine",
      "votes": 2900,
      "parties": [
        "Green Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_ME",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "ME",
      "state": "Maine",
      "votes": 251,
      "parties": [
        "Write-In"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_ME",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "ME",
      "state": "Maine",
      "votes": 177,
      "parties": [
        "Write-In"
      ]
    },
    "Allen, Jonathan": {
      "id": "2008_ME",
      "year": 2008,
      "name": "Allen, Jonathan",
      "abbr": "ME",
      "state": "Maine",
      "votes": 3,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_MD": {
    "Obama, Barack": {
      "id": "2008_MD",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 1629467,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_MD",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 959862,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_MD",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 14713,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_MD",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 9842,
      "parties": [
        "Libertarian"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_MD",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 4747,
      "parties": [
        "Green"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_MD",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 3760,
      "parties": [
        "Constitution"
      ]
    },
    "Keyes, Alan": {
      "id": "2008_MD",
      "year": 2008,
      "name": "Keyes, Alan",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 103,
      "parties": [
        "Write-In"
      ]
    },
    "Allen, Donald K.": {
      "id": "2008_MD",
      "year": 2008,
      "name": "Allen, Donald K.",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 17,
      "parties": [
        "Write-In"
      ]
    },
    "Taylor, Blaine": {
      "id": "2008_MD",
      "year": 2008,
      "name": "Taylor, Blaine",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 12,
      "parties": [
        "Write-In"
      ]
    },
    "Moore, Brian": {
      "id": "2008_MD",
      "year": 2008,
      "name": "Moore, Brian",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 10,
      "parties": [
        "Write-In"
      ]
    },
    "Schriner, Joe": {
      "id": "2008_MD",
      "year": 2008,
      "name": "Schriner, Joe",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 8,
      "parties": [
        "Write-In"
      ]
    },
    "Starr, Lynne A.": {
      "id": "2008_MD",
      "year": 2008,
      "name": "Starr, Lynne A.",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 4,
      "parties": [
        "Write-In"
      ]
    },
    "Heupel, RaeDeen R.": {
      "id": "2008_MD",
      "year": 2008,
      "name": "Heupel, RaeDeen R.",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Moore, Frank": {
      "id": "2008_MD",
      "year": 2008,
      "name": "Moore, Frank",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Aparicio, Jose M.": {
      "id": "2008_MD",
      "year": 2008,
      "name": "Aparicio, Jose M.",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Brown, Theodis (Ted), Sr.": {
      "id": "2008_MD",
      "year": 2008,
      "name": "Brown, Theodis (Ted), Sr.",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Hobbs, Ronald G.": {
      "id": "2008_MD",
      "year": 2008,
      "name": "Hobbs, Ronald G.",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Jay, Charles": {
      "id": "2008_MD",
      "year": 2008,
      "name": "Jay, Charles",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_MA": {
    "Obama, Barack": {
      "id": "2008_MA",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "MA",
      "state": "Massachusetts",
      "votes": 1904097,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_MA",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "MA",
      "state": "Massachusetts",
      "votes": 1108854,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_MA",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "MA",
      "state": "Massachusetts",
      "votes": 28841,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_MA",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "MA",
      "state": "Massachusetts",
      "votes": 13189,
      "parties": [
        "Libertarian"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_MA",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "MA",
      "state": "Massachusetts",
      "votes": 6550,
      "parties": [
        "Green-Rainbow"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_MA",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "MA",
      "state": "Massachusetts",
      "votes": 4971,
      "parties": [
        "Constitution"
      ]
    }
  },
  "2008_MI": {
    "Obama, Barack": {
      "id": "2008_MI",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 2872579,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_MI",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 2048639,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_MI",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 33085,
      "parties": [
        "Natural Law Party"
      ]
    },
    "Barr, Bob": {
      "id": "2008_MI",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 23716,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_MI",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 14685,
      "parties": [
        "U.S. Taxpayers"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_MI",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 8892,
      "parties": [
        "Green"
      ]
    },
    "Keyes, Alan": {
      "id": "2008_MI",
      "year": 2008,
      "name": "Keyes, Alan",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 129,
      "parties": [
        "Write-In"
      ]
    },
    "Moore, Brian": {
      "id": "2008_MI",
      "year": 2008,
      "name": "Moore, Brian",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 41,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_MN": {
    "Obama, Barack": {
      "id": "2008_MN",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 1573354,
      "parties": [
        "Democratic-Farmer Labor"
      ]
    },
    "McCain, John": {
      "id": "2008_MN",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 1275409,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_MN",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 30152,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_MN",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 9174,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_MN",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 6787,
      "parties": [
        "Constitution"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_MN",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 5174,
      "parties": [
        "Green"
      ]
    },
    "Calero, Róger": {
      "id": "2008_MN",
      "year": 2008,
      "name": "Calero, Róger",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 790,
      "parties": [
        "Socialist Workers Party"
      ]
    },
    "Keyes, Alan": {
      "id": "2008_MN",
      "year": 2008,
      "name": "Keyes, Alan",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 22,
      "parties": [
        "Write-In"
      ]
    },
    "Moore, Brian": {
      "id": "2008_MN",
      "year": 2008,
      "name": "Moore, Brian",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 7,
      "parties": [
        "Write-In"
      ]
    },
    "Schriner, Joe": {
      "id": "2008_MN",
      "year": 2008,
      "name": "Schriner, Joe",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 3,
      "parties": [
        "Write-In"
      ]
    },
    "Montgomery, Curtis": {
      "id": "2008_MN",
      "year": 2008,
      "name": "Montgomery, Curtis",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_MS": {
    "McCain, John": {
      "id": "2008_MS",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "MS",
      "state": "Mississippi",
      "votes": 724597,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_MS",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "MS",
      "state": "Mississippi",
      "votes": 554662,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_MS",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "MS",
      "state": "Mississippi",
      "votes": 4011,
      "parties": [
        "Independent"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_MS",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "MS",
      "state": "Mississippi",
      "votes": 2551,
      "parties": [
        "Constitution"
      ]
    },
    "Barr, Bob": {
      "id": "2008_MS",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "MS",
      "state": "Mississippi",
      "votes": 2529,
      "parties": [
        "Libertarian"
      ]
    },
    "McKinney, Cynthia A.": {
      "id": "2008_MS",
      "year": 2008,
      "name": "McKinney, Cynthia A.",
      "abbr": "MS",
      "state": "Mississippi",
      "votes": 1034,
      "parties": [
        "Green"
      ]
    },
    "Weill, Ted C.": {
      "id": "2008_MS",
      "year": 2008,
      "name": "Weill, Ted C.",
      "abbr": "MS",
      "state": "Mississippi",
      "votes": 481,
      "parties": [
        "Reform"
      ]
    }
  },
  "2008_MO": {
    "McCain, John": {
      "id": "2008_MO",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "MO",
      "state": "Missouri",
      "votes": 1445814,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_MO",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "MO",
      "state": "Missouri",
      "votes": 1441911,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_MO",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "MO",
      "state": "Missouri",
      "votes": 17813,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_MO",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "MO",
      "state": "Missouri",
      "votes": 11386,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_MO",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "MO",
      "state": "Missouri",
      "votes": 8201,
      "parties": [
        "Constitution"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_MO",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "MO",
      "state": "Missouri",
      "votes": 80,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_MT": {
    "McCain, John": {
      "id": "2008_MT",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "MT",
      "state": "Montana",
      "votes": 242763,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_MT",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "MT",
      "state": "Montana",
      "votes": 231667,
      "parties": [
        "Democratic"
      ]
    },
    "Paul, Ron": {
      "id": "2008_MT",
      "year": 2008,
      "name": "Paul, Ron",
      "abbr": "MT",
      "state": "Montana",
      "votes": 10638,
      "parties": [
        "Constitution"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_MT",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "MT",
      "state": "Montana",
      "votes": 3686,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_MT",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "MT",
      "state": "Montana",
      "votes": 1355,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_MT",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "MT",
      "state": "Montana",
      "votes": 143,
      "parties": [
        "Write-In"
      ]
    },
    "McKinney, Cynthia Ann": {
      "id": "2008_MT",
      "year": 2008,
      "name": "McKinney, Cynthia Ann",
      "abbr": "MT",
      "state": "Montana",
      "votes": 23,
      "parties": [
        "Write-In"
      ]
    },
    "Heupel, RaeDeen": {
      "id": "2008_MT",
      "year": 2008,
      "name": "Heupel, RaeDeen",
      "abbr": "MT",
      "state": "Montana",
      "votes": 12,
      "parties": [
        "Write-In"
      ]
    },
    "Clemente, Rosa A.": {
      "id": "2008_MT",
      "year": 2008,
      "name": "Clemente, Rosa A.",
      "abbr": "MT",
      "state": "Montana",
      "votes": 10,
      "parties": [
        "Write-In"
      ]
    },
    "Claus, Santa": {
      "id": "2008_MT",
      "year": 2008,
      "name": "Claus, Santa",
      "abbr": "MT",
      "state": "Montana",
      "votes": 3,
      "parties": [
        "Write-In"
      ]
    },
    "Allen, Jonathan": {
      "id": "2008_MT",
      "year": 2008,
      "name": "Allen, Jonathan",
      "abbr": "MT",
      "state": "Montana",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Wyatt, Amy Lou": {
      "id": "2008_MT",
      "year": 2008,
      "name": "Wyatt, Amy Lou",
      "abbr": "MT",
      "state": "Montana",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_NE": {
    "McCain, John": {
      "id": "2008_NE",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "NE",
      "state": "Nebraska",
      "votes": 452979,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_NE",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "NE",
      "state": "Nebraska",
      "votes": 333319,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_NE",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "NE",
      "state": "Nebraska",
      "votes": 5406,
      "parties": [
        "By Petition"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_NE",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "NE",
      "state": "Nebraska",
      "votes": 2972,
      "parties": [
        "Nebraska Party"
      ]
    },
    "Barr, Bob": {
      "id": "2008_NE",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "NE",
      "state": "Nebraska",
      "votes": 2740,
      "parties": [
        "Libertarian"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_NE",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "NE",
      "state": "Nebraska",
      "votes": 1028,
      "parties": [
        "Green"
      ]
    }
  },
  "2008_NV": {
    "Obama, Barack": {
      "id": "2008_NV",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "NV",
      "state": "Nevada",
      "votes": 533736,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_NV",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "NV",
      "state": "Nevada",
      "votes": 412827,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_NV",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "NV",
      "state": "Nevada",
      "votes": 6150,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_NV",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "NV",
      "state": "Nevada",
      "votes": 4263,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_NV",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "NV",
      "state": "Nevada",
      "votes": 3194,
      "parties": [
        "Independent American  Party"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_NV",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "NV",
      "state": "Nevada",
      "votes": 1411,
      "parties": [
        "Green"
      ]
    }
  },
  "2008_NH": {
    "Obama, Barack": {
      "id": "2008_NH",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 384826,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_NH",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 316534,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_NH",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 3503,
      "parties": [
        "Independent"
      ]
    },
    "Barr, \"Bob\"": {
      "id": "2008_NH",
      "year": 2008,
      "name": "Barr, \"Bob\"",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 2217,
      "parties": [
        "Libertarian"
      ]
    },
    "Clinton, Hilary": {
      "id": "2008_NH",
      "year": 2008,
      "name": "Clinton, Hilary",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 1124,
      "parties": [
        "Write-In"
      ]
    },
    "Paul, Ron": {
      "id": "2008_NH",
      "year": 2008,
      "name": "Paul, Ron",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 1092,
      "parties": [
        "Write-In"
      ]
    },
    "Others,": {
      "id": "2008_NH",
      "year": 2008,
      "name": "Others,",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 673,
      "parties": [
        "Write-In"
      ]
    },
    "Phillies, George": {
      "id": "2008_NH",
      "year": 2008,
      "name": "Phillies, George",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 531,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_NH",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 226,
      "parties": [
        "Write-In"
      ]
    },
    "Romney, Mitt": {
      "id": "2008_NH",
      "year": 2008,
      "name": "Romney, Mitt",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 112,
      "parties": [
        "Write-In"
      ]
    },
    "Huckabee, Mike": {
      "id": "2008_NH",
      "year": 2008,
      "name": "Huckabee, Mike",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 61,
      "parties": [
        "Write-In"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_NH",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 40,
      "parties": [
        "Write-In"
      ]
    },
    "Palin, Sarah": {
      "id": "2008_NH",
      "year": 2008,
      "name": "Palin, Sarah",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 18,
      "parties": [
        "Write-In"
      ]
    },
    "Clinton, Bill": {
      "id": "2008_NH",
      "year": 2008,
      "name": "Clinton, Bill",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 13,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_NJ": {
    "Obama, Barack": {
      "id": "2008_NJ",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 2215422,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_NJ",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 1613207,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_NJ",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 21298,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_NJ",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 8441,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_NJ",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 3956,
      "parties": [
        "Constitution"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_NJ",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 3636,
      "parties": [
        "Green"
      ]
    },
    "Moore, Brian": {
      "id": "2008_NJ",
      "year": 2008,
      "name": "Moore, Brian",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 699,
      "parties": [
        "Socialist Party USA"
      ]
    },
    "Boss, Jeffrey \"Jeff\"": {
      "id": "2008_NJ",
      "year": 2008,
      "name": "Boss, Jeffrey \"Jeff\"",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 639,
      "parties": [
        "Vote Here"
      ]
    },
    "Calero, Roger": {
      "id": "2008_NJ",
      "year": 2008,
      "name": "Calero, Roger",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 523,
      "parties": [
        "Socialist Workers Party"
      ]
    },
    "La Riva, Gloria": {
      "id": "2008_NJ",
      "year": 2008,
      "name": "La Riva, Gloria",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 416,
      "parties": [
        "Socialism and Liberation Party"
      ]
    }
  },
  "2008_NM": {
    "Obama, Barack": {
      "id": "2008_NM",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "NM",
      "state": "New Mexico",
      "votes": 472422,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_NM",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "NM",
      "state": "New Mexico",
      "votes": 346832,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_NM",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "NM",
      "state": "New Mexico",
      "votes": 5327,
      "parties": [
        "New Mexico Independent Party"
      ]
    },
    "Barr, Bob": {
      "id": "2008_NM",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "NM",
      "state": "New Mexico",
      "votes": 2428,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_NM",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "NM",
      "state": "New Mexico",
      "votes": 1597,
      "parties": [
        "Constitution"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_NM",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "NM",
      "state": "New Mexico",
      "votes": 1552,
      "parties": [
        "Green"
      ]
    }
  },
  "2008_NY": {
    "Obama, Barack": {
      "id": "2008_NY",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "NY",
      "state": "New York",
      "votes": 4804945,
      "parties": [
        "Democratic",
        "Working Families"
      ]
    },
    "McCain, John": {
      "id": "2008_NY",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "NY",
      "state": "New York",
      "votes": 2752771,
      "parties": [
        "Republican",
        "Conservative",
        "Independence"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_NY",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "NY",
      "state": "New York",
      "votes": 41249,
      "parties": [
        "Populist"
      ]
    },
    "Barr, Bob": {
      "id": "2008_NY",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "NY",
      "state": "New York",
      "votes": 19596,
      "parties": [
        "Libertarian"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_NY",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "NY",
      "state": "New York",
      "votes": 12801,
      "parties": [
        "Green"
      ]
    },
    "Calero, Roger": {
      "id": "2008_NY",
      "year": 2008,
      "name": "Calero, Roger",
      "abbr": "NY",
      "state": "New York",
      "votes": 3615,
      "parties": [
        "Socialist Workers Party"
      ]
    },
    "La Riva, Gloria": {
      "id": "2008_NY",
      "year": 2008,
      "name": "La Riva, Gloria",
      "abbr": "NY",
      "state": "New York",
      "votes": 1639,
      "parties": [
        "Socialism and Liberation Party"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_NY",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "NY",
      "state": "New York",
      "votes": 634,
      "parties": [
        "Write-In"
      ]
    },
    "Keyes, Alan Lee": {
      "id": "2008_NY",
      "year": 2008,
      "name": "Keyes, Alan Lee",
      "abbr": "NY",
      "state": "New York",
      "votes": 35,
      "parties": [
        "Write-In"
      ]
    },
    "White, Jerome S.": {
      "id": "2008_NY",
      "year": 2008,
      "name": "White, Jerome S.",
      "abbr": "NY",
      "state": "New York",
      "votes": 18,
      "parties": [
        "Write-In"
      ]
    },
    "Moore, Brian": {
      "id": "2008_NY",
      "year": 2008,
      "name": "Moore, Brian",
      "abbr": "NY",
      "state": "New York",
      "votes": 10,
      "parties": [
        "Write-In"
      ]
    },
    "Washington, Lanakila": {
      "id": "2008_NY",
      "year": 2008,
      "name": "Washington, Lanakila",
      "abbr": "NY",
      "state": "New York",
      "votes": 3,
      "parties": [
        "Write-In"
      ]
    },
    "Allen, Jonathan": {
      "id": "2008_NY",
      "year": 2008,
      "name": "Allen, Jonathan",
      "abbr": "NY",
      "state": "New York",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Skok, Michael": {
      "id": "2008_NY",
      "year": 2008,
      "name": "Skok, Michael",
      "abbr": "NY",
      "state": "New York",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_NC": {
    "Obama, Barack": {
      "id": "2008_NC",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "NC",
      "state": "North Carolina",
      "votes": 2142651,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_NC",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "NC",
      "state": "North Carolina",
      "votes": 2128474,
      "parties": [
        "Republican"
      ]
    },
    "Barr, Bob": {
      "id": "2008_NC",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "NC",
      "state": "North Carolina",
      "votes": 25722,
      "parties": [
        "Libertarian"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_NC",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "NC",
      "state": "North Carolina",
      "votes": 1448,
      "parties": [
        "Write-In"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_NC",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "NC",
      "state": "North Carolina",
      "votes": 158,
      "parties": [
        "Write-In"
      ]
    },
    "Moore, Brian": {
      "id": "2008_NC",
      "year": 2008,
      "name": "Moore, Brian",
      "abbr": "NC",
      "state": "North Carolina",
      "votes": 38,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_ND": {
    "McCain, John": {
      "id": "2008_ND",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "ND",
      "state": "North Dakota",
      "votes": 168601,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_ND",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "ND",
      "state": "North Dakota",
      "votes": 141278,
      "parties": [
        "Democratic-Nonpartisan League"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_ND",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "ND",
      "state": "North Dakota",
      "votes": 4189,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_ND",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "ND",
      "state": "North Dakota",
      "votes": 1354,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_ND",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "ND",
      "state": "North Dakota",
      "votes": 1199,
      "parties": [
        "Constitution"
      ]
    }
  },
  "2008_OH": {
    "Obama, Barack": {
      "id": "2008_OH",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 2940044,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_OH",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 2677820,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_OH",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 42337,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_OH",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 19917,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_OH",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 12565,
      "parties": [
        "Constitution"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_OH",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 8518,
      "parties": [
        "Green"
      ]
    },
    "Duncan, Richard": {
      "id": "2008_OH",
      "year": 2008,
      "name": "Duncan, Richard",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 3905,
      "parties": [
        "Independent"
      ]
    },
    "Moore, Brian": {
      "id": "2008_OH",
      "year": 2008,
      "name": "Moore, Brian",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 2735,
      "parties": [
        "Socialist Party USA"
      ]
    },
    "Allen, Donald K.": {
      "id": "2008_OH",
      "year": 2008,
      "name": "Allen, Donald K.",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 212,
      "parties": [
        "Write-In"
      ]
    },
    "Keyes, Alan L.": {
      "id": "2008_OH",
      "year": 2008,
      "name": "Keyes, Alan L.",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 160,
      "parties": [
        "Write-In"
      ]
    },
    "Schriner, Joe": {
      "id": "2008_OH",
      "year": 2008,
      "name": "Schriner, Joe",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 71,
      "parties": [
        "Write-In"
      ]
    },
    "Robertson, Platt": {
      "id": "2008_OH",
      "year": 2008,
      "name": "Robertson, Platt",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 63,
      "parties": [
        "Write-In"
      ]
    },
    "Allen, Jonathan": {
      "id": "2008_OH",
      "year": 2008,
      "name": "Allen, Jonathan",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Germalic, James R.": {
      "id": "2008_OH",
      "year": 2008,
      "name": "Germalic, James R.",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_OK": {
    "McCain, John": {
      "id": "2008_OK",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "OK",
      "state": "Oklahoma",
      "votes": 960165,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_OK",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "OK",
      "state": "Oklahoma",
      "votes": 502496,
      "parties": [
        "Democratic"
      ]
    }
  },
  "2008_OR": {
    "Obama, Barack": {
      "id": "2008_OR",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "OR",
      "state": "Oregon",
      "votes": 1037291,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_OR",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "OR",
      "state": "Oregon",
      "votes": 738475,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_OR",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "OR",
      "state": "Oregon",
      "votes": 18614,
      "parties": [
        "Peace"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_OR",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "OR",
      "state": "Oregon",
      "votes": 7693,
      "parties": [
        "Constitution"
      ]
    },
    "Barr, Bob": {
      "id": "2008_OR",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "OR",
      "state": "Oregon",
      "votes": 7635,
      "parties": [
        "Libertarian"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_OR",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "OR",
      "state": "Oregon",
      "votes": 4543,
      "parties": [
        "Pacific Green"
      ]
    }
  },
  "2008_PA": {
    "Obama, Barack": {
      "id": "2008_PA",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "PA",
      "state": "Pennsylvania",
      "votes": 3276363,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_PA",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "PA",
      "state": "Pennsylvania",
      "votes": 2655885,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_PA",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "PA",
      "state": "Pennsylvania",
      "votes": 42977,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_PA",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "PA",
      "state": "Pennsylvania",
      "votes": 19912,
      "parties": [
        "Libertarian"
      ]
    },
    "Clinton, Hillary": {
      "id": "2008_PA",
      "year": 2008,
      "name": "Clinton, Hillary",
      "abbr": "PA",
      "state": "Pennsylvania",
      "votes": 5014,
      "parties": [
        "Write-In"
      ]
    },
    "Paul, Ron": {
      "id": "2008_PA",
      "year": 2008,
      "name": "Paul, Ron",
      "abbr": "PA",
      "state": "Pennsylvania",
      "votes": 3849,
      "parties": [
        "Write-In"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_PA",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "PA",
      "state": "Pennsylvania",
      "votes": 1092,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_RI": {
    "Obama, Barack": {
      "id": "2008_RI",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 296571,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_RI",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 165391,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_RI",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 4829,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_RI",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 1382,
      "parties": [
        "Libertarian"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_RI",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 797,
      "parties": [
        "Green"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_RI",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 675,
      "parties": [
        "Constitution"
      ]
    },
    "Clinton, Hillary": {
      "id": "2008_RI",
      "year": 2008,
      "name": "Clinton, Hillary",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 655,
      "parties": [
        "Write-In"
      ]
    },
    "Paul, Ron": {
      "id": "2008_RI",
      "year": 2008,
      "name": "Paul, Ron",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 472,
      "parties": [
        "Write-In"
      ]
    },
    "La Riva, Gloria": {
      "id": "2008_RI",
      "year": 2008,
      "name": "La Riva, Gloria",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 122,
      "parties": [
        "Socialism and Liberation Party"
      ]
    },
    "No Vote,": {
      "id": "2008_RI",
      "year": 2008,
      "name": "No Vote,",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 43,
      "parties": [
        "Write-In"
      ]
    },
    "Huckabee, Mike": {
      "id": "2008_RI",
      "year": 2008,
      "name": "Huckabee, Mike",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 34,
      "parties": [
        "Write-In"
      ]
    },
    "Romney, Mitt": {
      "id": "2008_RI",
      "year": 2008,
      "name": "Romney, Mitt",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 25,
      "parties": [
        "Write-In"
      ]
    },
    "Gore, Al": {
      "id": "2008_RI",
      "year": 2008,
      "name": "Gore, Al",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 15,
      "parties": [
        "Write-In"
      ]
    },
    "Powell, Colin": {
      "id": "2008_RI",
      "year": 2008,
      "name": "Powell, Colin",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 14,
      "parties": [
        "Write-In"
      ]
    },
    "Mouse, Mickey": {
      "id": "2008_RI",
      "year": 2008,
      "name": "Mouse, Mickey",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 11,
      "parties": [
        "Write-In"
      ]
    },
    "None of Above,": {
      "id": "2008_RI",
      "year": 2008,
      "name": "None of Above,",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 11,
      "parties": [
        "Write-In"
      ]
    },
    "Colbert, Stephen": {
      "id": "2008_RI",
      "year": 2008,
      "name": "Colbert, Stephen",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 8,
      "parties": [
        "Write-In"
      ]
    },
    "Jesus,": {
      "id": "2008_RI",
      "year": 2008,
      "name": "Jesus,",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 7,
      "parties": [
        "Write-In"
      ]
    },
    "Bloomberg, Michael": {
      "id": "2008_RI",
      "year": 2008,
      "name": "Bloomberg, Michael",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 6,
      "parties": [
        "Write-In"
      ]
    },
    "Clinton, Bill": {
      "id": "2008_RI",
      "year": 2008,
      "name": "Clinton, Bill",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 6,
      "parties": [
        "Write-In"
      ]
    },
    "Cianci, Buddy": {
      "id": "2008_RI",
      "year": 2008,
      "name": "Cianci, Buddy",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 5,
      "parties": [
        "Write-In"
      ]
    },
    "Keyes, Alan": {
      "id": "2008_RI",
      "year": 2008,
      "name": "Keyes, Alan",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 5,
      "parties": [
        "Write-In"
      ]
    },
    "Kucinich, Dennis": {
      "id": "2008_RI",
      "year": 2008,
      "name": "Kucinich, Dennis",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 5,
      "parties": [
        "Write-In"
      ]
    },
    "Plumber, Joe the": {
      "id": "2008_RI",
      "year": 2008,
      "name": "Plumber, Joe the",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 5,
      "parties": [
        "Write-In"
      ]
    },
    "Ventura, Jessie": {
      "id": "2008_RI",
      "year": 2008,
      "name": "Ventura, Jessie",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 5,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_SC": {
    "McCain, John": {
      "id": "2008_SC",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "SC",
      "state": "South Carolina",
      "votes": 1034896,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_SC",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "SC",
      "state": "South Carolina",
      "votes": 862449,
      "parties": [
        "Democratic"
      ]
    },
    "Barr, Bob": {
      "id": "2008_SC",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "SC",
      "state": "South Carolina",
      "votes": 7283,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_SC",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "SC",
      "state": "South Carolina",
      "votes": 6827,
      "parties": [
        "Constitution"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_SC",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "SC",
      "state": "South Carolina",
      "votes": 5053,
      "parties": [
        "Petition"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_SC",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "SC",
      "state": "South Carolina",
      "votes": 4461,
      "parties": [
        "Green"
      ]
    }
  },
  "2008_SD": {
    "McCain, John": {
      "id": "2008_SD",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "SD",
      "state": "South Dakota",
      "votes": 203054,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_SD",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "SD",
      "state": "South Dakota",
      "votes": 170924,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_SD",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "SD",
      "state": "South Dakota",
      "votes": 4267,
      "parties": [
        "Independent"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_SD",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "SD",
      "state": "South Dakota",
      "votes": 1895,
      "parties": [
        "Constitution"
      ]
    },
    "Barr, Bob": {
      "id": "2008_SD",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "SD",
      "state": "South Dakota",
      "votes": 1835,
      "parties": [
        "Independent"
      ]
    }
  },
  "2008_TN": {
    "McCain, John": {
      "id": "2008_TN",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 1479178,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_TN",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 1087437,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_TN",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 11560,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_TN",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 8547,
      "parties": [
        "Independent"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_TN",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 8191,
      "parties": [
        "Independent"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_TN",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 2499,
      "parties": [
        "Write-In"
      ]
    },
    "Moore, Brian": {
      "id": "2008_TN",
      "year": 2008,
      "name": "Moore, Brian",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 1326,
      "parties": [
        "Independent"
      ]
    },
    "Jay, Charles": {
      "id": "2008_TN",
      "year": 2008,
      "name": "Jay, Charles",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 1011,
      "parties": [
        "Independent"
      ]
    }
  },
  "2008_TX": {
    "McCain, John": {
      "id": "2008_TX",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "TX",
      "state": "Texas",
      "votes": 4479328,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_TX",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "TX",
      "state": "Texas",
      "votes": 3528633,
      "parties": [
        "Democratic"
      ]
    },
    "Barr, Bob": {
      "id": "2008_TX",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "TX",
      "state": "Texas",
      "votes": 56116,
      "parties": [
        "Libertarian"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_TX",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "TX",
      "state": "Texas",
      "votes": 5751,
      "parties": [
        "Write-In"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_TX",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "TX",
      "state": "Texas",
      "votes": 5708,
      "parties": [
        "Write-In"
      ]
    },
    "Keyes, Alan": {
      "id": "2008_TX",
      "year": 2008,
      "name": "Keyes, Alan",
      "abbr": "TX",
      "state": "Texas",
      "votes": 895,
      "parties": [
        "Write-In"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_TX",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "TX",
      "state": "Texas",
      "votes": 909,
      "parties": [
        "Write-In"
      ]
    },
    "Hill, Thaddaus": {
      "id": "2008_TX",
      "year": 2008,
      "name": "Hill, Thaddaus",
      "abbr": "TX",
      "state": "Texas",
      "votes": 216,
      "parties": [
        "Write-In"
      ]
    },
    "Moore, Brian": {
      "id": "2008_TX",
      "year": 2008,
      "name": "Moore, Brian",
      "abbr": "TX",
      "state": "Texas",
      "votes": 135,
      "parties": [
        "Write-In"
      ]
    },
    "Allen, Jonathan": {
      "id": "2008_TX",
      "year": 2008,
      "name": "Allen, Jonathan",
      "abbr": "TX",
      "state": "Texas",
      "votes": 104,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_UT": {
    "McCain, John": {
      "id": "2008_UT",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "UT",
      "state": "Utah",
      "votes": 596030,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_UT",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "UT",
      "state": "Utah",
      "votes": 327670,
      "parties": [
        "Democratic"
      ]
    },
    "Baldwin, Charles O. \"Chuck\"": {
      "id": "2008_UT",
      "year": 2008,
      "name": "Baldwin, Charles O. \"Chuck\"",
      "abbr": "UT",
      "state": "Utah",
      "votes": 12012,
      "parties": [
        "Constitution"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_UT",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "UT",
      "state": "Utah",
      "votes": 8416,
      "parties": [
        "Unaffiliated"
      ]
    },
    "Barr, Bob": {
      "id": "2008_UT",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "UT",
      "state": "Utah",
      "votes": 6966,
      "parties": [
        "Libertarian"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_UT",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "UT",
      "state": "Utah",
      "votes": 982,
      "parties": [
        "Unaffiliated"
      ]
    },
    "La Riva, Gloria": {
      "id": "2008_UT",
      "year": 2008,
      "name": "La Riva, Gloria",
      "abbr": "UT",
      "state": "Utah",
      "votes": 262,
      "parties": [
        "Unaffiliated"
      ]
    },
    "Keyes, Alan": {
      "id": "2008_UT",
      "year": 2008,
      "name": "Keyes, Alan",
      "abbr": "UT",
      "state": "Utah",
      "votes": 25,
      "parties": [
        "Write-In"
      ]
    },
    "Moore, Frank": {
      "id": "2008_UT",
      "year": 2008,
      "name": "Moore, Frank",
      "abbr": "UT",
      "state": "Utah",
      "votes": 3,
      "parties": [
        "Write-In"
      ]
    },
    "Allen, Jonathan": {
      "id": "2008_UT",
      "year": 2008,
      "name": "Allen, Jonathan",
      "abbr": "UT",
      "state": "Utah",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Jay, Charles": {
      "id": "2008_UT",
      "year": 2008,
      "name": "Jay, Charles",
      "abbr": "UT",
      "state": "Utah",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Sponheim, David Jon": {
      "id": "2008_UT",
      "year": 2008,
      "name": "Sponheim, David Jon",
      "abbr": "UT",
      "state": "Utah",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_VT": {
    "Obama, Barack": {
      "id": "2008_VT",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 219262,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_VT",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 98974,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_VT",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 3339,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_VT",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 1067,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_VT",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 500,
      "parties": [
        "Constitution"
      ]
    },
    "Calero, Roger": {
      "id": "2008_VT",
      "year": 2008,
      "name": "Calero, Roger",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 150,
      "parties": [
        "Socialist Workers Party"
      ]
    },
    "La Riva, Gloria": {
      "id": "2008_VT",
      "year": 2008,
      "name": "La Riva, Gloria",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 149,
      "parties": [
        "Socialism and Liberation Party"
      ]
    },
    "Moore, Brian": {
      "id": "2008_VT",
      "year": 2008,
      "name": "Moore, Brian",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 141,
      "parties": [
        "Liberty Union"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_VT",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 66,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_VA": {
    "Obama, Barack": {
      "id": "2008_VA",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 1959532,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_VA",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 1725005,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_VA",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 11483,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_VA",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 11067,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_VA",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 7474,
      "parties": [
        "Independent Green Party"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_VA",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 2344,
      "parties": [
        "Green"
      ]
    }
  },
  "2008_WA": {
    "Obama, Barack": {
      "id": "2008_WA",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "WA",
      "state": "Washington",
      "votes": 1750848,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_WA",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "WA",
      "state": "Washington",
      "votes": 1229216,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_WA",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "WA",
      "state": "Washington",
      "votes": 29489,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_WA",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "WA",
      "state": "Washington",
      "votes": 12728,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_WA",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "WA",
      "state": "Washington",
      "votes": 9432,
      "parties": [
        "Constitution"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_WA",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "WA",
      "state": "Washington",
      "votes": 3819,
      "parties": [
        "Green"
      ]
    },
    "La Riva, Gloria": {
      "id": "2008_WA",
      "year": 2008,
      "name": "La Riva, Gloria",
      "abbr": "WA",
      "state": "Washington",
      "votes": 705,
      "parties": [
        "Socialism and Liberation Party"
      ]
    },
    "Harris, James E.": {
      "id": "2008_WA",
      "year": 2008,
      "name": "Harris, James E.",
      "abbr": "WA",
      "state": "Washington",
      "votes": 641,
      "parties": [
        "Socialist Workers Party"
      ]
    }
  },
  "2008_WV": {
    "McCain, John Sidney, III": {
      "id": "2008_WV",
      "year": 2008,
      "name": "McCain, John Sidney, III",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 397466,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack Hussein": {
      "id": "2008_WV",
      "year": 2008,
      "name": "Obama, Barack Hussein",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 303857,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_WV",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 7219,
      "parties": [
        "No Affiliation"
      ]
    },
    "Baldwin, Charles Obadiah": {
      "id": "2008_WV",
      "year": 2008,
      "name": "Baldwin, Charles Obadiah",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 2465,
      "parties": [
        "Constitution"
      ]
    },
    "McKinney, Cynthia Ann": {
      "id": "2008_WV",
      "year": 2008,
      "name": "McKinney, Cynthia Ann",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 2355,
      "parties": [
        "Mountain Party"
      ]
    },
    "Claus, Santa": {
      "id": "2008_WV",
      "year": 2008,
      "name": "Claus, Santa",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 59,
      "parties": [
        "Write-In"
      ]
    },
    "Rice, David L.": {
      "id": "2008_WV",
      "year": 2008,
      "name": "Rice, David L.",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 18,
      "parties": [
        "Write-In"
      ]
    },
    "Allen, Donald K.": {
      "id": "2008_WV",
      "year": 2008,
      "name": "Allen, Donald K.",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 4,
      "parties": [
        "Write-In"
      ]
    },
    "Brown, Robert": {
      "id": "2008_WV",
      "year": 2008,
      "name": "Brown, Robert",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 3,
      "parties": [
        "Write-In"
      ]
    },
    "Railey, Charles G. \"Bud\"": {
      "id": "2008_WV",
      "year": 2008,
      "name": "Railey, Charles G. \"Bud\"",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 3,
      "parties": [
        "Write-In"
      ]
    },
    "Hobbs, Ron": {
      "id": "2008_WV",
      "year": 2008,
      "name": "Hobbs, Ron",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Moore, Frank": {
      "id": "2008_WV",
      "year": 2008,
      "name": "Moore, Frank",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2008_WI": {
    "Obama, Barack": {
      "id": "2008_WI",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 1677211,
      "parties": [
        "Democratic"
      ]
    },
    "McCain, John": {
      "id": "2008_WI",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 1262393,
      "parties": [
        "Republican"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_WI",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 17605,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_WI",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 8858,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_WI",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 5072,
      "parties": [
        "Independent"
      ]
    },
    "McKinney, Cynthia": {
      "id": "2008_WI",
      "year": 2008,
      "name": "McKinney, Cynthia",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 4216,
      "parties": [
        "Wisconsin Greens"
      ]
    },
    "Wamboldt, Jeffrey J.": {
      "id": "2008_WI",
      "year": 2008,
      "name": "Wamboldt, Jeffrey J.",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 764,
      "parties": [
        "Independent"
      ]
    },
    "Moore, Brian": {
      "id": "2008_WI",
      "year": 2008,
      "name": "Moore, Brian",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 540,
      "parties": [
        "Independent"
      ]
    },
    "La Riva, Gloria": {
      "id": "2008_WI",
      "year": 2008,
      "name": "La Riva, Gloria",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 237,
      "parties": [
        "Independent"
      ]
    }
  },
  "2008_WY": {
    "McCain, John": {
      "id": "2008_WY",
      "year": 2008,
      "name": "McCain, John",
      "abbr": "WY",
      "state": "Wyoming",
      "votes": 164958,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2008_WY",
      "year": 2008,
      "name": "Obama, Barack",
      "abbr": "WY",
      "state": "Wyoming",
      "votes": 82868,
      "parties": [
        "Democratic"
      ]
    },
    "Nader, Ralph": {
      "id": "2008_WY",
      "year": 2008,
      "name": "Nader, Ralph",
      "abbr": "WY",
      "state": "Wyoming",
      "votes": 2525,
      "parties": [
        "Independent"
      ]
    },
    "Barr, Bob": {
      "id": "2008_WY",
      "year": 2008,
      "name": "Barr, Bob",
      "abbr": "WY",
      "state": "Wyoming",
      "votes": 1594,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2008_WY",
      "year": 2008,
      "name": "Baldwin, Chuck",
      "abbr": "WY",
      "state": "Wyoming",
      "votes": 1192,
      "parties": [
        "Independent"
      ]
    }
  }
}

const results2012 = {
  "2012_AL": {
    "Romney, Mitt": {
      "id": "2012_AL",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "AL",
      "state": "Alabama",
      "votes": 1255925,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_AL",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "AL",
      "state": "Alabama",
      "votes": 795696,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_AL",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "AL",
      "state": "Alabama",
      "votes": 12328,
      "parties": [
        "Independent"
      ]
    },
    "Stein, Jill": {
      "id": "2012_AL",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "AL",
      "state": "Alabama",
      "votes": 3397,
      "parties": [
        "Independent"
      ]
    },
    "Goode, Virgil H., Jr.": {
      "id": "2012_AL",
      "year": 2012,
      "name": "Goode, Virgil H., Jr.",
      "abbr": "AL",
      "state": "Alabama",
      "votes": 2981,
      "parties": [
        "Independent"
      ]
    }
  },
  "2012_AK": {
    "Romney, Mitt": {
      "id": "2012_AK",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "AK",
      "state": "Alaska",
      "votes": 164676,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_AK",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "AK",
      "state": "Alaska",
      "votes": 122640,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_AK",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "AK",
      "state": "Alaska",
      "votes": 7392,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_AK",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "AK",
      "state": "Alaska",
      "votes": 2917,
      "parties": [
        "Green"
      ]
    }
  },
  "2012_AZ": {
    "Romney, Mitt": {
      "id": "2012_AZ",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 1233654,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_AZ",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 1025232,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_AZ",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 32100,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_AZ",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 7816,
      "parties": [
        "Green"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_AZ",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 289,
      "parties": [
        "Write-In"
      ]
    },
    "Anderson, Ross C. \"Rocky\"": {
      "id": "2012_AZ",
      "year": 2012,
      "name": "Anderson, Ross C. \"Rocky\"",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 119,
      "parties": [
        "Write-In"
      ]
    },
    "Reed, Jill": {
      "id": "2012_AZ",
      "year": 2012,
      "name": "Reed, Jill",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 17,
      "parties": [
        "Write-In"
      ]
    },
    "Christensen, Will": {
      "id": "2012_AZ",
      "year": 2012,
      "name": "Christensen, Will",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 14,
      "parties": [
        "Write-In"
      ]
    },
    "Knill, Dennis": {
      "id": "2012_AZ",
      "year": 2012,
      "name": "Knill, Dennis",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 7,
      "parties": [
        "Write-In"
      ]
    },
    "Tittle, Sheila \"Samm\"": {
      "id": "2012_AZ",
      "year": 2012,
      "name": "Tittle, Sheila \"Samm\"",
      "abbr": "AZ",
      "state": "Arizona",
      "votes": 6,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_AR": {
    "Romney, Mitt": {
      "id": "2012_AR",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "AR",
      "state": "Arkansas",
      "votes": 647744,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_AR",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "AR",
      "state": "Arkansas",
      "votes": 394409,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_AR",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "AR",
      "state": "Arkansas",
      "votes": 16276,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_AR",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "AR",
      "state": "Arkansas",
      "votes": 9305,
      "parties": [
        "Green"
      ]
    },
    "Lindsay, Peta": {
      "id": "2012_AR",
      "year": 2012,
      "name": "Lindsay, Peta",
      "abbr": "AR",
      "state": "Arkansas",
      "votes": 1734,
      "parties": [
        "Socialism and Liberation Party"
      ]
    }
  },
  "2012_CA": {
    "Obama, Barack": {
      "id": "2012_CA",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "CA",
      "state": "California",
      "votes": 7854285,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_CA",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "CA",
      "state": "California",
      "votes": 4839958,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_CA",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "CA",
      "state": "California",
      "votes": 143221,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_CA",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "CA",
      "state": "California",
      "votes": 85638,
      "parties": [
        "Green"
      ]
    },
    "Barr, Roseanne": {
      "id": "2012_CA",
      "year": 2012,
      "name": "Barr, Roseanne",
      "abbr": "CA",
      "state": "California",
      "votes": 53824,
      "parties": [
        "Peace and Freedom"
      ]
    },
    "Hoefling, Thomas": {
      "id": "2012_CA",
      "year": 2012,
      "name": "Hoefling, Thomas",
      "abbr": "CA",
      "state": "California",
      "votes": 38372,
      "parties": [
        "American Independent"
      ]
    },
    "Paul, Ron": {
      "id": "2012_CA",
      "year": 2012,
      "name": "Paul, Ron",
      "abbr": "CA",
      "state": "California",
      "votes": 21461,
      "parties": [
        "Write-In"
      ]
    },
    "Anderson, Ross C. \"Rocky\"": {
      "id": "2012_CA",
      "year": 2012,
      "name": "Anderson, Ross C. \"Rocky\"",
      "abbr": "CA",
      "state": "California",
      "votes": 992,
      "parties": [
        "Write-In"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_CA",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "CA",
      "state": "California",
      "votes": 503,
      "parties": [
        "Write-In"
      ]
    },
    "Alexander, Stewart": {
      "id": "2012_CA",
      "year": 2012,
      "name": "Alexander, Stewart",
      "abbr": "CA",
      "state": "California",
      "votes": 82,
      "parties": [
        "Write-In"
      ]
    },
    "White, Jerry": {
      "id": "2012_CA",
      "year": 2012,
      "name": "White, Jerry",
      "abbr": "CA",
      "state": "California",
      "votes": 79,
      "parties": [
        "Write-In"
      ]
    },
    "Harris, James": {
      "id": "2012_CA",
      "year": 2012,
      "name": "Harris, James",
      "abbr": "CA",
      "state": "California",
      "votes": 72,
      "parties": [
        "Write-In"
      ]
    },
    "Durham, Stephen": {
      "id": "2012_CA",
      "year": 2012,
      "name": "Durham, Stephen",
      "abbr": "CA",
      "state": "California",
      "votes": 54,
      "parties": [
        "Write-In"
      ]
    },
    "Tittle, Sheila \"Samm\"": {
      "id": "2012_CA",
      "year": 2012,
      "name": "Tittle, Sheila \"Samm\"",
      "abbr": "CA",
      "state": "California",
      "votes": 6,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_CO": {
    "Obama, Barack": {
      "id": "2012_CO",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 1323102,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_CO",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 1185243,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_CO",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 35545,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_CO",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 7508,
      "parties": [
        "Green"
      ]
    },
    "Goode, Virgil H., Jr.": {
      "id": "2012_CO",
      "year": 2012,
      "name": "Goode, Virgil H., Jr.",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 6234,
      "parties": [
        "American Constitution Party"
      ]
    },
    "Barr, Roseanne": {
      "id": "2012_CO",
      "year": 2012,
      "name": "Barr, Roseanne",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 5059,
      "parties": [
        "Peace and Freedom"
      ]
    },
    "Reed, Jill": {
      "id": "2012_CO",
      "year": 2012,
      "name": "Reed, Jill",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 2589,
      "parties": [
        "Unaffiliated"
      ]
    },
    "Anderson, Ross C. \"Rocky\"": {
      "id": "2012_CO",
      "year": 2012,
      "name": "Anderson, Ross C. \"Rocky\"",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 1260,
      "parties": [
        "Justice Party"
      ]
    },
    "Tittle, Sheila 'Samm'": {
      "id": "2012_CO",
      "year": 2012,
      "name": "Tittle, Sheila 'Samm'",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 792,
      "parties": [
        "We the People"
      ]
    },
    "Hoefling, Tom": {
      "id": "2012_CO",
      "year": 2012,
      "name": "Hoefling, Tom",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 679,
      "parties": [
        "America’s Party"
      ]
    },
    "La Riva, Gloria": {
      "id": "2012_CO",
      "year": 2012,
      "name": "La Riva, Gloria",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 317,
      "parties": [
        "Socialism and Liberation Party"
      ]
    },
    "Alexander, Stewart": {
      "id": "2012_CO",
      "year": 2012,
      "name": "Alexander, Stewart",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 308,
      "parties": [
        "Socialist Party USA"
      ]
    },
    "Miller, Merlin": {
      "id": "2012_CO",
      "year": 2012,
      "name": "Miller, Merlin",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 266,
      "parties": [
        "American Third Position"
      ]
    },
    "Stevens, Thomas Robert": {
      "id": "2012_CO",
      "year": 2012,
      "name": "Stevens, Thomas Robert",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 235,
      "parties": [
        "Objectivist Party"
      ]
    },
    "Harris, James": {
      "id": "2012_CO",
      "year": 2012,
      "name": "Harris, James",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 192,
      "parties": [
        "Socialist Workers Party"
      ]
    },
    "White, Jerry": {
      "id": "2012_CO",
      "year": 2012,
      "name": "White, Jerry",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 189,
      "parties": [
        "Socialist Equality Party"
      ]
    },
    "Terry, Randall": {
      "id": "2012_CO",
      "year": 2012,
      "name": "Terry, Randall",
      "abbr": "CO",
      "state": "Colorado",
      "votes": 4,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_CT": {
    "Obama, Barack": {
      "id": "2012_CT",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 905083,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_CT",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 634892,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_CT",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 12580,
      "parties": [
        "Libertarian"
      ]
    },
    "Anderson, Ross C. \"Rocky\"": {
      "id": "2012_CT",
      "year": 2012,
      "name": "Anderson, Ross C. \"Rocky\"",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 5487,
      "parties": [
        "Independent Party"
      ]
    },
    "Stein, Jill": {
      "id": "2012_CT",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 863,
      "parties": [
        "Write-In"
      ]
    },
    "Hoefling, Tom": {
      "id": "2012_CT",
      "year": 2012,
      "name": "Hoefling, Tom",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 25,
      "parties": [
        "Write-In"
      ]
    },
    "Warner, Gerald": {
      "id": "2012_CT",
      "year": 2012,
      "name": "Warner, Gerald",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 19,
      "parties": [
        "Write-In"
      ]
    },
    "Harris, James E.": {
      "id": "2012_CT",
      "year": 2012,
      "name": "Harris, James E.",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 5,
      "parties": [
        "Write-In"
      ]
    },
    "Sizemore, Raymond": {
      "id": "2012_CT",
      "year": 2012,
      "name": "Sizemore, Raymond",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 5,
      "parties": [
        "Write-In"
      ]
    },
    "Durham, Stephen": {
      "id": "2012_CT",
      "year": 2012,
      "name": "Durham, Stephen",
      "abbr": "CT",
      "state": "Connecticut",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_DE": {
    "Obama, Barack": {
      "id": "2012_DE",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 242584,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_DE",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 165484,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_DE",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 3882,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_DE",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 1940,
      "parties": [
        "Green"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_DE",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 23,
      "parties": [
        "Write-In"
      ]
    },
    "Hoefling, Tom": {
      "id": "2012_DE",
      "year": 2012,
      "name": "Hoefling, Tom",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 7,
      "parties": [
        "Write-In"
      ]
    },
    "Reed, Jill": {
      "id": "2012_DE",
      "year": 2012,
      "name": "Reed, Jill",
      "abbr": "DE",
      "state": "Delaware",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_DC": {
    "Obama, Barack": {
      "id": "2012_DC",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "DC",
      "state": "District of Columbia",
      "votes": 267070,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_DC",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "DC",
      "state": "District of Columbia",
      "votes": 21381,
      "parties": [
        "Republican"
      ]
    },
    "Stein, Jill": {
      "id": "2012_DC",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "DC",
      "state": "District of Columbia",
      "votes": 2458,
      "parties": [
        "D.C. Statehood Green"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_DC",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "DC",
      "state": "District of Columbia",
      "votes": 2083,
      "parties": [
        "Libertarian"
      ]
    }
  },
  "2012_FL": {
    "Obama, Barack": {
      "id": "2012_FL",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "FL",
      "state": "Florida",
      "votes": 4237756,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_FL",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "FL",
      "state": "Florida",
      "votes": 4163447,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_FL",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "FL",
      "state": "Florida",
      "votes": 44726,
      "parties": [
        "Libertarian Party of Florida"
      ]
    },
    "Stein, Jill": {
      "id": "2012_FL",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "FL",
      "state": "Florida",
      "votes": 8947,
      "parties": [
        "Green Party of Florida"
      ]
    },
    "Barr, Roseanne": {
      "id": "2012_FL",
      "year": 2012,
      "name": "Barr, Roseanne",
      "abbr": "FL",
      "state": "Florida",
      "votes": 8154,
      "parties": [
        "Peace and Freedom Party of Florida"
      ]
    },
    "Stevens, Thomas Robert": {
      "id": "2012_FL",
      "year": 2012,
      "name": "Stevens, Thomas Robert",
      "abbr": "FL",
      "state": "Florida",
      "votes": 3856,
      "parties": [
        "Objectivist Party of Florida"
      ]
    },
    "Goode, Virgil H., Jr.": {
      "id": "2012_FL",
      "year": 2012,
      "name": "Goode, Virgil H., Jr.",
      "abbr": "FL",
      "state": "Florida",
      "votes": 2607,
      "parties": [
        "Constitution Party of Florida"
      ]
    },
    "Anderson, Ross C. \"Rocky\"": {
      "id": "2012_FL",
      "year": 2012,
      "name": "Anderson, Ross C. \"Rocky\"",
      "abbr": "FL",
      "state": "Florida",
      "votes": 1754,
      "parties": [
        "Justice Party of Florida"
      ]
    },
    "Hoefling, Tom": {
      "id": "2012_FL",
      "year": 2012,
      "name": "Hoefling, Tom",
      "abbr": "FL",
      "state": "Florida",
      "votes": 946,
      "parties": [
        "America’s Party of Florida"
      ]
    },
    "Barnett, Andre": {
      "id": "2012_FL",
      "year": 2012,
      "name": "Barnett, Andre",
      "abbr": "FL",
      "state": "Florida",
      "votes": 820,
      "parties": [
        "Reform"
      ]
    },
    "Alexander, Stewart": {
      "id": "2012_FL",
      "year": 2012,
      "name": "Alexander, Stewart",
      "abbr": "FL",
      "state": "Florida",
      "votes": 799,
      "parties": [
        "Socialist Party of Florida"
      ]
    },
    "Lindsay, Peta": {
      "id": "2012_FL",
      "year": 2012,
      "name": "Lindsay, Peta",
      "abbr": "FL",
      "state": "Florida",
      "votes": 322,
      "parties": [
        "Party for Socialism and Liberation - Florida"
      ]
    },
    "Reed, Jill": {
      "id": "2012_FL",
      "year": 2012,
      "name": "Reed, Jill",
      "abbr": "FL",
      "state": "Florida",
      "votes": 36,
      "parties": [
        "Write-In"
      ]
    },
    "Duncan, Richard": {
      "id": "2012_FL",
      "year": 2012,
      "name": "Duncan, Richard",
      "abbr": "FL",
      "state": "Florida",
      "votes": 3,
      "parties": [
        "Write-In"
      ]
    },
    "Durham, Stephen G.": {
      "id": "2012_FL",
      "year": 2012,
      "name": "Durham, Stephen G.",
      "abbr": "FL",
      "state": "Florida",
      "votes": 3,
      "parties": [
        "Write-In"
      ]
    },
    "Magee, Erin Kent": {
      "id": "2012_FL",
      "year": 2012,
      "name": "Magee, Erin Kent",
      "abbr": "FL",
      "state": "Florida",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Coniglio, Andrew Charles": {
      "id": "2012_FL",
      "year": 2012,
      "name": "Coniglio, Andrew Charles",
      "abbr": "FL",
      "state": "Florida",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_GA": {
    "Romney, Mitt": {
      "id": "2012_GA",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 2078688,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_GA",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 1773827,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_GA",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 45324,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_GA",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 1516,
      "parties": [
        "Write-In"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_GA",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 432,
      "parties": [
        "Write-In"
      ]
    },
    "Anderson, Ross C. \"Rocky\"": {
      "id": "2012_GA",
      "year": 2012,
      "name": "Anderson, Ross C. \"Rocky\"",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 154,
      "parties": [
        "Write-In"
      ]
    },
    "Hykes, Darrell": {
      "id": "2012_GA",
      "year": 2012,
      "name": "Hykes, Darrell",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 55,
      "parties": [
        "Write-In"
      ]
    },
    "Reid, Jill": {
      "id": "2012_GA",
      "year": 2012,
      "name": "Reid, Jill",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 30,
      "parties": [
        "Write-In"
      ]
    },
    "Harris, James": {
      "id": "2012_GA",
      "year": 2012,
      "name": "Harris, James",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 21,
      "parties": [
        "Write-In"
      ]
    },
    "Byrne, David C.": {
      "id": "2012_GA",
      "year": 2012,
      "name": "Byrne, David C.",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Magee, Erin Kent": {
      "id": "2012_GA",
      "year": 2012,
      "name": "Magee, Erin Kent",
      "abbr": "GA",
      "state": "Georgia",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_HI": {
    "Obama, Barack": {
      "id": "2012_HI",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "HI",
      "state": "Hawaii",
      "votes": 306658,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_HI",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "HI",
      "state": "Hawaii",
      "votes": 121015,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_HI",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "HI",
      "state": "Hawaii",
      "votes": 3840,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_HI",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "HI",
      "state": "Hawaii",
      "votes": 3184,
      "parties": [
        "Green"
      ]
    }
  },
  "2012_ID": {
    "Romney, Mitt": {
      "id": "2012_ID",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 420911,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_ID",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 212787,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_ID",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 9453,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_ID",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 4402,
      "parties": [
        "Independent"
      ]
    },
    "Anderson, Ross C. \"Rocky\"": {
      "id": "2012_ID",
      "year": 2012,
      "name": "Anderson, Ross C. \"Rocky\"",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 2499,
      "parties": [
        "Independent"
      ]
    },
    "Goode, Virgil H.": {
      "id": "2012_ID",
      "year": 2012,
      "name": "Goode, Virgil H.",
      "abbr": "ID",
      "state": "Idaho",
      "votes": 2222,
      "parties": [
        "Constitution"
      ]
    }
  },
  "2012_IL": {
    "Obama, Barack": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 3019512,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 2135216,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 56229,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 30222,
      "parties": [
        "Green"
      ]
    },
    "Goode, Virgil / Clymer, Jim": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Goode, Virgil / Clymer, Jim",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 233,
      "parties": [
        "Write-In"
      ]
    },
    "Anderson, Ross C. \"Rocky\"": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Anderson, Ross C. \"Rocky\"",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 185,
      "parties": [
        "Write-In"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 182,
      "parties": [
        "Write-In"
      ]
    },
    "Reed, Jill": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Reed, Jill",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 121,
      "parties": [
        "Write-In"
      ]
    },
    "Hoefling, Tom": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Hoefling, Tom",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 22,
      "parties": [
        "Write-In"
      ]
    },
    "Hawkins, Michael": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Hawkins, Michael",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 16,
      "parties": [
        "Write-In"
      ]
    },
    "Cary, Tom": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Cary, Tom",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 14,
      "parties": [
        "Write-In"
      ]
    },
    "Reed, Jill / Cary, Tom": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Reed, Jill / Cary, Tom",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 10,
      "parties": [
        "Write-In"
      ]
    },
    "White, Jerry": {
      "id": "2012_IL",
      "year": 2012,
      "name": "White, Jerry",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 8,
      "parties": [
        "Write-In"
      ]
    },
    "Roth, Cecil": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Roth, Cecil",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 5,
      "parties": [
        "Write-In"
      ]
    },
    "Scherrer, Phyllis": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Scherrer, Phyllis",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 5,
      "parties": [
        "Write-In"
      ]
    },
    "Clymer, Jim": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Clymer, Jim",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 4,
      "parties": [
        "Write-In"
      ]
    },
    "Prokopich, Barbara": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Prokopich, Barbara",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 4,
      "parties": [
        "Write-In"
      ]
    },
    "White, Jerry / Scherrer, Phyllis": {
      "id": "2012_IL",
      "year": 2012,
      "name": "White, Jerry / Scherrer, Phyllis",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 4,
      "parties": [
        "Write-In"
      ]
    },
    "Hoefling, Tom / Ellis, Jonathan": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Hoefling, Tom / Ellis, Jonathan",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 3,
      "parties": [
        "Write-In"
      ]
    },
    "Knill, Dennis": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Knill, Dennis",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 3,
      "parties": [
        "Write-In"
      ]
    },
    "Tyree, Roy Wayne": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Tyree, Roy Wayne",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 3,
      "parties": [
        "Write-In"
      ]
    },
    "Chehade, Paul": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Chehade, Paul",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Chehade, Paul / McAllister, Steve": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Chehade, Paul / McAllister, Steve",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Durham, Stephen / Lopez, Christina": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Durham, Stephen / Lopez, Christina",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Maxwell, Lynn": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Maxwell, Lynn",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Struck, James T.": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Struck, James T.",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Durham, Stephen": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Durham, Stephen",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Ellis, Jonathan": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Ellis, Jonathan",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Frost, Stephen James": {
      "id": "2012_IL",
      "year": 2012,
      "name": "Frost, Stephen James",
      "abbr": "IL",
      "state": "Illinois",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_IN": {
    "Romney, Mitt": {
      "id": "2012_IN",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 1420543,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_IN",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 1152887,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_IN",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 50111,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_IN",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 625,
      "parties": [
        "Write-In"
      ]
    },
    "Goode, Virgil H., Jr.": {
      "id": "2012_IN",
      "year": 2012,
      "name": "Goode, Virgil H., Jr.",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 290,
      "parties": [
        "Write-In"
      ]
    },
    "Hoefling, Tom": {
      "id": "2012_IN",
      "year": 2012,
      "name": "Hoefling, Tom",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 35,
      "parties": [
        "Write-In"
      ]
    },
    "Alexander, Stewart": {
      "id": "2012_IN",
      "year": 2012,
      "name": "Alexander, Stewart",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 17,
      "parties": [
        "Write-In"
      ]
    },
    "Reed, Jill": {
      "id": "2012_IN",
      "year": 2012,
      "name": "Reed, Jill",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 8,
      "parties": [
        "Write-In"
      ]
    },
    "Terry, Randall A.": {
      "id": "2012_IN",
      "year": 2012,
      "name": "Terry, Randall A.",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 8,
      "parties": [
        "Write-In"
      ]
    },
    "Knill, Dennis": {
      "id": "2012_IN",
      "year": 2012,
      "name": "Knill, Dennis",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 7,
      "parties": [
        "Write-In"
      ]
    },
    "Dummett, John A., Jr.": {
      "id": "2012_IN",
      "year": 2012,
      "name": "Dummett, John A., Jr.",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Lopez, Christina": {
      "id": "2012_IN",
      "year": 2012,
      "name": "Lopez, Christina",
      "abbr": "IN",
      "state": "Indiana",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_IA": {
    "Obama, Barack": {
      "id": "2012_IA",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 822544,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_IA",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 730617,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_IA",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 12926,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_IA",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 3769,
      "parties": [
        "Iowa Green"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_IA",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 3038,
      "parties": [
        "Constitution"
      ]
    },
    "Litzel, Jerry": {
      "id": "2012_IA",
      "year": 2012,
      "name": "Litzel, Jerry",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 1027,
      "parties": [
        "Nominated by Petition"
      ]
    },
    "Harris, James": {
      "id": "2012_IA",
      "year": 2012,
      "name": "Harris, James",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 445,
      "parties": [
        "Socialist Workers Party"
      ]
    },
    "La Riva, Gloria": {
      "id": "2012_IA",
      "year": 2012,
      "name": "La Riva, Gloria",
      "abbr": "IA",
      "state": "Iowa",
      "votes": 372,
      "parties": [
        "Party for Socialism and Liberation"
      ]
    }
  },
  "2012_KS": {
    "Romney, Mitt": {
      "id": "2012_KS",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 692634,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_KS",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 440726,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_KS",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 20456,
      "parties": [
        "Libertarian"
      ]
    },
    "Baldwin, Chuck": {
      "id": "2012_KS",
      "year": 2012,
      "name": "Baldwin, Chuck",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 5017,
      "parties": [
        "Reform"
      ]
    },
    "Stein, Jill E.": {
      "id": "2012_KS",
      "year": 2012,
      "name": "Stein, Jill E.",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 714,
      "parties": [
        "Write-In"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_KS",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 187,
      "parties": [
        "Write-In"
      ]
    },
    "Anderson, Ross \"Rocky\" C.": {
      "id": "2012_KS",
      "year": 2012,
      "name": "Anderson, Ross \"Rocky\" C.",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 95,
      "parties": [
        "Write-In"
      ]
    },
    "Barr, Roseanne C.": {
      "id": "2012_KS",
      "year": 2012,
      "name": "Barr, Roseanne C.",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 58,
      "parties": [
        "Write-In"
      ]
    },
    "Bush, Kent W.": {
      "id": "2012_KS",
      "year": 2012,
      "name": "Bush, Kent W.",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 48,
      "parties": [
        "Write-In"
      ]
    },
    "Barnett, Andre": {
      "id": "2012_KS",
      "year": 2012,
      "name": "Barnett, Andre",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 19,
      "parties": [
        "Write-In"
      ]
    },
    "Hoefling, Tom": {
      "id": "2012_KS",
      "year": 2012,
      "name": "Hoefling, Tom",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 12,
      "parties": [
        "Write-In"
      ]
    },
    "Reed, Jill A.": {
      "id": "2012_KS",
      "year": 2012,
      "name": "Reed, Jill A.",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 4,
      "parties": [
        "Write-In"
      ]
    },
    "Christensen, Will": {
      "id": "2012_KS",
      "year": 2012,
      "name": "Christensen, Will",
      "abbr": "KS",
      "state": "Kansas",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_KY": {
    "Romney, Mitt": {
      "id": "2012_KY",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 1087190,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_KY",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 679370,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_KY",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 17063,
      "parties": [
        "Libertarian"
      ]
    },
    "Terry, Randall A.": {
      "id": "2012_KY",
      "year": 2012,
      "name": "Terry, Randall A.",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 6872,
      "parties": [
        "Independent"
      ]
    },
    "Stein, Jill": {
      "id": "2012_KY",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 6337,
      "parties": [
        "Green"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_KY",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 245,
      "parties": [
        "Write-In"
      ]
    },
    "Anderson, Ross C. \"Rocky\"": {
      "id": "2012_KY",
      "year": 2012,
      "name": "Anderson, Ross C. \"Rocky\"",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 60,
      "parties": [
        "Write-In"
      ]
    },
    "Duncan, Richard": {
      "id": "2012_KY",
      "year": 2012,
      "name": "Duncan, Richard",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 37,
      "parties": [
        "Write-In"
      ]
    },
    "Hoefling, Tom": {
      "id": "2012_KY",
      "year": 2012,
      "name": "Hoefling, Tom",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 30,
      "parties": [
        "Write-In"
      ]
    },
    "White, Jerry": {
      "id": "2012_KY",
      "year": 2012,
      "name": "White, Jerry",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 4,
      "parties": [
        "Write-In"
      ]
    },
    "Durham, Stephen": {
      "id": "2012_KY",
      "year": 2012,
      "name": "Durham, Stephen",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "House, Louis Todd": {
      "id": "2012_KY",
      "year": 2012,
      "name": "House, Louis Todd",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Knill, Dennis": {
      "id": "2012_KY",
      "year": 2012,
      "name": "Knill, Dennis",
      "abbr": "KY",
      "state": "Kentucky",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_LA": {
    "Romney, Mitt": {
      "id": "2012_LA",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 1152262,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_LA",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 809141,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_LA",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 18157,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_LA",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 6978,
      "parties": [
        "Green"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_LA",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 2508,
      "parties": [
        "Constitution"
      ]
    },
    "Tittle, Sheila": {
      "id": "2012_LA",
      "year": 2012,
      "name": "Tittle, Sheila",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 1767,
      "parties": [
        "We the People"
      ]
    },
    "Anderson, Ross": {
      "id": "2012_LA",
      "year": 2012,
      "name": "Anderson, Ross",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 1368,
      "parties": [
        "Justice Party"
      ]
    },
    "Lindsay, Peta": {
      "id": "2012_LA",
      "year": 2012,
      "name": "Lindsay, Peta",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 622,
      "parties": [
        "Socialism and Liberation Party"
      ]
    },
    "Fellure, Jack": {
      "id": "2012_LA",
      "year": 2012,
      "name": "Fellure, Jack",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 518,
      "parties": [
        "Prohibition Party"
      ]
    },
    "Harris, James": {
      "id": "2012_LA",
      "year": 2012,
      "name": "Harris, James",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 389,
      "parties": [
        "Socialist Workers Party"
      ]
    },
    "White, Jerry": {
      "id": "2012_LA",
      "year": 2012,
      "name": "White, Jerry",
      "abbr": "LA",
      "state": "Louisiana",
      "votes": 355,
      "parties": [
        "Socialist Equality Party"
      ]
    }
  },
  "2012_ME": {
    "Obama, Barack": {
      "id": "2012_ME",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "ME",
      "state": "Maine",
      "votes": 401306,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_ME",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "ME",
      "state": "Maine",
      "votes": 292276,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary E.": {
      "id": "2012_ME",
      "year": 2012,
      "name": "Johnson, Gary E.",
      "abbr": "ME",
      "state": "Maine",
      "votes": 9352,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_ME",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "ME",
      "state": "Maine",
      "votes": 8119,
      "parties": [
        "Green Independent"
      ]
    },
    "Paul, Ronald E.": {
      "id": "2012_ME",
      "year": 2012,
      "name": "Paul, Ronald E.",
      "abbr": "ME",
      "state": "Maine",
      "votes": 2035,
      "parties": [
        "Write-In"
      ]
    },
    "Anderson, Ross C.": {
      "id": "2012_ME",
      "year": 2012,
      "name": "Anderson, Ross C.",
      "abbr": "ME",
      "state": "Maine",
      "votes": 62,
      "parties": [
        "Write-In"
      ]
    },
    "Reed, Jill Ann": {
      "id": "2012_ME",
      "year": 2012,
      "name": "Reed, Jill Ann",
      "abbr": "ME",
      "state": "Maine",
      "votes": 30,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_MD": {
    "Obama, Barack": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 1677844,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 971869,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 30195,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 17110,
      "parties": [
        "Green"
      ]
    },
    "Other": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Other",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 8788,
      "parties": [
        "Write-In"
      ]
    },
    "Claus, Santa": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Claus, Santa",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 625,
      "parties": [
        "Write-In"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 418,
      "parties": [
        "Write-In"
      ]
    },
    "Anderson, Ross C. \"Rocky\"": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Anderson, Ross C. \"Rocky\"",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 204,
      "parties": [
        "Write-In"
      ]
    },
    "Barr, Roseanne": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Barr, Roseanne",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 64,
      "parties": [
        "Write-In"
      ]
    },
    "Clymer, James": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Clymer, James",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 35,
      "parties": [
        "Write-In"
      ]
    },
    "Miller, Merlin": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Miller, Merlin",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 26,
      "parties": [
        "Write-In"
      ]
    },
    "Barnett, Andre": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Barnett, Andre",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 19,
      "parties": [
        "Write-In"
      ]
    },
    "Durham, Stephen": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Durham, Stephen",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 19,
      "parties": [
        "Write-In"
      ]
    },
    "Briscoe, Tiffany Renee": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Briscoe, Tiffany Renee",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 18,
      "parties": [
        "Write-In"
      ]
    },
    "Lydick, Matthew": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Lydick, Matthew",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 18,
      "parties": [
        "Write-In"
      ]
    },
    "Duncan, Richard": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Duncan, Richard",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 15,
      "parties": [
        "Write-In"
      ]
    },
    "Chehade, Paul": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Chehade, Paul",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 13,
      "parties": [
        "Write-In"
      ]
    },
    "Dickson, Fred Donald, Jr.": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Dickson, Fred Donald, Jr.",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 8,
      "parties": [
        "Write-In"
      ]
    },
    "Crosby, David M.": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Crosby, David M.",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 7,
      "parties": [
        "Write-In"
      ]
    },
    "Hykes, Darrell": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Hykes, Darrell",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 7,
      "parties": [
        "Write-In"
      ]
    },
    "Reed, Jill": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Reed, Jill",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 7,
      "parties": [
        "Write-In"
      ]
    },
    "Boyles, Michael David": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Boyles, Michael David",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 5,
      "parties": [
        "Write-In"
      ]
    },
    "Keyton, Nelson": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Keyton, Nelson",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 3,
      "parties": [
        "Write-In"
      ]
    },
    "French, Dwight Kenneth": {
      "id": "2012_MD",
      "year": 2012,
      "name": "French, Dwight Kenneth",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Knill, Dennis": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Knill, Dennis",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Prokopich, Barbara A.": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Prokopich, Barbara A.",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Dietz, Robert William": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Dietz, Robert William",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Morstad, Dean": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Morstad, Dean",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "O'Hara, Terrance James": {
      "id": "2012_MD",
      "year": 2012,
      "name": "O'Hara, Terrance James",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Roth, Cecil James": {
      "id": "2012_MD",
      "year": 2012,
      "name": "Roth, Cecil James",
      "abbr": "MD",
      "state": "Maryland",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_MA": {
    "Obama, Barack": {
      "id": "2012_MA",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "MA",
      "state": "Massachusetts",
      "votes": 1921290,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_MA",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "MA",
      "state": "Massachusetts",
      "votes": 1188314,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_MA",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "MA",
      "state": "Massachusetts",
      "votes": 30920,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_MA",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "MA",
      "state": "Massachusetts",
      "votes": 20691,
      "parties": [
        "Green-Rainbow"
      ]
    },
    "All Others": {
      "id": "2012_MA",
      "year": 2012,
      "name": "All Others",
      "abbr": "MA",
      "state": "Massachusetts",
      "votes": 6552,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_MI": {
    "Obama, Barack": {
      "id": "2012_MI",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 2564569,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_MI",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 2115256,
      "parties": [
        "Republican"
      ]
    },
    "Stein, Jill": {
      "id": "2012_MI",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 21897,
      "parties": [
        "Green"
      ]
    },
    "Goode, Virgil, Jr.": {
      "id": "2012_MI",
      "year": 2012,
      "name": "Goode, Virgil, Jr.",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 16119,
      "parties": [
        "U.S. Taxpayers"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_MI",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 7774,
      "parties": [
        "Write-In"
      ]
    },
    "Anderson, Ross": {
      "id": "2012_MI",
      "year": 2012,
      "name": "Anderson, Ross",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 5147,
      "parties": [
        "Natural Law Party"
      ]
    },
    "Alexander, Stewart": {
      "id": "2012_MI",
      "year": 2012,
      "name": "Alexander, Stewart",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 89,
      "parties": [
        "Write-In"
      ]
    },
    "White, Jerry": {
      "id": "2012_MI",
      "year": 2012,
      "name": "White, Jerry",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 68,
      "parties": [
        "Write-In"
      ]
    },
    "Hoefling, Tom": {
      "id": "2012_MI",
      "year": 2012,
      "name": "Hoefling, Tom",
      "abbr": "MI",
      "state": "Michigan",
      "votes": 42,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_MN": {
    "Obama, Barack": {
      "id": "2012_MN",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 1546167,
      "parties": [
        "Democratic-Farmer Labor"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_MN",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 1320225,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_MN",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 35098,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_MN",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 13023,
      "parties": [
        "Green"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_MN",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 3722,
      "parties": [
        "Constitution"
      ]
    },
    "Carlson, Jim": {
      "id": "2012_MN",
      "year": 2012,
      "name": "Carlson, Jim",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 3149,
      "parties": [
        "Grassroots"
      ]
    },
    "Anderson, Ross C. \"Rocky\"": {
      "id": "2012_MN",
      "year": 2012,
      "name": "Anderson, Ross C. \"Rocky\"",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 1996,
      "parties": [
        "Justice Party"
      ]
    },
    "Morstad, Dean": {
      "id": "2012_MN",
      "year": 2012,
      "name": "Morstad, Dean",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 1092,
      "parties": [
        "Constitutional Government"
      ]
    },
    "Harris, James": {
      "id": "2012_MN",
      "year": 2012,
      "name": "Harris, James",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 1051,
      "parties": [
        "Socialist Workers Party"
      ]
    },
    "Lindsay, Peta": {
      "id": "2012_MN",
      "year": 2012,
      "name": "Lindsay, Peta",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 397,
      "parties": [
        "Socialism and Liberation Party"
      ]
    },
    "Barr, Roseanne": {
      "id": "2012_MN",
      "year": 2012,
      "name": "Barr, Roseanne",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 46,
      "parties": [
        "Write-In"
      ]
    },
    "Prokopich, Barbara": {
      "id": "2012_MN",
      "year": 2012,
      "name": "Prokopich, Barbara",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 35,
      "parties": [
        "Write-In"
      ]
    },
    "Hoefling, Tom": {
      "id": "2012_MN",
      "year": 2012,
      "name": "Hoefling, Tom",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 14,
      "parties": [
        "Write-In"
      ]
    },
    "Reed, Jill": {
      "id": "2012_MN",
      "year": 2012,
      "name": "Reed, Jill",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 8,
      "parties": [
        "Write-In"
      ]
    },
    "Barnett, Andre": {
      "id": "2012_MN",
      "year": 2012,
      "name": "Barnett, Andre",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 4,
      "parties": [
        "Write-In"
      ]
    },
    "Christensen, Will": {
      "id": "2012_MN",
      "year": 2012,
      "name": "Christensen, Will",
      "abbr": "MN",
      "state": "Minnesota",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_MS": {
    "Romney, Mitt": {
      "id": "2012_MS",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "MS",
      "state": "Mississippi",
      "votes": 710746,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_MS",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "MS",
      "state": "Mississippi",
      "votes": 562949,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_MS",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "MS",
      "state": "Mississippi",
      "votes": 6676,
      "parties": [
        "Libertarian"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_MS",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "MS",
      "state": "Mississippi",
      "votes": 2609,
      "parties": [
        "Constitution"
      ]
    },
    "Stein, Jill A.": {
      "id": "2012_MS",
      "year": 2012,
      "name": "Stein, Jill A.",
      "abbr": "MS",
      "state": "Mississippi",
      "votes": 1588,
      "parties": [
        "Green"
      ]
    },
    "Washer, Barbara Dale": {
      "id": "2012_MS",
      "year": 2012,
      "name": "Washer, Barbara Dale",
      "abbr": "MS",
      "state": "Mississippi",
      "votes": 1016,
      "parties": [
        "Reform"
      ]
    }
  },
  "2012_MO": {
    "Romney, Mitt": {
      "id": "2012_MO",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "MO",
      "state": "Missouri",
      "votes": 1482440,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_MO",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "MO",
      "state": "Missouri",
      "votes": 1223796,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_MO",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "MO",
      "state": "Missouri",
      "votes": 43151,
      "parties": [
        "Libertarian"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_MO",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "MO",
      "state": "Missouri",
      "votes": 7936,
      "parties": [
        "Constitution"
      ]
    }
  },
  "2012_MT": {
    "Romney, Mitt": {
      "id": "2012_MT",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "MT",
      "state": "Montana",
      "votes": 267928,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_MT",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "MT",
      "state": "Montana",
      "votes": 201839,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_MT",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "MT",
      "state": "Montana",
      "votes": 14165,
      "parties": [
        "Libertarian"
      ]
    },
    "Anderson, Ross C. \"Rocky\"": {
      "id": "2012_MT",
      "year": 2012,
      "name": "Anderson, Ross C. \"Rocky\"",
      "abbr": "MT",
      "state": "Montana",
      "votes": 59,
      "parties": [
        "Write-In"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_MT",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "MT",
      "state": "Montana",
      "votes": 39,
      "parties": [
        "Write-In"
      ]
    },
    "Barr, Roseanne": {
      "id": "2012_MT",
      "year": 2012,
      "name": "Barr, Roseanne",
      "abbr": "MT",
      "state": "Montana",
      "votes": 6,
      "parties": [
        "Write-In"
      ]
    },
    "Hoefling, Tom": {
      "id": "2012_MT",
      "year": 2012,
      "name": "Hoefling, Tom",
      "abbr": "MT",
      "state": "Montana",
      "votes": 5,
      "parties": [
        "Write-In"
      ]
    },
    "Alexander, Stewart": {
      "id": "2012_MT",
      "year": 2012,
      "name": "Alexander, Stewart",
      "abbr": "MT",
      "state": "Montana",
      "votes": 4,
      "parties": [
        "Write-In"
      ]
    },
    "Barnett, Andre": {
      "id": "2012_MT",
      "year": 2012,
      "name": "Barnett, Andre",
      "abbr": "MT",
      "state": "Montana",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Logsdon, Alexis": {
      "id": "2012_MT",
      "year": 2012,
      "name": "Logsdon, Alexis",
      "abbr": "MT",
      "state": "Montana",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_NE": {
    "Romney, Mitt": {
      "id": "2012_NE",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "NE",
      "state": "Nebraska",
      "votes": 475064,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_NE",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "NE",
      "state": "Nebraska",
      "votes": 302081,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_NE",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "NE",
      "state": "Nebraska",
      "votes": 11109,
      "parties": [
        "Libertarian"
      ]
    },
    "Terry, Randall A.": {
      "id": "2012_NE",
      "year": 2012,
      "name": "Terry, Randall A.",
      "abbr": "NE",
      "state": "Nebraska",
      "votes": 2408,
      "parties": [
        "By Petition"
      ]
    }
  },
  "2012_NV": {
    "Obama, Barack": {
      "id": "2012_NV",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "NV",
      "state": "Nevada",
      "votes": 531373,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_NV",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "NV",
      "state": "Nevada",
      "votes": 463567,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_NV",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "NV",
      "state": "Nevada",
      "votes": 10968,
      "parties": [
        "Libertarian"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_NV",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "NV",
      "state": "Nevada",
      "votes": 3240,
      "parties": [
        "Independent American  Party"
      ]
    }
  },
  "2012_NH": {
    "Obama, Barack": {
      "id": "2012_NH",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 369561,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_NH",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 329918,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_NH",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 8212,
      "parties": [
        "Libertarian"
      ]
    },
    "Paul, Ron": {
      "id": "2012_NH",
      "year": 2012,
      "name": "Paul, Ron",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 1374,
      "parties": [
        "Write-In"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_NH",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 708,
      "parties": [
        "Constitution"
      ]
    },
    "Stein, Jill": {
      "id": "2012_NH",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "NH",
      "state": "New Hampshire",
      "votes": 324,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_NJ": {
    "Obama, Barack": {
      "id": "2012_NJ",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 2125101,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_NJ",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 1477568,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_NJ",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 21045,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_NJ",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 9888,
      "parties": [
        "Green"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_NJ",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 2064,
      "parties": [
        "Constitution"
      ]
    },
    "Anderson, Ross C. (Rocky)": {
      "id": "2012_NJ",
      "year": 2012,
      "name": "Anderson, Ross C. (Rocky)",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 1724,
      "parties": [
        "New Jersey Justice Party"
      ]
    },
    "Boss, Jeff": {
      "id": "2012_NJ",
      "year": 2012,
      "name": "Boss, Jeff",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 1007,
      "parties": [
        "NSA Did 911"
      ]
    },
    "Harris, James": {
      "id": "2012_NJ",
      "year": 2012,
      "name": "Harris, James",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 710,
      "parties": [
        "Socialist Workers Party"
      ]
    },
    "Miller, Merlin": {
      "id": "2012_NJ",
      "year": 2012,
      "name": "Miller, Merlin",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 664,
      "parties": [
        "American Third Position"
      ]
    },
    "Lindsay, Peta": {
      "id": "2012_NJ",
      "year": 2012,
      "name": "Lindsay, Peta",
      "abbr": "NJ",
      "state": "New Jersey",
      "votes": 521,
      "parties": [
        "Socialism and Liberation Party"
      ]
    }
  },
  "2012_NM": {
    "Obama, Barack": {
      "id": "2012_NM",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "NM",
      "state": "New Mexico",
      "votes": 415335,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_NM",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "NM",
      "state": "New Mexico",
      "votes": 335788,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_NM",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "NM",
      "state": "New Mexico",
      "votes": 27788,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_NM",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "NM",
      "state": "New Mexico",
      "votes": 2691,
      "parties": [
        "Green"
      ]
    },
    "Anderson, Ross C. \"Rocky\"": {
      "id": "2012_NM",
      "year": 2012,
      "name": "Anderson, Ross C. \"Rocky\"",
      "abbr": "NM",
      "state": "New Mexico",
      "votes": 1174,
      "parties": [
        "New Mexico Independent Party"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_NM",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "NM",
      "state": "New Mexico",
      "votes": 982,
      "parties": [
        "Constitution"
      ]
    }
  },
  "2012_NY": {
    "Obama, Barack": {
      "id": "2012_NY",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "NY",
      "state": "New York",
      "votes": 4485741,
      "parties": [
        "Democratic",
        "Working Families"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_NY",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "NY",
      "state": "New York",
      "votes": 2490431,
      "parties": [
        "Republican",
        "Conservative"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_NY",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "NY",
      "state": "New York",
      "votes": 47256,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_NY",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "NY",
      "state": "New York",
      "votes": 39982,
      "parties": [
        "Green"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_NY",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "NY",
      "state": "New York",
      "votes": 6274,
      "parties": [
        "Constitution"
      ]
    },
    "Lindsay, Peta": {
      "id": "2012_NY",
      "year": 2012,
      "name": "Lindsay, Peta",
      "abbr": "NY",
      "state": "New York",
      "votes": 2050,
      "parties": [
        "Socialism and Liberation Party"
      ]
    },
    "Anderson, Ross C.": {
      "id": "2012_NY",
      "year": 2012,
      "name": "Anderson, Ross C.",
      "abbr": "NY",
      "state": "New York",
      "votes": 217,
      "parties": [
        "Write-In"
      ]
    },
    "Durham, Stephen": {
      "id": "2012_NY",
      "year": 2012,
      "name": "Durham, Stephen",
      "abbr": "NY",
      "state": "New York",
      "votes": 34,
      "parties": [
        "Write-In"
      ]
    },
    "Hoefling, Tom": {
      "id": "2012_NY",
      "year": 2012,
      "name": "Hoefling, Tom",
      "abbr": "NY",
      "state": "New York",
      "votes": 34,
      "parties": [
        "Write-In"
      ]
    },
    "Harris, James": {
      "id": "2012_NY",
      "year": 2012,
      "name": "Harris, James",
      "abbr": "NY",
      "state": "New York",
      "votes": 27,
      "parties": [
        "Write-In"
      ]
    },
    "White, Jerry": {
      "id": "2012_NY",
      "year": 2012,
      "name": "White, Jerry",
      "abbr": "NY",
      "state": "New York",
      "votes": 19,
      "parties": [
        "Write-In"
      ]
    },
    "Reed, Jill": {
      "id": "2012_NY",
      "year": 2012,
      "name": "Reed, Jill",
      "abbr": "NY",
      "state": "New York",
      "votes": 12,
      "parties": [
        "Write-In"
      ]
    },
    "Miller, Merlin": {
      "id": "2012_NY",
      "year": 2012,
      "name": "Miller, Merlin",
      "abbr": "NY",
      "state": "New York",
      "votes": 6,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_NC": {
    "Romney, Mitt": {
      "id": "2012_NC",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "NC",
      "state": "North Carolina",
      "votes": 2270395,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_NC",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "NC",
      "state": "North Carolina",
      "votes": 2178391,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_NC",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "NC",
      "state": "North Carolina",
      "votes": 44515,
      "parties": [
        "Libertarian"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_NC",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "NC",
      "state": "North Carolina",
      "votes": 534,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_ND": {
    "Romney, Mitt": {
      "id": "2012_ND",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "ND",
      "state": "North Dakota",
      "votes": 188163,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_ND",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "ND",
      "state": "North Dakota",
      "votes": 124827,
      "parties": [
        "Democratic-Nonpartisan League"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_ND",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "ND",
      "state": "North Dakota",
      "votes": 5231,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_ND",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "ND",
      "state": "North Dakota",
      "votes": 1361,
      "parties": [
        "Green"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_ND",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "ND",
      "state": "North Dakota",
      "votes": 1185,
      "parties": [
        "Constitution"
      ]
    }
  },
  "2012_OH": {
    "Obama, Barack": {
      "id": "2012_OH",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 2827710,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_OH",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 2661433,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_OH",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 49493,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_OH",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 18574,
      "parties": [
        "Green"
      ]
    },
    "Duncan, Richard": {
      "id": "2012_OH",
      "year": 2012,
      "name": "Duncan, Richard",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 12502,
      "parties": [
        "Independent"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_OH",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 8151,
      "parties": [
        "Constitution"
      ]
    },
    "Alexander, Stewart": {
      "id": "2012_OH",
      "year": 2012,
      "name": "Alexander, Stewart",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 2944,
      "parties": [
        "Socialist Party USA"
      ]
    },
    "Vargo, Mike": {
      "id": "2012_OH",
      "year": 2012,
      "name": "Vargo, Mike",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 12,
      "parties": [
        "Write-In"
      ]
    },
    "Reed, Jill": {
      "id": "2012_OH",
      "year": 2012,
      "name": "Reed, Jill",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 12,
      "parties": [
        "Write-In"
      ]
    },
    "Terry, Randall": {
      "id": "2012_OH",
      "year": 2012,
      "name": "Terry, Randall",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 7,
      "parties": [
        "Write-In"
      ]
    },
    "Daniels, Susan": {
      "id": "2012_OH",
      "year": 2012,
      "name": "Daniels, Susan",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Keyton, Nelson": {
      "id": "2012_OH",
      "year": 2012,
      "name": "Keyton, Nelson",
      "abbr": "OH",
      "state": "Ohio",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_OK": {
    "Romney, Mitt": {
      "id": "2012_OK",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "OK",
      "state": "Oklahoma",
      "votes": 891325,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_OK",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "OK",
      "state": "Oklahoma",
      "votes": 443547,
      "parties": [
        "Democratic"
      ]
    }
  },
  "2012_OR": {
    "Obama, Barack": {
      "id": "2012_OR",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "OR",
      "state": "Oregon",
      "votes": 970488,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_OR",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "OR",
      "state": "Oregon",
      "votes": 754175,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_OR",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "OR",
      "state": "Oregon",
      "votes": 24089,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_OR",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "OR",
      "state": "Oregon",
      "votes": 19427,
      "parties": [
        "Pacific Green"
      ]
    },
    "Miscellaneous": {
      "id": "2012_OR",
      "year": 2012,
      "name": "Miscellaneous",
      "abbr": "OR",
      "state": "Oregon",
      "votes": 13275,
      "parties": [
        "Write-In"
      ]
    },
    "Christensen, Will": {
      "id": "2012_OR",
      "year": 2012,
      "name": "Christensen, Will",
      "abbr": "OR",
      "state": "Oregon",
      "votes": 4432,
      "parties": [
        "Constitution"
      ]
    },
    "Anderson, Ross C. (Rocky)": {
      "id": "2012_OR",
      "year": 2012,
      "name": "Anderson, Ross C. (Rocky)",
      "abbr": "OR",
      "state": "Oregon",
      "votes": 3384,
      "parties": [
        "Progressive"
      ]
    }
  },
  "2012_PA": {
    "Obama, Barack": {
      "id": "2012_PA",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "PA",
      "state": "Pennsylvania",
      "votes": 2990274,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_PA",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "PA",
      "state": "Pennsylvania",
      "votes": 2680434,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_PA",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "PA",
      "state": "Pennsylvania",
      "votes": 49991,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_PA",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "PA",
      "state": "Pennsylvania",
      "votes": 21341,
      "parties": [
        "Green"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_PA",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "PA",
      "state": "Pennsylvania",
      "votes": 383,
      "parties": [
        "Write-In"
      ]
    },
    "Hoefling, Tom": {
      "id": "2012_PA",
      "year": 2012,
      "name": "Hoefling, Tom",
      "abbr": "PA",
      "state": "Pennsylvania",
      "votes": 28,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_RI": {
    "Obama, Barack": {
      "id": "2012_RI",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 279677,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_RI",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 157204,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_RI",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 4388,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_RI",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 2421,
      "parties": [
        "Green"
      ]
    },
    "Paul, Ron": {
      "id": "2012_RI",
      "year": 2012,
      "name": "Paul, Ron",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 617,
      "parties": [
        "Write-In"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_RI",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 430,
      "parties": [
        "Constitution"
      ]
    },
    "Anderson, Ross C. \"Rocky\"": {
      "id": "2012_RI",
      "year": 2012,
      "name": "Anderson, Ross C. \"Rocky\"",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 416,
      "parties": [
        "Justice Party"
      ]
    },
    "Lindsay, Peta": {
      "id": "2012_RI",
      "year": 2012,
      "name": "Lindsay, Peta",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 132,
      "parties": [
        "Socialism and Liberation Party"
      ]
    },
    "Clinton, Hillary": {
      "id": "2012_RI",
      "year": 2012,
      "name": "Clinton, Hillary",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 64,
      "parties": [
        "Write-In"
      ]
    },
    "Mouse, Mickey": {
      "id": "2012_RI",
      "year": 2012,
      "name": "Mouse, Mickey",
      "abbr": "RI",
      "state": "Rhode Island",
      "votes": 14,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_SC": {
    "Romney, Mitt": {
      "id": "2012_SC",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "SC",
      "state": "South Carolina",
      "votes": 1071645,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_SC",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "SC",
      "state": "South Carolina",
      "votes": 865941,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_SC",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "SC",
      "state": "South Carolina",
      "votes": 16321,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_SC",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "SC",
      "state": "South Carolina",
      "votes": 5446,
      "parties": [
        "Green"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_SC",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "SC",
      "state": "South Carolina",
      "votes": 4765,
      "parties": [
        "Constitution"
      ]
    }
  },
  "2012_SD": {
    "Romney, Mitt": {
      "id": "2012_SD",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "SD",
      "state": "South Dakota",
      "votes": 210610,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_SD",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "SD",
      "state": "South Dakota",
      "votes": 145039,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_SD",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "SD",
      "state": "South Dakota",
      "votes": 5795,
      "parties": [
        "Libertarian"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_SD",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "SD",
      "state": "South Dakota",
      "votes": 2371,
      "parties": [
        "Constitution"
      ]
    }
  },
  "2012_TN": {
    "Romney, Mitt": {
      "id": "2012_TN",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 1462330,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_TN",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 960709,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_TN",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 18623,
      "parties": [
        "Independent"
      ]
    },
    "Stein, Jill": {
      "id": "2012_TN",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 6515,
      "parties": [
        "Green"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_TN",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 6022,
      "parties": [
        "Constitution"
      ]
    },
    "Anderson, Ross C. \"Rocky\"": {
      "id": "2012_TN",
      "year": 2012,
      "name": "Anderson, Ross C. \"Rocky\"",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 2639,
      "parties": [
        "Independent"
      ]
    },
    "Miller, Merlin": {
      "id": "2012_TN",
      "year": 2012,
      "name": "Miller, Merlin",
      "abbr": "TN",
      "state": "Tennessee",
      "votes": 1739,
      "parties": [
        "Independent"
      ]
    }
  },
  "2012_TX": {
    "Romney, Mitt": {
      "id": "2012_TX",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "TX",
      "state": "Texas",
      "votes": 4569843,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_TX",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "TX",
      "state": "Texas",
      "votes": 3308124,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_TX",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "TX",
      "state": "Texas",
      "votes": 88580,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_TX",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "TX",
      "state": "Texas",
      "votes": 24657,
      "parties": [
        "Green"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_TX",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "TX",
      "state": "Texas",
      "votes": 1287,
      "parties": [
        "Write-In"
      ]
    },
    "Anderson, Rocky": {
      "id": "2012_TX",
      "year": 2012,
      "name": "Anderson, Rocky",
      "abbr": "TX",
      "state": "Texas",
      "votes": 426,
      "parties": [
        "Write-In"
      ]
    },
    "Hoefling, Tom": {
      "id": "2012_TX",
      "year": 2012,
      "name": "Hoefling, Tom",
      "abbr": "TX",
      "state": "Texas",
      "votes": 374,
      "parties": [
        "Write-In"
      ]
    },
    "Ayers, Avery": {
      "id": "2012_TX",
      "year": 2012,
      "name": "Ayers, Avery",
      "abbr": "TX",
      "state": "Texas",
      "votes": 209,
      "parties": [
        "Write-In"
      ]
    },
    "Alexander, Stewart": {
      "id": "2012_TX",
      "year": 2012,
      "name": "Alexander, Stewart",
      "abbr": "TX",
      "state": "Texas",
      "votes": 162,
      "parties": [
        "Write-In"
      ]
    },
    "Hill, Thaddaus": {
      "id": "2012_TX",
      "year": 2012,
      "name": "Hill, Thaddaus",
      "abbr": "TX",
      "state": "Texas",
      "votes": 102,
      "parties": [
        "Write-In"
      ]
    },
    "Barnett, Andre N.": {
      "id": "2012_TX",
      "year": 2012,
      "name": "Barnett, Andre N.",
      "abbr": "TX",
      "state": "Texas",
      "votes": 87,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_UT": {
    "Romney, Mitt": {
      "id": "2012_UT",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "UT",
      "state": "Utah",
      "votes": 740600,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_UT",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "UT",
      "state": "Utah",
      "votes": 251813,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_UT",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "UT",
      "state": "Utah",
      "votes": 12572,
      "parties": [
        "Libertarian"
      ]
    },
    "Anderson, Ross C. \"Rocky\"": {
      "id": "2012_UT",
      "year": 2012,
      "name": "Anderson, Ross C. \"Rocky\"",
      "abbr": "UT",
      "state": "Utah",
      "votes": 5335,
      "parties": [
        "Justice Party"
      ]
    },
    "Stein, Jill": {
      "id": "2012_UT",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "UT",
      "state": "Utah",
      "votes": 3817,
      "parties": [
        "Green"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_UT",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "UT",
      "state": "Utah",
      "votes": 2871,
      "parties": [
        "Constitution"
      ]
    },
    "La Riva, Gloria": {
      "id": "2012_UT",
      "year": 2012,
      "name": "La Riva, Gloria",
      "abbr": "UT",
      "state": "Utah",
      "votes": 393,
      "parties": [
        "Unaffiliated"
      ]
    },
    "Barr, Roseanne": {
      "id": "2012_UT",
      "year": 2012,
      "name": "Barr, Roseanne",
      "abbr": "UT",
      "state": "Utah",
      "votes": 18,
      "parties": [
        "Write-In"
      ]
    },
    "Reed, Jill": {
      "id": "2012_UT",
      "year": 2012,
      "name": "Reed, Jill",
      "abbr": "UT",
      "state": "Utah",
      "votes": 6,
      "parties": [
        "Write-In"
      ]
    },
    "Barnett, Andre": {
      "id": "2012_UT",
      "year": 2012,
      "name": "Barnett, Andre",
      "abbr": "UT",
      "state": "Utah",
      "votes": 5,
      "parties": [
        "Write-In"
      ]
    },
    "Christensen, Will": {
      "id": "2012_UT",
      "year": 2012,
      "name": "Christensen, Will",
      "abbr": "UT",
      "state": "Utah",
      "votes": 5,
      "parties": [
        "Write-In"
      ]
    },
    "Myers, Justin": {
      "id": "2012_UT",
      "year": 2012,
      "name": "Myers, Justin",
      "abbr": "UT",
      "state": "Utah",
      "votes": 2,
      "parties": [
        "Write-In"
      ]
    },
    "Durham, Stephen": {
      "id": "2012_UT",
      "year": 2012,
      "name": "Durham, Stephen",
      "abbr": "UT",
      "state": "Utah",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Hykes, Darrell": {
      "id": "2012_UT",
      "year": 2012,
      "name": "Hykes, Darrell",
      "abbr": "UT",
      "state": "Utah",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Morstad, Dean": {
      "id": "2012_UT",
      "year": 2012,
      "name": "Morstad, Dean",
      "abbr": "UT",
      "state": "Utah",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_VT": {
    "Obama, Barack": {
      "id": "2012_VT",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 199239,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_VT",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 92698,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_VT",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 3487,
      "parties": [
        "Libertarian"
      ]
    },
    "Anderson, Ross C. \"Rocky\"": {
      "id": "2012_VT",
      "year": 2012,
      "name": "Anderson, Ross C. \"Rocky\"",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 1128,
      "parties": [
        "Justice Party"
      ]
    },
    "Paul, Ron": {
      "id": "2012_VT",
      "year": 2012,
      "name": "Paul, Ron",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 717,
      "parties": [
        "Write-In"
      ]
    },
    "Lindsay, Peta": {
      "id": "2012_VT",
      "year": 2012,
      "name": "Lindsay, Peta",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 695,
      "parties": [
        "Socialism and Liberation Party"
      ]
    },
    "Stein, Jill": {
      "id": "2012_VT",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 594,
      "parties": [
        "Write-In"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_VT",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 13,
      "parties": [
        "Write-In"
      ]
    },
    "Barr, Roseanne": {
      "id": "2012_VT",
      "year": 2012,
      "name": "Barr, Roseanne",
      "abbr": "VT",
      "state": "Vermont",
      "votes": 9,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_VA": {
    "Obama, Barack": {
      "id": "2012_VA",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 1971820,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_VA",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 1822522,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_VA",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 31216,
      "parties": [
        "Libertarian"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_VA",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 13058,
      "parties": [
        "Constitution"
      ]
    },
    "Stein, Jill": {
      "id": "2012_VA",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 8627,
      "parties": [
        "Green"
      ]
    },
    "Anderson, Ross C. \"Rocky\"": {
      "id": "2012_VA",
      "year": 2012,
      "name": "Anderson, Ross C. \"Rocky\"",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 76,
      "parties": [
        "Write-In"
      ]
    },
    "Reed, Jill": {
      "id": "2012_VA",
      "year": 2012,
      "name": "Reed, Jill",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 14,
      "parties": [
        "Write-In"
      ]
    },
    "Glean, Joseph A. / Darlene Herleikson": {
      "id": "2012_VA",
      "year": 2012,
      "name": "Glean, Joseph A. / Darlene Herleikson",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 3,
      "parties": [
        "Write-In"
      ]
    },
    "Glean, Joseph A. / Jamie Johnson": {
      "id": "2012_VA",
      "year": 2012,
      "name": "Glean, Joseph A. / Jamie Johnson",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    },
    "Tittle, Sheila \"Samm\"": {
      "id": "2012_VA",
      "year": 2012,
      "name": "Tittle, Sheila \"Samm\"",
      "abbr": "VA",
      "state": "Virginia",
      "votes": 1,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_WA": {
    "Obama, Barack": {
      "id": "2012_WA",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "WA",
      "state": "Washington",
      "votes": 1755396,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_WA",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "WA",
      "state": "Washington",
      "votes": 1290670,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_WA",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "WA",
      "state": "Washington",
      "votes": 42202,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_WA",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "WA",
      "state": "Washington",
      "votes": 20928,
      "parties": [
        "Green"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_WA",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "WA",
      "state": "Washington",
      "votes": 8851,
      "parties": [
        "Constitution"
      ]
    },
    "Anderson, Ross C. \"Rocky\"": {
      "id": "2012_WA",
      "year": 2012,
      "name": "Anderson, Ross C. \"Rocky\"",
      "abbr": "WA",
      "state": "Washington",
      "votes": 4946,
      "parties": [
        "Justice Party"
      ]
    },
    "Lindsay, Peta": {
      "id": "2012_WA",
      "year": 2012,
      "name": "Lindsay, Peta",
      "abbr": "WA",
      "state": "Washington",
      "votes": 1318,
      "parties": [
        "Socialism and Liberation Party"
      ]
    },
    "Harris, James": {
      "id": "2012_WA",
      "year": 2012,
      "name": "Harris, James",
      "abbr": "WA",
      "state": "Washington",
      "votes": 1205,
      "parties": [
        "Socialist Workers Party"
      ]
    }
  },
  "2012_WV": {
    "Romney, Mitt": {
      "id": "2012_WV",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 417655,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_WV",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 238269,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_WV",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 6302,
      "parties": [
        "Libertarian"
      ]
    },
    "Stein, Jill": {
      "id": "2012_WV",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 4406,
      "parties": [
        "Mountain Party"
      ]
    },
    "Terry, Randall": {
      "id": "2012_WV",
      "year": 2012,
      "name": "Terry, Randall",
      "abbr": "WV",
      "state": "West Virginia",
      "votes": 3806,
      "parties": [
        "No Party Affiliation"
      ]
    }
  },
  "2012_WI": {
    "Obama, Barack": {
      "id": "2012_WI",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 1620985,
      "parties": [
        "Democratic"
      ]
    },
    "Romney, Mitt": {
      "id": "2012_WI",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 1407966,
      "parties": [
        "Republican"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_WI",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 20439,
      "parties": [
        "Independent"
      ]
    },
    "Stein, Jill": {
      "id": "2012_WI",
      "year": 2012,
      "name": "Stein, Jill",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 7665,
      "parties": [
        "Independent"
      ]
    },
    "Goode, Virgil": {
      "id": "2012_WI",
      "year": 2012,
      "name": "Goode, Virgil",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 4930,
      "parties": [
        "Constitution"
      ]
    },
    "White, Jerry": {
      "id": "2012_WI",
      "year": 2012,
      "name": "White, Jerry",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 553,
      "parties": [
        "Independent"
      ]
    },
    "La Riva, Gloria": {
      "id": "2012_WI",
      "year": 2012,
      "name": "La Riva, Gloria",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 526,
      "parties": [
        "Independent"
      ]
    },
    "Anderson, Ross C. \"Rocky\"": {
      "id": "2012_WI",
      "year": 2012,
      "name": "Anderson, Ross C. \"Rocky\"",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 112,
      "parties": [
        "Write-In"
      ]
    },
    "Barr, Roseanne": {
      "id": "2012_WI",
      "year": 2012,
      "name": "Barr, Roseanne",
      "abbr": "WI",
      "state": "Wisconsin",
      "votes": 88,
      "parties": [
        "Write-In"
      ]
    }
  },
  "2012_WY": {
    "Romney, Mitt": {
      "id": "2012_WY",
      "year": 2012,
      "name": "Romney, Mitt",
      "abbr": "WY",
      "state": "Wyoming",
      "votes": 170962,
      "parties": [
        "Republican"
      ]
    },
    "Obama, Barack": {
      "id": "2012_WY",
      "year": 2012,
      "name": "Obama, Barack",
      "abbr": "WY",
      "state": "Wyoming",
      "votes": 69286,
      "parties": [
        "Democratic"
      ]
    },
    "Johnson, Gary": {
      "id": "2012_WY",
      "year": 2012,
      "name": "Johnson, Gary",
      "abbr": "WY",
      "state": "Wyoming",
      "votes": 5326,
      "parties": [
        "Libertarian"
      ]
    },
    "Goode, Virgil H.": {
      "id": "2012_WY",
      "year": 2012,
      "name": "Goode, Virgil H.",
      "abbr": "WY",
      "state": "Wyoming",
      "votes": 1452,
      "parties": [
        "Constitution"
      ]
    }
  }
}

export default Route.extend({

  // pretending that the app retrieved election results from DB or web service
  model(){

    let electionResultsPayload = {}

    electionResultsPayload.electionYears = electionYears;
    electionResultsPayload.stateCodes = stateCodes;
    electionResultsPayload.parties = {
      2004: parties2004,
      2008: parties2008,
      2012: parties2012
    }

    electionResultsPayload.results = {
      2004: results2004,
      2008: results2008,
      2012: results2012
    }

    return electionResultsPayload;
  },

  setupController(controller, model){
    controller.set('userSubmittedResults', []);
    controller.set('electionYears', model.electionYears);
    controller.set('stateCodes', model.stateCodes);

    let partyValuesByYear = {
      2004: Object.values(model.parties[2004]),
      2008: Object.values(model.parties[2008]),
      2012: Object.values(model.parties[2012]),
    }
    controller.set('politicalParties', partyValuesByYear);
    controller.set('resultsByYear', model.results);
  }

});