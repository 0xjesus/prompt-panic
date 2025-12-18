import { createPool } from '@vercel/postgres';

const pool = createPool({
  connectionString: process.env.DATABASE_URL || process.env.POSTGRES_URL
});

const sql = pool.sql.bind(pool);

// Initialize database tables
export async function initDB() {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS scores (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id),
      username VARCHAR(50) NOT NULL,
      category_index INTEGER NOT NULL,
      category_name VARCHAR(100) NOT NULL,
      score INTEGER NOT NULL,
      max_combo INTEGER DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  // Create indexes for faster queries
  await sql`
    CREATE INDEX IF NOT EXISTS idx_scores_score ON scores(score DESC)
  `;
  await sql`
    CREATE INDEX IF NOT EXISTS idx_scores_category ON scores(category_index)
  `;
}

// Create or get user
export async function getOrCreateUser(username: string) {
  // Try to get existing user
  const existing = await sql`
    SELECT * FROM users WHERE username = ${username}
  `;

  if (existing.rows.length > 0) {
    return existing.rows[0];
  }

  // Create new user
  const result = await sql`
    INSERT INTO users (username) VALUES (${username})
    RETURNING *
  `;

  return result.rows[0];
}

// Submit a score
export async function submitScore(
  username: string,
  categoryIndex: number,
  categoryName: string,
  score: number,
  maxCombo: number
) {
  const user = await getOrCreateUser(username);

  const result = await sql`
    INSERT INTO scores (user_id, username, category_index, category_name, score, max_combo)
    VALUES (${user.id}, ${username}, ${categoryIndex}, ${categoryName}, ${score}, ${maxCombo})
    RETURNING *
  `;

  return result.rows[0];
}

// Get global leaderboard
export async function getLeaderboard(limit: number = 10) {
  const result = await sql`
    SELECT username, score, category_name, max_combo, created_at
    FROM scores
    ORDER BY score DESC
    LIMIT ${limit}
  `;

  return result.rows;
}

// Get leaderboard by category
export async function getLeaderboardByCategory(categoryIndex: number, limit: number = 10) {
  const result = await sql`
    SELECT username, score, category_name, max_combo, created_at
    FROM scores
    WHERE category_index = ${categoryIndex}
    ORDER BY score DESC
    LIMIT ${limit}
  `;

  return result.rows;
}

// Get user's best scores
export async function getUserBestScores(username: string) {
  const result = await sql`
    SELECT category_index, category_name, MAX(score) as best_score, MAX(max_combo) as best_combo
    FROM scores
    WHERE username = ${username}
    GROUP BY category_index, category_name
    ORDER BY best_score DESC
  `;

  return result.rows;
}

// Get user stats
export async function getUserStats(username: string) {
  const result = await sql`
    SELECT
      COUNT(*) as total_games,
      MAX(score) as best_score,
      MAX(max_combo) as best_combo,
      SUM(score) as total_score
    FROM scores
    WHERE username = ${username}
  `;

  return result.rows[0];
}
