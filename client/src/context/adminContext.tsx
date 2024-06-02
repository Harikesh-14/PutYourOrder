import React, { createContext, useState } from 'react'

type AdminType = {
  id: string
  firstName: string
  lastName: string
  gender: string
  email: string
  phoneNumber: number
  message?: string
}

type AdminContextType = {
  adminLoggedIn: AdminType
  setAdminLoggedIn: React.Dispatch<React.SetStateAction<AdminType>>
  isAdminLoggedIn: boolean
  setIsAdminLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const AdminContext = createContext<AdminContextType | null>(null)

function AdminContextProvider({ children }: { children: React.ReactNode }) {
  const [adminLoggedIn, setAdminLoggedIn] = useState<AdminType>({
    id: "",
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phoneNumber: 0,
    message: "",
  })

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)

  const value: AdminContextType = {
    adminLoggedIn,
    setAdminLoggedIn,
    isAdminLoggedIn,
    setIsAdminLoggedIn,
  }

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider