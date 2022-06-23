import leaderboardSelector from 'store/leaderboard/selectors';
import teamSelector from 'store/team/selectors';
import tournamentSelector from 'store/tournament/selectors';

const selectors = {
	// Leaderboard
	leaderboard: leaderboardSelector,
  team: teamSelector,
  tournament: tournamentSelector
};

export { selectors };