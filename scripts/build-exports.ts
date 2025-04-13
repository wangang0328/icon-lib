import path from 'path'
import fs from 'fs-extra'

const COMPONENTS_DIR = path.join(process.cwd(), './src/icons')
const INDEX_FILE = path.join(process.cwd(), './src/index.ts')
const CATEGORY_MAP_FIle = path.join(process.cwd(), './src/docs/categoryMap.ts')

// 遍历svg文件夹
// 获取所有分类文件夹
const categories = fs.readdirSync('./svgs').filter((file) => fs.statSync(path.join(COMPONENTS_DIR, file)).isDirectory())

const categoryMap = {}
let exportsStr = ''

categories.forEach((category) => {
  const categoryComponentsDir = path.join(COMPONENTS_DIR, category)
  const componentNames = fs.readdirSync(categoryComponentsDir)
  categoryMap[category] = []
  componentNames.forEach((componentName) => {
    const name = path.basename(componentName, '.tsx')
    categoryMap[category].push(name)
    exportsStr += `export {${name}} from './icons/${category}/${name}'\n`
  })
})

// const exportsStr = files.map((file) => {
//   const name = path.basename(file, '.tsx')
//   return `export {${name}} from './icons/${name}'`
// }).join('\n')
// console.log(exportsStr)
// const exportsEntryPath = path.join(process.cwd(), './src/index.ts')
fs.ensureFileSync(INDEX_FILE)
fs.writeFileSync(INDEX_FILE, exportsStr, 'utf-8')
fs.ensureFileSync(CATEGORY_MAP_FIle)
fs.writeFileSync(CATEGORY_MAP_FIle, `export default ${JSON.stringify(categoryMap, null, 2)}`, 'utf-8')

// // 遍历svg文件夹
// // 获取所有分类文件夹
// const categories = fs.readdirSync('./svgs').filter((file) => fs.statSync(path.join(ICONS_DIR, file)).isDirectory())

// categories.forEach((category) => {
//   // 创建分类组件目录
//   const categoryComponentsDir = path.join(COMPONENTS_DIR, category)
//   fs.ensureDirSync(categoryComponentsDir)

//   // 获取分类下所有的svg文件
//   const svgfiles = fs.readdirSync(path.join(ICONS_DIR, category)).filter((file) => file.endsWith('.svg'))
//   svgfiles.forEach((svgfile) => {
//     const svg = fs.readFileSync(path.join(ICONS_DIR, `./${category}/${svgfile}`), 'utf-8')
//     // 转换成大驼峰
//     const name = upperCammel(svgfile)
//     const component = generateComponent(svg, name)
//     const fileComponentName = path.join(categoryComponentsDir, `./${name}.tsx`)
//     console.log('生成组件：', fileComponentName)
//     // 写入文件
//     fs.ensureFileSync(fileComponentName)
//     fs.writeFileSync(fileComponentName, component, 'utf-8')
//   })
// })

