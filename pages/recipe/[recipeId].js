import Recipe from '@/components/recipe'
import { useRouter } from 'next/router'
import Mainbar from '@/components/mainbar'
import MobileMenu from '@/components/mobilemenu'
import { useMediaQuery } from '@/hooks/hooks'

export default function RecipePage() {
    // Getting recipe ID from URL path (pass it as props to Recipe)
    const router = useRouter()
    const recipeId = router.query.recipeId
    // console.log(recipeId)

    let isMobile = useMediaQuery(640)
    
    return(
        <div className='flex flex-col md:ml-52'>
            <Mainbar/>
            {isMobile && <MobileMenu/>}
            <Recipe recipeId={{recipeId}} />
        </div>
    )
}