export interface Area {
  name: string;
  slug: string;
}

export const areas: string[] = [
  "Grays", "Dartford", "Bromley", "Maidstone", "Southend-on-Sea", 
  "Chelmsford", "Colchester", "Ipswich", "Norwich", "Kings Lynn", 
  "Peterborough", "Cambridge", "Northampton", "Luton", "Watford", 
  "Oxford", "Swindon", "Winchester", "Southampton", "Portsmouth", 
  "Worthing", "Eastbourne", "Hastings", "Canterbury", "Margate", 
  "Canvey Island", "Dover", "St Albans", "Crawley", "Reading", 
  "Aylesbury", "Harlow", "Billericay", "Wickford", "Basildon", 
  "South Benfleet", "Hockley", "Clacton-on-Sea", "Thetford", "Guildford", 
  "Woking", "Bracknell", "Basingstoke", "Bath", "Bristol", 
  "Birmingham", "Coventry", "Leicester", "Derby", "Nottingham", 
  "Bedford", "Plymouth", "Exeter", "Bournemouth"
];

export function getSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/'/g, "")
    .replace(/[^\w-]+/g, "-");
}

export const areaObjects: Area[] = areas.map((name) => ({
  name,
  slug: getSlug(name),
}));
