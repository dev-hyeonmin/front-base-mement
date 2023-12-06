export interface TextButtonProps {
    label: string;
    fluid?: boolean;
    size?: 'small' | 'medium' | 'large';
    skin?: 'default' | 'primary' | 'warning';
    onClick?: (event?: React.MouseEvent, index?: number) => void;
  }
  
  /**
   * Primary UI component for user interaction
   */
  export const TextButton = ({
    label,
    fluid = false,
    size = 'medium',
    skin = 'default',
    ...props
  }: TextButtonProps) => {
    const isFull = fluid ? 'ui-text-button--full' : '';
    return (
      <button
        type="button"
        className={['ui-text-button', `ui-text-button--${size}`, `ui-color-${skin}`, isFull].join(' ')}
        onClick={props.onClick}
      >
        {label}
      </button>
    );
  };
  