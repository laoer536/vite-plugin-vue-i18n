export function generateInternationalizedFiles(fileName: string, matchStr: string[], supportLanguages: string[]) {
  const res = {}
  matchStr.forEach((str, index) => {
    const key = fileName.split('/').slice(-1)[0].replace('.vue', '')
    console.log(key)
    res[key] = { ...res[key], [index]: str }
  })
  console.log('export default ' + JSON.stringify(res))
}
