import {useRouter} from 'next/router'
import Link from 'next/link'
import React, {Children} from 'react'

const ActiveLink = ({children, ...props}) => {
  const {asPath} = useRouter() || {}

  const active = asPath === props.href || asPath === props.as

  return (
    <Link {...props}>
      {{}.toString.call(children) === '[object Function]' ? children(active) : children}
    </Link>
  )
}

export default ActiveLink
