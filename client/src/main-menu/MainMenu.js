import Categories from "./Categories/Categories";
import InterestingAdt from "./InterestingAdt/InterestingAdt";

function MainMenu () {
    return (
        <div className='mainMenu'>
            <Categories />
            <InterestingAdt />
        </div>
    );
}

export default MainMenu;