import * as bcrypt from 'bcryptjs';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Zadajte heslo pre admina, ktoré chcete zahašovať: ', async (password) => {
  const hash = await bcrypt.hash(password, 10);
  console.log('\n--- Ulozite si toto do premennej v Netlify aj do lokalneho .env suboru ---');
  console.log(`ADMIN_PASSWORD_HASH="${hash}"`);
  console.log('--------------------------------------------------------------------------\n');
  rl.close();
});
