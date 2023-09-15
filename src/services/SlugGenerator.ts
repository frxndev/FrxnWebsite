export function crearSlug (texto: string) {
  // Reemplaza los caracteres especiales y espacios con guiones bajos
  const slug = texto
    .toLowerCase()
    .normalize('NFD') // Normaliza caracteres a sus equivalentes sin acentos
    .replace(/[\u0300-\u036f]/g, '') // Elimina caracteres diacríticos
    .replace(/[^\w\s-]/g, '') // Elimina caracteres especiales excepto guiones bajos y espacios
    .trim() // Elimina espacios al inicio y al final
    .replace(/\s+/g, '-') // Reemplaza espacios con guiones bajos

  return slug
}
