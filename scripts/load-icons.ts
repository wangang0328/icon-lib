import fs from 'fs-extra'
import path from 'path';

// 将svg资源写入到磁盘文件中
const writeSvgToDisk = (svgList: Array<{ id: string; content: string; filename: string}>) => {
  const svgPath = path.join(process.cwd(), './svgs/remote')
  fs.ensureDir(svgPath)
  svgList.forEach(({ content, filename }) => {
    fs.writeFileSync(path.join(svgPath, filename), content, 'utf-8')
  })
}

// 提取所有的symbol标签数据内容，将symbol替换成svg，并将id属性提取出来当作文件名
const parseSymbolDataToSvgs = (input: string) => {
  // 匹配所有symbol标签及其内容
  const regex = /<symbol\s+([^>]+)>([\s\S]*?)<\/symbol>/g;

  // 提取并转换每个symbol
  const results: Array<{ id: string; content: string; filename: string}> = []
  let match

  while ((match = regex.exec(input)) !== null) {
    // const fullMatch = match[0];
    const attributes = match[1]
    const content = match[2]
    
    // 提取id作为文件名
    const idMatch = attributes.match(/id="([^"]+)"/)
    const id = idMatch ? idMatch[1] : 'unnamed'
    
    // 将symbol转换为svg
    const svgContent = `<svg ${attributes.replace('symbol', 'svg')}>
      ${content}
      </svg>`
    
    results.push({
      id,
      filename: `${id}.svg`,
      content: svgContent
    });
  }
  return results
}


// 从加载的js字符串中提取svg资源
const extractSvg = (sourceList: string[]) => {
  const svgContentList = sourceList.map(source => {
    const svgReg = /<svg.*?>([\s\S]*?)<\/svg>/g
    const svgMatch = svgReg.exec(source)
    if (svgMatch) {
      return svgMatch[1]
    }
    return ''
  })
  return svgContentList
}

// 获取svg资源
const fetchSource = async (urls: string[]) => {
  const res = await Promise.all(urls.map(url => fetch(url)))
  const sources = await Promise.all(res.map(r => r.text()))
  return sources
}

const start = async (urls: string[]) => {
  const sources = await fetchSource(urls)
  const svgContents = extractSvg(sources)
  const svgList = parseSymbolDataToSvgs(svgContents.join(''))
  writeSvgToDisk(svgList)
  console.log(svgList)
  return svgList
}

start(['https://cdn2.codesign.qq.com/icons/zpZvn7od25nLkZk/latest/iconfont.js'])
