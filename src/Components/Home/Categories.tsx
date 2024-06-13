import React from 'react'
import { useImageErrorProduct } from '../../Hooks/useImageError'
import { useNavigate } from 'react-router-dom'

type TCategories = {
  item: {
    id: number,
    name: string,
    image: string
  }
  index: number
}

const Categories: React.FC<TCategories> = ({ item, index }) => {
  const navigate = useNavigate()

  return (
    <div className='Categories'>
      <div key={index} className='Categories_Item' onClick={() => navigate(`/category/${item?.id}`)}>
        {/* <img   alt=''  src={`../Categories/cat${index+1}.png`} /> */}
        <img alt={item.name} onError={useImageErrorProduct} src={item.image} />
        <button  > {item.name} </button>
      </div>
    </div>
  )
}

export default Categories