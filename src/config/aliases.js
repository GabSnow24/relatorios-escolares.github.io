const aliases = (prefix = "src") => ({
  "@components": `${prefix}/app/components`,
  "@hooks": `${prefix}/app/hooks`,
  "@routes": `${prefix}/app/routes`,
  "@assets": `${prefix}/assets`,
  "@config": `${prefix}/config`,
  "@features": `${prefix}/features`,
  "@styles": `${prefix}/styles`,
  "@tests": `${prefix}/tests`,
  "@utils": `${prefix}/utils`,
});

module.exports = aliases;
