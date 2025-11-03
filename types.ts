
export interface Team {
  name: string;
  logoUrl: string;
}

export interface Prediction {
  id: number;
  date: string;
  league: string;
  homeTeam: Team;
  awayTeam: Team;
  predictionTitle: string;
  predictionDetail: string;
  isHot: boolean;
  bonus: string;
}
