import { Card, Input } from '@/components/atoms'
import React, { FC } from 'react'
import FormIdentity from './identity'
import FormCourse from './course'

const Form: FC = () => {
  return (
    <>
      <FormIdentity />
      <FormCourse />
    </>
  )
}

export default Form