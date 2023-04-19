import React, { useState } from 'react';
import styles from './slider.module.css';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

export default function Slider({ highlightEvents }) {
  // estado comienza en posicion 0
  const [img, setImg] = useState(0);

  // variable con la longitud que contiene el array images
  const totalQuantity = highlightEvents?.length;

  if (totalQuantity === 0) {
    return;
  }

  //icono suma
  const handlerNextImg = () => {
    setImg(img === totalQuantity - 1 ? 0 : img + 1);
  };

  //icono resta
  const handlerPreviousImg = () => {
    setImg(img === 0 ? totalQuantity - 1 : img - 1);
  };
  return (
    <div className={styles.container}>
      <FaLessThan
        className={styles.sliderIconLess}
        onClick={handlerPreviousImg}
      />

      {/* mapeo la prop images */}
      {highlightEvents.map((item, index) => {
        return (
          <div key={item.id}>
            {img === index && (
              <>
                <img className={styles.imgSlider} src={item.img} alt='imagen' />
                <p>{item.name}</p>
              </>
            )}
          </div>
        );
      })}
      <FaGreaterThan
        className={styles.sliderIconGreater}
        onClick={handlerNextImg}
      />
    </div>
  );
}
