
import { Box, Text, Tooltip } from '..';
import { CommonProps } from '../common';
import InfoIcon from '/public/info.png';

export interface FormFieldProps extends CommonProps {
  label?: string;
  labelPlacement?: 'top' | 'left' | 'right';
  suffix?: React.ReactNode;
  required?: boolean;
  status?: 'error' | 'warning';
  statusMessage?: string;
  infoContent?: string;
}
export const FormField = ({
  children,
  label,
  labelPlacement = 'top',
  suffix,
  required = false,
  status,
  statusMessage,
  infoContent
}: FormFieldProps) => {

  return (
    <div className={["ui-formfield", `ui-formfield--${labelPlacement}`, `ui-formfield--${status}`].join(' ')}>
      {labelPlacement == 'right' &&
        <div className='ui-formfield__content'>
          {children}
        </div>
      }
      <Box align='space-between' verticalAlign='middle'>
        <div className={['ui-formfield__label', required && 'ui-formfield__label--required'].join(' ')}>
          {label}

          {infoContent &&
            <Tooltip content={infoContent}>
              <span className='ui-formfield__tooltip'>
                <img src={InfoIcon} />
              </span>
            </Tooltip>
          }
        </div>

        {suffix &&
          <div className='ui-formfiled__suffix'>
            {suffix}
          </div>
        }
      </Box>

      {labelPlacement != 'right' &&
        <div className='ui-formfield__content'>
          {children}
        </div>
      }

      {statusMessage &&
        <Text size='tiny' skin={status} className={["ui-formfield__message"]}>
          {statusMessage}
        </Text>
      }
    </div>
  )
}