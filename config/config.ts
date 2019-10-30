const env = process.env.NODE_ENV || "development";

// tslint:disable-next-line: no-var-requires
export default require(`./${env}.json`);
