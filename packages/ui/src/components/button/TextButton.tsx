export interface TextButtonProps {
    label: string;
    fluid?: boolean;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
  }
  
  /**
   * Primary UI component for user interaction
   */
  export const TextButton = ({
    label,
    fluid = false,
    size = 'medium',
    ...props
  }: TextButtonProps) => {
    const isFull = fluid ? 'ui-text-button--full' : '';
    return (
      <button
        type="button"
        className={['ui-text-button', `ui-text-button--${size}`, isFull].join(' ')}
        onClick={props.onClick}
      >
        {label}
      </button>
    );
  };
  