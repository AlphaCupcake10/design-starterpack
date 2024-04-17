import { ReactNode } from 'react'

function Button(props:{
    children?:ReactNode,
    className?:string,
    onClick?:()=>void
})
{
    return (
        <button
            onClick={()=>{props.onClick && props.onClick()}}
            className={`${props.className} p-element text-element hover-element round btn`}
        >
            {props.children}
        </button>
    )
}

export default Button;