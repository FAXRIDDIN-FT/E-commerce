import React from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();
  return (
    <div>

        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut expedita molestiae optio ipsa perferendis exercitationem, voluptatem reiciendis suscipit magnam. Maxime unde omnis atque eligendi. Quibusdam neque quisquam iusto repellat voluptas!
    </div>
  )
}

export default Product