# Election Results

## Assumptions

This interactive visualization can be built in phases. Each phase
addresses one or multiple user stories.

### Phase 1 
Phase 1 of this  interactive visualization aims to address the following user story:

> As a campaign manager, I want to see a choropleth map of difference in percent of
votes between my political party and a competing party for a given election year
across states in the USA. This will help me determine what regions to invest 
campaign money and travel time.

The user story will be satisfied with...

1. Dropdown to select personal political party
2. Dropdown to select competing political party
3. Dropdown to select election year
4. Choropleth map of 50 states, symbolized according to difference in percent of votes between the selected parties for selected election year.

### Phase 2

Phase 2 of this  interactive visualization aims to address the following user stories:

> As a campaign manager, I want to inspect the specific stats for a given state, so that I can verify my understanding of the choropleth map.

The user story will be satisfied with...

1. Ability to hover over each state and see difference in percent of votes.

> As a campaign manager, I want to see a choropleth of difference in percent of votes between a selected set of "friendly" parties and a selected set of "opposing" parties. This gives me a more fine grained answer of what regions may present the most opposition.

The user story will be satisfied with...

1. Ability to select multiple "friendly" political parties
2. Ability to select multiple "opposing" political parties
3. Dropdown to select election year
4. Choropleth map of 50 states, symbolized according to difference in percent of votes between the selected friendly and opposing parties for given election year.

## Installation

* `git clone <repository-url>` this repository
* `cd pl-election-results`
* `npm install`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Targets

IE11 is not included in the build targets.