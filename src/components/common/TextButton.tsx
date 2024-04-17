import { ReactNode } from 'react'

function TextButton(props:{
    children?:ReactNode,
    className?:string,
    onClick?:()=>void
})
{
    return (
        <button
            onClick={()=>{props.onClick && props.onClick()}}
            className={`${props.className} p-element text-element hover-element text-btn`}
        >
            {props.children}
        </button>
    )
}

export default TextButton;