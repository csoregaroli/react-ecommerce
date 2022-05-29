import CategoryItem from '../CategoryItem/CategoryItem'

import './Directory.scss'

const Directory = ({categories}) => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default Directory