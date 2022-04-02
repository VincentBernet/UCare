const bcrypt = require('bcrypt');

export async function hashPassword(password: string) {
  const saltRounds = 12;
  const salt = await bcrypt.genSalt(saltRounds);

  const hashPassword = await bcrypt.hash(password, salt);

  return hashPassword;
}

export async function compareHash(
  sentPassword: string,
  hashedPassword: string,
) {
  const compare = await bcrypt.compare(sentPassword, hashedPassword);
  return compare;
}
