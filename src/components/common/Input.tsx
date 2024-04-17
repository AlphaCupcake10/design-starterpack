import { ReactNode } from "react"

type InputProps = {
    name?:string,
    className?:string,
    placeHolder?:string,
    children?:ReactNode,
    type?:React.HTMLInputTypeAttribute,
    id?:string,
    value?:string,
    hasError?:boolean
    onChange?:React.ChangeEventHandler<HTMLInputElement>
    inputRef?:React.RefObject<HTMLInputElement>
}
export default function Input(props:InputProps)
{
    return(
        <div className={props.className}>
            {
                props.children && <h2 className="text-text/75 pb-2">
                    {props.children}
                </h2>
            }
            <input
                name={props.name}
                ref={props.inputRef}
                type={`${props.type}`}
                id={props.id}
                placeholder={props.placeHolder}
                value={props.value}
                onChange={props.onChange}
                className={`${props.hasError?"border-red-500":"focus:border-b-accent focus:rounded-none focus:rounded-t-xl"} w-full p-element text-element round input`}/>
        </div>    
    )
}