const Contact = () => {
    return ( 
        <section className="w-full p-8 md:p-16">
            <div className="flex flex-wrap">
                <div className="text-center w-full md:w-1/2 md:text-start ">
                    <h3 className="text-3xl mx-auto font-semibold pt-4">In need of a Developer/Marketer?</h3>
                    <h5 className="text-2xl mt-4">I’m currently available for work.</h5>
                    <button className="my-5 bg-blue-500 p-4 text-xl text-white rounded-full font-semibold" href="mailto: arpandas.dev@gmail.com"><a href="mailto: arpandas.dev@gmail.com">Send a message</a></button>
                </div>
                <div className="text-center w-full md:text-right md:w-1/2 text-gray-400">
                    <a className="opacity-85 text-lg block" href="https://wa.me/+918584054656">+91 85840 54656</a>
                    <a className="opacity-85 text-lg block" href="mailto: arpandas.dev@gmail.com">arpandas.dev@gmail.com</a>
                </div>
            </div>
        </section>
     );
}
 
export default Contact;