import * as React from 'react'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

import { TopicProps, Topic } from './topic'

const Topics: FunctionComponent = () => {
  const { t } = useTranslation('pages')

  const topics: Array<TopicProps> = t('root.product_development.topics', {
    returnObjects: true
  })

  return (
    <section className='container mx-auto'>
      <div className='flex content-start flex-wrap items-stretch'>
        {topics.map((topic, index) => (
          <Topic key={`topic_${index}`} {...topic} />
        ))}
      </div>
    </section>
  )
}

export default Topics
