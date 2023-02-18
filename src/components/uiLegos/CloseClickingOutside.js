import React, {  useEffect, useRef, useState } from 'react'

export default function CloseClickingOutside(WrapperdComponent) {
  const Component = (props) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()
    useEffect(()=>{
      const handleClickOutside = (event) => {
        if(!ref.current.contains(event.target)) {
          setOpen(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside)
    }, [ref])
    return (
      <WrapperdComponent open={open} setOpen={setOpen} ref={ref} {...props} />
    )
  }
  return Component
}