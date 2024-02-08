import { Box, Text } from "../..";
import { CommonProps } from "../../common";

export interface CardHeaderProps extends CommonProps {
  title?: string;
  subtitle?: string;
  suffix?: React.ReactNode;
}

export const CardHeader = ({
  children,
  title,
  subtitle,
  suffix
}: CardHeaderProps) => {

  return (
    <div className="ui-card__header">
      <Box direction="vertical" padding="18px 24px">
        {children && children}

        {title &&
          <Text size="large" weight="bold">
            {title}
          </Text>
        }

        {subtitle &&
          <Text size="small">
            {subtitle}
          </Text>
        }

        {suffix &&
          <div className="ui-card__suffix">{suffix}</div>
        }
      </Box>
    </div>
  )
}