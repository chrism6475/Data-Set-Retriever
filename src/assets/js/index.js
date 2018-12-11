const BASE_URL = 'http://api.worldbank.org/v2/countries/all/indicators/SP.POP.TOTL?date=2000:2001';
var dataSetSearch = new Vue({
  el: '#searchCriteriaForm',
  data:{
      noResults: false,
      searchText: '',
      countryOption: '',
      yearOption: '',
      test: "test",
      results:[{ name: "First Data Set",
                year: 1969,
                indicator: "GDP",
                url: "here"},
                {
                  name: "Second Data Set",
                          year: 1969,
                          indicator: "GDP",
                          url: "here"},
              ],
      indicatorOption: '',
      countries: [],
      indicators: []
  },
  mounted() {
      console.log("here");
      axios.get('./assets/json/countries.json').then(response => this.countries = response);
      console.log("here");
      axios.get('./assets/json/indicators.json').then(response => this.indicators = response);

  },

  methods: {
    searchForDataSet: function(){
      this.results = [];
      axios
      .get("http://api.worldbank.org/v2/countries/all/indicators/SP.POP.TOTL?date=2000:2001")
      .then(response => this.results = response)
      .catch(error => console.log('error') );

      console.log(this.events);
    }
  }
});
