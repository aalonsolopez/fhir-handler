export default class Parameter extends BaseFHIRResource {
  constructor () {
    super('Parameter')
    this.parameter = []
  }

  addParameter (parameter) {
    this.parameter.push(parameter)
  }

  getParameter () {
    return this.parameter
  }
}