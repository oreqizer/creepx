function mapData(event, json) {
  const obj = JSON.parse(json);

  return {
    event,
    data: obj,
  };
}

export default mapData;
