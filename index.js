import intrinsic from './lib/intrinsic.js';
import conditions from './lib/conditions.js';
import rules from './lib/rules.js';
import pseudo from './lib/pseudo.js';
import merge from './lib/merge.js';

/**
 * The cloudfriend module
 *
 * @example
 * import cloudfriend from 'cloudfriend';
 */
const cloudfriend = { merge };

Object.keys(intrinsic).forEach((key) => {
    cloudfriend[key] = intrinsic[key];
});

Object.keys(conditions).forEach((key) => {
    cloudfriend[key] = conditions[key];
});

Object.keys(rules).forEach((key) => {
    cloudfriend[key] = rules[key];
});

Object.keys(pseudo).forEach((key) => {
    cloudfriend[key] = pseudo[key];
});

export default cloudfriend;
