import React from 'react'
import { PRODUCTS } from '../../products'
import Struture from '../../components/struture'
import '../../components/structure.css'

export default function Shop() {
  return (
    <div className='shop'>
        <div className='shophead'>
            {/* <h1>Saheron mart</h1> */}
        </div>
        <div className='products'>

            {PRODUCTS.map((prds)=>(
                <Struture  data={prds}/>    
            ))}

        </div>
    </div>
  )
}
