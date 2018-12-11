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
      countries: [ "AL","AK", "AS","AZ","AR","CA", "CO","CT", "DE","DC", "FM","FL", "GA", "GU", "HI",
        "ID","IL","IN","IA","KS", "KY","LA", "ME","MH", "MD","MA","MI","MN","MS", "MO", "MT",
        "NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA", "PR","RI",
        "SC","SD", "TN","TX", "UT","VT","VI", "VA","WA", "WV","WI", "WY"],
      indicators: []
  },
  mounted() {
      axios.get('./assets/json/countries.json').then(response => this.countries = response);
      console.log("here");

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
