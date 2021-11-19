import { FormikProvider, useFormik } from 'formik'
import { FormValues } from '../../interfaces'
import CountryPicker from '../CountryPicker'
import FormInput from '../FormInput/FormInput'
import StateOrProvinceField from '../StateOrProvinceField/StateOrProvinceField'

const initialValues: FormValues = {
  name: '',
  email: '',
  phoneNumber: '',
  address: {
    streetName: '',
    houseNumber: '',
    city: '',
    state: '',
    country: 'usa',
  },
}

const Form = () => {
  const onSubmit = (values: FormValues) => {
    console.log('values', values)
  }

  const form = useFormik({
    initialValues,
    onSubmit,
    validateOnChange: false,
  })

  return (
    <FormikProvider value={form}>
      <form onSubmit={form.handleSubmit}>
        <FormInput label="Name" name="name" />
        <FormInput label="Email" name="email" />
        <FormInput label="Phone Number" name="phoneNumber" />
        <FormInput label="House Number" name="address.houseNumber" />
        <FormInput label="Street Name" name="address.streetName" />
        <CountryPicker name="address.country" />
        {/* <FormInput label="City" name="" /> */}
        <StateOrProvinceField name="address.state" />
        <button type="submit">submit</button>
      </form>
    </FormikProvider>
  )
}

export default Form
