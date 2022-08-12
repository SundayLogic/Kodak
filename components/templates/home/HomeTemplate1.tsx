import ContentSlider from "../../organisms/ContentSlider";
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";

const HomeTemplate1= () => {

    return(
        <>
            <Header />
            <Hero />
            <section>
                <ContentSlider contentType={"MOVIES"} sliderTitle={"Trending Movies"} sliderType={"TOP_RATED"}/>
            </section>
        </> 
        )
};
export default HomeTemplate1;