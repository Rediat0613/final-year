'use client';


  import { IconShoppingCart } from '@tabler/icons-react';
  import { useDisclosure } from '@mantine/hooks';
import React, { useState }  from 'react';
import { useAddToCartMutation } from '@/app/services/cart';
import { notify } from '@/shared/components/notification/notification';
const AddtoCart = ({id}:{id:string}) => {
    const [addToCart, {isLoading}] = useAddToCartMutation();
    const [isInCart, setIsInCart] = useState(false);
    const handleAddToCart = async () => {
        try {
            await addToCart({artwork_id:id}).unwrap()
            notify('Success', 'Added to cart')
        } catch (error) {
            notify('Error', 'Failed to add to cart')
            console.log(error)
        }
    }   
  return (
    <>
      <IconShoppingCart
        onClick={handleAddToCart}
        size={20}
        color={isInCart ? 'red' : 'gray'}
        className='cursor-pointer text-sm'
      />

    </>
  );
};

export default AddtoCart;
