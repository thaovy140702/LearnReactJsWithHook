import useFetch from "../customize/fetch";

const Covid = () => {
  const {
    data: dataCovid,
    isLoading,
    isError,
  } = useFetch(
    "https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true"
  );
  let id = Math.floor(Math.random() * 100000) + 1;

  const dataCovidCopy = dataCovid.locations
  
  return (
    <>
      <h4>Covid tracking in Vietnam</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Death</th>
            <th>Treating</th>
            <th>Cases</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {!isError &&
            !isLoading &&
            dataCovidCopy &&
            dataCovidCopy.length > 0 &&
            dataCovidCopy.map((item) => (
              <tr key={id}>
                <td>{item.name}</td>
                <td>{item.death}</td>
                <td>{item.treating}</td>
                <td>{item.cases}</td>
                <td>{item.recovered}</td>
              </tr>
            ))}
          {isLoading === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                isLoading ...
              </td>
            </tr>
          )}

          {isError === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                something wrong ...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Covid;
