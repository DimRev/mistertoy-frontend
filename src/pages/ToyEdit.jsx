import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toyService } from '../services/toy.service'
import { ToyPreviewEdit } from '../cmps/ToyPreviewEdit'

export function ToyEdit() {
  const { toyId } = useParams()
  const [selectedToy, setSelectedToy] = useState(null)
  useEffect(()=>{
    toyService.getById(toyId).then((toy)=>{
      setSelectedToy(toy);
    })
  },[])
  if (!selectedToy) {
    return <h1>Loading</h1>
  }
  return (
    <section className="toy-edit-page">
      <h2>Toy Edit</h2>

      <ToyPreviewEdit toy={selectedToy} />
    </section>
  )
}
