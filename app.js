const searchMeal = async(e) => {
  e.preventDefault();
//select elements
  const input = document.querySelector('.input')
  const tittle = document.querySelector('.tittle')
  const info = document.querySelector('.info')
  const img = document.querySelector('.img')
  const ingredientsOutput = document.querySelector('.ingredients')
//fetch data
  const fetchMealData = async (val) =>{
    const res = await fetch ('https://www.themealdb.com/api/json/v1/1/search.php?s=${val}')
  };

  const {meals} = await res.json()
  return meals;
};

//get the use value
const val = input.value.trim();
if(val){
  const meals = await fetchMealData(val)
}
};


const form = document.querySelector('form');
form.addEventListener('submit', searchMeal)

const magnifier = document.querySelector('.magnifier');
form.addEventListener('click', searchMeal)