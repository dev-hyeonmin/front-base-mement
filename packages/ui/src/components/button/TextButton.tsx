export interface TextButtonProps {
    label: string;
    fluid?: boolean;
    onClick?: () => void;
  }
  
  /**
   * Primary UI component for user interaction
   */
  export const TextButton = ({
    label,
    fluid = false,
    ...props
  }: TextButtonProps) => {
    const isFull = fluid ? 'ui-text-button--full' : '';

    return (
      <button
        type="button"
        className={['ui-text-button', isFull].join(' ')}
        onClick={props.onClick}
      >
        {label}
      </button>
    );
  };
  