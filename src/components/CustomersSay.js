import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';
import '../styles/CustomerSays.css'
function CustomerSays() {
    return (<div className='darkBg'>
        <h1 className='heading light'>See what our customers says about us.</h1>
        <div className="card-container">

            <div className="card light">
                <div className='user-ratings'><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></div>
                <div className='user-details'>
                <img className='user-img' src={user1}></img>
                <span>- Alice Wonredland</span>
                </div>
                <p className='user-desc'> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="card light">
                <div className='user-ratings'><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked "></span><span class="fa fa-star"></span></div>
                <div className='user-details'>
                <img className='user-img' src={user2}></img>
                <span>- Tony Stark</span>
                </div>
                <p className='user-desc'> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="card light">
                <div className='user-ratings'><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star "></span><span class="fa fa-star"></span></div>
                <div className='user-details'>
                <img className='user-img' src={user3}></img>
                <span>- Captain America</span>
                </div>
                <p className='user-desc'> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
    )
}

export default CustomerSays;