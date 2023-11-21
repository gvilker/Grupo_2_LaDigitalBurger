// ContentRowMovies.js
import React, { useEffect, useState } from 'react';
import SmallCard from './SmallCard';
import { fetchProductData, fetchUserData } from './apiUtils';

function ContentRowMovies() {
  const [productData, setProductData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const productData = await fetchProductData();
      const userData = await fetchUserData();

      setProductData(productData);
      setUserData(userData);
    }

    fetchData();
  }, []);

  if (!productData || !userData) {
    return <div>Loading...</div>;
  }

  const userCount = userData.filter(user => user.user_type === 1).length;
  const adminCount = userData.filter(user => user.user_type === 2).length;

  const cartProps = [
    { title: 'Productos en Data Base', color: 'primary', cuantity: productData.length, icon: 'fa-clipboard-list' },
    { title: 'Total Usuarios', color: 'success', cuantity: userCount, icon: 'fa-user-check' },
    { title: 'Total Administradores', color: 'warning', cuantity: adminCount, icon: 'fa-user-shield' },
    
  ];

  return (
    <div className="row">
      {cartProps.map((item, i) => <SmallCard {...item} key={i} />)}
    </div>
  );
}

export default ContentRowMovies;
