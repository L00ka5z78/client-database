const {ValidationError} = require("../utils/error")

class ClientRecord {
  constructor (obj) {
    const { id, name, mail, nextContactAt, notes } = obj;

    if (!id || typeof id !== 'string') {
      throw new ValidationError('ID cant be empty')
    }

    if (!name || typeof name !== 'string' || name.length < 3) {
      throw new ValidationError('Name must be a text at least 3 signs long!')
    }

    if (!mail || typeof mail !== 'string' || mail.indexOf('@') === -1) {
      throw new ValidationError('Incorrect E-mail!')
    }

    if (typeof nextContactAt !== 'string') {
      throw new ValidationError('Next contact date has to be text!')
    }

    if (typeof notes !== 'string') {
      throw new ValidationError('Notes has to be text!')
    }

    this.id = id;
    this.name = name;
    this.mail = mail;
    this.nextContactAt = nextContactAt;
    this.notes = notes;
  }
}

module.exports = {
  ClientRecord,
}