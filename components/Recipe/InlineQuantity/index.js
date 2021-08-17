import {useEffect, useState, useMemo} from 'react'

import Quantity from '../Quantity'
import QuantityText from '../QuantityText'

export const createInlineQuantity = recipe => ({quantity: quantityConfig, scaleFn: suppliedScaleFn, doNotScale=false, ...props}) => {
  const quantity = useMemo(() => Quantity.from(quantityConfig), [quantityConfig])

  const quantityText = useMemo(
    () => {
      const scaleFn = doNotScale
        ? value => value
        : suppliedScaleFn?.bind(null, recipe) || recipe.scaleFn

      const scaledQuantity = quantity.transform(scaleFn)

      return (
        <QuantityText quantity={scaledQuantity} displayedWithName={false} {...props} />
      )
    },
    [quantity, suppliedScaleFn, doNotScale, recipe.scale]
  )

  const [_, setDummy] = useState()

  useEffect(() => {
    const forceUpdate = () => setDummy({})

    recipe.addListener(forceUpdate)
    return () => recipe.removeListener(forceUpdate)
  }, [])

  return quantityText
}

export default createInlineQuantity
