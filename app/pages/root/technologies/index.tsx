import * as React from 'react'
import c from 'classnames'
import { MouseEvent, FunctionComponent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Discipline, DisciplineProps } from './discipline'

const Technologies: FunctionComponent = () => {
  const { t } = useTranslation('pages')

  const [active, setState] = useState('application_development')

  const disciplines: Array<DisciplineProps> = t(
    'root.technical_consulting.disciplines',
    { returnObjects: true }
  )

  const changeTab = (e: MouseEvent, key: string) => {
    e.preventDefault()

    setState(key)
  }

  return (
    <section className='container mx-auto'>
      <div className='flex flex-row ml-3'>
        <div>
          {disciplines.map(discipline => (
            <div key={`discipline_button_${discipline.slug}`}
              className={c('bg-white mb-2 shadow rounded border border-solid', {
                ['border-purple-lighter']: active !== discipline.slug,
                ['bg-purple-dark']: active === discipline.slug
              })}
            >
              <button
                onClick={e => changeTab(e, discipline.slug)}
                className={c('p-5', {
                  ['text-purple-darker']: active !== discipline.slug,
                  ['text-white']: active === discipline.slug
                })}
              >
                <i className={c(discipline.icon, 'mr-0 sm:mr-0 md:mr-0 lg:mr-3 xl:mr-3')} />
                <span className='hidden sm:hidden md:inline lg:inline xl:inline'>{discipline.heading}</span>
              </button>
            </div>
          ))}
        </div>
        <div className='flex-1 mr-3'>
          {disciplines.map((discipline) => (
            <Discipline key={`disciplinet_${discipline.slug}`} 
                  active={active === discipline.slug} {...discipline} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
