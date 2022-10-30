const CapabilitiesSection = () => {
    return ( 
    <section className="w-full border pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-16 text-center">
        <div>
            <h2 className="text-center text-5xl font-bold mb-16 ">What Services Do I provide?</h2>
        </div>
        <div className="md:flex flex-col md:flex-row justify-center flex-wrap">
            <Capabilities Heading={"Web Development"} 
                image={"https://rubenkuipers.design/_nuxt/img/3383496.png"}
                CapabilitiesArray={[
                    "Front-end development",
                    "Back-end development",
                    "Browser Optimization",
                    "Database Integration",
                    "Web-Deployment",
                    "API development",
                    "Encryption using Bcrypt"
                ]}
            />
            <Capabilities Heading={"Marketing"} 
                image={"https://rubenkuipers.design/_nuxt/img/d3f5c5c.png"}
                CapabilitiesArray={[
                    "Ads Creation",
                    "Social Media Management",
                    "Copywriting",
                    "Article Writing",
                    "SEO Optimization",
                    "Organic Reach"
                ]}
            />
           <Capabilities Heading={"Editing and Creatives"} 
                image={"https://rubenkuipers.design/_nuxt/img/d3f5c5c.png"}
                CapabilitiesArray={[
                    "Custom Thumbnail",
                    "Photo Editing",
                    "Ad design",
                    "Object Removal",
                    "Poster Design",
                    "Instagram Creative Stories",
                    "Corrections"
                ]}
            />
        </div>
    </section>
         );
    }
     
    
    const Capabilities = ({Heading ,CapabilitiesArray , image}) => {
        return (<div className="text-center mt-6 mx-auto p-2">
        <img className="mx-auto mb-4" src={image} />
        <h2 className="text-primarydark font-bold leading-tight text-xl mb-6">{Heading}</h2>
        <ol className="text-gray-500">
         {CapabilitiesArray ? CapabilitiesArray.map(element => {
                return(
                    <li className="mb-1.5">{element}</li>
                )
            }): null}
        </ol>
    </div>)
}

const TechImage = ({link}) => {
    return ( 
        <li className="w-1/12 border-yellow border-2 p-3 rounded-md m-2 mx-4"><img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"/></li>
        )}

export default CapabilitiesSection;