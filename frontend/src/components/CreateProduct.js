import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Es para poder redirigir luego de crear el producto

const CreateProduct = ({ onProductoSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    img: null,
    calories: '',
    fat: '',
    protein: '',
    carbohydrates: '',
    size: '',
    additional_ingredients: '',
    spicy: 'false',
    suggested_Acompaniments: '',
    additional_Information: '',
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await fetch('http://localhost:3010/products', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        onProductoSubmit();
        history.push('/ListaProductos'); // Despues de crear el nuevo producto redirijo a ListaProductos
      } else {
        console.error('Error al crear el producto');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5 mx-auto">
      <div className="form-group row">
      <label htmlFor="name" className="col-sm-2 col-form-label">
        Nombre:
        </label>
        <div className="col-sm-10">
        <input
          className="form-control"
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <div>
          <small className="erName"></small>
        </div>
        </div>
        </div>
      <div className="form-group row">
      <label  htmlFor="description" className="col-sm-2 col-form-label">
        Descripción:
        </label>
        <div className="col-sm-10">
        <textarea
          className="form-control"
          id="description"
          name="description"
          required
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <div>
          <small className="erDescription"></small>
        </div>
        </div>
        </div>
      <div className="form-group row">
      <label  htmlFor="price" className="col-sm-2 col-form-label">
        Precio:
        </label>
        <div className="col-sm-10">
        <input
          className="form-control"
          type="number"
          id="price"
          name="price"
          required
          value={formData.price}
          onChange={handleChange}
        />
        <div>
          <small className="erPrice"></small>
        </div>
        </div>
        </div>
      <div className="form-group row">
      <label htmlFor="image" className="col-sm-2 col-form-label">
        Imagen:
        </label>
        <div className="col-sm-10">
        <input
          className="form-control"
          type="file"
          id="image"
          name="img"
          accept="image/*"
          onChange={handleChange}
        />
        <div>
          <small className="erImage"></small>
        </div>
        </div>
        </div>
      <div className="form-group row">
      <label htmlFor='calories' className="col-sm-2 col-form-label">
        Calorías por porción:
        </label>
        <div className="col-sm-10">
        <input className="form-control"
        type='number'
        id='calories'
        name='calories'
        required
        value={formData.calories}
        onChange={handleChange}
        />
        <div>
            <small className='erCalories'></small>
        </div>
        </div>
        </div>
      <div className="form-group row">
      <label htmlFor='fat' className="col-sm-2 col-form-label">
        Grasas por porción:
        </label>
        <div className="col-sm-10">
        <input className="form-control"
        type='number'
        step={0.01}
        id='fat'
        name='fat'
        required
        value={formData.fat}
        onChange={handleChange}
        />
        <div>
            <small className='erFat'></small>
        </div>
        </div>
        </div>
      <div className="form-group row">
      <label htmlFor='protein' className="col-sm-2 col-form-label">
        Proteínas por porción:
        </label>
        <div className="col-sm-10">
        <input className="form-control"
        type='number'
        step={0.01}
        id='protein'
        name='protein'
        required
        />
        <div>
            <small className='erProtein'></small>
        </div>
        </div>
        </div>
      <div className="form-group row">
      <label htmlFor='carbohydrates' className="col-sm-2 col-form-label">
        Carbohidratos por porción:
        </label>
        <div className="col-sm-10">
        <input className="form-control"
        type='number'
        step={0.01}
        id='carbohydrates'
        name='carbohydrates'
        required        
        />
        <div>
            <small className='erCarbohydrates'></small>
        </div>
        </div>
        </div>
      <div className="form-group row">
      <label htmlFor='size' className="col-sm-2 col-form-label">
        Tamaño de la hamburguesa (en gramos):
        </label>
        <div className="col-sm-10">
        <input className="form-control"
        type='number'
        id='size'
        name='size'
        required        
        />
        </div>
        </div>
      <div className="form-group row">
      <label htmlFor='additional_ingredients' className="col-sm-2 col-form-label">
         Ingredientes adicionales (separados por coma):
         </label>
         <div className="col-sm-10">
         <input className="form-control"
         type='text'
         id='additional_ingredients'
         name='additional_ingredients'       
         />
        </div>
        </div>
      <div className="form-group row">
      <label htmlFor='spicy' className="col-sm-2 col-form-label">
        Nivel de Picante:
        </label>
        <div className="col-sm-10">
        <select className="form-control"
        id='spicy'
        name='spicy'>
        <option value='true'>Picante</option>
        <option value='false'>No picante</option>
        </select>
        </div>
        </div>
      <div className="form-group row">
      <label htmlFor='suggested_Acompaniments' className="col-sm-2 col-form-label">
        Sugerencias de acompañamientos (separados por coma):
        </label>
        <div className="col-sm-10">
        <input className="form-control" 
        type='text'
        id='suggested_Acompaniments'
        name='suggested_Acompaniments'        
        />
        </div>
        </div>
      <div className="form-group row">
      <label htmlFor='additional_Information' className="col-sm-2 col-form-label">
        Información adicional:
        </label>
        <div className="col-sm-10">
        <textarea className="form-control"
        id='additional_Information'
        name='additional_Information'>            
        </textarea>
        </div>
        </div>
      <br></br>
      <div className="text-center mt-3">
    <button type="submit" id="button" className="btn btn-primary">
      Crear Producto
    </button>
  </div>
    </form>
  );
};

export default CreateProduct;