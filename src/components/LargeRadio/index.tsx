import React, { Fragment } from 'react'

import { CheckmarkIcon } from '@root/graphics/CheckmarkIcon'

import classes from './index.module.scss'

export const LargeRadio: React.FC<{
  id: string
  value: any
  checked?: boolean
  name: string
  disabled?: boolean
  onChange?: (value?: any) => void // eslint-disable-line no-unused-vars
  price?: string
  label: string
}> = props => {
  const { checked, name, disabled, onChange, value, price, id, label } = props

  return (
    <Fragment key={value}>
      <label
        className={[classes.largeRadio, checked && classes.checked, disabled && classes.disabled]
          .filter(Boolean)
          .join(' ')}
        htmlFor={id}
      >
        <div className={classes.checkmark}>
          {checked && <CheckmarkIcon />}
          <input
            type="radio"
            name={name}
            id={id}
            checked={checked}
            value={id}
            onChange={() => {
              if (!disabled && typeof onChange === 'function') {
                onChange(value)
              }
            }}
            className={classes.radio}
            disabled={disabled}
          />
        </div>
        <div className={classes.content}>
          <h6 className={classes.name}>{label}</h6>
          {price && <p className={classes.price}>{price}</p>}
        </div>
      </label>
      {disabled && (
        <p>
          Because your repo is connected to a GitHub organization, you are not eligible for the free
          tier.
        </p>
      )}
    </Fragment>
  )
}