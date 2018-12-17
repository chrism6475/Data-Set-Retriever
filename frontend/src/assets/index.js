const BASE_URL = 'http://api.worldbank.org/v2/countries/all/indicators/SP.POP.TOTL?date=2000:2001';
var header = new Vue({
  el: "#headerBar",
  data:{
    source: 'World Bank',
    availableSources : ['World Bank', 'IMF']
  },
  methods: {
    changeSource: function(source){
      this.source = this.availableSources[source];
    }
  }
});

var dataSetSearch = new Vue({
  el: '#searchCriteriaForm',
  data:{
      noResults: false,
      searchText: '',
      countryOption: '',
      yearOption: '',
      test: "test",
      results:[],
      indicatorOption: '',
      countries: [],
      indicators: [],
      resultsInfo: []
  },
  mounted() {
    axios.get('./assets/json/countries.json').then(response => this.countries = response.data);
    axios.get('./assets/json/indicators.json').then(response => this.indicators = response.data);

  },

  methods: {
    searchForDataSet: function(){
      this.results = [];
      axios
      .get("http://api.worldbank.org/v2/countries/all/indicators/SP.POP.TOTL?format=json")
      .then(response => {
        this.resultsInfo = response.data[0];
        this.results = response.data[1];
        console.log(this.results);
      })
      .catch(error => console.log('error') );

    }
  }
});
