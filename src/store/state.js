let defaultcity = "北京";
try {
  if (localStorage.city) {
    defaultcity = localStorage.city;
  }
} catch (e) {
  console.log(e);
}

export default {
  city: defaultcity,
};
