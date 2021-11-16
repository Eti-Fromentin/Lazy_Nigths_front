import React, { useState } from 'react';
// import axios from 'axios';

import More from '../Assets/More.png';

import './Card.css';

function RecipeCard({ image, title, calories, carbs, fat, protein, sugar }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [more, setMore] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  // const [moreInfo, setMoreInfo] = useState();

  // const getMoreInfoUrl = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=7706683273f24fdcaf86cbbb8929f962`;

  function handleClickFavorite() {
    setIsFavorite(!isFavorite);
  }

  function handleClickAdded() {
    setIsAdded(!isAdded);
  }

  function handleClickFlip() {
    setMore(!more);
  }

  // useEffect(() => {
  //   axios
  //     .get(getMoreInfoUrl)
  //     .then((response) => response.data)
  //     .then((data) => setMoreInfo(data));
  // }, []);

  return (
    <div className="recipe-Card">
      <div className="recipe-img-container">
        {more ? (
          <div className="recipe-front">
            <div className="recipe-title">{title.length > 15 ? title.slice(0, 15) + '...' : title}</div>
            <img className="recipe-card-image" src={image} alt={title} />
            <button className="recipe-material-icons-outlined" id={isFavorite ? 'isFavorite' : 'notFavorite'} onClick={handleClickFavorite}>
              star
            </button>
            <button className="recipe-material-icons-outlined" id={isAdded ? 'isAdd' : 'notAdd'} onClick={handleClickAdded}>
              add_shopping_cart
            </button>
            <button className="recipe-btn-more" onClick={handleClickFlip}>
              <img src={More} alt="more" />
            </button>
          </div>
        ) : (
          <div className="recipe-back">
            <div className="recipe-desc-back">
              <div className="recipe-desc-title">{title}</div>
              <div className="recipe-desc-details">
                <div className="recipe-desc-details-li">Calories: {calories}Kcal</div>
                <div className="recipe-desc-details-li">Carbs: {carbs}</div>
                <div className="recipe-desc-details-li">Fat: {fat}</div>
                <div className="recipe-desc-details-li">Protein: {protein}</div>
                <div className="recipe-desc-details-li">Sugar: {sugar}</div>
              </div>
              {/* {moreInfo.sourceUrl && (
                <a href={moreInfo.sourceUrl} target="_blank" rel="noreferrer">
                  Link
                </a>
              )}
              {moreInfo.spoonacularSourceUrl && (
                <a href={moreInfo.spoonacularSourceUrl} target="_blank" rel="noreferrer">
                  Link 2
                </a>
              )} */}
            </div>
            <button className="recipe-material-icons-outlined" id="btn-close" onClick={handleClickFlip}>
              cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeCard;
