import img1 from 'D:/project/rolex/Rolex_web/reactjs/src/watch1.jpg'
import img2 from 'D:/project/rolex/Rolex_web/reactjs/src/watch2.jpg'
import img3 from 'D:/project/rolex/Rolex_web/reactjs/src/watch3.jpg'
function Shop() {
    return ( 
        <div>
            <h1 className='shop_headder'>Shop</h1>
            <div className="watch_list">
                <div className="watch">
                    <img src={img1} alt=""/>
                    <h1>Rolex Watch</h1>
                    <h2>Make Your Wrist Beautiful</h2>
                    <p>It is a long established fact will a<br/>
                    distracted by the readable</p>
                    <button>Add to Cart</button>
                </div>
                <div className="watch">
                    <img src={img2} alt=""/>
                    <h1>Rolex Watch</h1>
                    <h2>Make Your Wrist Beautiful</h2>
                    <p>It is a long established fact will a<br/>
                    distracted by the readable</p>
                    <button>Add to Cart</button>
                </div>
                <div className="watch">
                    <img src={img3} alt=""/>
                    <h1>Rolex Watch</h1>
                    <h2>Make Your Wrist Beautiful</h2>
                    <p>It is a long established fact will a<br/>
                    distracted by the readable</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
     );
}

export default Shop;