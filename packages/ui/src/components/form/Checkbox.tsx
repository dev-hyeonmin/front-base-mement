
export interface CheckboxProps {
  id: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
}

export const Checkbox = ({
  id,
  label,
  checked = false,
  disabled = false,
  ...props
}: CheckboxProps) => {
  // const [mode, setMode] = useState(active ? "ui-checkbox--active" : '');
  // const [state, setState] = useState(active);

  const onChange = () => {
    // setState(!state);
    // setMode(state ? "ui-checkbox--active" : '');

    if (props.onChange) {
      props.onChange();
    }
  }

  return (
    <div className="ui-checkbox">
      <input
        id={id}
        type='checkbox'
        checked={checked ? true : false}
        onChange={props.onChange}
        disabled={disabled} />
      <label
        className="ui-checkbox-custom"
        htmlFor={id}
      />

      {label &&
        <label htmlFor={id} className="ui-checkbox-label">
          {label}
        </label>
      }
    </div>
  )
}