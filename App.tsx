import React from 'react';

// ==============================================================================
// TYPES (from types.ts)
// ==============================================================================
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

// ==============================================================================
// ICONS (from components/icons.tsx)
// ==============================================================================
const FlameIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.478 12.036c.64-1.28.972-2.69.972-4.148 0-4.54-3.23-8.25-7.2-8.25s-7.2 3.71-7.2 8.25c0 1.458.333 2.868.972 4.148-1.57.25-2.946 1.39-3.444 2.88-1.13 3.39.06 7.084 3.09 9.084.75.5 1.76-.25 1.5-1.125-.26-1.125-.11-2.25.14-3.375.25-1.125.75-2.125 1.5-3 .75-.875 1.62-1.5 2.61-1.875.99-.375 2.12-.375 3.24 0 .99.375 1.86.875 2.61 1.875.75.875 1.25 1.875 1.5 3 .25 1.125.4 2.25.14 3.375-.26.875.75 1.625 1.5 1.125 3.03-2 4.22-5.694 3.09-9.084-.498-1.49-1.874-2.63-3.444-2.88z" />
  </svg>
);


// ==============================================================================
// PREDICTION CARD COMPONENT (from components/PredictionCard.tsx)
// ==============================================================================
interface PredictionCardProps {
  prediction: Prediction;
  affiliateLink: string;
  promoterLogoUrl: string;
}

const PredictionCard: React.FC<PredictionCardProps> = ({ prediction, affiliateLink, promoterLogoUrl }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-lg overflow-hidden relative transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-cyan-500/20">
      {prediction.isHot && (
        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 flex items-center gap-1 rounded-bl-lg z-10">
          <FlameIcon className="w-3 h-3" />
          HOT
        </div>
      )}
      
      <div className="p-5">
        <div className="text-center text-sm text-slate-400 mb-4">
          <p>{prediction.date}</p>
          <p>{prediction.league}</p>
        </div>

        <div className="flex justify-around items-center mb-5 text-center">
          <div className="flex flex-col items-center gap-2 w-1/3">
            <img src={prediction.homeTeam.logoUrl} alt={prediction.homeTeam.name} className="h-12 w-12 object-contain" />
            <span className="font-semibold text-base">{prediction.homeTeam.name}</span>
          </div>
          <div className="text-slate-500 font-bold text-lg">-</div>
          <div className="flex flex-col items-center gap-2 w-1/3">
            <img src={prediction.awayTeam.logoUrl} alt={prediction.awayTeam.name} className="h-12 w-12 object-contain" />
            <span className="font-semibold text-base">{prediction.awayTeam.name}</span>
          </div>
        </div>
        
        <div className="bg-slate-700/50 rounded-lg p-4 text-center mb-5">
          <p className="text-sm text-slate-300">{prediction.predictionTitle}</p>
          <p className="font-bold text-lg text-cyan-400 mt-1">{prediction.predictionDetail}</p>
          <a href="#" className="text-cyan-500 hover:text-cyan-300 text-sm mt-2 inline-block">
            En détails &gt;
          </a>
        </div>
        
        <div className="border-t border-slate-700 pt-4">
           <div className="flex items-center justify-center gap-4">
              <div className="text-right">
                <p className="text-xs text-slate-400">Bonus :</p>
                <p className="font-bold text-amber-400">{prediction.bonus}</p>
              </div>
              <a
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold py-3 px-4 rounded-full transition-colors duration-300 shadow-lg shadow-amber-500/20"
              >
                <span>PARIEZ MAINTENANT !</span>
                <img src={promoterLogoUrl} alt="Promoter Logo" className="h-5 object-contain" />
              </a>
           </div>
           
           <div className="flex items-center justify-center gap-2 text-slate-400 text-xs mt-3">
             <span className="w-3 h-3 bg-red-500 rounded-full border-2 border-slate-800"></span>
             <span>Offre Exclusive</span>
           </div>
        </div>

      </div>
    </div>
  );
};


// ==============================================================================
// USER CONFIGURATION AREA
// Change these values to set your affiliate link and promoter logo.
// ==============================================================================
const AFFILIATE_LINK = "https://your-affiliate-link.com";
const PROMOTER_LOGO_URL = "https://placehold.co/100x25/FFFFFF/000000/png?text=YOUR+LOGO";
// ==============================================================================

const predictionsData: Prediction[] = [
  {
    id: 1,
    date: "1 nov. 2025, 18:30",
    league: "Angleterre - Premier League",
    homeTeam: { name: "Tottenham", logoUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_mKE98Dnohrcea0T_Kw_96x96.png" },
    awayTeam: { name: "Chelsea", logoUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB60sqU8dw_96x96.png" },
    predictionTitle: "Pronostic Tottenham Chelsea",
    predictionDetail: "Plus de 2.5 buts",
    isHot: true,
    bonus: "2600MAD",
  },
  {
    id: 2,
    date: "1 nov. 2025, 18:30",
    league: "Allemagne - Bundesliga",
    homeTeam: { name: "Bayern Munich", logoUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/0iGKbWE9V5T1Pc7OFMKP_A_96x96.png" },
    awayTeam: { name: "Bayer Leverkusen", logoUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/j8S65fKda2adsc2N9i5n1A_96x96.png" },
    predictionTitle: "Pronostic Bayern Munich Bayer Leverkusen",
    predictionDetail: "Victoire Bayern Munich et moins de 4,5 buts",
    isHot: true,
    bonus: "2600MAD",
  },
  {
    id: 3,
    date: "1 nov. 2025, 20:00",
    league: "France - Ligue 2",
    homeTeam: { name: "Red Star", logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Red_Star_F.C._logo.svg/1200px-Red_Star_F.C._logo.svg.png" },
    awayTeam: { name: "Saint Étienne", logoUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/1GgeE2YqTKOlEoC52C6fZA_96x96.png" },
    predictionTitle: "Pronostic Red Star Saint Étienne",
    predictionDetail: "Saint Étienne gagne",
    isHot: true,
    bonus: "2600MAD",
  },
  {
    id: 4,
    date: "1 nov. 2025, 21:00",
    league: "Angleterre - Premier League",
    homeTeam: { name: "Liverpool", logoUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/0iH1GEABl1l-p2I3u0kMJA_96x96.png" },
    awayTeam: { name: "Aston Villa", logoUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/EGw124_LSLSOd20KxIE2yA_96x96.png" },
    predictionTitle: "Pronostic Liverpool Aston Villa",
    predictionDetail: "Nul ou Aston Villa",
    isHot: true,
    bonus: "2600MAD",
  },
  {
    id: 5,
    date: "1 nov. 2025, 18:30",
    league: "Arabie Saoudite - Saudi Pro League",
    homeTeam: { name: "Al Nassr", logoUrl: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/9d/Logo_Al-Nassr.png/500px-Logo_Al-Nassr.png?20241215171542" },
    awayTeam: { name: "Al Fayha FC", logoUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/5i5c5iV0-3ZDN5f0i8SKsQ_96x96.png" },
    predictionTitle: "Pronostic Al Nassr Al Fayha FC",
    predictionDetail: "Al-Nassr gagne par au moins 2 buts d'écart",
    isHot: false,
    bonus: "2600MAD",
  },
  {
    id: 6,
    date: "1 nov. 2025, 18:30",
    league: "Espagne - Liga",
    homeTeam: { name: "Real Sociedad", logoUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/a4nwPS1T6BM2d2fsY24CRA_96x96.png" },
    awayTeam: { name: "Athletic Bilbao", logoUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/wQk41o7J424i64i6sCnsaQ_96x96.png" },
    predictionTitle: "Pronostic Real Sociedad Athletic Bilbao",
    predictionDetail: "Nul ou Athletic Bilbao",
    isHot: false,
    bonus: "2600MAD",
  },
];


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Pronostics Football d'aujourd'hui
          </h1>
          <div className="w-32 h-1 bg-cyan-500 mx-auto mt-3 rounded"></div>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {predictionsData.map(prediction => (
              <PredictionCard
                key={prediction.id}
                prediction={prediction}
                affiliateLink={AFFILIATE_LINK}
                promoterLogoUrl={PROMOTER_LOGO_URL}
              />
            ))}
          </div>
        </main>
        
        <footer className="text-center mt-12 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Football Predictions. All rights reserved.</p>
          <p className="mt-1">Please bet responsibly.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;