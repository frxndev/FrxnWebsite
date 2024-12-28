function base64ToBlob(base64: string, mimeType: string): Blob {
  const byteCharacters = atob(base64)
  const byteNumbers = Array.from(byteCharacters, (char) => char.charCodeAt(0))
  const byteArray = new Uint8Array(byteNumbers)
  return new Blob([byteArray], { type: mimeType })
}

function isValidBase64(base64: string, expectedMimeType: string): boolean {
  const base64Regex =
    /^(?:[A-Za-z0-9+/]{4})*?(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/

  if (!base64Regex.test(base64) || base64.length % 4 !== 0) return false

  try {
    const decodedData = atob(base64)
    const uint8Array = new Uint8Array(
      Array.from(decodedData).map((char) => char.charCodeAt(0))
    )

    const blob = new Blob([uint8Array])
    const detectedMimeType = blob.type

    return detectedMimeType === expectedMimeType
  } catch (error) {
    return false
  }
}

export { base64ToBlob, isValidBase64 }
