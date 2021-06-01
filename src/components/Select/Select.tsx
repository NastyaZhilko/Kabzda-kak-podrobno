import React, {useState} from "react";
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

export function Select(props: SelectPropsType) {

    const selectedItem = props.items.find(i => i.value === props.value)
    const [active, setActive] = useState(false)

    return (
        <>
            <select>
                <option value={"1"}>Minsk</option>
                <option value={"2"}>Moscow</option>
                <option value={"3"}>Kiev</option>
            </select>
            <div className={styles.select + " "}>

                <h3>{selectedItem && selectedItem.title}</h3>
                {
                    active &&
                <div className={styles.items}>
                    {props.items.map(i => <div key={i.value}>{i.title}</div>)}
                </div>
                }
            </div>
        </>
    )

}

