'use client'
import { useEffect, useState } from 'react'
import './Loader.scss'

const Loader = ({ className, show = true, children }) => {
  const [classNames, setClassNames] = useState(['loader', className].filter(Boolean))

  if (className) classNames.push(className)

  // On visibility change
  useEffect(() => {
    if (show) {
      setClassNames([...classNames, 'show'])
    } else {
      setClassNames(classNames.filter(item => item !== 'show'))
    }
  }, [show])

  return (
    <div className={classNames.join(' ')} >
      {children}
    </div>
  )
}

export default Loader

