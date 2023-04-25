import dish1 from '../assets/dish1.jpg';
import dish2 from '../assets/dish2.jpg';
import dish3 from '../assets/dish3.jpg';
import '../styles/Menu.css'
function Menu() {
    return (<div className='lightBg'>
        <div class="header"><h1 className='heading'>Menu !</h1></div>
        <div className="card-container">
            <div className="card">
                <img className='dish-img' src={dish1}></img>
                <span className="menu-title">
                    <h3>Dish 1 Xyz</h3>
                    
                </span>
                <p className='dish-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="card">
                <img className='dish-img' src={dish2}></img>
                <span className="menu-title">
                    <h3>Dish 2 Xyz</h3>
                    
                </span>
                <p className='dish-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sollicitudin tempor id eu nisl. Dolor sit amet consectetur adipiscing elit. Ultrices vitae auctor eu augue ut lectus. Malesuada pellentesque elit eget gravida cum sociis. Ipsum a arcu cursus vitae congue mauris rhoncus. At auctor urna nunc id cursus metus aliquam. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Egestas sed sed risus pretium quam vulputate dignissim.</p>
            </div>
            <div className="card">
                <img className='dish-img' src={dish3}></img>
                <span className="menu-title">
                    <h3>Dish 3 Xyz</h3>
                    
                </span>
                <p className='dish-desc'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse in est ante in nibh mauris. Elementum facilisis leo vel fringilla est ullamcorper. Mattis vulputate enim nulla aliquet porttitor lacus. Consequat semper viverra nam libero justo. Elit ut aliquam purus sit. Mattis molestie a iaculis at erat. Proin nibh nisl condimentum id venenatis a. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Accumsan lacus vel facilisis volutpat est velit egestas. Hendrerit dolor magna eget est lorem ipsum dolor sit. </p>
            </div>
        </div>
        <div className="card-container">
            <div className="card">
                <img className='dish-img' src={dish1}></img>
                <span className="menu-title">
                    <h3>Dish 1 Xyz</h3>
                    
                </span>
                <p className='dish-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="card">
                <img className='dish-img' src={dish2}></img>
                <span className="menu-title">
                    <h3>Dish 2 Xyz</h3>
                    
                </span>
                <p className='dish-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sollicitudin tempor id eu nisl. Dolor sit amet consectetur adipiscing elit. Ultrices vitae auctor eu augue ut lectus. Malesuada pellentesque elit eget gravida cum sociis. Ipsum a arcu cursus vitae congue mauris rhoncus. At auctor urna nunc id cursus metus aliquam. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Egestas sed sed risus pretium quam vulputate dignissim.</p>
            </div>
            <div className="card">
                <img className='dish-img' src={dish3}></img>
                <span className="menu-title">
                    <h3>Dish 3 Xyz</h3>
                    
                </span>
                <p className='dish-desc'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse in est ante in nibh mauris. Elementum facilisis leo vel fringilla est ullamcorper. Mattis vulputate enim nulla aliquet porttitor lacus. Consequat semper viverra nam libero justo. Elit ut aliquam purus sit. Mattis molestie a iaculis at erat. Proin nibh nisl condimentum id venenatis a. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Accumsan lacus vel facilisis volutpat est velit egestas. Hendrerit dolor magna eget est lorem ipsum dolor sit. </p>
            </div>
        </div>
    </div>
    )
}

export default Menu;