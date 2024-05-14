import Title from "./Sections/Title";
import GridLayout from "./Sections/GridLayout";
import Footer from "./Sections/Footer";

function ResultPage() {
  return (
    <>
      <Title />
      <div className="vehiclesListingContent">
        <GridLayout />
      </div>
      <Footer />
    </>
  );
}

export default ResultPage;
