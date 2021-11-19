import { ErrorMessage, useField } from 'formik'
import styled from 'styled-components'
import { FormValues } from '../../interfaces'

const ErrorField = styled(ErrorMessage)`
  color: red;
`

interface Props {
  label: string
  name: string
}

const FormInput = (props: Props) => {
  const { name, label } = props
  const [formProps] = useField(name)

  return (
    <div>
      <label htmlFor={name}>
        {label}
        <input {...formProps} />
      </label>
      {/* <ErrorField name={name} /> */}
    </div>
  )
}

export default FormInput
