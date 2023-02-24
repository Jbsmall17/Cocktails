import React,{useState,useEffect,useContext} from "react"
import axios from 'axios'
const appContext = React.createContext()
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
export const ContextComp = ({children})=>{
    const [loading,setLoading] = useState(true)
    const [searchTerm,setSearchterm] = useState('')
    const [input,setInput] = useState('')
    const [cocktails,setCocktails] = useState([])
    const [count,setCount] = useState(0)
const multiArray = (Item)=>{
    const newArray = []
    for(let i = 0;i < Item.length;i+=5){
        const subArray = Item.slice(i,i+5)
        newArray.push(subArray)
    }
    return newArray
}
    useEffect(()=>{
        setLoading(true)
        axios.get(`${url}${searchTerm}`)
        .then((resolve)=>{
            const {drinks} = resolve.data
            if(drinks){
                const drinksArray = multiArray(drinks)
                setCocktails(drinksArray)
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
                value={{count,setCount,input,setInput,loading,setCocktails,cocktails,searchTerm,setSearchterm}}
            >
                {children}
            </appContext.Provider>)
}

export const useContextHook = ()=>{
    return useContext(appContext)
} 