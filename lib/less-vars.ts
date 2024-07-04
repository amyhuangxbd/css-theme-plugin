const fs = require('fs');
const less = require('less');

/**
 * Parses variables from a Less file and converts them into a JavaScript object.
 * @param {string} filePath - The path to the Less file.
 * @returns {Promise<Object>} - A promise that resolves to an object containing the variables.
 */
async function parseLessVariables(filePath: string) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const all = await less.parse(fileContent);
    const { rules } = all;

    const variables: Record<string, any> = {};

    rules?.forEach((rule: any) => {
      variables[rule.name.slice(1)] = rule.value.toCSS();
    });

    return variables;
  } catch (error) {
    console.error('Error parsing Less file:', error);
    throw error;
  }
}

export default parseLessVariables;
