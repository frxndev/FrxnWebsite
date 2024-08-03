import { ReloadIcon } from 'public/images/icons/realod'
import { useEffect, useState } from 'react'
import { toast, Toaster } from 'sonner'
import { IconClipboard } from './IconClipboard'

export const UUIDGenerator: React.FC = () => {
  const [uuid, setUuid] = useState('')
  const [copiado, setCopiado] = useState(false)
  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0
        const v = c === 'x' ? r : (r & 0x3) | 0x8

        return v.toString(16)
      }
    )
  }

  function handleGenerateUUID() {
    const newUUID = generateUUID()

    setUuid(newUUID)
  }

  const OnClipboardCopy = () => {
    if (uuid === '') {
      toast.error('No hay nada que copiar')
      return false
    }

    const promise = navigator.clipboard
      .writeText(uuid)
      .then(() => setCopiado(true))
      .catch(() => setCopiado(false))

    toast.promise(promise, {
      loading: 'Copiando...',
      success: 'Copiado al portapapeles',
      error: 'No se pudo copiar al portapapeles'
    })

    setTimeout(() => {
      setCopiado(false)
    }, 2000)
  }

  useEffect(() => {
    handleGenerateUUID()
  }, [])

  return (
    <div>
      <Toaster richColors />

      <section className='flex flex-col md:flex-row gap-4 w-full mt-12'>
        <div className='flex flex-row bg-white col-span-3 p-1.5 overflow-hidden border rounded-lg w-full'>
          <input
            className='px-4 py-2 w-full text-gray-700 bg-transparent placeholder-gray-500 outline-none border-none'
            type='text'
            disabled
            placeholder=''
            aria-label='UUID Generado'
            value={uuid}
          />

          <button
            className='px-4 py-4 bg-gray-100 rounded-md hover:bg-gray-200 focus:duration-[900ms] transition-all'
            onClick={OnClipboardCopy}
          >
            <IconClipboard className='w-5 h-5' isActive={copiado} />
          </button>
        </div>
        <button
          className='group inline-flex items-center justify-center gap-4 px-4 py-2.5 col-span-3 sm:sm:col-span-1 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-100 disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-slate-100'
          onClick={() => handleGenerateUUID()}
        >
          <ReloadIcon className='fill-white stroke-none group-disabled:fill-gray-400' />
          <span>Generar</span>
        </button>
      </section>
    </div>
  )
}
