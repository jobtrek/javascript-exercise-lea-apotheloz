/**
 * In JavaScript objects are really diffrent form Java or other object based languages.
 * The syntax to use it looks more like declaring structs, but the can also carry methods.
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects
 */

/**
 * @return {Object} you should return a new object containing two properties, first_name and last_name.
 * The values of the properties should be "Toto", "Tutu"
 */
export function crateUserObject() {
  // Write your code here
  return {
    first_name: "Toto",
    last_name: "Tutu"
  };
}

/**
 *
 * @param {{first_name: string, last_name:string}} object A user object
 * @return string a concatenation of the first and last name, separated with a space
 */
export function accessPropertiesInObjects(object) {
  // Write your code here
  return `${object.first_name} ${object.last_name}`;
}

/**
 *
 * @param {Object} object
 * @return {{keys: Array<string>, values: Array<string>}} A new object containing two keys (keys, values),
 * each key should contain respectively all original object keys mapped to uppercase,
 * and all original object values mapped to lower case
 */
export function iteratesThroughObjectValuesAndProperties(object) {
  // Write your code here
  return {
    keys: Object.keys(object).map(key => key.toUpperCase()),
    values: Object.values(object).map(value =>
      typeof value === 'string' ? value.toLowerCase() : String(value).toLowerCase()
    )
  }
}

/**
 * Return the name of the first younger and last older user in the array
 * @param {array<{name: string, age: number}>} users
 * @return {{younger: string, older: string}}
 */
export function retrieveMaximumMinimumUserAges(users) {
  // Write your code here
  if (!users || users.length === 0) {
    return { younger: '', older: '' }
  }

  let youngerUser = users[0]
  let olderUser = users[0]

  for (let i = 1; i < users.length; i++) {
    const user = users[i];
    if (user.age < youngerUser.age) {
      youngerUser = user
    }

    if (user.age >= olderUser.age) {
      olderUser = user
    }
  }
  return { younger: youngerUser.name, older: olderUser.name }
}

/**
 * In javascript, objects can be represented as string, this is JSON
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
 * @param {string} string
 * @return {Object} An object retried by parsing the string
 */
export function parseJavaScriptObjectNotation(string) {
  // Write your code here
  return JSON.parse(string)

}


/**
 * @param {Object} object
 * @return {string} An string representing the given object
 */
export function stringifyJavaScriptObjectNotation(object) {
  // Write your code here
  return JSON.stringify(object)
}