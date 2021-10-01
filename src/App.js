import Potato from "./Potato";
import PropTypes from 'prop-types';


const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image:
      'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image:
      'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb',
    rating: 5,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg',
    rating: 5,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg',
    rating: 5,
  },
];

function App() {
  return(  
        <div>Hello World~~!!
        <Potato/>
        <Potato2/>
        {/* <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>         */}

        {/* <Food/> */}

        {/* <Food fav="Kimchi" something={true} papapapa={['hello~',1,2,3,4,true]}/> */}
        {/* <Food fav="Kimchi" />
        <Food fav="라면" />
        <Food fav="삼겹살" />
        <Food fav="쭈꾸미" /> */}

      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}

        {/* <Food/> */}

        </div>);
}                                                                                                                                                                                                                                 

function Potato2()
{
    return <h3>I love Potato22222~!</h3>
}

function Movie()
{
    return <h3>Movie~!</h3>
}

// function Food(props)
// {
//   console.log(props)
//   return (
//     <div>
//       {/* <h1>음식!</h1> */}
//       <h1>i Like {props.fav}</h1>
//       {/* <h1>i Like {props}</h1> */}
    
//     </div>
//   );

// }

function Food({name,picture, rating})
{
  console.log({name,picture, rating})
  return (
    <div>      
      <h1>i Like {name}</h1>       
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />   
    </div>
  );

}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};


export default App;
