'use client'
import ButtonUI from '@/components/ui-button'
import InputUI from '@/components/ui-input'
import { useState } from 'react'
const initialValueInput = {
  username: '',
  email: '',
  password: '',
}
const AuthPage = () => {
  const [valueInput, setValueInput] = useState(initialValueInput)

  return (
    <div className=" relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="w-full h-full bg-black lg:bg-opacity-50">
        <div className="flex items-center justify-center h-full">
          <div className="self-center w-full px-16 py-12 mt-2 bg-black rounded-md bg-opacity-70 lg:w-2/5 lg:max-w-md">
            <h2 className="mb-8 text-4xl font-semibold text-white"> Sign in</h2>
            <div className="flex flex-col gap-4">
              <InputUI
                id="username"
                label="Username"
                value={valueInput.username}
                onChange={(e: any) => setValueInput((prev) => ({ ...prev, username: e.target.value }))}
              />
              <InputUI
                id="email"
                label="Email"
                value={valueInput.email}
                onChange={(e: any) => setValueInput((prev) => ({ ...prev, email: e.target.value }))}
              />
              <InputUI
                id="password"
                label="Password"
                type="password"
                value={valueInput.password}
                onChange={(e: any) => setValueInput((prev) => ({ ...prev, password: e.target.value }))}
              />
              <ButtonUI color="red"> Login </ButtonUI>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
