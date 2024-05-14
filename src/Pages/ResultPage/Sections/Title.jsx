import { useSearchParams } from "react-router-dom";

function Title() {
  const [searchParams, setSearchParams] = useSearchParams();
  var searchQuery = "";

  if (searchParams.get("keyword") != null) {
    searchQuery = searchParams.get("keyword");
  } else {
    searchQuery =
      searchParams.get("manufacturer") +
      " " +
      (searchParams.get("model") ?? "") +
      " " +
      (searchParams.get("version") ?? "") +
      " ";
  }

  return (
    <>
      <section className="title-section">
        <h1>
          Listings for <span>{searchQuery}</span>
        </h1>
        <p>
          Below you can find all of the availble car leasing options that are
          present on our platform. Narrow down your search, by tweaking the
          filters on the side.
        </p>
      </section>
    </>
  );
}

export default Title;
