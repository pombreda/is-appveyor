/*!
 * is-appveyor | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-appveyor
*/
module.exports = 'CI' in process.env && 'APPVEYOR' in process.env;
