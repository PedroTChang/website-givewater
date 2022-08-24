import React from 'react'
// import Image from 'next/image'

const Navbar: React.FC = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <div>
            logo
          </div>
        </div>
        <div>primary nav</div>
        <div>secondary nav</div>
      </div>
    </nav>
  )
}

export default Navbar
