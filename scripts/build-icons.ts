import fs from 'fs-extra'
import path from 'path'

const ICONS_DIR = path.join(process.cwd(), './svgs')
const COMPONENTS_DIR = path.join(process.cwd(), './src/icons')
// const INDEX_FILE = path.join(process.cwd(), './src/index.ts')

// 清空组件目录
fs.emptyDirSync(COMPONENTS_DIR)
const upperCammel = (file: string) => path.basename(file, '.svg').replace(/(^|-)(\w)/g, (_, __, $2) => $2.toLocaleUpperCase())

/**
 *  生成react组件
 */
const generateComponent = (svg: string, name: string) => {
  return `import { forwardRef } from 'react'
    import {IconProps} from '../../types/icon-props'
    export const ${name} = forwardRef<SVGSVGElement, IconProps>(({size = 24, ...restProps}, ref) => (${svg.replace(/\sclass=["'][^"']*["']/g, '').replace(/(width|height)=["'][^"']*["']/g, '').replace('>', ' width={size} height={size} {...restProps} ref={ref}>')}))
    ${name}.displayName = '${name}'
    `
}

// 获取所有分类文件夹
const categories = fs.readdirSync('./svgs').filter((file) => fs.statSync(path.join(ICONS_DIR, file)).isDirectory())

categories.forEach((category) => {
  // 创建分类组件目录
  const categoryComponentsDir = path.join(COMPONENTS_DIR, category)
  fs.ensureDirSync(categoryComponentsDir)

  // 获取分类下所有的svg文件
  const svgfiles = fs.readdirSync(path.join(ICONS_DIR, category)).filter((file) => file.endsWith('.svg'))
  svgfiles.forEach((svgfile) => {
    const svg = fs.readFileSync(path.join(ICONS_DIR, `./${category}/${svgfile}`), 'utf-8')
    // 转换成大驼峰
    const name = upperCammel(svgfile)
    const component = generateComponent(svg, name)
    const fileComponentName = path.join(categoryComponentsDir, `./${name}.tsx`)
    console.log('生成组件：', fileComponentName)
    // 写入文件
    fs.ensureFileSync(fileComponentName)
    fs.writeFileSync(fileComponentName, component, 'utf-8')
  })
})


// 遍历svg文件夹
// fs.readdirSync('./svgs').forEach((file) => {
//   const svg = fs.readFileSync(`./svgs/${file}`, 'utf-8')
//   // 转换成大驼峰
//   const name = upperCammel(file)
//   const component = generateComponent(svg, name)
//   // 写入文件
//   fs.ensureFileSync(`./src/icons/${name}.tsx`)
//   fs.writeFileSync(`./src/icons/${name}.tsx`, component, 'utf-8')
// })