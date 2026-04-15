import * as bcrypt from 'bcryptjs';

async function generate() {
  const hash = await bcrypt.hash("spektrum2026", 10);
  console.log("HASH:", hash);
}
generate();
