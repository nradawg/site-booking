import config from "../user_config.json";

// Every word and color on the site comes from user_config.json.
export default config;

export const telHref = `tel:${config.phone.replace(/[^\d+]/g, "")}`;
export const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(config.address)}&output=embed`;
