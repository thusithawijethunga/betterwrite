import editor from './editor'
import generator from './generator'
import toast from './toast'
import landing from './landing'
import about from './about'
import seo from './seo'
import dashboard from './dashboard'
import questions from './questions'
import plans from './plans'
import logger from './plugin/logger'
import sentry from './plugin/sentry'

export default {
  editor,
  generator,
  toast,
  landing,
  about,
  seo,
  dashboard,
  plans,
  questions,
  plugin: {
    logger,
    sentry,
  },
  generics: {
    input: {
      image: 'Inserir Imagem',
    },
  },
}
