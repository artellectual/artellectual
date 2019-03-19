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
      <div className='flex'>
        <div className='w-1/4'>
          {disciplines.map(discipline => (
            <div
              className={c('bg-white mb-2 shadow rounded border border-solid', {
                ['border-purple-lighter']: active !== discipline.key,
                ['bg-purple-dark']: active === discipline.key
              })}
            >
              <button
                onClick={e => changeTab(e, discipline.key)}
                className={c('p-5', {
                  ['text-purple-darker']: active !== discipline.key,
                  ['text-white']: active === discipline.key
                })}
              >
                <i className={c(discipline.icon, 'mr-3')} />
                <span>{discipline.heading}</span>
              </button>
            </div>
          ))}
        </div>
        <div className='w-3/4'>
          {disciplines.map(discipline => (
            <Discipline active={active === discipline.key} {...discipline} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
