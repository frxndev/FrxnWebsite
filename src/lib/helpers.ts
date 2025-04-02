export function isNotEmpty(value: string | null | undefined): boolean {
  return !!value && value.trim() !== ''
}
