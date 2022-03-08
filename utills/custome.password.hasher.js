const bcrypt = require("bcrypt");

async function customePasswordHasher() {
  const salt = await bcrypt.genSalt(10);
}
