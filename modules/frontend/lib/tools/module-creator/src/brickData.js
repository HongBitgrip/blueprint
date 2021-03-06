"use strict";

/**
 * returns content for package.json
 * @param  {string} brickName the name of the brick
 * @return {string}
 */
const initPackageJson = (brickName) => {
  const content = {
    name: `@coremedia/brick-${brickName}`,
    version: "1.0.0",
    private: true,
    scripts: {
      prettier: "prettier \"**/*\" --write"
    },
    devDependencies: {
      prettier: "1.11.1"
    },
    __comment__dependencies__: {
      __comment__:
      "List of dependencies for the commented out example code. In order to add a dependency, move the entry to 'dependencies'",
      "@coremedia/js-logger": "^1.0.0",
      jquery: "3.2.1",
    },
    dependencies: {
    },
    main: "src/js/index.js",
    coremedia: {
      type: "brick",
      init: "src/js/init.js"
    },
  };
  return JSON.stringify(content, null, 2);
};

/**
 * returns content for .prettierignore
 * @return {string}
 */
const initBrickPrettierignore = () => `/*
!/src
/src/__tests__/__snapshots__/
!/bin
`;

/**
 * returns content for index.js
 * @param  {string} brickName
 * @return {string}
 */
const initBrickIndexJs = brickName => `import "./${brickName}.js";
`;

/**
 * returns content for <brickName>.js
 * @return {string}
 */
const initBrickJs = () => `//import * as logger from "@coremedia/js-logger";

/**
 * Displays a simple text in the console.
 *
 * @function consolePrint
 * @param {String} $text - The text to be displayed in the console.
 */
export function consolePrint($text) {
//  logger.log($text);
}
`;

/**
 * returns content for init.js
 * @param  {string} brickName
 * @return {string}
 */
const initBrickInitJs = brickName => `//import $ from "jquery";
import * as ${brickName} from "./${brickName}";
// --- JQUERY DOCUMENT READY -------------------------------------------------------------------------------------------
//$(function () {
//  ${brickName}.consolePrint("Brick ${brickName} is used.");
//});
`;

/**
 * returns content for _partials.scss
 * @return {string}
 */
const initBrickPartialsScss = () => `// make sure to import partials sass files in _partials.scss
// the smart-import ensures, that all sass partials from depending bricks are loaded
@import "?smart-import-partials";
@import "partials/custom-text";

`;

/**
 * returns content for _variables.scss
 * @return {string}
 */
const initBrickVariablesScss = () => `// make sure to import variables sass files in _variables.scss
@import "variables/custom-text";
// the smart-import ensures, that all sass variables from depending bricks are loaded 
@import "?smart-import-variables";
`;

/**
 * returns content for partials/_custom-text.scss
 * @return {string}
 */
const initBrickCustomTextPartialsScss = () => `// css rules in partials may use variables, defined in the sass/variables folder
.custom-text {
  color: $custom-text-color;
}
`;

/**
 * returns content for variables/_custom-text.scss
 * @return {string}
 */
const initBrickCustomTextVariablesScss = () => `// brick scss variables to be used in partials files
// use the !default flag to make this variable configurable in themes
$custom-text-color: #FF0000 !default;
`;

/**
 * returns content for com.coremedia.blueprint.common.contentbeans/Page._body.ftl
 * @return {string}
 */
const initBrickPageBodyFtl = () => `<#-- Use bp.getMessage to display a localized hello world message --> 
<div>
  <span class="custom-text">\${bp.getMessage('welcomeText')}</span>
</div>
`;

/**
 * returns content for BrickName_en.properties
 * @return {string}
 */
const initBrickEnProperties = () => `welcomeText=Hello World!`;

/**
 * returns content for BrickName_de.properties
 * @return {string}
 */
const initBrickDeProperties = () => `welcomeText=Hallo Welt!`;

module.exports = {
  initPackageJson,
  initBrickIndexJs,
  initBrickInitJs,
  initBrickJs,
  initBrickPartialsScss,
  initBrickVariablesScss,
  initBrickCustomTextPartialsScss,
  initBrickCustomTextVariablesScss,
  initBrickPrettierignore,
  initBrickPageBodyFtl,
  initBrickDeProperties,
  initBrickEnProperties
};
