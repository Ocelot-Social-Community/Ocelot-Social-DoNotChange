import fs from 'fs'
import path from 'path'
import minimatch from 'minimatch'

let oEmbedProvidersFile = fs.readFileSync(
  path.join(__dirname, '../../../../public/providers.json'),
  'utf8',
)

// some providers allow a format parameter
// we need JSON
oEmbedProvidersFile = oEmbedProvidersFile.replace(/\{format\}/g, 'json')
const oEmbedProviders = JSON.parse(oEmbedProvidersFile)

export default function (embedUrl) {
  console.log("---------4  findProvider.js >  ",embedUrl)
  
  for (const provider of oEmbedProviders) {
    for (const endpoint of provider.endpoints) {
      const { schemes = [], url } = endpoint
      if (schemes.some((scheme) => minimatch(embedUrl, scheme))) return url
    }
    const { hostname } = new URL(embedUrl)
    if (provider.provider_url.includes(hostname)) {
      const {
        endpoints: [{ url }],
      } = provider
      console.log("--------- 4.1 Find Provider  RETURN URL >  ", url)
      return url
    }
  }
  console.log("--------- 4.2 Find Provider  RETURN NULL>  ")

  
  return null
}
