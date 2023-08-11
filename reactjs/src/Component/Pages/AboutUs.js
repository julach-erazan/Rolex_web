import image1 from 'D:/project/rolex/Rolex_web/reactjs/src/aboutus.jpg'
function AboutUs() {
    return ( 
        <div className="aboutus_div">
            <h1 className='about_headder'>About US</h1>
            <img src={image1} className="aboutus_img" alt=""/>
            <p>
                It is a long established fact that a reader will be distracted<br/>
                by the readable content of a page when looking at its layout. <br/>
                The point of using Lorem Ipsum is that it has a more-or-less<br/>
                distribution of letters, as opposed to using 'Content here'.<br/><br/>

                Contrary to popular belief, Lorem Ipsum is <br/>
                It has roots in a piece of classical Latin<br/>
                making it over 2000 years old. Richard.
                <br/><br/>

                Contrary to popular belief, Lorem Ipsum is not simply text.<br/>
                making it over 2000 years old. Richard McClintock.<br/>
            </p>

            <button>Explore Now</button>
        </div>
     );
}

export default AboutUs;