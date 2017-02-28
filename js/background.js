const orbitRegex = /^https?:\/\/(beta-)?crm\.mayden\.co\.uk/
const oldOrbitRegex = /^https?:\/\/crm\.mayden\.co\.uk/
const prop = key => xs => xs[key]
const join = glue => arr => arr.join(glue)
const map = f => x => x.map(f)
const compose = (f, g) => x => f(g(x))
const rand = num => Math.floor(Math.random() * num)
const random = xs => () => prop(Math.floor(Math.random() * xs.length))(xs)
const oneOf = xs => random(xs)()

const onBrowserActionClick = window.chrome.browserAction.onClicked

const alert = x => window.alert(x)

const collective = f => (... xs) => f(xs)
const alertOneOf = collective(compose(alert, oneOf))

onBrowserActionClick.addListener(({ url, id }) => {
  if (!orbitRegex.test(url)) {
    return alertOneOf(
      'Hey!\n\nNo!\n\nOnly in Orbit.',
      'Louis says "Only in Orbit"\n\n*Shows belly button*',
      'COOOOOOOMEEEEE OOOOOOOOONNNUHHH!\n\nThis only works in ooooooorrrrrbituhhhhhh!'
    )
  }

  const action = oldOrbitRegex.test(url) ? { text: 'find-stories' } : { text: 'v3:find-stories' }
  window.chrome.tabs.sendMessage(id, action)
})
