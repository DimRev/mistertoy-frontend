import { useSelector } from "react-redux"
import { useEffect } from "react"

import { ToyList } from "../cmps/ToyIndexCmps/ToyList"

import { loadToys,removeToy } from "../store/actions/toy.actions"

export function ToyIndex(){

  const toys = useSelector(storeState => storeState.toyModule.toys)
  useEffect(()=>{
    loadToys()
  },[])

  function onDelete(toyId){
    removeToy(toyId)
  }


  return (
    <>
      <ToyList toys={toys} onDelete={onDelete} />
    </>
  )
}