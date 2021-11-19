import { useField } from 'formik'
import React from 'react'

interface Props {
  name: string
}

const CountryPicker = (props: Props) => {
  const { name } = props
  const [formProps] = useField(name)

  return (
    <div>
      <select {...formProps}>
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
        <option value="brazil">Brazil</option>
      </select>
    </div>
  )
}

export default CountryPicker
