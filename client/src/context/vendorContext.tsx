import React, { createContext, useState } from "react"

type VendorType = {
  id: string
  firstName: string
  lastName: string
  gender: string
  email: string
  phoneNumber: number
  message?: string
}

type VendorContextType = {
  vendorLoggedIn: VendorType
  setVendorLoggedIn: React.Dispatch<React.SetStateAction<VendorType>>
  isVendorLoggedIn: boolean
  setIsVendorLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const VendorContext = createContext<VendorContextType | null>(null)

function VendorContextProvider({ children }: { children: React.ReactNode}) {
  const [vendorLoggedIn, setVendorLoggedIn] = useState<VendorType>({
    id: "",
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phoneNumber: 0,
    message: "",
  })
  const [isVendorLoggedIn, setIsVendorLoggedIn] = useState<boolean>(false)

  const value = {
    vendorLoggedIn,
    setVendorLoggedIn,
    isVendorLoggedIn,
    setIsVendorLoggedIn,
  }

  return (
    <VendorContext.Provider value={value}>
      {children}
    </VendorContext.Provider>
  )
}

export default VendorContextProvider