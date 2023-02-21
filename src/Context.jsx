import React,{useState,useEffect,useContext} from "react"
import axios from 'axios'
const appContext = React.createContext()
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
export const ContextComp = ({children})=>{
    const [loading,setLoading] = useState(true)
    const [searchTerm,setSearchterm] = useState('')
    const [cocktails,setCocktails] = useState([])

    useEffect(()=>{
        setLoading(true)
        axios.get(`${url}${searchTerm}`)
        .then((resolve)=>{
            const {drinks} = resolve.data
            if(drinks){
                setCocktails(drinks)
            }
            else{
                setCocktails([])
            }
            setLoading(false)
        })
        .catch((reject)=>{
            console.log(reject)
            setLoading(false)
        })
    },[searchTerm])
    return (<appContext.Provider
                value={{loading,cocktails,searchTerm,setSearchterm}}
            >
                {children}
            </appContext.Provider>)
}

export const useContextHook = ()=>{
    return useContext(appContext)
} 