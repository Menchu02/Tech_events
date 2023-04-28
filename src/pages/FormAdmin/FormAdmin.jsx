import React from "react";
import styles from "./formAdmin.module.css";
import { Formik } from "formik";

export default function FormAdmin() {
  return (
    <div>
      <Formik>
        {() => (
          <form className={styles.formContainer}>
            <div>
              <img src="" alt="" />
              <textarea
                className={styles.input}
                placeholder="URL of image"
              ></textarea>
            </div>
            <div>
              <input
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                className={styles.input}
              ></input>
            </div>
            <div>
              <input
                placeholder="organitzer"
                name="organitzer"
                type="text"
                id="Organitzer"
                className={styles.input}
              ></input>
            </div>
            <div>
              <textarea
                name="description"
                type="text"
                id="description"
                placeholder="Description"
                className={styles.input}
              ></textarea>
            </div>

            <select className={styles.option}>
              <option>Categorie</option>
              <option>Bussines</option>
              <option>Cultural</option>
              <option>Educational</option>
              <option>Social</option>
              <option>Sport</option>
            </select>
            <select className={styles.option}>
              <option>Higlighted?</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <div>
              <input
                placeholder="Location"
                type="text"
                id="location"
                name="location"
                className={styles.input}
              ></input>
            </div>

            <div>
              <select className={styles.option} name="year">
                <option value="">Year</option>
                <option value="2022">2024</option>
                <option value="2021">2023</option>
              </select>
            </div>
            <select className={styles.option} name="month">
              <option value="">Month</option>

              <option value="01">Enero</option>
              <option value="02">Febrero</option>
              <option value="03">Marzo</option>
              <option value="03">Abril</option>
              <option value="03">Mayo</option>
              <option value="03">Junio</option>
              <option value="03">Julio</option>
              <option value="03">Agosto</option>
              <option value="03">Septiembre</option>
              <option value="03">Octubre</option>
              <option value="03">Noviembre</option>
              <option value="03">Diciembre</option>
            </select>
            <select className={styles.option} name="day">
              <option value="">Day</option>

              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="03">04</option>
              <option value="03">05</option>
              <option value="03">06</option>
              <option value="03">07</option>
              <option value="03">08</option>
              <option value="03">09</option>
              <option value="03">10</option>
              <option value="03">11</option>
              <option value="03">12</option>
              <option value="03">13</option>
              <option value="03">14</option>
              <option value="03">15</option>
              <option value="03">16</option>
              <option value="03">17</option>
              <option value="03">18</option>
              <option value="03">19</option>
              <option value="03">20</option>
              <option value="03">21</option>
              <option value="03">22</option>
              <option value="03">23</option>
              <option value="03">24</option>
              <option value="03">25</option>
              <option value="03">26</option>
              <option value="03">27</option>
              <option value="03">28</option>
              <option value="03">29</option>
              <option value="03">30</option>
              <option value="03">31</option>
            </select>
            <button className={styles.button}>Add</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
