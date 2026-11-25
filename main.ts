import { mkdirSync, writeFileSync } from "node:fs";

// Monday Morning Punchlines — revised: cut the draft from 218 chars to
// the punchline alone. The setup was doing no work; the unionized alarms
// and the grieving weekend carry the whole joke. Deterministic: no
// network, no clock, no randomness — the same bytes every run.
const joke =
  "My Monday alarms unionized: all five refuse to wake me until my weekend has finished grieving.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
