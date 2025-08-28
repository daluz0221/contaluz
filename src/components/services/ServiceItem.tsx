import React from 'react'


interface Props {
  bg?: string
}



export const ServiceItem = ({ bg }:Props) => {
  return (
    <div className={`${ bg ? bg : 'bg-white' } min-h-[50vh]`}>
      item
    </div>

  )
}
