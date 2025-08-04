// src/constants/index.ts

export type Stadium = {
  name: string;
  team: string;
  city: string;
  state: string;
  opened: number;
};

export const MLB_STADIUMS: Stadium[] = [

{ name: "Angel Stadium", team: "Los Angeles Angels", city: "Anaheim", state: "CA", opened: 1966 },
{ name: "Busch Stadium", team: "St. Louis Cardinals", city: "St. Louis", state: "MO", opened: 2006 },
{ name: "Chase Field", team: "Arizona Diamondbacks", city: "Phoenix", state: "AZ", opened: 1998 },
{ name: "Citi Field", team: "New York Mets", city: "Queens", state: "NY", opened: 2009 },
{ name: "Citizens Bank Park", team: "Philadelphia Phillies", city: "Philadelphia", state: "PA", opened: 2004 },
{ name: "Comerica Park", team: "Detroit Tigers", city: "Detroit", state: "MI", opened: 2000 },
{ name: "Coors Field", team: "Colorado Rockies", city: "Denver", state: "CO", opened: 1995 },
{ name: "Dodger Stadium", team: "Los Angeles Dodgers", city: "Los Angeles", state: "CA", opened: 1962 },
{ name: "Fenway Park", team: "Boston Red Sox", city: "Boston", state: "MA", opened: 1912 },
{ name: "Globe Life Field", team: "Texas Rangers", city: "Arlington", state: "TX", opened: 2020 },
{ name: "Great American Ball Park", team: "Cincinnati Reds", city: "Cincinnati", state: "OH", opened: 2003 },
{ name: "Guaranteed Rate Field", team: "Chicago White Sox", city: "Chicago", state: "IL", opened: 1991 },
{ name: "Kauffman Stadium", team: "Kansas City Royals", city: "Kansas City", state: "MO", opened: 1973 },
{ name: "loanDepot park", team: "Miami Marlins", city: "Miami", state: "FL", opened: 2012 },
{ name: "Minute Maid Park", team: "Houston Astros", city: "Houston", state: "TX", opened: 2000 },
{ name: "Nationals Park", team: "Washington Nationals", city: "Washington", state: "DC", opened: 2008 },
{ name: "Oakland Coliseum", team: "Oakland Athletics", city: "Oakland", state: "CA", opened: 1966 },
{ name: "Oriole Park at Camden Yards", team: "Baltimore Orioles", city: "Baltimore", state: "MD", opened: 1992 },
{ name: "Petco Park", team: "San Diego Padres", city: "San Diego", state: "CA", opened: 2004 },
{ name: "PNC Park", team: "Pittsburgh Pirates", city: "Pittsburgh", state: "PA", opened: 2001 },
{ name: "Progressive Field", team: "Cleveland Guardians", city: "Cleveland", state: "OH", opened: 1994 },
{ name: "Rogers Centre", team: "Toronto Blue Jays", city: "Toronto", state: "ON", opened: 1989 },
{ name: "T-Mobile Park", team: "Seattle Mariners", city: "Seattle", state: "WA", opened: 1999 },
{ name: "Target Field", team: "Minnesota Twins", city: "Minneapolis", state: "MN", opened: 2010 },
{ name: "Tropicana Field", team: "Tampa Bay Rays", city: "St. Petersburg", state: "FL", opened: 1990 },
{ name: "Truist Park", team: "Atlanta Braves", city: "Cumberland", state: "GA", opened: 2017 },
{ name: "Wrigley Field", team: "Chicago Cubs", city: "Chicago", state: "IL", opened: 1914 },
{ name: "Yankee Stadium", team: "New York Yankees", city: "Bronx", state: "NY", opened: 2009 },
{ name: "American Family Field", team: "Milwaukee Brewers", city: "Milwaukee", state: "WI", opened: 2001 },
{ name: "Oracle Park", team: "San Francisco Giants", city: "San Francisco", state: "CA", opened: 2000 },
  // Add more here...
];