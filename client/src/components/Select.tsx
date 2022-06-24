type SelectProps = {
  options: { id: number, label: string }[]
  state: number | 'default'
  setVal: any
  className?: string
  placeholder?: string
  style?: React.CSSProperties
}


const Select: React.FC<SelectProps> = ({ options, setVal, state, className, placeholder, style }) => {
  const label = placeholder ? placeholder : `Tampilkan: ${options.length} Data`
  return (
    <div className={"dropdown show mt-3 " + className}>
      <select
        className="text-input-search dropdown-toggle btn btn-secondary "
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          ...style
        }}
        value={state}
        onChange={setVal}
      >
        <option
          tabIndex={0}
          role="menuitem"
          disabled
          selected
          className="dropdown-item active"
          value={'default'}
        >{label}</option>
        {options.map((el, index) => (
          <option
            tabIndex={0}
            key={index}
            value={el.id}
            role="menuitem"
            className="dropdown-item"
            style={{ color: 'white' }}
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