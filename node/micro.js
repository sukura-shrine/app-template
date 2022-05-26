import fs from 'fs'
import process from 'process'
import cp from 'child_process'
import { join } from 'path'
import inquirer from 'inquirer'


const getPkgNames = (path) => {
  const pkg = fs.readFileSync(join(path, 'package.json'), 'utf-8')
  const pkgJson = JSON.parse(pkg)
  let pkgNames = fs.readdirSync(join(path, 'packages'))
  if (pkgJson?.projectignore) {
    pkgNames = pkgNames.filter(name => !pkgJson.projectignore.includes(name))
  }
  return pkgNames
}

const configPath = process.cwd()
const pkgNames = getPkgNames(configPath)

inquirer
  .prompt([
    {
      type: 'list',
      name: 'theme',
      message: '选择要启动的应用',
      choices: pkgNames,
    },
  ])
  .then(({ theme }) => {
    cp.execSync('pnpm run start', { cwd: `${configPath}/packages/${theme}`, stdio: 'inherit' })
  })
