const getComapanyEmailSettings = async () => {
  const companyEmailSettings = {
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  };

  return companyEmailSettings;
};

module.exports = getComapanyEmailSettings;
