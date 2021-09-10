import React from 'react'
import Style, { Trigger } from './styles'

import AlertIcon from 'assets/Inputs/AlertIcon'

import { PopupProps } from 'semantic-ui-react'

interface ErrorTooltipProps extends PopupProps {
  error: boolean
  content: any
}

const ErrorTooltip = ({ error, content, ...props }: ErrorTooltipProps) => {
  return error ? (
    <Style
      position='top left'
      className='ErrorTooltip'
      trigger={
        <Trigger className='Trigger' data-cy='Tooltip-error'>
          <AlertIcon />
        </Trigger>
      }
      content={content}
      {...props}
    />
  ) : (
    <></>
  )
}

export default ErrorTooltip
