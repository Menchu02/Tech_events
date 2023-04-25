import React from 'react';
import styles from './formAdmin.module.css';
import { Formik } from 'formik';

export default function FormAdmin() {
  return (
    <div>
      <Formik>
        {() => (
          <form className={styles.formContainer}>
            <div>
              <img src='' alt='' />
              <textarea></textarea>
            </div>
            <div>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' name='name'></input>
            </div>
            <div>
              <label htmlFor='organitzer'>Organitzer</label>
              <input name='organitzer' type='text' id='organitzer'></input>
            </div>
            <div>
              <label htmlFor='description'>Description</label>
              <textarea
                name='description'
                type='text'
                id='description'
              ></textarea>
            </div>

            <select>
              <option>Categorie</option>
              <option>Bussines</option>
              <option>Cultural</option>
              <option>Educational</option>
              <option>Social</option>
              <option>Sport</option>
            </select>
            <select>
              <option>yes</option>
              <option>No</option>
            </select>
            <div>
              <label htmlFor='location'>Location</label>
              <input type='text' id='location' name='location'></input>
            </div>

            <div>
              <label htmlFor='year'>Fecha:</label>
              <select name='year'>
                <option value=''>Año</option>
                <option value='2022'>2024</option>
                <option value='2021'>2023</option>
              </select>
            </div>
            <select name='month'>
              <option value=''>Mes</option>

              <option value='01'>Enero</option>
              <option value='02'>Febrero</option>
              <option value='03'>Marzo</option>
              <option value='03'>Abril</option>
              <option value='03'>Mayo</option>
              <option value='03'>Junio</option>
              <option value='03'>Julio</option>
              <option value='03'>Agosto</option>
              <option value='03'>Septiembre</option>
              <option value='03'>Octubre</option>
              <option value='03'>Noviembre</option>
              <option value='03'>Diciembre</option>
            </select>
            <select name='day'>
              <option value=''>Día</option>

              <option value='01'>01</option>
              <option value='02'>02</option>
              <option value='03'>03</option>
              <option value='03'>04</option>
              <option value='03'>05</option>
              <option value='03'>06</option>
              <option value='03'>07</option>
              <option value='03'>08</option>
              <option value='03'>09</option>
              <option value='03'>10</option>
              <option value='03'>11</option>
              <option value='03'>12</option>
              <option value='03'>13</option>
              <option value='03'>14</option>
              <option value='03'>15</option>
              <option value='03'>16</option>
              <option value='03'>17</option>
              <option value='03'>18</option>
              <option value='03'>19</option>
              <option value='03'>20</option>
              <option value='03'>21</option>
              <option value='03'>22</option>
              <option value='03'>23</option>
              <option value='03'>24</option>
              <option value='03'>25</option>
              <option value='03'>26</option>
              <option value='03'>27</option>
              <option value='03'>28</option>
              <option value='03'>29</option>
              <option value='03'>30</option>
              <option value='03'>31</option>
            </select>
            <button>Add</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
