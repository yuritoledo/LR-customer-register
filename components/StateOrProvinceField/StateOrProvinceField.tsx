import { useField, useFormikContext } from 'formik'
import React, { useMemo } from 'react'
import { canadaStates, usaStates } from '../../data/staticStates'
import { FormValues } from '../../interfaces'
import FormInput from '../FormInput/FormInput'

interface Props {
  name: string
}

const StateOrProvinceField = (props: Props) => {
  const { name } = props

  const {
    values: { address },
  } = useFormikContext<FormValues>()

  const options = useMemo(() => {
    if (address.country === 'usa') return usaStates

    if (address.country === 'canada') return canadaStates

    return null
  }, [address.country])

  return (
    <div>
      {options === null ? (
        <FormInput name={name} label="State or Province" />
      ) : (
        <label htmlFor={name}>
          <select>
            {options.map(({ text, value }) => (
              <option key={value} value={value}>{text}</option>
            ))}
          </select>
        </label>
      )}
    </div>
  )
}

export default StateOrProvinceField
