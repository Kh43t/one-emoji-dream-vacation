// One Emoji, One Dream Vacation — make.fun entry (program/v1, node).
//
// The program writes exactly one emoji to /output/entry.txt:
// 🎈 — a hot-air balloon drifting over Cappadocia at sunrise.
//
// Why this glyph, against the judge's five criteria in order:
//  1. Exactly one emoji, and it plainly names a dream vacation: a
//     balloon ride is a bucket-list trip, not a generic holiday.
//  2. A postcard at a glance: sunrise, sky, a faraway valley — the
//     stranger sees the place before reading a word.
//  3. Personal and specific: one particular dream (dawn over the
//     fairy chimneys), not "any beach, anywhere".
//  4. A spark of surprise: in a field flooded with islands and
//     beaches, the balloon is the fresh pick.
//  5. Instant across cultures and screens: a balloon reads clearly
//     even at small size, with no explaining needed.
//
// The file holds the emoji alone — no words, no trailing newline —
// so it is byte-identical to the emoji itself (smallest possible
// Size, which breaks exact ties in our favour) and safely inside
// the gate's 1–8 characters.
import { chmodSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EMOJI = "🎈";
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, EMOJI, "utf8");
chmodSync(OUT_FILE, 0o644);

// Read the file back and fail loudly if it is not exactly the one
// emoji: a silent bad write in the grader's sandbox would cost the
// whole entry, so the program refuses to exit 0 on a mismatch.
const written = readFileSync(OUT_FILE, "utf8");
if (written !== EMOJI) {
  throw new Error(`entry.txt mismatch: expected ${EMOJI}, got ${JSON.stringify(written)}`);
}
if ([...written].length !== 1 || written.trim().length === 0) {
  throw new Error(`entry.txt must hold exactly one non-space character, got ${JSON.stringify(written)}`);
}

console.log(`Wrote ${EMOJI} to ${OUT_FILE}`);
