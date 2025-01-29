
const Shimmer = () => {
  return (
    <div className="shimmer">
      {Array(20)
        .fill("")
        .map((restaurant, index) => {
          return (
            <div className="shimmer-card" key={index}>
              <h1></h1>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
