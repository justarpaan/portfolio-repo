const SkillSection = () => {
return ( 
<section className="w-full px-5 border py-16">
    <div>
        <h2 className="text-center text-5xl font-bold my-8">Skills & Tools</h2>
        <h3 className="text-center text-2xl  text-gray-400 my-8">For those who know what they’re looking for..</h3>
    </div>
    <div className="flex flex-row flex-wrap justify-center my-8">
        <TechImage name="JavaScript" link="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"/>
        <TechImage name="HTML" link="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
        <TechImage name="CSS" link="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
        <TechImage name="ReactJS" link="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
        <TechImage name="Git" link="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
        <TechImage name="Firebase" link="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png" />
        <TechImage name="MongoDB" link="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />
        <TechImage name="TailWind CSS" link="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" />
        <TechImage name="BootStrap" link="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" />
        <TechImage name="Python" link="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" />
        <TechImage name="Django" link="https://avatars.githubusercontent.com/u/27804?s=200&v=4" />
        <TechImage name="Flutter" link="https://raw.githubusercontent.com/flutter/website/master/src/_assets/image/flutter-logomark-320px.png" />
        <TechImage name="Dart" link="https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png" />
        <TechImage name="PhotoShop" link="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1024px-Adobe_Photoshop_CC_icon.svg.png" />
        <TechImage name="Figma" link="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" />        
        <TechImage name="WordPress" link="https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg" />
        <TechImage name="AWS" link="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" />
        <TechImage name="Marketing" link="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" />
        <TechImage name="FaceBook Ads" link="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" />
        <TechImage name="Google Ads" link="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" />
        <TechImage name="Google Analytics" link="https://upload.wikimedia.org/wikipedia/commons/7/77/GAnalytics.svg" />
    </div>
</section>
     );
}
 
export default SkillSection;

const TechImage = ({link,name}) => {
    return ( 
        <li className=" px-2  rounded-lg m-2 text-center ">
            <img className="h-16 w-16 mx-4 my-2" src={link}/>
            <span className="font-semibold text-[0.8rem]">{name}</span>
        </li>
    )}
