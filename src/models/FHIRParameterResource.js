/**
 * FHIR Parameter Resource
 * @class Parameter
 */

export default class Parameter extends BaseFHIRResource {
  /**
   * Create a Parameter
   * @param {string} resourceType - The resource type
   * @param {string} parameter - The list of parameters
   */
  constructor () {
    super('Parameter')
    this.parameter = []
  }

  /**
   * Add a parameter to the parameter array
   * @param {Parameter} parameter 
   */
  addParameter (parameter) {
    this.parameter.push(parameter)
  }

  /**
   * Get the parameter array
   * @returns {Parameter[]}
  */
  getParameters () {
    return this.parameter
  }
}