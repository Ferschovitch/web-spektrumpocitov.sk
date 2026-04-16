import * as dotenv from 'dotenv';
import * as bcrypt from 'bcryptjs';

dotenv.config({ path: '.env.local' });

console.log("USER:", process.env.ADMIN_USER);
console.log("HASH:", process.env.ADMIN_PASSWORD_HASH);

async function test() {
    const isValid = await bcrypt.compare("mam.najlepsiu.stranku36999", process.env.ADMIN_PASSWORD_HASH || "");
    console.log("IS VALID:", isValid);
}
test();
