export interface LeaderboardEntry {
  name: string;
  score: number;
}

const leaderboard: LeaderboardEntry[] = [
  {name: 'Alice', score: 18},
  {name: 'Bob', score: 17},
  {name: 'Charlie', score: 16},
  {name: 'David', score: 15},
  {name: 'Eve', score: 14},
  {name: 'Frank', score: 13},
  {name: 'Grace', score: 12},
  {name: 'Heidi', score: 11},
  {name: 'Isaac', score: 10},
  {name: 'Judy', score: 9},
  {name: 'Kevin', score: 8},
  {name: 'Laura', score: 7},
  {name: 'Michael', score: 6},
  {name: 'Nancy', score: 5},
  {name: 'Oliver', score: 4},
  {name: 'Pam', score: 3},
  {name: 'Quinn', score: 2},
  {name: 'Rachel', score: 1},
  {name: 'Steve', score: 0},
].sort((a, b) => b.score - a.score);

export default leaderboard;
