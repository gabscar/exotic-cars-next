import { Loading } from "./LoadingComponent"

export const LoadingDiv: React.FC = ()=>{

    return(
        <div style={{display:'flex', alignSelf:'center',justifySelf:'center'}}>
            <Loading/>
        </div>
    )
}