import './Input.css';

const Input = (props) => {
    const {
        label,
        name,
        type = 'text',
        value,
        placeholder,
        onChange,
        required = false,
        error = '',
        width = '100%', // default width
    } = props;

    return (
        <div className="input-wrapper" style={{ width }}>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
                className={error ? 'input error' : 'input'}
            />
            {error && <span className="error-text">{error}</span>}
        </div>
    );
};

export default Input;
