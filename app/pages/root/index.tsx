import * as React from 'react'
import { FunctionComponent, useState, FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import c from 'classnames'

import logo from '~/assets/logo.svg'

import * as styles from './index.sass'
import { RouteProps } from 'typings/route'
import { State } from 'router5'

import Products from './products'
import Topics from './topics'
import Technologies from './technologies'

const encode = (data: { [key: string]: any }) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

interface ContactSubmission {
  [key: string]: string
}

const Root: FunctionComponent<RouteProps> = (_props: { route: State }) => {
  const [contact, setState] = useState<ContactSubmission>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const { t } = useTranslation('pages')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...contact })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))
  }

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const element = e.target as HTMLInputElement | HTMLTextAreaElement

    setState({ ...contact, [element.name]: element.value })
  }

  return (
    <>
      <section id='hero' className='bg-transparent'>
        <div className='container mx-auto pt-20 text-center'>
          <img
            src={logo}
            alt={t('root.full_slogan')}
            width='384'
            className='mb-10'
          />
          <h1 className='text-white text-4xl text-center mx-auto font-semibold leading-normal max-w-xl'>
            <span>{t('root.slogan.we')}</span>&nbsp;
            <span className='bg-yellow text-black p-1 rounded-sm'>
              {t('root.slogan.build_things')}
            </span>
            &nbsp;
            <span>{t('root.slogan.and')}</span>&nbsp;
            <span className='bg-yellow text-black p-1 rounded-sm'>
              {t('root.slogan.provide_consultation')}
            </span>
            <span>{t('root.slogan.for_people')}</span>
            <br />
            <span className='bg-yellow text-black p-1 rounded-sm'>
              {t('root.slogan.who_make_things')}
            </span>
            &nbsp;
            <span>{t('root.slogan.on_the_web')}</span>
          </h1>
        </div>
        <Products />
      </section>
      <section id='product_development' className={styles.product_development}>
        <div className='container mx-auto pt-20'>
          <h2 className='text-center text-3xl font-normal text-purple-darker'>
            {t('root.product_development.heading')}
          </h2>
          <p className='text-center text-xl font-thin text-purple m-10 max-w-xl mx-auto leading-normal'>
            {t('root.product_development.description')}
          </p>
        </div>
        <Topics />
      </section>
      <section
        id='technical_consulting'
        className={c(
          styles.technical_consulting,
          'bg-purple-lightest pt-20 pb-20'
        )}
      >
        <div className='container mx-auto'>
          <h2 className='text-center text-3xl font-normal text-purple-darker'>
            {t('root.technical_consulting.heading')}
          </h2>
          <p className='text-center text-xl font-thin text-purple m-10 max-w-xl mx-auto leading-normal'>
            {t('root.technical_consulting.description')}
          </p>
        </div>
        <Technologies />
      </section>
      <section id='contact' className='pt-20 pb-20 bg-white'>
        <div className='container mx-auto'>
          <h2 className='text-center text-3xl text-purple-darker font-normal mb-5'>
            {t('root.continuous_improvement.heading')}
          </h2>
          <p className='text-center text-purple-dark mb-5'>
            <i className='fas fa-infinity fa-2x' />
          </p>
          <p className='text-center text-purple-light leading-normal text-lg max-w-lg mx-auto mb-5'>
            {t('root.continuous_improvement.description')}
          </p>
          <div className='mt-20'>
            <form
              className='w-full max-w-sm mx-auto sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-md'
              onSubmit={handleSubmit}
            >
              <div className='flex flex-wrap mb-6'>
                <div className='w-full'>
                  <label
                    className='block uppercase tracking-wide text-purple-light text-xs font-bold mb-2'
                    htmlFor='name'
                  >
                    {t('root.contact_form.your_name')}
                  </label>
                  <input
                    className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey'
                    id='name'
                    name='name'
                    onChange={handleChange}
                    type='text'
                    placeholder={t('root.contact_form.your_name')}
                  />
                </div>
              </div>
              <div className='flex flex-wrap mb-6'>
                <div className='w-full'>
                  <label
                    className='block uppercase tracking-wide text-purple-light text-xs font-bold mb-2'
                    htmlFor='email'
                  >
                    {t('root.contact_form.email')}
                  </label>
                  <input
                    className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey'
                    id='name'
                    name='email'
                    type='email'
                    onChange={handleChange}
                    size={30}
                    required
                    placeholder={t('root.contact_form.email')}
                  />
                </div>
              </div>
              <div className='flex flex-wrap mb-6'>
                <div className='w-full'>
                  <label
                    className='block uppercase tracking-wide text-purple-light text-xs font-bold mb-2'
                    htmlFor='name'
                  >
                    {t('root.contact_form.subject')}
                  </label>
                  <input
                    className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey'
                    id='subject'
                    name='subject'
                    onChange={handleChange}
                    type='text'
                    placeholder={t('root.contact_form.how_can_we_help')}
                  />
                </div>
              </div>
              <div className='flex flex-wrap mb-6'>
                <div className='w-full'>
                  <label
                    className='block uppercase tracking-wide text-purple-light text-xs font-bold mb-2'
                    htmlFor='message'
                  >
                    {t('root.contact_form.message')}
                  </label>
                  <textarea
                    className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey'
                    id='message'
                    name='message'
                    onChange={handleChange}
                    placeholder={t('root.contact_form.your_message')}
                    rows={10}
                  />
                </div>
              </div>
              <div className='flex flex-wrap mb-6'>
                <button className='w-full rounded py-3 px-4 mb-3 bg-green text-white'>
                  {t('root.continuous_improvement.action')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Root
