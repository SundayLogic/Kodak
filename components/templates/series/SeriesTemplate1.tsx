import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";

const SeriesTemplate1 = () => {
  return (
    <>
      <Header />

      <Hero
        backdrop={popular?.[0].backdrop_path}
        title={heroContent()?.title}
        overview={heroContent()?.overview}
        pageName={"Series"}
        purpleBg={true}
        purpleTitleBg
        btns={btnsProps}
        mediaType={"movie"}
        id={heroContent()?.id}
      />
    </>
  );
};
export default SeriesTemplate1;
