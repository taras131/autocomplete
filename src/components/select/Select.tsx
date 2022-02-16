import React, {FC, useEffect, useState} from 'react';
import selectStyles from './Select.module.css'

interface ISelect {
    names: string []
    setActiveAnimal: (name: string) => void
    activeAnimalName?: string | null
}

const Select: FC<ISelect> = ({names, setActiveAnimal, activeAnimalName}) => {
    const [inputValue, setInputValue] = useState('')
    const [isShowDetails, setIsShowDetails] = useState(false)
    const [filteredNames, setFilteredNames] = useState(names)
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setInputValue(e.target.value)
    }
    const toggleIsShowDetails = () => {
        // Вариант с timeout нужен , что бы успевал срабатывать onClick на элементе.
        // Кажется не очень элегантным, но короче решения пока не нашёл.
        setTimeout(() => {
            setIsShowDetails(prev => !prev)
        }, 200)

    }
    const setSelection = (value: string) => {
        setInputValue(value)
        setActiveAnimal(value)
    }
    let optionList
    if (filteredNames.length > 0) {
        optionList = filteredNames.map((item: string) => {
            let style = selectStyles.select_list_item
            if (item === activeAnimalName) {
                style += ` ${selectStyles.active}`
            }
            return (
                <li key={item}
                    className={style}
                    onClick={() => setSelection(item)}>
                    {item}
                </li>
            )
        })
    }
    useEffect(() => {
        if (inputValue === '') {
            setFilteredNames(names)
        } else {
            setFilteredNames(names.filter(item => item.toLowerCase().includes(inputValue.toLowerCase())))
        }
    }, [inputValue, names])
    return (
        <form className={selectStyles.select_wrapper}
              onSubmit={(e) => e.preventDefault()}>
            <div className={selectStyles.placeholder_container}>
                <input value={inputValue}
                       onChange={onInputChange}
                       onFocus={toggleIsShowDetails}
                       onBlur={toggleIsShowDetails}
                       className={selectStyles.select_input}
                       placeholder=" "/>
                <label className={selectStyles.form_label}>
                    Выберите имя
                </label>
            </div>
            {isShowDetails && (
                <ul className={selectStyles.select_list}>
                    {optionList && optionList}
                    {!optionList && (<div className={selectStyles.select_list_empty}>Ничего не найдено</div>)}
                </ul>
            )}


        </form>
    );
};

export default Select;