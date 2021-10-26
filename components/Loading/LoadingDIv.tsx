import { Loading } from "./LoadingComponent"

export const LoadingDiv: React.FC = ()=>{

    return(
        <div style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
            <Loading/>
        </div>
    )
}