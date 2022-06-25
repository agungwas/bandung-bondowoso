type SelectProps = {
  options: { id: number, label: string }[]
  state: number | 'default'
  setVal: React.ChangeEventHandler<HTMLSelectElement>
  className?: string
  placeholder?: string
  style?: React.CSSProperties
  disableFirstOption?: boolean
  disabled?: boolean
}


const Select: React.FC<SelectProps> = ({ options, setVal, state, className, placeholder, style, disableFirstOption, disabled }) => {
  const label = placeholder ? placeholder : `Tampilkan: ${options.length} Data`
  return (
    <div className={"dropdown show " + className + (disableFirstOption ? '' : ' mt-3')}>
      <select
        disabled={disabled}
        className="text-input-search dropdown-toggle btn btn-secondary "
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "Gilroy-Medium",
          ...style
        }}
        value={state}
        onChange={setVal}
      >
        {!disableFirstOption && (
          <option
            tabIndex={0}
            role="menuitem"
            disabled
            className="dropdown-item active"
            value={'default'}
            style={{ fontFamily: 'Gilroy-SemiBold'}}
          >{label}</option>
        )}
        {options.map((el, index) => (
          <option
            tabIndex={0}
            key={index}
            value={el.id}
            role="menuitem"
            className="dropdown-item"
            style={{ color: 'white', fontFamily: 'Gilroy' }}
          >
            {el.label}
          </option>
        ))
        }
      </select>
    </div>
  )
}

export default Select