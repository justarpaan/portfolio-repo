const Footer = () => {
    return ( 
        <section className="w-full py-16 border-t">
            <div className="flex flex-wrap items-start mx-12 p-4  text-gray-400	">
                <div className="w-1/2 md:w-2/5">
                    <h4 className="text-blue-600">Address</h4>
                    <h4>700126</h4>
                    <h4>Kolkata</h4>
                    <h4>West Bengal</h4>
                    <h4>India</h4>
                </div>
                <div className="w-1/2 md:w-2/5">
                <h4 className="text-blue-600">Justarpaan.</h4>
                    <h4>Arpan D.</h4>
                </div>
                <div className="w-full mt-4 md:w-1/5 text-center">
                    <a href="#" class="fa text-3xl mr-4 fa-facebook"></a>
                    <a href="#" class="fa text-3xl mr-4 fa-twitter"></a>
                    <a href="#" class="fa text-3xl mr-4 fa-linkedin"></a>
                    <a href="#" class="fa text-3xl mr-4 fa-instagram"></a>
                    <a href="#" class="fa text-3xl mr-4 fa-github"></a>
                </div>

            </div>
        </section>
     );
}
 
export default Footer;