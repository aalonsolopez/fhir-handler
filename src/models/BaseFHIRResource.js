export default class BaseFHIRResource {
  constructor (resourceType) {
    this.resourceType = resourceType
  }

  getResourceType () {
    return this.resourceType
  }
}