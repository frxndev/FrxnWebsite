interface TwitterUrlParams {
  text: string
  url: string
  via?: string
  lang?: string
  originalReferer?: string
  image?: string
}

export function generateShareUrl(params: TwitterUrlParams): string {
  const {
    text,
    url,
    via = 'frxndev',
    lang = 'es',
    originalReferer,
    image
  } = params

  const removedParams = Object.entries({
    text,
    url,
    via,
    lang,
    original_referer: originalReferer || url,
    image
  }).reduce<Record<string, string>>((acc, [key, value]) => {
    if (value !== undefined) acc[key] = value
    return acc
  }, {})

  const queryParams = new URLSearchParams(removedParams).toString()

  return `https://x.com/intent/tweet?${queryParams}`
}
