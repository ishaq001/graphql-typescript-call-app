import { useState } from 'react'

export const useForm = (
  callback: () => void,
  initialState: { username: string; password: string } = {
    username: '',
    password: '',
  }
) => {
  const [values, setValues] = useState(initialState)

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    callback()
  }
  console.log('values', values)
  return {
    onChange,
    onSubmit,
    values,
  }
}
