const getdataC = async (place) => {
  try {
    const response = fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=metric&key=7DT8JRFCND5WFYNR3RXFDWCJ9&contentType=json`,
      { mode: "cors" },
    );
    const data = (await response).json();
    return data;
  } catch (error) {
    console.error("BAD API LOCATION ERROR", error);
  }
};

const getdataF = async (place) => {
  try {
    const response = fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=us&key=7DT8JRFCND5WFYNR3RXFDWCJ9&contentType=json`,
      { mode: "cors" },
    );
    const data = (await response).json();
    return data;
  } catch (error) {
    console.error("BAD API LOCATION ERROR", error);
  }
};

export { getdataC, getdataF };
