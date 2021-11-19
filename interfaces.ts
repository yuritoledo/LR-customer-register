export interface FormValues {
  name: string
  email: string
  phoneNumber: string
  address: {
    streetName: string
    houseNumber: string
    city: string
    state: string
    country: 'usa' | 'canada' | 'brazil'
  }
}
