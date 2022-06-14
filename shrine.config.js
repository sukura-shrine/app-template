import devServer from '@hakushin/plugin-dev-server'
import devConsole from '@hakushin/plugin-dev-console'

export default {
  type: 'pc',
  port: 3999,
  plugins: [
    devServer(),
    devConsole(),
  ],
}
