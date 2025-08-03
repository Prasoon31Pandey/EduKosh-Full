import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        {categoryName} Videos
      </h1>
      <p className="mt-4 text-lg">
        यहां पर {categoryName} category की सभी videos दिखाओ।
      </p>
    </div>
  );
};

export default CategoryPage;
