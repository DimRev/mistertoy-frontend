import { useSelector } from "react-redux"
import { loadToys } from "../store/actions/toy.actions"
import { useEffect } from "react"
import { ToyList } from "../cmps/ToyIndexCmps/ToyList"

export function ToyIndex(){

  const toys = useSelector(storeState => storeState.toyModule.toys)
  useEffect(()=>{
    loadToys()
  },[])
  return (
    <>
      <ToyList toys={toys}/>
    </>
  )
}