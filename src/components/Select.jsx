import React from 'react'

const Select = (
    {
        options,
        label,
        className="",
        ...Props
    }, ref
) => {
    const id = React.useId()
    return (

        <div className={'w-full'}>
            {label && <label>{label}</label>}
            <select {...Props} id={id} className={`px-3 py-2
            rounded-lg bg-white text-black outline-none focus:bg-green-50
            duration-200 border border-green-200 w-full ${className}`}>
                {options?.map((option) => (
                    <option key = {option} value={option}/>
                ))}
            </select>
        </div>
    )
}
export default React.forwardRef(Select)
