import React, { useState } from 'react';
import styles from './slider.module.css';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

export default function Slider({ images }) {
  //variables y estados
  const [img, setImg] = useState(0);
  const totalQuantity = images?.length;

  if (!Array.isArray(images) || totalQuantity === 0) {
    return;
  }

  const handlerNextImg = () => {
    setImg(img === totalQuantity - 1 ? 0 : img + 1);
  };

  const handlerPreviousImg = () => {
    setImg(img === 0 ? totalQuantity - 1 : img - 1);
  };
  return (
    <div className={styles.container}>
      <FaLessThan onClick={handlerPreviousImg} />
      {images.map((item, index) => {
        return (
          <div key={index}>
            {img === index && (
              <img className={styles.imgSlider} src={item} alt='imagen' />
            )}
          </div>
        );
      })}
      <FaGreaterThan onClick={handlerNextImg} />
    </div>
  );
}
