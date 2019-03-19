import * as React from 'react'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

import logo from '~/assets/logo.svg'

const Footer: FunctionComponent = () => {
  const { t } = useTranslation('layout')

  const addressLines: Array<string> = t(
    'application.footer.mailing_address', { returnObjects: true }
  )

  return (
    <footer className='bg-purple-darker pt-20 pb-20'>
      <div className='container mx-auto flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row'>
        <div className='flex-1 mx-3'>
          <img src={logo} alt={t('application.footer.logo')} width='64' />
          <address className='mt-5 text-white leading-normal'>
            <p className='font-semibold text-md'>{t('application.footer.company_name')}</p>
            {addressLines.map((line, index) => <p key={`address_line_${index}`}>{line}</p>)}
          </address>
          <p className='leading-normal text-white mt-5'><i className='fas fa-mobile mr-3' /> <span>+(66) 86-974-4700</span></p>
        </div>
        <div className='flex-1'>
        </div>
        <div className='flex-1'>
        </div>
      </div>
    </footer>
  )
}

export default Footer
