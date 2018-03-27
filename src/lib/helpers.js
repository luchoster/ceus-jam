import * as R from 'ramda'
import Marked from 'marked'

const notEmpty = R.complement(R.isEmpty)

const notNil = R.complement(R.isNil)

const notNilOrEmpty = R.complement(R.either(R.isNil, R.isEmpty))

const notEquals = R.curry((a, b) => R.complement(R.equals(a))(b))

const nilOrEmpty = R.either(R.isNil, R.isEmpty)

const mapIndexed = R.addIndex(R.map)

const createMarkup = content => {
  return { __html: content }
}

const rawMarkup = data => {
  let rawMarkup = Marked(data, { sanitize: true })
  return { __html: rawMarkup }
}

export {
  createMarkup,
  notEmpty,
  notNil,
  notEquals,
  nilOrEmpty,
  notNilOrEmpty,
  mapIndexed,
  rawMarkup,
}
