import React from 'react'
import ImageCarousel from './imagecarousel'

export default function Recipe({ recipeId }) {
    // Hardcoded data
    const recipe = {
        pictures: [
            {
                src: "https://picsum.photos/550/300",
                alt: "Picture 1",
            },
            {
                src: "https://picsum.photos/550/300",
                alt: "Picture 2",
            },
            {
                src: "https://picsum.photos/550/300",
                alt: "Picture 3",
            },
        ],
        name: "Delicious tacos",
        creator: "Abraham Lincoln",
        categories: ["Quick", "Cheap", "Meat", "Lunch", "Spicy"],
        ingredients: [
            "1/4 ounce yeast",
            "1 teaspoon sugar",
            "1 - 1/4 cups warm water",
            "1/4 cup canola oil",
            "1 teaspoon salt",
            "3 1/2 to 4 cups all-purpose flour",
            "1/2 pound ground beef",
            "1 small onion, chopped",
            "1 can (15 ounces) tomato sauce",
            "3 teaspoons dried oregano",
            "1 teaspoon dried basil",
            "1 medium green pepper, diced",
            "2 cups shredded part-skim mozzarella cheese",
        ],
        steps: [
            "In large bowl, dissolve yeast and sugar in water; let stand for 5 minutes. Add oil and salt. Stir in flour, 1 cup at a time, until a soft dough forms.",
            "Turn onto a floured surface; knead until smooth and elastic, 2-3 minutes. Place in a greased bowl, turning once to grease the top. Cover and let rise in a warm place until doubled, about 45 minutes. Meanwhile, cook beef and onion over medium heat until beef is no longer pink, breaking meat into crumbles; drain.",
            "Punch down dough; divide in half. Press each half into a greased 12-in. pizza pan. Combine the tomato sauce, oregano and basil; spread over each crust. Top with beef mixture, green pepper and cheese.",
            "Bake at 400° for 25-30 minutes or until crust is lightly browned.",
        ],
    }


  return (
    <div className="flex flex-col w-full px-2">
        <div className="h-screen flex flex-col">
            <div className="self-center max-w-lg">
                <ImageCarousel>
                    {
                        recipe.pictures.map((picture) => (
                            <img className="w-full h-full object-cover" src={picture.src} alt={picture.alt} />
                        ))
                    }
                </ImageCarousel>
            </div>

            <h2 className="text-3xl font-bold mb-2 text-center">{recipe.name}</h2>

            <p className="text-xl font-semibold text-center mb-2">
                Recipe by <span className="text-green-400">{recipe.creator}</span>
            </p>
            <div className="border-2 w-16 rounded-full border-green-400 self-center mb-2"></div>

            <p className="text-xl font-bold">Categories</p>
            <div className="flex flex-row flex-wrap py-1 mb-3">
                {
                    recipe.categories.map((category, index) => {
                        return(
                            <span key={index} className="border-2 rounded-2xl border-green-400 px-2 py-1 mr-1">
                                {category}
                            </span>
                        )
                    })
                }
            </div>

            <p className="text-xl font-bold">Ingredients</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 list-none mb-3">
                {
                    recipe.ingredients.map((ingredient, index) => {
                        return(
                            <li key={index} className="border-b-2 border-gray-300 mb-2 mr-2">
                                {ingredient}
                            </li>           
                        )
                    })
                }
            </ul>

            <p className="text-xl font-bold">Steps</p>
            <ol className="list-decimal mx-4">
                {
                    recipe.steps.map((step, index) => {
                        return(
                            <li key={index} className="mb-2">
                                {step}
                            </li>
                        )
                    })
                }
            </ol>

            <div className="text-center">
                <button className="border-2 bg-green-600 rounded-full font-semibold text-white px-12 py-2 my-2">
                    Likes
                </button>
                <button className="border-2 bg-green-600 rounded-full font-semibold text-white px-12 py-2 my-2">
                    Comments
                </button>
            </div>
        </div>
    </div>
  )
}
