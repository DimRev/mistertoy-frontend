import { useSelector } from "react-redux"
import { loadToys } from "../store/actions/toy.actions"
import { useEffect } from "react"

export function ToyIndex(){

  const toys = useSelector(storeState => storeState.toyModule.toys)
  useEffect(()=>{
    loadToys()
  },[])
  console.log(toys)
  return (
    <h1>Toy Index Page</h1>
  )
}