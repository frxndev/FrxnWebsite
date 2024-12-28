import { crearSlug } from '@services/SlugGenerator'
import React, { Fragment, useState, type FormEvent } from 'react'

export const SlugGenerator: React.FC = () => {
  const [slug, setSlug] = useState('')
  const [copiado, setCopiado] = useState(false)

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    e.preventDefault()
    const { titulo } = e.target as HTMLFormElement

    if (titulo.value.trim() === '') {
      setSlug('')
      return false
    }

    const slug = crearSlug(titulo.value)
    setSlug(slug)
  }

  const OnClipboardCopy = () => {
    if (slug === '') {
      return false
    }

    const promise = navigator.clipboard
      .writeText(slug)
      .then(() => setCopiado(true))
      .catch(() => setCopiado(false))

    setTimeout(() => {
      setCopiado(false)
    }, 2000)
  }

  return (
    <Fragment>
      <section className='max-w-4xl p-6 mx-auto'>
        <h2 className='text-xl font-semibold text-gray-700 capitalize text-center sm:text-3xl'>
          Generador de Slug
        </h2>

        <form onSubmit={handleSubmit} className='w-full'>
          <div className='grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 items-end'>
            <input
              type='text'
              name='titulo'
              placeholder='Titulo'
              className='col-span-3 sm:sm:col-span-2 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
              autoComplete='off'
            />
            <input
              type='submit'
              className='px-8 py-2.5 col-span-3 sm:sm:col-span-1 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 cursor-pointer'
              value='Generar'
            />
          </div>
        </form>
        <div className='flex flex-row bg-white col-span-3 p-1.5 overflow-hidden border rounded-lg mt-12'>
          <input
            className='px-4 py-2 w-full text-gray-700 bg-transparent placeholder-gray-500 outline-none border-none'
            type='text'
            disabled
            placeholder='Slug convertido'
            aria-label='Slug convertido'
            value={slug}
          />

          <button
            className='px-4 py-4 bg-gray-100 rounded-md hover:bg-gray-200 focus:duration-[900ms] transition-all'
            onClick={OnClipboardCopy}
          ></button>
        </div>
      </section>
    </Fragment>
  )
}
