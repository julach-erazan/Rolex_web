import img1 from 'D:/project/rolex/Rolex_web/reactjs/src/contact.jpg'
function ContactUs() {
    return ( 
        <div>
            <h1>Contact US</h1>
            <div className="contactus_div">
                <span><img src={img1} alt=""/></span>
                <span>
                <h2>Get In Touch</h2>
                    <form action="https://formsubmit.co/017d60356378d6bb1b16323985f505fd" method="POST">
                        <input type="text" name="Name" placeholder="Full Name" required></input>
                        <input type="email" name="Email" placeholder="Email" required></input>
                        <input type="text" name="Subject" placeholder="Subject"></input>
                        <textarea name="Message" placeholder="Message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </span>
            </div>
        </div>
     );
}

export default ContactUs;