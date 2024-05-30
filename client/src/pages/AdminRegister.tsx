function AdminRegister() {
  return (
    <main className="h-screen w-full bg-red-300">
      <form>
        <div>
          <h1>Welcome</h1>
          <img src="../../PutYourOrder.png" alt="The Logo" />
        </div>

        <input type="text" placeholder="First name" />

        <input type="text" placeholder="Last name" />

        <select>
          <option value="gender">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <input type="email" placeholder="Email" />

        <input type="number" placeholder="Phone number" />

        <input type="password" placeholder="Password" />
      </form>
    </main>
  )
}

export default AdminRegister